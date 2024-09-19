import axios from 'axios';
import queryString from 'query-string';

const axiosInstance = axios.create({
  baseURL: 'https://event-registration-app-24-45037e00ce10.herokuapp.com/api/',
});

export const getEvents = sortFilter =>
  axiosInstance.get(`/events?${queryString.stringify(sortFilter)}`);

export const getEventById = id => axiosInstance.get(`/events/${id}`);

export const addEventParticipant = (eventId, participant) =>
  axiosInstance.post(`/events/${eventId}/participants`, participant);

export const getEventParticipants = (eventId, filter) =>
  axiosInstance.get(
    `/events/${eventId}/participants?${queryString.stringify(filter)}`
  );

export const getEventRegistrationsPerDay = eventId =>
  axiosInstance.get(`/events/${eventId}/registrations`);
