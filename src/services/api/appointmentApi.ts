import { axios } from '../../core/axios';
import { Appointment } from '../../store/ducks/events/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const AppointmentsApi = {
  async fetchAppointments(userId?: string): Promise<Appointment[]> {
    const { data } = await axios.get<Response<Appointment[]>>(
      userId ? `/masters/appointment/${userId}` : '/masters/appointment',
    );
    return data.data;
  },
  async addAppointment(payload: { appointmentDate: Date; toMaster: string | undefined; }): Promise<Appointment> {
    const { data } = await axios.post<Response<Appointment>>('/masters', payload);
    return data.data;
  },
};
