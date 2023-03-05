export type AttachmentFilesType = {
	id: string | number;
	file_name: string;
	title: string;
	description: string;
	image: AttachmentImageType;
	base64: string | ArrayBuffer;
	type?: string;
};

export type AttachmentPayloadType = {
	title: string;
	description: string;
	base64: string | ArrayBuffer;
	type?: string;
};

export type AttachmentImageType = {
	large: string;
	medium: string;
	small: string;
	thumb: string;
};

export type PaginatorType = {
	count?: number;
	currentPage?: number;
	firstItem?: number;
	hasMorePages?: boolean;
	lastItem?: number;
	lastPage?: number;
	perPage?: number;
	total?: number;
};
