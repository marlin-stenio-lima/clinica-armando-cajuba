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
export const getTrackingData = async (period = 'Este Mês') => {
  try {
    let startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    let endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    if (period === 'Hoje') {
      // keep today
    } else if (period === 'Ontem') {
      startDate.setDate(startDate.getDate() - 1);
      endDate.setDate(endDate.getDate() - 1);
    } else if (period === 'Últimos 7 dias') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (period === 'Este Mês') {
      startDate.setDate(1);
    } else if (period === 'Mês Passado') {
      startDate.setMonth(startDate.getMonth() - 1);
      startDate.setDate(1);
      endDate.setDate(0); 
    } else if (period === 'Este Ano') {
      startDate.setMonth(0, 1);
    } else if (period === 'Personalizado') {
      startDate = new Date(0); // All time for now
    }

    const { data, error } = await supabase
      .from('tracking_events')
      .select('event_type, exam_id')
      .gte('created_at', startDate.toISOString())
      .lte('created_at', endDate.toISOString());
      
    if (error) throw error;
    
    const aggregated = {};
    
    data.forEach(event => {
      const { exam_id, event_type } = event;
      if (!aggregated[exam_id]) {
        aggregated[exam_id] = { clicks: 0, views: 0 };
      }
      if (event_type === 'click') aggregated[exam_id].clicks += 1;
      if (event_type === 'view') aggregated[exam_id].views += 1;
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

