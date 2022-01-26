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
  async addAppointment(payload: { author: string; guest: string; date: string; description: string }): Promise<Appointment> {
    const { data } = await axios.post<Response<Appointment>>('/appointment', payload);
    return data.data;
  },
};
