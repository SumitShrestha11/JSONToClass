class ID2 {
  t1: boolean;
  t2: string;
  constructor(t1: boolean, t2: string) {
    this.t1 = t1;
    this.t2 = t2;
  }
}

class Individuals {
  INTCODE: string;
  DEVID: string;
  CONSENT: string;
  ID10: string;
  PI0: string;
  PI1: string;
  PI2: string;
  PI3: string;
  PI4: string;
  PI5: string;
  PI6: string;
  PI7: string;
  PI8: string;
  PI9: string;
  PI10: string;
  PI11: string;
  PI11A: string;
  PI11B: string;
  PI11C: string;
  PI11D: string;
  PI11E: string;
  PI11F: string;
  PI11G: string;
  PI11H: string;
  PI11I: string;
  PI11J: string;
  PI11K: string;
  PI12: string;
  PI13: string;
  constructor(
    INTCODE: string,
    DEVID: string,
    CONSENT: string,
    ID10: string,
    PI0: string,
    PI1: string,
    PI2: string,
    PI3: string,
    PI4: string,
    PI5: string,
    PI6: string,
    PI7: string,
    PI8: string,
    PI9: string,
    PI10: string,
    PI11: string,
    PI11A: string,
    PI11B: string,
    PI11C: string,
    PI11D: string,
    PI11E: string,
    PI11F: string,
    PI11G: string,
    PI11H: string,
    PI11I: string,
    PI11J: string,
    PI11K: string,
    PI12: string,
    PI13: string
  ) {
    this.INTCODE = INTCODE;
    this.DEVID = DEVID;
    this.CONSENT = CONSENT;
    this.ID10 = ID10;
    this.PI0 = PI0;
    this.PI1 = PI1;
    this.PI2 = PI2;
    this.PI3 = PI3;
    this.PI4 = PI4;
    this.PI5 = PI5;
    this.PI6 = PI6;
    this.PI7 = PI7;
    this.PI8 = PI8;
    this.PI9 = PI9;
    this.PI10 = PI10;
    this.PI11 = PI11;
    this.PI11A = PI11A;
    this.PI11B = PI11B;
    this.PI11C = PI11C;
    this.PI11D = PI11D;
    this.PI11E = PI11E;
    this.PI11F = PI11F;
    this.PI11G = PI11G;
    this.PI11H = PI11H;
    this.PI11I = PI11I;
    this.PI11J = PI11J;
    this.PI11K = PI11K;
    this.PI12 = PI12;
    this.PI13 = PI13;
  }
}

