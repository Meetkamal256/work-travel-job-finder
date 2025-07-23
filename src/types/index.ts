export type FilterSelectProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export type JobCardProps = {
  companyId: string;
  companyName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  state: string;
  latitude: number;
  longitude: number;
  industry: string;
  isContacted: boolean;
  onToggleContacted: () => void;
};

export type Company = {
  companyId: string;
  email: string;
  state: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  address: string;
  latitude: number;
  longitude: number;
  industry: string;
};

