export interface GetShortLinksMetricsQueryParameters {
  from: Date
  to: Date
  phone?: string
  utm_campaign?: string
}

export interface CreateShortLinkPayload {
  link: string
  expiration_time: string
  fallback_url: string
  phone: string
  utm_campaign: string
}

export interface ShortLinkMetricListItem {
  latitude: number
  longitude: number
  operating_system: string
  browser: string
  language: string
  phone: string
  utm_campaign: string
  created_at: string
  user_id: number
}

export interface GetShortLinksMetricsResponse {
  metrics: Array<ShortLinkMetricListItem>
}

export interface CreateShortLinkResponse {
  short_link: string
}
