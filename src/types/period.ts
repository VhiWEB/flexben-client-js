export type PeriodType = {
	id: string | number;
	name: string;
	start: Date;
	end: Date;
	enrollment_start: Date;
	enrollment_end: Date;
	is_active: boolean;
	is_enrollment_end: boolean;
	is_enrollment_upcoming: boolean;
	is_enrollment_progressing: boolean;
	is_claim_end: boolean;
	is_claim_upcoming: boolean;
	is_claim_progressing: boolean;
	is_period_end: boolean;
	is_period_upcoming: boolean;
	is_period_progressing: boolean;
};
