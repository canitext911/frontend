export const CarrierType = {
  verizon: 'verizon',
  tmobile: 'tmobile',
  sprint: 'sprint',
  att: 'att',
  other: 'other',
};

export const Carrier = {
  [CarrierType.verizon]: {
    name: 'Verizon',
    isSupported: true,
  },
  [CarrierType.tmobile]: {
    name: 'T-Mobile',
    isSupported: true,
  },
  [CarrierType.sprint]: {
    name: 'Sprint',
    isSupported: true,
  },
  [CarrierType.att]: {
    name: 'AT&T',
    isSupported: true,
  },
  [CarrierType.other]: {
    name: 'Other',
    isSupported: false,
  },
};

export const CarrierPlanStatusType = {
  active: 'active',
  inactive: 'inactive',
};

export const CarrierPlanStatus = {
  [CarrierPlanStatusType.active]: {
    name: 'Active',
    isSupported: true,
  },
  [CarrierPlanStatusType.inactive]: {
    name: 'Inactive',
    isSupported: false,
  },
};

export default {
  CarrierType,
  Carrier,
  CarrierPlanStatusType,
  CarrierPlanStatus,
};
