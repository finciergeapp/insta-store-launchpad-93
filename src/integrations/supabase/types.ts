export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      about_pages: {
        Row: {
          bio: string | null
          created_at: string
          id: string
          profile_image_url: string | null
          store_id: string
          title: string | null
          updated_at: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          id?: string
          profile_image_url?: string | null
          store_id: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          id?: string
          profile_image_url?: string | null
          store_id?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "about_pages_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: true
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_logs: {
        Row: {
          created_at: string
          event_type: string
          id: string
          ip_address: unknown | null
          product_id: string | null
          referrer: string | null
          session_id: string | null
          store_id: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          ip_address?: unknown | null
          product_id?: string | null
          referrer?: string | null
          session_id?: string | null
          store_id: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          ip_address?: unknown | null
          product_id?: string | null
          referrer?: string | null
          session_id?: string | null
          store_id?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_logs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analytics_logs_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_details: {
        Row: {
          account_holder_name: string
          account_number: string
          bank_name: string
          created_at: string
          gst_number: string | null
          id: string
          ifsc_code: string
          pan_number: string | null
          payout_method: string
          updated_at: string
          upi_id: string | null
          user_id: string
        }
        Insert: {
          account_holder_name: string
          account_number: string
          bank_name: string
          created_at?: string
          gst_number?: string | null
          id?: string
          ifsc_code: string
          pan_number?: string | null
          payout_method?: string
          updated_at?: string
          upi_id?: string | null
          user_id: string
        }
        Update: {
          account_holder_name?: string
          account_number?: string
          bank_name?: string
          created_at?: string
          gst_number?: string | null
          id?: string
          ifsc_code?: string
          pan_number?: string | null
          payout_method?: string
          updated_at?: string
          upi_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string
          id: string
          product_id: string
          quantity: number
          session_id: string | null
          store_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          quantity?: number
          session_id?: string | null
          store_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          quantity?: number
          session_id?: string | null
          store_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_items_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      dm_flows: {
        Row: {
          created_at: string
          flow_name: string
          id: string
          instagram_account_id: string | null
          is_active: boolean | null
          message_steps: Json | null
          steps: Json | null
          trigger_word: string | null
          trigger_words: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          flow_name: string
          id?: string
          instagram_account_id?: string | null
          is_active?: boolean | null
          message_steps?: Json | null
          steps?: Json | null
          trigger_word?: string | null
          trigger_words?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          flow_name?: string
          id?: string
          instagram_account_id?: string | null
          is_active?: boolean | null
          message_steps?: Json | null
          steps?: Json | null
          trigger_word?: string | null
          trigger_words?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dm_logs: {
        Row: {
          commenter_username: string | null
          created_at: string
          dm_flow_id: string | null
          error_message: string | null
          id: string
          instagram_post_id: string | null
          message_sent: string
          status: string | null
          trigger_word: string
          user_id: string
        }
        Insert: {
          commenter_username?: string | null
          created_at?: string
          dm_flow_id?: string | null
          error_message?: string | null
          id?: string
          instagram_post_id?: string | null
          message_sent: string
          status?: string | null
          trigger_word: string
          user_id: string
        }
        Update: {
          commenter_username?: string | null
          created_at?: string
          dm_flow_id?: string | null
          error_message?: string | null
          id?: string
          instagram_post_id?: string | null
          message_sent?: string
          status?: string | null
          trigger_word?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dm_logs_dm_flow_id_fkey"
            columns: ["dm_flow_id"]
            isOneToOne: false
            referencedRelation: "dm_flows"
            referencedColumns: ["id"]
          },
        ]
      }
      email_logs: {
        Row: {
          created_at: string | null
          error_message: string | null
          event_type: string
          id: string
          mailersend_id: string | null
          order_id: string | null
          status: string
          subject: string
          to_email: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          event_type: string
          id?: string
          mailersend_id?: string | null
          order_id?: string | null
          status?: string
          subject: string
          to_email: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          event_type?: string
          id?: string
          mailersend_id?: string | null
          order_id?: string | null
          status?: string
          subject?: string
          to_email?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      ig_accounts: {
        Row: {
          access_token: string
          account_name: string | null
          account_username: string | null
          created_at: string
          expires_at: string | null
          id: string
          instagram_account_id: string
          is_active: boolean | null
          profile_picture_url: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          account_name?: string | null
          account_username?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          instagram_account_id: string
          is_active?: boolean | null
          profile_picture_url?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          account_name?: string | null
          account_username?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          instagram_account_id?: string
          is_active?: boolean | null
          profile_picture_url?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ig_automations: {
        Row: {
          created_at: string
          id: string
          product_id: string | null
          store_id: string
          trigger_keywords: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id?: string | null
          store_id: string
          trigger_keywords?: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string | null
          store_id?: string
          trigger_keywords?: string[]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_ig_automations_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_ig_automations_store_id"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      ig_dm_analytics: {
        Row: {
          created_at: string | null
          date: string
          dm_to_order_conversions: number | null
          id: string
          keyword_triggers: Json | null
          link_clicks: number | null
          reel_comment_conversions: number | null
          store_id: string
          total_dms_sent: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string
          dm_to_order_conversions?: number | null
          id?: string
          keyword_triggers?: Json | null
          link_clicks?: number | null
          reel_comment_conversions?: number | null
          store_id: string
          total_dms_sent?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          dm_to_order_conversions?: number | null
          id?: string
          keyword_triggers?: Json | null
          link_clicks?: number | null
          reel_comment_conversions?: number | null
          store_id?: string
          total_dms_sent?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ig_dm_analytics_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      ig_dm_logs: {
        Row: {
          created_at: string | null
          id: string
          manychat_message_id: string | null
          message_sent: string | null
          recipient_id: string | null
          status: string | null
          store_id: string
          trigger_data: Json | null
          trigger_type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          manychat_message_id?: string | null
          message_sent?: string | null
          recipient_id?: string | null
          status?: string | null
          store_id: string
          trigger_data?: Json | null
          trigger_type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          manychat_message_id?: string | null
          message_sent?: string | null
          recipient_id?: string | null
          status?: string | null
          store_id?: string
          trigger_data?: Json | null
          trigger_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "ig_dm_logs_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      ig_feed: {
        Row: {
          caption: string | null
          created_at: string
          id: string
          image_url: string
          permalink: string | null
          post_id: string
          store_id: string
          timestamp: string | null
          updated_at: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url: string
          permalink?: string | null
          post_id: string
          store_id: string
          timestamp?: string | null
          updated_at?: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url?: string
          permalink?: string | null
          post_id?: string
          store_id?: string
          timestamp?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_ig_feed_store"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      instagram_connections: {
        Row: {
          access_token: string | null
          connected: boolean | null
          connected_at: string | null
          created_at: string | null
          email: string | null
          id: string
          ig_username: string | null
          instagram_page_id: string
          is_active: boolean | null
          page_name: string | null
          sendpulse_page_id: string | null
          store_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          access_token?: string | null
          connected?: boolean | null
          connected_at?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          ig_username?: string | null
          instagram_page_id: string
          is_active?: boolean | null
          page_name?: string | null
          sendpulse_page_id?: string | null
          store_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          access_token?: string | null
          connected?: boolean | null
          connected_at?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          ig_username?: string | null
          instagram_page_id?: string
          is_active?: boolean | null
          page_name?: string | null
          sendpulse_page_id?: string | null
          store_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "instagram_connections_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      niches: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          price_at_purchase: number
          product_id: string
          product_variant_id: string | null
          quantity: number
        }
        Insert: {
          id?: string
          order_id: string
          price_at_purchase?: number
          product_id: string
          product_variant_id?: string | null
          quantity?: number
        }
        Update: {
          id?: string
          order_id?: string
          price_at_purchase?: number
          product_id?: string
          product_variant_id?: string | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_variant_id_fkey"
            columns: ["product_variant_id"]
            isOneToOne: false
            referencedRelation: "product_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      order_status_history: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          order_id: string
          status: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          order_id: string
          status: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          order_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_status_history_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          buyer_address: string | null
          buyer_email: string | null
          buyer_name: string
          buyer_phone: string | null
          created_at: string | null
          delivered_at: string | null
          estimated_delivery_date: string | null
          id: string
          notes: string | null
          order_notes: string | null
          paid_at: string | null
          payment_gateway: string | null
          payment_method: string | null
          payment_status: string | null
          preferred_delivery_time: string | null
          razorpay_order_id: string | null
          razorpay_payment_id: string | null
          razorpay_signature: string | null
          shipped_at: string | null
          shipping_carrier: string | null
          special_instructions: string | null
          status: string
          store_id: string
          total_price: number
          tracking_number: string | null
          updated_at: string | null
        }
        Insert: {
          buyer_address?: string | null
          buyer_email?: string | null
          buyer_name: string
          buyer_phone?: string | null
          created_at?: string | null
          delivered_at?: string | null
          estimated_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_notes?: string | null
          paid_at?: string | null
          payment_gateway?: string | null
          payment_method?: string | null
          payment_status?: string | null
          preferred_delivery_time?: string | null
          razorpay_order_id?: string | null
          razorpay_payment_id?: string | null
          razorpay_signature?: string | null
          shipped_at?: string | null
          shipping_carrier?: string | null
          special_instructions?: string | null
          status?: string
          store_id: string
          total_price?: number
          tracking_number?: string | null
          updated_at?: string | null
        }
        Update: {
          buyer_address?: string | null
          buyer_email?: string | null
          buyer_name?: string
          buyer_phone?: string | null
          created_at?: string | null
          delivered_at?: string | null
          estimated_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_notes?: string | null
          paid_at?: string | null
          payment_gateway?: string | null
          payment_method?: string | null
          payment_status?: string | null
          preferred_delivery_time?: string | null
          razorpay_order_id?: string | null
          razorpay_payment_id?: string | null
          razorpay_signature?: string | null
          shipped_at?: string | null
          shipping_carrier?: string | null
          special_instructions?: string | null
          status?: string
          store_id?: string
          total_price?: number
          tracking_number?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      payout_logs: {
        Row: {
          action: string
          created_at: string
          details: Json | null
          id: string
          payout_request_id: string
          performed_by: string
        }
        Insert: {
          action: string
          created_at?: string
          details?: Json | null
          id?: string
          payout_request_id: string
          performed_by: string
        }
        Update: {
          action?: string
          created_at?: string
          details?: Json | null
          id?: string
          payout_request_id?: string
          performed_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "payout_logs_payout_request_id_fkey"
            columns: ["payout_request_id"]
            isOneToOne: false
            referencedRelation: "payout_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      payout_requests: {
        Row: {
          admin_notes: string | null
          created_at: string
          final_amount: number
          id: string
          order_ids: string[]
          paid_at: string | null
          paid_by: string | null
          platform_fee: number
          screenshot_url: string | null
          seller_id: string
          status: string
          store_id: string
          total_earned: number
          updated_at: string
          week_end_date: string
          week_start_date: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          final_amount?: number
          id?: string
          order_ids?: string[]
          paid_at?: string | null
          paid_by?: string | null
          platform_fee?: number
          screenshot_url?: string | null
          seller_id: string
          status?: string
          store_id: string
          total_earned?: number
          updated_at?: string
          week_end_date: string
          week_start_date: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          final_amount?: number
          id?: string
          order_ids?: string[]
          paid_at?: string | null
          paid_by?: string | null
          platform_fee?: number
          screenshot_url?: string | null
          seller_id?: string
          status?: string
          store_id?: string
          total_earned?: number
          updated_at?: string
          week_end_date?: string
          week_start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "payout_requests_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      product_reviews: {
        Row: {
          buyer_email: string | null
          buyer_name: string
          created_at: string
          id: string
          is_verified: boolean | null
          order_id: string | null
          product_id: string
          rating: number
          review_image_url: string | null
          review_text: string | null
          updated_at: string
        }
        Insert: {
          buyer_email?: string | null
          buyer_name: string
          created_at?: string
          id?: string
          is_verified?: boolean | null
          order_id?: string | null
          product_id: string
          rating: number
          review_image_url?: string | null
          review_text?: string | null
          updated_at?: string
        }
        Update: {
          buyer_email?: string | null
          buyer_name?: string
          created_at?: string
          id?: string
          is_verified?: boolean | null
          order_id?: string | null
          product_id?: string
          rating?: number
          review_image_url?: string | null
          review_text?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_variants: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          inventory_count: number
          options: Json | null
          price: number
          product_id: string
          sku: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          inventory_count?: number
          options?: Json | null
          price: number
          product_id: string
          sku?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          inventory_count?: number
          options?: Json | null
          price?: number
          product_id?: string
          sku?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          images: string[] | null
          inventory_count: number | null
          is_published: boolean | null
          name: string
          payment_method: string | null
          price: number
          product_type: string
          slug: string
          status: string
          store_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          inventory_count?: number | null
          is_published?: boolean | null
          name: string
          payment_method?: string | null
          price?: number
          product_type?: string
          slug: string
          status?: string
          store_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          inventory_count?: number | null
          is_published?: boolean | null
          name?: string
          payment_method?: string | null
          price?: number
          product_type?: string
          slug?: string
          status?: string
          store_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          is_admin: boolean | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          is_admin?: boolean | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          is_admin?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      referral_logs: {
        Row: {
          created_at: string
          event_type: string
          id: string
          ip_address: unknown | null
          order_id: string | null
          referred_user_id: string | null
          referrer_store_id: string
          session_id: string
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          ip_address?: unknown | null
          order_id?: string | null
          referred_user_id?: string | null
          referrer_store_id: string
          session_id: string
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          ip_address?: unknown | null
          order_id?: string | null
          referred_user_id?: string | null
          referrer_store_id?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "referral_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_logs_referrer_store_id_fkey"
            columns: ["referrer_store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          converted_at: string | null
          created_at: string
          id: string
          ip_address: unknown | null
          order_id: string | null
          referred_user_id: string | null
          referrer_store_id: string
          session_id: string
          status: string
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          converted_at?: string | null
          created_at?: string
          id?: string
          ip_address?: unknown | null
          order_id?: string | null
          referred_user_id?: string | null
          referrer_store_id: string
          session_id: string
          status?: string
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          converted_at?: string | null
          created_at?: string
          id?: string
          ip_address?: unknown | null
          order_id?: string | null
          referred_user_id?: string | null
          referrer_store_id?: string
          session_id?: string
          status?: string
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_referrals_order"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_referrals_store"
            columns: ["referrer_store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      stores: {
        Row: {
          about_description: string | null
          address: string | null
          banner_image: string | null
          business_email: string
          created_at: string | null
          description: string | null
          font_style: string | null
          founding_story: string | null
          id: string
          is_active: boolean | null
          logo_image: string | null
          mission_statement: string | null
          name: string
          phone_number: string
          plan: string
          social_media_links: Json | null
          tagline: string | null
          theme: Json | null
          updated_at: string | null
          user_id: string
          username: string
          vision_statement: string | null
        }
        Insert: {
          about_description?: string | null
          address?: string | null
          banner_image?: string | null
          business_email: string
          created_at?: string | null
          description?: string | null
          font_style?: string | null
          founding_story?: string | null
          id?: string
          is_active?: boolean | null
          logo_image?: string | null
          mission_statement?: string | null
          name: string
          phone_number: string
          plan?: string
          social_media_links?: Json | null
          tagline?: string | null
          theme?: Json | null
          updated_at?: string | null
          user_id: string
          username: string
          vision_statement?: string | null
        }
        Update: {
          about_description?: string | null
          address?: string | null
          banner_image?: string | null
          business_email?: string
          created_at?: string | null
          description?: string | null
          font_style?: string | null
          founding_story?: string | null
          id?: string
          is_active?: boolean | null
          logo_image?: string | null
          mission_statement?: string | null
          name?: string
          phone_number?: string
          plan?: string
          social_media_links?: Json | null
          tagline?: string | null
          theme?: Json | null
          updated_at?: string | null
          user_id?: string
          username?: string
          vision_statement?: string | null
        }
        Relationships: []
      }
      template_categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      templates: {
        Row: {
          category_id: string
          content: string
          created_at: string
          id: string
          is_featured: boolean | null
          language: string | null
          niche_id: string
          tags: string[] | null
          title: string
          updated_at: string
          usage_count: number | null
        }
        Insert: {
          category_id: string
          content: string
          created_at?: string
          id?: string
          is_featured?: boolean | null
          language?: string | null
          niche_id: string
          tags?: string[] | null
          title: string
          updated_at?: string
          usage_count?: number | null
        }
        Update: {
          category_id?: string
          content?: string
          created_at?: string
          id?: string
          is_featured?: boolean | null
          language?: string | null
          niche_id?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
          usage_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "templates_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "template_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "templates_niche_id_fkey"
            columns: ["niche_id"]
            isOneToOne: false
            referencedRelation: "niches"
            referencedColumns: ["id"]
          },
        ]
      }
      user_favorites: {
        Row: {
          created_at: string
          id: string
          template_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          template_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          template_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          id: string
          ig_handle: string | null
          name: string | null
          niche_id: string | null
          subscription_plan: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          id?: string
          ig_handle?: string | null
          name?: string | null
          niche_id?: string | null
          subscription_plan?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          id?: string
          ig_handle?: string | null
          name?: string | null
          niche_id?: string | null
          subscription_plan?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_niche_id_fkey"
            columns: ["niche_id"]
            isOneToOne: false
            referencedRelation: "niches"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          id: string
          referral_log_id: string | null
          status: string
          store_id: string
          transaction_type: string
        }
        Insert: {
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          referral_log_id?: string | null
          status?: string
          store_id: string
          transaction_type: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          referral_log_id?: string | null
          status?: string
          store_id?: string
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallet_transactions_referral_log_id_fkey"
            columns: ["referral_log_id"]
            isOneToOne: false
            referencedRelation: "referral_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wallet_transactions_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_platform_fee: {
        Args: { amount: number }
        Returns: number
      }
      check_username_availability: {
        Args: { username: string }
        Returns: boolean
      }
      generate_slug: {
        Args: { input_text: string }
        Returns: string
      }
      generate_weekly_payout_requests: {
        Args: Record<PropertyKey, never>
        Returns: {
          store_id: string
          seller_id: string
          total_earned: number
          platform_fee: number
          final_amount: number
          order_ids: string[]
          orders_count: number
        }[]
      }
      is_order_payout_eligible: {
        Args: { order_delivered_at: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
