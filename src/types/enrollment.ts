import type { UserData, PeriodType, BenefitItemsType } from '.';
import type { PaginatorType } from './helper';

export type EnrollmentType = {
	id: string;
	name: string;
	is_submitted: boolean;
	point: number;
	point_additional: number;
	point_total: number;
	point_used: number;
	point_type: number;
	point_percentage: number;
	point_available: number;
	period: PeriodType;
	user: UserData;
	benefit_items: BenefitItemsType[];
	created_at: string;
	updated_at: string;
	submitted_at: string;
};

export type EnrollmentPaylodType = {
	id: string;
	period_id: string;
	is_submitted: boolean;
	benefit_items_ids: any[];
};

export type EnrollmentLogType = {
	id: string | number;
	name: string;
	code: string;
	status: number;
	point_before: number;
	point_after: number;
	point_additional_before: number;
	point_additional_after: number;
	created_at: string;
	updated_at: string;
	user: UserData;
	period: PeriodType;
	enrollment: EnrollmentType;
};

export type LogPaginator = {
	paginatorInfo: PaginatorType;
	data: EnrollmentLogType[];
};
