import { BenefitType } from "./benefit";
import { EnrollmentType } from "./enrollment";
import { AttachmentFilesType } from "./helper";

export type CompanyType = {
	id: string;
	name: string;
	code: string;
	benefits: BenefitType;
};

export type UserData = {
	id: string;
	eid: string;
	employee_status: string;
	name: string;
	division: string;
	email: string;
	phone: string;
	gender: string;
	spouse_gender: string;
	marital_status: string;
	created_at: Date;
	updated_at: Date;
	birth_date: Date;
	hire_date: Date;
	enrollments: EnrollmentType[];
	avatar: AttachmentFilesType;
	company: CompanyType;
};

export type UpdatePasswordType = {
	current_password: string;
	password: string;
	password_confirmation: string;
};
