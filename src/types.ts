export interface EmployeeData {
    id?: any | null,
    name: string,
	email: string,
	phoneNumber: string,
	homeAddress: {
		city: string,
		ZIPCode: string,
		addressLine1: string,
		addressLine2: string
	},
	dateOfEmployment: string,
	dateOfBirth: string
  }