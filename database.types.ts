export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          content: string | null
          created_at: string | null
          post_id: number | null
          user_id: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          post_id?: number | null
          user_id?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          post_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      group_members: {
        Row: {
          group_id: number | null
          user_id: number | null
        }
        Insert: {
          group_id?: number | null
          user_id?: number | null
        }
        Update: {
          group_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "group_members_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["group_id"]
          },
          {
            foreignKeyName: "group_members_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      groups: {
        Row: {
          created_by: number | null
          group_desc: string | null
          group_id: number
          group_name: string | null
        }
        Insert: {
          created_by?: number | null
          group_desc?: string | null
          group_id?: number
          group_name?: string | null
        }
        Update: {
          created_by?: number | null
          group_desc?: string | null
          group_id?: number
          group_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      likes: {
        Row: {
          created_at: string | null
          post_id: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          post_id?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          post_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      login_logs: {
        Row: {
          ip_address: string | null
          login_time: string | null
          status: string | null
          user_agent: string | null
          user_id: number | null
        }
        Insert: {
          ip_address?: string | null
          login_time?: string | null
          status?: string | null
          user_agent?: string | null
          user_id?: number | null
        }
        Update: {
          ip_address?: string | null
          login_time?: string | null
          status?: string | null
          user_agent?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "login_logs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      posts: {
        Row: {
          content: string | null
          created_at: string | null
          description: string | null
          picture: string | null
          post_id: number
          task_id: number | null
          user_id: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          description?: string | null
          picture?: string | null
          post_id?: number
          task_id?: number | null
          user_id?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          description?: string | null
          picture?: string | null
          post_id?: number
          task_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      profile: {
        Row: {
          email: string | null
          fullname: string | null
          profile_picture: string | null
          user_id: number
          username: string | null
        }
        Insert: {
          email?: string | null
          fullname?: string | null
          profile_picture?: string | null
          user_id?: number
          username?: string | null
        }
        Update: {
          email?: string | null
          fullname?: string | null
          profile_picture?: string | null
          user_id?: number
          username?: string | null
        }
        Relationships: []
      }
      shared_tasks: {
        Row: {
          co_user: number | null
          group_id: number | null
          task_id: number | null
        }
        Insert: {
          co_user?: number | null
          group_id?: number | null
          task_id?: number | null
        }
        Update: {
          co_user?: number | null
          group_id?: number | null
          task_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_tasks_co_user_fkey"
            columns: ["co_user"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "shared_tasks_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["task_id"]
          }
        ]
      }
      tasks: {
        Row: {
          created_at: string | null
          created_by: number | null
          description: string | null
          due_date: string | null
          is_shared: boolean | null
          status: string | null
          task_id: number
          title: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: number | null
          description?: string | null
          due_date?: string | null
          is_shared?: boolean | null
          status?: string | null
          task_id?: number
          title?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: number | null
          description?: string | null
          due_date?: string | null
          is_shared?: boolean | null
          status?: string | null
          task_id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
