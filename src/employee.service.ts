import http from "./http-common";
import { EmployeeData } from "./types";

const EmployeeDataService  = {
  async getAll() {
    return http.get<Array<EmployeeData>>("/employees");
  },
  async get(id: string) {
    return http.get<EmployeeData>(`/employees/id/${id}`);
  },
  async update(data: EmployeeData, id: any) {
    return http.put<any>(`/employees/${id}`, data);
  },
  async delete(id: any) {
    return http.delete<any>(`/employees/soft-delete/${id}`);
  },
  async permanentDelete(id: any) {
    return http.delete<any>(`/employees/permanent-delete/${id}`);
  },
  async findByName(name: string) {
    return http.get<Array<EmployeeData>>(`/employees/name/?name=${name}`);
}}

export default EmployeeDataService;