import { createClient } from '@supabase/supabase-js'
import type { LeaderboardEntry } from '@/types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .order('score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(50)

  if (error) throw error
  return data as LeaderboardEntry[]
}

export async function insertScore(entry: Omit<LeaderboardEntry, 'id' | 'created_at'>): Promise<void> {
  const { error } = await supabase.from('leaderboard').insert([entry])
  if (error) throw error
}
