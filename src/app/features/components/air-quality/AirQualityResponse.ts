export interface AirQualityResponse {
  coordinates: number[]
  id: number
  source: number
  city: string
  address: string
  sensors: Sensor[]
  send_reports: boolean
}

export interface Sensor {
  unit: string
  name: string
  data: Daum[]
  display_type: string
  norm?: Norm
}

export interface Daum {
  read_at: string
  value: number
  current_norm?: string
  threshold_level?: number
}

export interface Norm {
  threshold: number
  grade_a: GradeA
  grade_b: GradeB
  grade_c: GradeC
  grade_d: GradeD
  grade_e: GradeE
  grade_f: GradeF
}

export interface GradeA {
  gte: number
  lt: number
}

export interface GradeB {
  gte: number
  lt: number
}

export interface GradeC {
  gte: number
  lt: number
}

export interface GradeD {
  gte: number
  lt: number
}

export interface GradeE {
  gte: number
  lt: number
}

export interface GradeF {
  gte: number
}
