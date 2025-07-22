interface ChurnaizerData {
  user_id: string;
  email: string;
  plan: string;
  signup_date: string;
  usage_last_30_days: number;
}

interface ChurnaizerResult {
  churn_score: number;
}

declare global {
  interface Window {
    Churnaizer: {
      track: (
        data: ChurnaizerData,
        apiKey: string,
        callback: (result: ChurnaizerResult | null, error: any) => void
      ) => void;
    };
  }
}

const CHURNAIZER_API_KEY = "cg_ad05d59bfb61ae1c1d7a35372b8900c07d1895114c8ef5f10b97b7170e751759";

export const trackUserChurnRisk = (userData: ChurnaizerData) => {
  if (typeof window !== 'undefined' && window.Churnaizer) {
    window.Churnaizer.track(userData, CHURNAIZER_API_KEY, (result, error) => {
      if (result) {
        console.log("Churn Risk Score:", result.churn_score);
        // You can store this in your database or use it for analytics
      } else if (error) {
        console.error("Churnaizer tracking error:", error);
      }
    });
  }
};

export const trackCurrentUser = async () => {
  // This function can be called when user data is available
  // Example usage with real user data:
  
  try {
    // Replace this with actual user data from your auth system/database
    const userData: ChurnaizerData = {
      user_id: "user_real_id", // Get from auth
      email: "user@email.com", // Get from auth
      plan: "Pro", // Get from user subscription
      signup_date: "2024-12-01", // Get from user creation date
      usage_last_30_days: 15 // Calculate from user activity
    };
    
    trackUserChurnRisk(userData);
  } catch (error) {
    console.error("Error tracking user churn risk:", error);
  }
};