// Calendly integration utilities

export interface CalendlyConfig {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}

// Default Calendly configuration - replace with your actual Calendly URLs
const CALENDLY_URLS = {
  discovery_call: 'https://calendly.com/your-username/discovery-call',
  free_chatbot: 'https://calendly.com/your-username/free-instagram-chatbot',
  demo: 'https://calendly.com/your-username/demo-call',
  consultation: 'https://calendly.com/your-username/consultation',
  strategy_call: 'https://calendly.com/your-username/strategy-call'
};

/**
 * Opens Calendly in a popup window
 */
export function openCalendlyPopup(config: CalendlyConfig): void {
  try {
    // Build URL with parameters
    const url = new URL(config.url);
    
    // Add prefill parameters
    if (config.prefill) {
      if (config.prefill.name) url.searchParams.set('name', config.prefill.name);
      if (config.prefill.email) url.searchParams.set('email', config.prefill.email);
      
      // Add custom answers
      if (config.prefill.customAnswers) {
        Object.entries(config.prefill.customAnswers).forEach(([key, value]) => {
          url.searchParams.set(`custom_answers[${key}]`, value);
        });
      }
    }
    
    // Add UTM parameters
    if (config.utm) {
      Object.entries(config.utm).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }
    
    // Open in popup window
    const popup = window.open(
      url.toString(),
      'calendly-popup',
      'width=800,height=700,scrollbars=yes,resizable=yes'
    );
    
    if (popup) {
      popup.focus();
    } else {
      // Fallback to opening in same tab if popup is blocked
      window.open(url.toString(), '_blank');
    }
  } catch (error) {
    console.error('Error opening Calendly:', error);
    // Fallback to direct navigation
    window.open(config.url, '_blank');
  }
}

/**
 * Opens Calendly in the same tab
 */
export function navigateToCalendly(config: CalendlyConfig): void {
  try {
    const url = new URL(config.url);
    
    // Add prefill parameters
    if (config.prefill) {
      if (config.prefill.name) url.searchParams.set('name', config.prefill.name);
      if (config.prefill.email) url.searchParams.set('email', config.prefill.email);
      
      if (config.prefill.customAnswers) {
        Object.entries(config.prefill.customAnswers).forEach(([key, value]) => {
          url.searchParams.set(`custom_answers[${key}]`, value);
        });
      }
    }
    
    // Add UTM parameters  
    if (config.utm) {
      Object.entries(config.utm).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }
    
    window.location.href = url.toString();
  } catch (error) {
    console.error('Error navigating to Calendly:', error);
    window.location.href = config.url;
  }
}

// Predefined booking functions for different call types
export const calendlyBookings = {
  discoveryCall: () => openCalendlyPopup({
    url: CALENDLY_URLS.discovery_call,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'discovery_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Discovery Call'
      }
    }
  }),
  
  freeChatbot: () => openCalendlyPopup({
    url: CALENDLY_URLS.free_chatbot,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'free_instagram_chatbot'
    },
    prefill: {
      customAnswers: {
        'service_type': 'Free Instagram Chatbot'
      }
    }
  }),
  
  demo: () => openCalendlyPopup({
    url: CALENDLY_URLS.demo,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'demo_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Demo Call'
      }
    }
  }),
  
  consultation: () => openCalendlyPopup({
    url: CALENDLY_URLS.consultation,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'consultation'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Consultation'
      }
    }
  }),
  
  strategyCall: () => openCalendlyPopup({
    url: CALENDLY_URLS.strategy_call,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'strategy_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Strategy Call'
      }
    }
  })
};

// Function to update Calendly URLs (for easy configuration)
export function updateCalendlyUrls(urls: Partial<typeof CALENDLY_URLS>): void {
  Object.assign(CALENDLY_URLS, urls);
}