import type { PeriodType } from './period';

export type BenefitItemsType = {
	id: string;
	name: string;
	code: string;
	description: string;
	flex_type: string;
	status: string;
	primary_price: string;
	benefit?: BenefitType;
	pivot: {
		point: number;
	};
	created_at: string;
	updated_at: string;
};

export type BenefitType = {
	id: string;
	name: string;
	code: string;
	description: string;
	is_factorable: boolean;
	is_optional: boolean;
	is_active: boolean;
	created_at: string;
	updated_at: string;
	period: PeriodType;
	benefit_items: BenefitItemsType[];
	__typename: string;
};

export type DetailBenefitType = {
	id: string;
	name: string;
	code: string;
	description: string;
	is_factorable: boolean;
	is_optional: boolean;
	is_active: boolean;
	created_at: string;
	updated_at: string;
	period: PeriodType;
	benefit_items: BenefitItemsType[];
	__typename: string;
};