class SectionForm {
  ID2: ID2;
  ID3: number;
  ID4: string;
  ID5: string;
  ID9: string;
  ID1: string;
  ID6: string;
  ID7: string;
  ID8: string;
  HHID: string;
  INTCODE: string;
  DEVID: string;
  DATE: string;
  YEAR: string;
  MONTH: string;
  DAY: string;
  TIME: string;
  CONSENT: string;
  ID10: string;
  ID10A: string;
  ID11: string;
  ID12: string;
  ID13: string;
  ID14: string;
  ID15A: string;
  ID16: string;
  ID16A: string;
  ID17: string;
  ID18: string;
  ID19: string;
  ID20: string;
  ID21: string;
  LATITUDE: string;
  LONGITUDE: string;
  HD1: string;
  HD2: string;
  HD3: string;
  HD4: string;
  HD5: string;
  HD6: string;
  HD7: string;
  HD8: string;
  HD9: string;
  HD10: string;
  HA1A: string;
  HA1C: string;
  HA1D: string;
  HA1E: string;
  HA1F: string;
  HA1G: string;
  HA1H: string;
  HA1I: string;
  HA1J: string;
  HA1K: string;
  HA1L: string;
  HA1M: string;
  HA1N: string;
  HA2: string;
  HA3: string;
  HA3A: string;
  HA3B: string;
  HA3C: string;
  HA3D: string;
  HA3E: string;
  HA3F: string;
  HA4: string;
  HA5A: string;
  HA5B: string;
  HA5C: string;
  HA5D: string;
  HA5E: string;
  HA5F: string;
  HA6: string;
  HA7: string;
  HA8: string;
  HA9: string;
  HA10: string;
  HA11: string;
  HAX11: string;
  HAX12A: string;
  HAX12B: string;
  HAX12C: string;
  HAX12D: string;
  HAX13: string;
  HAX21: string;
  HAX22: string;
  HAX23: string;
  HAX24: string;
  HAX25: string;
  HAX26: string;
  HAX27: string;
  HAX28: string;
  PHOTO: string;
  ENUM_STATUS: string;
  ENURPT: string;
  individuals: Individuals[];
  constructor(
    ID2: ID2,
    ID3: number,
    ID4: string,
    ID5: string,
    ID9: string,
    ID1: string,
    ID6: string,
    ID7: string,
    ID8: string,
    HHID: string,
    INTCODE: string,
    DEVID: string,
    DATE: string,
    YEAR: string,
    MONTH: string,
    DAY: string,
    TIME: string,
    CONSENT: string,
    ID10: string,
    ID10A: string,
    ID11: string,
    ID12: string,
    ID13: string,
    ID14: string,
    ID15A: string,
    ID16: string,
    ID16A: string,
    ID17: string,
    ID18: string,
    ID19: string,
    ID20: string,
    ID21: string,
    LATITUDE: string,
    LONGITUDE: string,
    HD1: string,
    HD2: string,
    HD3: string,
    HD4: string,
    HD5: string,
    HD6: string,
    HD7: string,
    HD8: string,
    HD9: string,
    HD10: string,
    HA1A: string,
    HA1C: string,
    HA1D: string,
    HA1E: string,
    HA1F: string,
    HA1G: string,
    HA1H: string,
    HA1I: string,
    HA1J: string,
    HA1K: string,
    HA1L: string,
    HA1M: string,
    HA1N: string,
    HA2: string,
    HA3: string,
    HA3A: string,
    HA3B: string,
    HA3C: string,
    HA3D: string,
    HA3E: string,
    HA3F: string,
    HA4: string,
    HA5A: string,
    HA5B: string,
    HA5C: string,
    HA5D: string,
    HA5E: string,
    HA5F: string,
    HA6: string,
    HA7: string,
    HA8: string,
    HA9: string,
    HA10: string,
    HA11: string,
    HAX11: string,
    HAX12A: string,
    HAX12B: string,
    HAX12C: string,
    HAX12D: string,
    HAX13: string,
    HAX21: string,
    HAX22: string,
    HAX23: string,
    HAX24: string,
    HAX25: string,
    HAX26: string,
    HAX27: string,
    HAX28: string,
    PHOTO: string,
    ENUM_STATUS: string,
    ENURPT: string,
    individuals: Individuals[]
  ) {
    this.ID2 = ID2;
    this.ID3 = ID3;
    this.ID4 = ID4;
    this.ID5 = ID5;
    this.ID9 = ID9;
    this.ID1 = ID1;
    this.ID6 = ID6;
    this.ID7 = ID7;
    this.ID8 = ID8;
    this.HHID = HHID;
    this.INTCODE = INTCODE;
    this.DEVID = DEVID;
    this.DATE = DATE;
    this.YEAR = YEAR;
    this.MONTH = MONTH;
    this.DAY = DAY;
    this.TIME = TIME;
    this.CONSENT = CONSENT;
    this.ID10 = ID10;
    this.ID10A = ID10A;
    this.ID11 = ID11;
    this.ID12 = ID12;
    this.ID13 = ID13;
    this.ID14 = ID14;
    this.ID15A = ID15A;
    this.ID16 = ID16;
    this.ID16A = ID16A;
    this.ID17 = ID17;
    this.ID18 = ID18;
    this.ID19 = ID19;
    this.ID20 = ID20;
    this.ID21 = ID21;
    this.LATITUDE = LATITUDE;
    this.LONGITUDE = LONGITUDE;
    this.HD1 = HD1;
    this.HD2 = HD2;
    this.HD3 = HD3;
    this.HD4 = HD4;
    this.HD5 = HD5;
    this.HD6 = HD6;
    this.HD7 = HD7;
    this.HD8 = HD8;
    this.HD9 = HD9;
    this.HD10 = HD10;
    this.HA1A = HA1A;
    this.HA1C = HA1C;
    this.HA1D = HA1D;
    this.HA1E = HA1E;
    this.HA1F = HA1F;
    this.HA1G = HA1G;
    this.HA1H = HA1H;
    this.HA1I = HA1I;
    this.HA1J = HA1J;
    this.HA1K = HA1K;
    this.HA1L = HA1L;
    this.HA1M = HA1M;
    this.HA1N = HA1N;
    this.HA2 = HA2;
    this.HA3 = HA3;
    this.HA3A = HA3A;
    this.HA3B = HA3B;
    this.HA3C = HA3C;
    this.HA3D = HA3D;
    this.HA3E = HA3E;
    this.HA3F = HA3F;
    this.HA4 = HA4;
    this.HA5A = HA5A;
    this.HA5B = HA5B;
    this.HA5C = HA5C;
    this.HA5D = HA5D;
    this.HA5E = HA5E;
    this.HA5F = HA5F;
    this.HA6 = HA6;
    this.HA7 = HA7;
    this.HA8 = HA8;
    this.HA9 = HA9;
    this.HA10 = HA10;
    this.HA11 = HA11;
    this.HAX11 = HAX11;
    this.HAX12A = HAX12A;
    this.HAX12B = HAX12B;
    this.HAX12C = HAX12C;
    this.HAX12D = HAX12D;
    this.HAX13 = HAX13;
    this.HAX21 = HAX21;
    this.HAX22 = HAX22;
    this.HAX23 = HAX23;
    this.HAX24 = HAX24;
    this.HAX25 = HAX25;
    this.HAX26 = HAX26;
    this.HAX27 = HAX27;
    this.HAX28 = HAX28;
    this.PHOTO = PHOTO;
    this.ENUM_STATUS = ENUM_STATUS;
    this.ENURPT = ENURPT;
    this.individuals = individuals;
  }
}
