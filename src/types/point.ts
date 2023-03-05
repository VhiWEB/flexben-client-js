import { UserData } from ".";
import { PeriodType } from "./period";

export type PointType = {
	id?: string | number;
	user: UserData;
	period: PeriodType;
	created_at: Date;
	updated_at: Date;
};