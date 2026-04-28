import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const jobId = parseInt(params.id)
  if (isNaN(jobId)) {
    return NextResponse.json({ error: 'Invalid job ID' }, { status: 400 })
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY
  if (!url || !key) {
    return NextResponse.json({ error: 'Missing Supabase config' }, { status: 500 })
  }

  // Use direct REST API to avoid Supabase client caching
  const res = await fetch(`${url}/rest/v1/analysis_jobs?id=eq.${jobId}&select=*`, {
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 })
  }

  const data = await res.json()
  if (!data || data.length === 0) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 })
  }

  return NextResponse.json(data[0])
}
