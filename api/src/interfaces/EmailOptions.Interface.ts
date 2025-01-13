// export interface EmailOptions {
//   email: string;
//   subject: string;
//   template: string;
//   body: any;
//   attachments?: { 
//     filename: string;
//     path: string;
//     contentType: string;
//   }[];
// }

export interface EmailOptions {
	email: string;
	subject: string;
	template: string;
	body: Record<string, any>;
	attachments?: Array<{ filename: string; path: string }>;
}
