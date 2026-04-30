import { supabase } from '../lib/supabase';

// Helper to get current month string YYYY-MM
const getCurrentMonth = () => new Date().toISOString().slice(0, 7);

export const trackClick = async (examId) => {
  try {
    await supabase.from('tracking_events').insert([
      { event_type: 'click', exam_id: examId }
    ]);
  } catch (error) {
    console.error("Error tracking click in Supabase:", error);
  }
};

export const trackView = async (examId) => {
  try {
    const currentMonth = getCurrentMonth();
    const viewTrackerKey = `viewed_${examId}_${currentMonth}`;
    
    // Use session storage to prevent spamming views on dev reloads or same session
    if (sessionStorage.getItem(viewTrackerKey)) return; 
    sessionStorage.setItem(viewTrackerKey, "true");

    await supabase.from('tracking_events').insert([
      { event_type: 'view', exam_id: examId }
    ]);
  } catch (error) {
    console.error("Error tracking view in Supabase:", error);
  }
};

// We will fetch and aggregate the events for the dashboard
export const getTrackingData = async (month = getCurrentMonth()) => {
  try {
    // Fetch all events for the month
    // In a huge production app, we would do this aggregation in a SQL View or RPC
    // For now, fetching events filtered by month start/end is fine.
    
    const startDate = `${month}-01T00:00:00.000Z`;
    // Approximate end date by just using string comparison or fetching all and filtering
    
    const { data, error } = await supabase
      .from('tracking_events')
      .select('event_type, exam_id')
      .gte('created_at', startDate);
      
    if (error) throw error;
    
    const aggregated = {};
    aggregated[month] = {};
    
    data.forEach(event => {
      const { exam_id, event_type } = event;
      if (!aggregated[month][exam_id]) {
        aggregated[month][exam_id] = { clicks: 0, views: 0 };
      }
      if (event_type === 'click') aggregated[month][exam_id].clicks += 1;
      if (event_type === 'view') aggregated[month][exam_id].views += 1;
    });

    return aggregated;
  } catch (error) {
    console.error("Error fetching tracking data from Supabase:", error);
    return {};
  }
};

// Seed function not needed anymore for Supabase, 
// but we leave a dummy export so imports don't break
export const seedInitialDataIfEmpty = () => {};

