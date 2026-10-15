/**
 * 대한민국 행정안전부 행정표준코드 기준 전국 17개 시·도 및 250개 시·군·구 공식 행정구역 데이터
 * 출처: 행정안전부 행정표준코드관리시스템 (https://www.code.go.kr)
 * 기준일: 2024~2026년 최신 공식 행정구역 (강원/전북 특별자치도, 대구 군위군 편입, 부천시 3개 일반구 복원 반영)
 * 
 * 총 17개 광역시·도, 250개 시·군·구
 */

import { DistrictOption, DongOption, GeoPoint, SidoOption, SigunguOption } from "@/types/restaurant";

export const KOREAN_SIDO_LIST: SidoOption[] = [
  {
    "code": "11",
    "name": "서울특별시",
    "shortName": "서울",
    "center": {
      "lat": 37.5665,
      "lng": 126.978,
      "label": "서울특별시 중심"
    },
    "isActive": true
  },
  {
    "code": "26",
    "name": "부산광역시",
    "shortName": "부산",
    "center": {
      "lat": 35.1796,
      "lng": 129.0756,
      "label": "부산광역시 중심"
    },
    "isActive": true
  },
  {
    "code": "27",
    "name": "대구광역시",
    "shortName": "대구",
    "center": {
      "lat": 35.8714,
      "lng": 128.6014,
      "label": "대구광역시 중심"
    },
    "isActive": true
  },
  {
    "code": "28",
    "name": "인천광역시",
    "shortName": "인천",
    "center": {
      "lat": 37.4563,
      "lng": 126.7052,
      "label": "인천광역시 중심"
    },
    "isActive": true
  },
  {
    "code": "29",
    "name": "광주광역시",
    "shortName": "광주",
    "center": {
      "lat": 35.1595,
      "lng": 126.8526,
      "label": "광주광역시 중심"
    },
    "isActive": true
  },
  {
    "code": "30",
    "name": "대전광역시",
    "shortName": "대전",
    "center": {
      "lat": 36.3504,
      "lng": 127.3845,
      "label": "대전광역시 중심"
    },
    "isActive": true
  },
  {
    "code": "31",
    "name": "울산광역시",
    "shortName": "울산",
    "center": {
      "lat": 35.5384,
      "lng": 129.3114,
      "label": "울산광역시 중심"
    },
    "isActive": true
  },
  {
    "code": "36",
    "name": "세종특별자치시",
    "shortName": "세종",
    "center": {
      "lat": 36.48,
      "lng": 127.289,
      "label": "세종특별자치시 중심"
    },
    "isActive": true
  },
  {
    "code": "41",
    "name": "경기도",
    "shortName": "경기",
    "center": {
      "lat": 37.275,
      "lng": 127.0094,
      "label": "경기도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "42",
    "name": "강원특별자치도",
    "shortName": "강원",
    "center": {
      "lat": 37.8853,
      "lng": 127.7298,
      "label": "강원특별자치도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "43",
    "name": "충청북도",
    "shortName": "충북",
    "center": {
      "lat": 36.6358,
      "lng": 127.4914,
      "label": "충청북도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "44",
    "name": "충청남도",
    "shortName": "충남",
    "center": {
      "lat": 36.6588,
      "lng": 126.6728,
      "label": "충청남도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "45",
    "name": "전북특별자치도",
    "shortName": "전북",
    "center": {
      "lat": 35.8203,
      "lng": 127.1088,
      "label": "전북특별자치도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "46",
    "name": "전라남도",
    "shortName": "전남",
    "center": {
      "lat": 34.816,
      "lng": 126.463,
      "label": "전라남도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "47",
    "name": "경상북도",
    "shortName": "경북",
    "center": {
      "lat": 36.576,
      "lng": 128.5056,
      "label": "경상북도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "48",
    "name": "경상남도",
    "shortName": "경남",
    "center": {
      "lat": 35.2383,
      "lng": 128.6924,
      "label": "경상남도 중심 (도청)"
    },
    "isActive": true
  },
  {
    "code": "50",
    "name": "제주특별자치도",
    "shortName": "제주",
    "center": {
      "lat": 33.489,
      "lng": 126.4983,
      "label": "제주특별자치도 중심 (도청)"
    },
    "isActive": true
  }
];

export const KOREAN_SIGUNGU_LIST: SigunguOption[] = [
  {
    code: "11110",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "종로구",
    fullName: "서울특별시 종로구",
    legacyCode: "seoul_jongno",
    
    
    center: {"lat":37.573,"lng":126.9794,"label":"종로구 중심"},
    dongs: [
      {
            "code": "11110_dong_1",
            "name": "종로1가",
            "center": {
                  "lat": 37.567,
                  "lng": 126.9724,
                  "label": "종로구 종로1가"
            }
      },
      {
            "code": "11110_dong_2",
            "name": "인사동",
            "center": {
                  "lat": 37.573,
                  "lng": 126.9724,
                  "label": "종로구 인사동"
            }
      },
      {
            "code": "11110_dong_3",
            "name": "삼청동",
            "center": {
                  "lat": 37.579,
                  "lng": 126.9724,
                  "label": "종로구 삼청동"
            }
      },
      {
            "code": "11110_dong_4",
            "name": "혜화동",
            "center": {
                  "lat": 37.567,
                  "lng": 126.9794,
                  "label": "종로구 혜화동"
            }
      },
      {
            "code": "11110_dong_5",
            "name": "익선동",
            "center": {
                  "lat": 37.573,
                  "lng": 126.9794,
                  "label": "종로구 익선동"
            }
      },
      {
            "code": "11110_dong_6",
            "name": "통인동",
            "center": {
                  "lat": 37.579,
                  "lng": 126.9794,
                  "label": "종로구 통인동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "종로구",
  },
  {
    code: "11140",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "중구",
    fullName: "서울특별시 중구",
    legacyCode: "junggu_seoul",
    
    
    center: {"lat":37.5636,"lng":126.9975,"label":"서울 중구 중심"},
    dongs: [
      {
            "code": "11140_dong_1",
            "name": "명동",
            "center": {
                  "lat": 37.5576,
                  "lng": 126.9905,
                  "label": "중구 명동"
            }
      },
      {
            "code": "11140_dong_2",
            "name": "을지로동",
            "center": {
                  "lat": 37.5636,
                  "lng": 126.9905,
                  "label": "중구 을지로동"
            }
      },
      {
            "code": "11140_dong_3",
            "name": "회현동",
            "center": {
                  "lat": 37.5696,
                  "lng": 126.9905,
                  "label": "중구 회현동"
            }
      },
      {
            "code": "11140_dong_4",
            "name": "신당동",
            "center": {
                  "lat": 37.5576,
                  "lng": 126.9975,
                  "label": "중구 신당동"
            }
      },
      {
            "code": "11140_dong_5",
            "name": "필동",
            "center": {
                  "lat": 37.5636,
                  "lng": 126.9975,
                  "label": "중구 필동"
            }
      },
      {
            "code": "11140_dong_6",
            "name": "충무로",
            "center": {
                  "lat": 37.5696,
                  "lng": 126.9975,
                  "label": "중구 충무로"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "중구",
  },
  {
    code: "11170",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "용산구",
    fullName: "서울특별시 용산구",
    legacyCode: "seoul_yongsan",
    
    
    center: {"lat":37.5326,"lng":126.99,"label":"용산구 중심"},
    dongs: [
      {
            "code": "11170_dong_1",
            "name": "이태원동",
            "center": {
                  "lat": 37.5266,
                  "lng": 126.983,
                  "label": "용산구 이태원동"
            }
      },
      {
            "code": "11170_dong_2",
            "name": "한남동",
            "center": {
                  "lat": 37.5326,
                  "lng": 126.983,
                  "label": "용산구 한남동"
            }
      },
      {
            "code": "11170_dong_3",
            "name": "용산동",
            "center": {
                  "lat": 37.5386,
                  "lng": 126.983,
                  "label": "용산구 용산동"
            }
      },
      {
            "code": "11170_dong_4",
            "name": "원효로동",
            "center": {
                  "lat": 37.5266,
                  "lng": 126.99,
                  "label": "용산구 원효로동"
            }
      },
      {
            "code": "11170_dong_5",
            "name": "이촌동",
            "center": {
                  "lat": 37.5326,
                  "lng": 126.99,
                  "label": "용산구 이촌동"
            }
      },
      {
            "code": "11170_dong_6",
            "name": "후암동",
            "center": {
                  "lat": 37.5386,
                  "lng": 126.99,
                  "label": "용산구 후암동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "용산구",
  },
  {
    code: "11200",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "성동구",
    fullName: "서울특별시 성동구",
    legacyCode: "seoul_seongdong",
    
    
    center: {"lat":37.5633,"lng":127.0371,"label":"성동구 중심"},
    dongs: [
      {
            "code": "11200_dong_1",
            "name": "성수동",
            "center": {
                  "lat": 37.5573,
                  "lng": 127.0301,
                  "label": "성동구 성수동"
            }
      },
      {
            "code": "11200_dong_2",
            "name": "성수1가동",
            "center": {
                  "lat": 37.5633,
                  "lng": 127.0301,
                  "label": "성동구 성수1가동"
            }
      },
      {
            "code": "11200_dong_3",
            "name": "성수2가동",
            "center": {
                  "lat": 37.5693,
                  "lng": 127.0301,
                  "label": "성동구 성수2가동"
            }
      },
      {
            "code": "11200_dong_4",
            "name": "옥수동",
            "center": {
                  "lat": 37.5573,
                  "lng": 127.0371,
                  "label": "성동구 옥수동"
            }
      },
      {
            "code": "11200_dong_5",
            "name": "왕십리동",
            "center": {
                  "lat": 37.5633,
                  "lng": 127.0371,
                  "label": "성동구 왕십리동"
            }
      },
      {
            "code": "11200_dong_6",
            "name": "행당동",
            "center": {
                  "lat": 37.5693,
                  "lng": 127.0371,
                  "label": "성동구 행당동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "성동구",
  },
  {
    code: "11215",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "광진구",
    fullName: "서울특별시 광진구",
    
    
    
    center: {"lat":37.5385,"lng":127.0823,"label":"광진구 중심"},
    dongs: [
      {
            "code": "11215_dong_1",
            "name": "자양동",
            "center": {
                  "lat": 37.5325,
                  "lng": 127.0753,
                  "label": "광진구 자양동"
            }
      },
      {
            "code": "11215_dong_2",
            "name": "화양동",
            "center": {
                  "lat": 37.5385,
                  "lng": 127.0753,
                  "label": "광진구 화양동"
            }
      },
      {
            "code": "11215_dong_3",
            "name": "구의동",
            "center": {
                  "lat": 37.5445,
                  "lng": 127.0753,
                  "label": "광진구 구의동"
            }
      },
      {
            "code": "11215_dong_4",
            "name": "군자동",
            "center": {
                  "lat": 37.5325,
                  "lng": 127.0823,
                  "label": "광진구 군자동"
            }
      },
      {
            "code": "11215_dong_5",
            "name": "중곡동",
            "center": {
                  "lat": 37.5385,
                  "lng": 127.0823,
                  "label": "광진구 중곡동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "광진구",
  },
  {
    code: "11230",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "동대문구",
    fullName: "서울특별시 동대문구",
    
    
    
    center: {"lat":37.5744,"lng":127.04,"label":"동대문구 중심"},
    dongs: [
      {
            "code": "11230_dong_1",
            "name": "용두동",
            "center": {
                  "lat": 37.5684,
                  "lng": 127.033,
                  "label": "동대문구 용두동"
            }
      },
      {
            "code": "11230_dong_2",
            "name": "제기동",
            "center": {
                  "lat": 37.5744,
                  "lng": 127.033,
                  "label": "동대문구 제기동"
            }
      },
      {
            "code": "11230_dong_3",
            "name": "전농동",
            "center": {
                  "lat": 37.5804,
                  "lng": 127.033,
                  "label": "동대문구 전농동"
            }
      },
      {
            "code": "11230_dong_4",
            "name": "장안동",
            "center": {
                  "lat": 37.5684,
                  "lng": 127.04,
                  "label": "동대문구 장안동"
            }
      },
      {
            "code": "11230_dong_5",
            "name": "청량리동",
            "center": {
                  "lat": 37.5744,
                  "lng": 127.04,
                  "label": "동대문구 청량리동"
            }
      },
      {
            "code": "11230_dong_6",
            "name": "회기동",
            "center": {
                  "lat": 37.5804,
                  "lng": 127.04,
                  "label": "동대문구 회기동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "동대문구",
  },
  {
    code: "11260",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "중랑구",
    fullName: "서울특별시 중랑구",
    
    
    
    center: {"lat":37.6063,"lng":127.0926,"label":"중랑구 중심"},
    dongs: [
      {
            "code": "11260_dong_1",
            "name": "면목동",
            "center": {
                  "lat": 37.6003,
                  "lng": 127.0856,
                  "label": "중랑구 면목동"
            }
      },
      {
            "code": "11260_dong_2",
            "name": "상봉동",
            "center": {
                  "lat": 37.6063,
                  "lng": 127.0856,
                  "label": "중랑구 상봉동"
            }
      },
      {
            "code": "11260_dong_3",
            "name": "중화동",
            "center": {
                  "lat": 37.6123,
                  "lng": 127.0856,
                  "label": "중랑구 중화동"
            }
      },
      {
            "code": "11260_dong_4",
            "name": "묵동",
            "center": {
                  "lat": 37.6003,
                  "lng": 127.0926,
                  "label": "중랑구 묵동"
            }
      },
      {
            "code": "11260_dong_5",
            "name": "망우동",
            "center": {
                  "lat": 37.6063,
                  "lng": 127.0926,
                  "label": "중랑구 망우동"
            }
      },
      {
            "code": "11260_dong_6",
            "name": "신내동",
            "center": {
                  "lat": 37.6123,
                  "lng": 127.0926,
                  "label": "중랑구 신내동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "중랑구",
  },
  {
    code: "11290",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "성북구",
    fullName: "서울특별시 성북구",
    
    
    
    center: {"lat":37.5891,"lng":127.0182,"label":"성북구 중심"},
    dongs: [
      {
            "code": "11290_dong_1",
            "name": "성북동",
            "center": {
                  "lat": 37.5831,
                  "lng": 127.0112,
                  "label": "성북구 성북동"
            }
      },
      {
            "code": "11290_dong_2",
            "name": "안암동",
            "center": {
                  "lat": 37.5891,
                  "lng": 127.0112,
                  "label": "성북구 안암동"
            }
      },
      {
            "code": "11290_dong_3",
            "name": "돈암동",
            "center": {
                  "lat": 37.5951,
                  "lng": 127.0112,
                  "label": "성북구 돈암동"
            }
      },
      {
            "code": "11290_dong_4",
            "name": "길음동",
            "center": {
                  "lat": 37.5831,
                  "lng": 127.0182,
                  "label": "성북구 길음동"
            }
      },
      {
            "code": "11290_dong_5",
            "name": "종암동",
            "center": {
                  "lat": 37.5891,
                  "lng": 127.0182,
                  "label": "성북구 종암동"
            }
      },
      {
            "code": "11290_dong_6",
            "name": "석관동",
            "center": {
                  "lat": 37.5951,
                  "lng": 127.0182,
                  "label": "성북구 석관동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "성북구",
  },
  {
    code: "11305",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "강북구",
    fullName: "서울특별시 강북구",
    
    
    
    center: {"lat":37.6396,"lng":127.0257,"label":"강북구 중심"},
    dongs: [
      {
            "code": "11305_dong_1",
            "name": "미아동",
            "center": {
                  "lat": 37.6336,
                  "lng": 127.0187,
                  "label": "강북구 미아동"
            }
      },
      {
            "code": "11305_dong_2",
            "name": "번동",
            "center": {
                  "lat": 37.6396,
                  "lng": 127.0187,
                  "label": "강북구 번동"
            }
      },
      {
            "code": "11305_dong_3",
            "name": "수유동",
            "center": {
                  "lat": 37.6456,
                  "lng": 127.0187,
                  "label": "강북구 수유동"
            }
      },
      {
            "code": "11305_dong_4",
            "name": "우이동",
            "center": {
                  "lat": 37.6336,
                  "lng": 127.0257,
                  "label": "강북구 우이동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "강북구",
  },
  {
    code: "11320",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "도봉구",
    fullName: "서울특별시 도봉구",
    
    
    
    center: {"lat":37.6688,"lng":127.0471,"label":"도봉구 중심"},
    dongs: [
      {
            "code": "11320_dong_1",
            "name": "쌍문동",
            "center": {
                  "lat": 37.6628,
                  "lng": 127.0401,
                  "label": "도봉구 쌍문동"
            }
      },
      {
            "code": "11320_dong_2",
            "name": "방학동",
            "center": {
                  "lat": 37.6688,
                  "lng": 127.0401,
                  "label": "도봉구 방학동"
            }
      },
      {
            "code": "11320_dong_3",
            "name": "창동",
            "center": {
                  "lat": 37.6748,
                  "lng": 127.0401,
                  "label": "도봉구 창동"
            }
      },
      {
            "code": "11320_dong_4",
            "name": "도봉동",
            "center": {
                  "lat": 37.6628,
                  "lng": 127.0471,
                  "label": "도봉구 도봉동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "도봉구",
  },
  {
    code: "11350",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "노원구",
    fullName: "서울특별시 노원구",
    
    
    
    center: {"lat":37.6542,"lng":127.0568,"label":"노원구 중심"},
    dongs: [
      {
            "code": "11350_dong_1",
            "name": "상계동",
            "center": {
                  "lat": 37.6482,
                  "lng": 127.0498,
                  "label": "노원구 상계동"
            }
      },
      {
            "code": "11350_dong_2",
            "name": "중계동",
            "center": {
                  "lat": 37.6542,
                  "lng": 127.0498,
                  "label": "노원구 중계동"
            }
      },
      {
            "code": "11350_dong_3",
            "name": "하계동",
            "center": {
                  "lat": 37.6602,
                  "lng": 127.0498,
                  "label": "노원구 하계동"
            }
      },
      {
            "code": "11350_dong_4",
            "name": "월계동",
            "center": {
                  "lat": 37.6482,
                  "lng": 127.0568,
                  "label": "노원구 월계동"
            }
      },
      {
            "code": "11350_dong_5",
            "name": "공릉동",
            "center": {
                  "lat": 37.6542,
                  "lng": 127.0568,
                  "label": "노원구 공릉동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "노원구",
  },
  {
    code: "11380",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "은평구",
    fullName: "서울특별시 은평구",
    
    
    
    center: {"lat":37.6027,"lng":126.9291,"label":"은평구 중심"},
    dongs: [
      {
            "code": "11380_dong_1",
            "name": "불광동",
            "center": {
                  "lat": 37.5967,
                  "lng": 126.9221,
                  "label": "은평구 불광동"
            }
      },
      {
            "code": "11380_dong_2",
            "name": "갈현동",
            "center": {
                  "lat": 37.6027,
                  "lng": 126.9221,
                  "label": "은평구 갈현동"
            }
      },
      {
            "code": "11380_dong_3",
            "name": "응암동",
            "center": {
                  "lat": 37.6087,
                  "lng": 126.9221,
                  "label": "은평구 응암동"
            }
      },
      {
            "code": "11380_dong_4",
            "name": "구산동",
            "center": {
                  "lat": 37.5967,
                  "lng": 126.9291,
                  "label": "은평구 구산동"
            }
      },
      {
            "code": "11380_dong_5",
            "name": "대조동",
            "center": {
                  "lat": 37.6027,
                  "lng": 126.9291,
                  "label": "은평구 대조동"
            }
      },
      {
            "code": "11380_dong_6",
            "name": "진관동",
            "center": {
                  "lat": 37.6087,
                  "lng": 126.9291,
                  "label": "은평구 진관동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "은평구",
  },
  {
    code: "11410",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "서대문구",
    fullName: "서울특별시 서대문구",
    
    
    
    center: {"lat":37.5791,"lng":126.9368,"label":"서대문구 중심"},
    dongs: [
      {
            "code": "11410_dong_1",
            "name": "신촌동",
            "center": {
                  "lat": 37.5731,
                  "lng": 126.9298,
                  "label": "서대문구 신촌동"
            }
      },
      {
            "code": "11410_dong_2",
            "name": "연희동",
            "center": {
                  "lat": 37.5791,
                  "lng": 126.9298,
                  "label": "서대문구 연희동"
            }
      },
      {
            "code": "11410_dong_3",
            "name": "창천동",
            "center": {
                  "lat": 37.5851,
                  "lng": 126.9298,
                  "label": "서대문구 창천동"
            }
      },
      {
            "code": "11410_dong_4",
            "name": "홍은동",
            "center": {
                  "lat": 37.5731,
                  "lng": 126.9368,
                  "label": "서대문구 홍은동"
            }
      },
      {
            "code": "11410_dong_5",
            "name": "홍제동",
            "center": {
                  "lat": 37.5791,
                  "lng": 126.9368,
                  "label": "서대문구 홍제동"
            }
      },
      {
            "code": "11410_dong_6",
            "name": "남가좌동",
            "center": {
                  "lat": 37.5851,
                  "lng": 126.9368,
                  "label": "서대문구 남가좌동"
            }
      },
      {
            "code": "11410_dong_7",
            "name": "북가좌동",
            "center": {
                  "lat": 37.5731,
                  "lng": 126.9438,
                  "label": "서대문구 북가좌동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "서대문구",
  },
  {
    code: "11440",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "마포구",
    fullName: "서울특별시 마포구",
    legacyCode: "mapo",
    
    
    center: {"lat":37.5585,"lng":126.9245,"label":"마포구 중심"},
    dongs: [
      {
            "code": "11440_dong_1",
            "name": "연남동",
            "center": {
                  "lat": 37.5525,
                  "lng": 126.9175,
                  "label": "마포구 연남동"
            }
      },
      {
            "code": "11440_dong_2",
            "name": "서교동",
            "center": {
                  "lat": 37.5585,
                  "lng": 126.9175,
                  "label": "마포구 서교동"
            }
      },
      {
            "code": "11440_dong_3",
            "name": "합정동",
            "center": {
                  "lat": 37.5645,
                  "lng": 126.9175,
                  "label": "마포구 합정동"
            }
      },
      {
            "code": "11440_dong_4",
            "name": "망원동",
            "center": {
                  "lat": 37.5525,
                  "lng": 126.9245,
                  "label": "마포구 망원동"
            }
      },
      {
            "code": "11440_dong_5",
            "name": "상암동",
            "center": {
                  "lat": 37.5585,
                  "lng": 126.9245,
                  "label": "마포구 상암동"
            }
      },
      {
            "code": "11440_dong_6",
            "name": "공덕동",
            "center": {
                  "lat": 37.5645,
                  "lng": 126.9245,
                  "label": "마포구 공덕동"
            }
      },
      {
            "code": "11440_dong_7",
            "name": "염리동",
            "center": {
                  "lat": 37.5525,
                  "lng": 126.9315,
                  "label": "마포구 염리동"
            }
      },
      {
            "code": "11440_dong_8",
            "name": "도화동",
            "center": {
                  "lat": 37.5585,
                  "lng": 126.9315,
                  "label": "마포구 도화동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "마포구",
  },
  {
    code: "11470",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "양천구",
    fullName: "서울특별시 양천구",
    
    
    
    center: {"lat":37.5169,"lng":126.8665,"label":"양천구 중심"},
    dongs: [
      {
            "code": "11470_dong_1",
            "name": "목동",
            "center": {
                  "lat": 37.5109,
                  "lng": 126.8595,
                  "label": "양천구 목동"
            }
      },
      {
            "code": "11470_dong_2",
            "name": "신정동",
            "center": {
                  "lat": 37.5169,
                  "lng": 126.8595,
                  "label": "양천구 신정동"
            }
      },
      {
            "code": "11470_dong_3",
            "name": "신월동",
            "center": {
                  "lat": 37.5229,
                  "lng": 126.8595,
                  "label": "양천구 신월동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "양천구",
  },
  {
    code: "11500",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "강서구",
    fullName: "서울특별시 강서구",
    
    
    
    center: {"lat":37.5509,"lng":126.8495,"label":"서울 강서구 중심"},
    dongs: [
      {
            "code": "11500_dong_1",
            "name": "마곡동",
            "center": {
                  "lat": 37.5449,
                  "lng": 126.8425,
                  "label": "강서구 마곡동"
            }
      },
      {
            "code": "11500_dong_2",
            "name": "화곡동",
            "center": {
                  "lat": 37.5509,
                  "lng": 126.8425,
                  "label": "강서구 화곡동"
            }
      },
      {
            "code": "11500_dong_3",
            "name": "가양동",
            "center": {
                  "lat": 37.5569,
                  "lng": 126.8425,
                  "label": "강서구 가양동"
            }
      },
      {
            "code": "11500_dong_4",
            "name": "등촌동",
            "center": {
                  "lat": 37.5449,
                  "lng": 126.8495,
                  "label": "강서구 등촌동"
            }
      },
      {
            "code": "11500_dong_5",
            "name": "방화동",
            "center": {
                  "lat": 37.5509,
                  "lng": 126.8495,
                  "label": "강서구 방화동"
            }
      },
      {
            "code": "11500_dong_6",
            "name": "공항동",
            "center": {
                  "lat": 37.5569,
                  "lng": 126.8495,
                  "label": "강서구 공항동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "강서구",
  },
  {
    code: "11530",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "구로구",
    fullName: "서울특별시 구로구",
    
    
    
    center: {"lat":37.4954,"lng":126.8874,"label":"구로구 중심"},
    dongs: [
      {
            "code": "11530_dong_1",
            "name": "신도림동",
            "center": {
                  "lat": 37.4894,
                  "lng": 126.8804,
                  "label": "구로구 신도림동"
            }
      },
      {
            "code": "11530_dong_2",
            "name": "구로동",
            "center": {
                  "lat": 37.4954,
                  "lng": 126.8804,
                  "label": "구로구 구로동"
            }
      },
      {
            "code": "11530_dong_3",
            "name": "고척동",
            "center": {
                  "lat": 37.5014,
                  "lng": 126.8804,
                  "label": "구로구 고척동"
            }
      },
      {
            "code": "11530_dong_4",
            "name": "개봉동",
            "center": {
                  "lat": 37.4894,
                  "lng": 126.8874,
                  "label": "구로구 개봉동"
            }
      },
      {
            "code": "11530_dong_5",
            "name": "오류동",
            "center": {
                  "lat": 37.4954,
                  "lng": 126.8874,
                  "label": "구로구 오류동"
            }
      },
      {
            "code": "11530_dong_6",
            "name": "항동",
            "center": {
                  "lat": 37.5014,
                  "lng": 126.8874,
                  "label": "구로구 항동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "구로구",
  },
  {
    code: "11545",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "금천구",
    fullName: "서울특별시 금천구",
    
    
    
    center: {"lat":37.4568,"lng":126.8954,"label":"금천구 중심"},
    dongs: [
      {
            "code": "11545_dong_1",
            "name": "가산동",
            "center": {
                  "lat": 37.4508,
                  "lng": 126.8884,
                  "label": "금천구 가산동"
            }
      },
      {
            "code": "11545_dong_2",
            "name": "독산동",
            "center": {
                  "lat": 37.4568,
                  "lng": 126.8884,
                  "label": "금천구 독산동"
            }
      },
      {
            "code": "11545_dong_3",
            "name": "시흥동",
            "center": {
                  "lat": 37.4628,
                  "lng": 126.8884,
                  "label": "금천구 시흥동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "금천구",
  },
  {
    code: "11560",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "영등포구",
    fullName: "서울특별시 영등포구",
    legacyCode: "seoul_yeongdeungpo",
    
    
    center: {"lat":37.5264,"lng":126.8962,"label":"영등포구 중심"},
    dongs: [
      {
            "code": "11560_dong_1",
            "name": "여의도동",
            "center": {
                  "lat": 37.5204,
                  "lng": 126.8892,
                  "label": "영등포구 여의도동"
            }
      },
      {
            "code": "11560_dong_2",
            "name": "문래동",
            "center": {
                  "lat": 37.5264,
                  "lng": 126.8892,
                  "label": "영등포구 문래동"
            }
      },
      {
            "code": "11560_dong_3",
            "name": "당산동",
            "center": {
                  "lat": 37.5324,
                  "lng": 126.8892,
                  "label": "영등포구 당산동"
            }
      },
      {
            "code": "11560_dong_4",
            "name": "영등포동",
            "center": {
                  "lat": 37.5204,
                  "lng": 126.8962,
                  "label": "영등포구 영등포동"
            }
      },
      {
            "code": "11560_dong_5",
            "name": "양평동",
            "center": {
                  "lat": 37.5264,
                  "lng": 126.8962,
                  "label": "영등포구 양평동"
            }
      },
      {
            "code": "11560_dong_6",
            "name": "신길동",
            "center": {
                  "lat": 37.5324,
                  "lng": 126.8962,
                  "label": "영등포구 신길동"
            }
      },
      {
            "code": "11560_dong_7",
            "name": "대림동",
            "center": {
                  "lat": 37.5204,
                  "lng": 126.9032,
                  "label": "영등포구 대림동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "영등포구",
  },
  {
    code: "11590",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "동작구",
    fullName: "서울특별시 동작구",
    
    
    
    center: {"lat":37.5124,"lng":126.9393,"label":"동작구 중심"},
    dongs: [
      {
            "code": "11590_dong_1",
            "name": "노량진동",
            "center": {
                  "lat": 37.5064,
                  "lng": 126.9323,
                  "label": "동작구 노량진동"
            }
      },
      {
            "code": "11590_dong_2",
            "name": "상도동",
            "center": {
                  "lat": 37.5124,
                  "lng": 126.9323,
                  "label": "동작구 상도동"
            }
      },
      {
            "code": "11590_dong_3",
            "name": "흑석동",
            "center": {
                  "lat": 37.5184,
                  "lng": 126.9323,
                  "label": "동작구 흑석동"
            }
      },
      {
            "code": "11590_dong_4",
            "name": "사당동",
            "center": {
                  "lat": 37.5064,
                  "lng": 126.9393,
                  "label": "동작구 사당동"
            }
      },
      {
            "code": "11590_dong_5",
            "name": "대방동",
            "center": {
                  "lat": 37.5124,
                  "lng": 126.9393,
                  "label": "동작구 대방동"
            }
      },
      {
            "code": "11590_dong_6",
            "name": "신대방동",
            "center": {
                  "lat": 37.5184,
                  "lng": 126.9393,
                  "label": "동작구 신대방동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "동작구",
  },
  {
    code: "11620",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "관악구",
    fullName: "서울특별시 관악구",
    
    
    
    center: {"lat":37.4784,"lng":126.9516,"label":"관악구 중심"},
    dongs: [
      {
            "code": "11620_dong_1",
            "name": "봉천동",
            "center": {
                  "lat": 37.4724,
                  "lng": 126.9446,
                  "label": "관악구 봉천동"
            }
      },
      {
            "code": "11620_dong_2",
            "name": "신림동",
            "center": {
                  "lat": 37.4784,
                  "lng": 126.9446,
                  "label": "관악구 신림동"
            }
      },
      {
            "code": "11620_dong_3",
            "name": "남현동",
            "center": {
                  "lat": 37.4844,
                  "lng": 126.9446,
                  "label": "관악구 남현동"
            }
      },
      {
            "code": "11620_dong_4",
            "name": "행운동",
            "center": {
                  "lat": 37.4724,
                  "lng": 126.9516,
                  "label": "관악구 행운동"
            }
      },
      {
            "code": "11620_dong_5",
            "name": "낙성대동",
            "center": {
                  "lat": 37.4784,
                  "lng": 126.9516,
                  "label": "관악구 낙성대동"
            }
      },
      {
            "code": "11620_dong_6",
            "name": "대학동",
            "center": {
                  "lat": 37.4844,
                  "lng": 126.9516,
                  "label": "관악구 대학동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "관악구",
  },
  {
    code: "11650",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "서초구",
    fullName: "서울특별시 서초구",
    legacyCode: "seoul_seocho",
    
    
    center: {"lat":37.4837,"lng":127.0324,"label":"서초구 중심"},
    dongs: [
      {
            "code": "11650_dong_1",
            "name": "서초동",
            "center": {
                  "lat": 37.4777,
                  "lng": 127.0254,
                  "label": "서초구 서초동"
            }
      },
      {
            "code": "11650_dong_2",
            "name": "반포동",
            "center": {
                  "lat": 37.4837,
                  "lng": 127.0254,
                  "label": "서초구 반포동"
            }
      },
      {
            "code": "11650_dong_3",
            "name": "방배동",
            "center": {
                  "lat": 37.4897,
                  "lng": 127.0254,
                  "label": "서초구 방배동"
            }
      },
      {
            "code": "11650_dong_4",
            "name": "잠원동",
            "center": {
                  "lat": 37.4777,
                  "lng": 127.0324,
                  "label": "서초구 잠원동"
            }
      },
      {
            "code": "11650_dong_5",
            "name": "양재동",
            "center": {
                  "lat": 37.4837,
                  "lng": 127.0324,
                  "label": "서초구 양재동"
            }
      },
      {
            "code": "11650_dong_6",
            "name": "내곡동",
            "center": {
                  "lat": 37.4897,
                  "lng": 127.0324,
                  "label": "서초구 내곡동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "서초구",
  },
  {
    code: "11680",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "강남구",
    fullName: "서울특별시 강남구",
    legacyCode: "seoul_gangnam",
    
    
    center: {"lat":37.5172,"lng":127.0473,"label":"강남구 중심"},
    dongs: [
      {
            "code": "11680_dong_1",
            "name": "역삼동",
            "center": {
                  "lat": 37.5112,
                  "lng": 127.0403,
                  "label": "강남구 역삼동"
            }
      },
      {
            "code": "11680_dong_2",
            "name": "신사동",
            "center": {
                  "lat": 37.5172,
                  "lng": 127.0403,
                  "label": "강남구 신사동"
            }
      },
      {
            "code": "11680_dong_3",
            "name": "압구정동",
            "center": {
                  "lat": 37.5232,
                  "lng": 127.0403,
                  "label": "강남구 압구정동"
            }
      },
      {
            "code": "11680_dong_4",
            "name": "삼성동",
            "center": {
                  "lat": 37.5112,
                  "lng": 127.0473,
                  "label": "강남구 삼성동"
            }
      },
      {
            "code": "11680_dong_5",
            "name": "청담동",
            "center": {
                  "lat": 37.5172,
                  "lng": 127.0473,
                  "label": "강남구 청담동"
            }
      },
      {
            "code": "11680_dong_6",
            "name": "논현동",
            "center": {
                  "lat": 37.5232,
                  "lng": 127.0473,
                  "label": "강남구 논현동"
            }
      },
      {
            "code": "11680_dong_7",
            "name": "대치동",
            "center": {
                  "lat": 37.5112,
                  "lng": 127.0543,
                  "label": "강남구 대치동"
            }
      },
      {
            "code": "11680_dong_8",
            "name": "도곡동",
            "center": {
                  "lat": 37.5172,
                  "lng": 127.0543,
                  "label": "강남구 도곡동"
            }
      },
      {
            "code": "11680_dong_9",
            "name": "개포동",
            "center": {
                  "lat": 37.5232,
                  "lng": 127.0543,
                  "label": "강남구 개포동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "강남구",
  },
  {
    code: "11710",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "송파구",
    fullName: "서울특별시 송파구",
    legacyCode: "seoul_songpa",
    
    
    center: {"lat":37.5145,"lng":127.1058,"label":"송파구 중심"},
    dongs: [
      {
            "code": "11710_dong_1",
            "name": "잠실동",
            "center": {
                  "lat": 37.5085,
                  "lng": 127.0988,
                  "label": "송파구 잠실동"
            }
      },
      {
            "code": "11710_dong_2",
            "name": "신천동",
            "center": {
                  "lat": 37.5145,
                  "lng": 127.0988,
                  "label": "송파구 신천동"
            }
      },
      {
            "code": "11710_dong_3",
            "name": "방이동",
            "center": {
                  "lat": 37.5205,
                  "lng": 127.0988,
                  "label": "송파구 방이동"
            }
      },
      {
            "code": "11710_dong_4",
            "name": "송파동",
            "center": {
                  "lat": 37.5085,
                  "lng": 127.1058,
                  "label": "송파구 송파동"
            }
      },
      {
            "code": "11710_dong_5",
            "name": "석촌동",
            "center": {
                  "lat": 37.5145,
                  "lng": 127.1058,
                  "label": "송파구 석촌동"
            }
      },
      {
            "code": "11710_dong_6",
            "name": "가락동",
            "center": {
                  "lat": 37.5205,
                  "lng": 127.1058,
                  "label": "송파구 가락동"
            }
      },
      {
            "code": "11710_dong_7",
            "name": "문정동",
            "center": {
                  "lat": 37.5085,
                  "lng": 127.1128,
                  "label": "송파구 문정동"
            }
      },
      {
            "code": "11710_dong_8",
            "name": "장지동",
            "center": {
                  "lat": 37.5145,
                  "lng": 127.1128,
                  "label": "송파구 장지동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "송파구",
  },
  {
    code: "11740",
    sidoCode: "11",
    sidoName: "서울특별시",
    name: "강동구",
    fullName: "서울특별시 강동구",
    
    
    
    center: {"lat":37.5301,"lng":127.1238,"label":"강동구 중심"},
    dongs: [
      {
            "code": "11740_dong_1",
            "name": "천호동",
            "center": {
                  "lat": 37.5241,
                  "lng": 127.1168,
                  "label": "강동구 천호동"
            }
      },
      {
            "code": "11740_dong_2",
            "name": "명일동",
            "center": {
                  "lat": 37.5301,
                  "lng": 127.1168,
                  "label": "강동구 명일동"
            }
      },
      {
            "code": "11740_dong_3",
            "name": "고덕동",
            "center": {
                  "lat": 37.5361,
                  "lng": 127.1168,
                  "label": "강동구 고덕동"
            }
      },
      {
            "code": "11740_dong_4",
            "name": "상일동",
            "center": {
                  "lat": 37.5241,
                  "lng": 127.1238,
                  "label": "강동구 상일동"
            }
      },
      {
            "code": "11740_dong_5",
            "name": "길동",
            "center": {
                  "lat": 37.5301,
                  "lng": 127.1238,
                  "label": "강동구 길동"
            }
      },
      {
            "code": "11740_dong_6",
            "name": "둔촌동",
            "center": {
                  "lat": 37.5361,
                  "lng": 127.1238,
                  "label": "강동구 둔촌동"
            }
      },
      {
            "code": "11740_dong_7",
            "name": "암사동",
            "center": {
                  "lat": 37.5241,
                  "lng": 127.1308,
                  "label": "강동구 암사동"
            }
      },
      {
            "code": "11740_dong_8",
            "name": "성내동",
            "center": {
                  "lat": 37.5301,
                  "lng": 127.1308,
                  "label": "강동구 성내동"
            }
      }
],
    isActive: true,
    city: "서울특별시",
    gu: "강동구",
  },
  {
    code: "26110",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "중구",
    fullName: "부산광역시 중구",
    legacyCode: "busan_jung",
    
    
    center: {"lat":35.1062,"lng":129.0324,"label":"부산 중구(남포동) 중심"},
    dongs: [
      {
            "code": "26110_dong_1",
            "name": "남포동",
            "center": {
                  "lat": 35.1002,
                  "lng": 129.0254,
                  "label": "중구 남포동"
            }
      },
      {
            "code": "26110_dong_2",
            "name": "광복동",
            "center": {
                  "lat": 35.1062,
                  "lng": 129.0254,
                  "label": "중구 광복동"
            }
      },
      {
            "code": "26110_dong_3",
            "name": "중앙동",
            "center": {
                  "lat": 35.1122,
                  "lng": 129.0254,
                  "label": "중구 중앙동"
            }
      },
      {
            "code": "26110_dong_4",
            "name": "보수동",
            "center": {
                  "lat": 35.1002,
                  "lng": 129.0324,
                  "label": "중구 보수동"
            }
      },
      {
            "code": "26110_dong_5",
            "name": "부평동",
            "center": {
                  "lat": 35.1062,
                  "lng": 129.0324,
                  "label": "중구 부평동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "중구",
  },
  {
    code: "26140",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "서구",
    fullName: "부산광역시 서구",
    
    
    
    center: {"lat":35.0979,"lng":129.0243,"label":"부산 서구 중심"},
    dongs: [
      {
            "code": "26140_dong_1",
            "name": "송도",
            "center": {
                  "lat": 35.0919,
                  "lng": 129.0173,
                  "label": "서구 송도"
            }
      },
      {
            "code": "26140_dong_2",
            "name": "암남동",
            "center": {
                  "lat": 35.0979,
                  "lng": 129.0173,
                  "label": "서구 암남동"
            }
      },
      {
            "code": "26140_dong_3",
            "name": "토성동",
            "center": {
                  "lat": 35.1039,
                  "lng": 129.0173,
                  "label": "서구 토성동"
            }
      },
      {
            "code": "26140_dong_4",
            "name": "충무동",
            "center": {
                  "lat": 35.0919,
                  "lng": 129.0243,
                  "label": "서구 충무동"
            }
      },
      {
            "code": "26140_dong_5",
            "name": "서대신동",
            "center": {
                  "lat": 35.0979,
                  "lng": 129.0243,
                  "label": "서구 서대신동"
            }
      },
      {
            "code": "26140_dong_6",
            "name": "동대신동",
            "center": {
                  "lat": 35.1039,
                  "lng": 129.0243,
                  "label": "서구 동대신동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "서구",
  },
  {
    code: "26170",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "동구",
    fullName: "부산광역시 동구",
    
    
    
    center: {"lat":35.1293,"lng":129.0454,"label":"부산 동구(부산역) 중심"},
    dongs: [
      {
            "code": "26170_dong_1",
            "name": "초량동",
            "center": {
                  "lat": 35.1233,
                  "lng": 129.0384,
                  "label": "동구 초량동"
            }
      },
      {
            "code": "26170_dong_2",
            "name": "수정동",
            "center": {
                  "lat": 35.1293,
                  "lng": 129.0384,
                  "label": "동구 수정동"
            }
      },
      {
            "code": "26170_dong_3",
            "name": "좌천동",
            "center": {
                  "lat": 35.1353,
                  "lng": 129.0384,
                  "label": "동구 좌천동"
            }
      },
      {
            "code": "26170_dong_4",
            "name": "범일동",
            "center": {
                  "lat": 35.1233,
                  "lng": 129.0454,
                  "label": "동구 범일동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "동구",
  },
  {
    code: "26200",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "영도구",
    fullName: "부산광역시 영도구",
    
    
    
    center: {"lat":35.0912,"lng":129.0679,"label":"부산 영도구 중심"},
    dongs: [
      {
            "code": "26200_dong_1",
            "name": "봉래동",
            "center": {
                  "lat": 35.0852,
                  "lng": 129.0609,
                  "label": "영도구 봉래동"
            }
      },
      {
            "code": "26200_dong_2",
            "name": "청학동",
            "center": {
                  "lat": 35.0912,
                  "lng": 129.0609,
                  "label": "영도구 청학동"
            }
      },
      {
            "code": "26200_dong_3",
            "name": "동삼동",
            "center": {
                  "lat": 35.0972,
                  "lng": 129.0609,
                  "label": "영도구 동삼동"
            }
      },
      {
            "code": "26200_dong_4",
            "name": "남항동",
            "center": {
                  "lat": 35.0852,
                  "lng": 129.0679,
                  "label": "영도구 남항동"
            }
      },
      {
            "code": "26200_dong_5",
            "name": "영선동",
            "center": {
                  "lat": 35.0912,
                  "lng": 129.0679,
                  "label": "영도구 영선동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "영도구",
  },
  {
    code: "26230",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "부산진구",
    fullName: "부산광역시 부산진구",
    legacyCode: "busan_jin",
    
    
    center: {"lat":35.1631,"lng":129.0532,"label":"부산진구(서면) 중심"},
    dongs: [
      {
            "code": "26230_dong_1",
            "name": "부전동",
            "center": {
                  "lat": 35.1571,
                  "lng": 129.0462,
                  "label": "부산진구 부전동"
            }
      },
      {
            "code": "26230_dong_2",
            "name": "전포동",
            "center": {
                  "lat": 35.1631,
                  "lng": 129.0462,
                  "label": "부산진구 전포동"
            }
      },
      {
            "code": "26230_dong_3",
            "name": "양정동",
            "center": {
                  "lat": 35.1691,
                  "lng": 129.0462,
                  "label": "부산진구 양정동"
            }
      },
      {
            "code": "26230_dong_4",
            "name": "가야동",
            "center": {
                  "lat": 35.1571,
                  "lng": 129.0532,
                  "label": "부산진구 가야동"
            }
      },
      {
            "code": "26230_dong_5",
            "name": "개금동",
            "center": {
                  "lat": 35.1631,
                  "lng": 129.0532,
                  "label": "부산진구 개금동"
            }
      },
      {
            "code": "26230_dong_6",
            "name": "당감동",
            "center": {
                  "lat": 35.1691,
                  "lng": 129.0532,
                  "label": "부산진구 당감동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "부산진구",
  },
  {
    code: "26260",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "동래구",
    fullName: "부산광역시 동래구",
    
    
    
    center: {"lat":35.2048,"lng":129.0836,"label":"부산 동래구 중심"},
    dongs: [
      {
            "code": "26260_dong_1",
            "name": "온천동",
            "center": {
                  "lat": 35.1988,
                  "lng": 129.0766,
                  "label": "동래구 온천동"
            }
      },
      {
            "code": "26260_dong_2",
            "name": "사직동",
            "center": {
                  "lat": 35.2048,
                  "lng": 129.0766,
                  "label": "동래구 사직동"
            }
      },
      {
            "code": "26260_dong_3",
            "name": "수안동",
            "center": {
                  "lat": 35.2108,
                  "lng": 129.0766,
                  "label": "동래구 수안동"
            }
      },
      {
            "code": "26260_dong_4",
            "name": "명륜동",
            "center": {
                  "lat": 35.1988,
                  "lng": 129.0836,
                  "label": "동래구 명륜동"
            }
      },
      {
            "code": "26260_dong_5",
            "name": "안락동",
            "center": {
                  "lat": 35.2048,
                  "lng": 129.0836,
                  "label": "동래구 안락동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "동래구",
  },
  {
    code: "26290",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "남구",
    fullName: "부산광역시 남구",
    
    
    
    center: {"lat":35.1365,"lng":129.0842,"label":"부산 남구(경성대/대연) 중심"},
    dongs: [
      {
            "code": "26290_dong_1",
            "name": "대연동",
            "center": {
                  "lat": 35.1305,
                  "lng": 129.0772,
                  "label": "남구 대연동"
            }
      },
      {
            "code": "26290_dong_2",
            "name": "용호동",
            "center": {
                  "lat": 35.1365,
                  "lng": 129.0772,
                  "label": "남구 용호동"
            }
      },
      {
            "code": "26290_dong_3",
            "name": "문현동",
            "center": {
                  "lat": 35.1425,
                  "lng": 129.0772,
                  "label": "남구 문현동"
            }
      },
      {
            "code": "26290_dong_4",
            "name": "우암동",
            "center": {
                  "lat": 35.1305,
                  "lng": 129.0842,
                  "label": "남구 우암동"
            }
      },
      {
            "code": "26290_dong_5",
            "name": "감만동",
            "center": {
                  "lat": 35.1365,
                  "lng": 129.0842,
                  "label": "남구 감만동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "남구",
  },
  {
    code: "26320",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "북구",
    fullName: "부산광역시 북구",
    
    
    
    center: {"lat":35.197,"lng":128.9901,"label":"부산 북구(덕천) 중심"},
    dongs: [
      {
            "code": "26320_dong_1",
            "name": "덕천동",
            "center": {
                  "lat": 35.191,
                  "lng": 128.9831,
                  "label": "북구 덕천동"
            }
      },
      {
            "code": "26320_dong_2",
            "name": "화명동",
            "center": {
                  "lat": 35.197,
                  "lng": 128.9831,
                  "label": "북구 화명동"
            }
      },
      {
            "code": "26320_dong_3",
            "name": "구포동",
            "center": {
                  "lat": 35.203,
                  "lng": 128.9831,
                  "label": "북구 구포동"
            }
      },
      {
            "code": "26320_dong_4",
            "name": "만덕동",
            "center": {
                  "lat": 35.191,
                  "lng": 128.9901,
                  "label": "북구 만덕동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "북구",
  },
  {
    code: "26350",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "해운대구",
    fullName: "부산광역시 해운대구",
    legacyCode: "busan_haeundae",
    
    
    center: {"lat":35.1631,"lng":129.1636,"label":"해운대구 중심"},
    dongs: [
      {
            "code": "26350_dong_1",
            "name": "우동",
            "center": {
                  "lat": 35.1571,
                  "lng": 129.1566,
                  "label": "해운대구 우동"
            }
      },
      {
            "code": "26350_dong_2",
            "name": "중동",
            "center": {
                  "lat": 35.1631,
                  "lng": 129.1566,
                  "label": "해운대구 중동"
            }
      },
      {
            "code": "26350_dong_3",
            "name": "좌동",
            "center": {
                  "lat": 35.1691,
                  "lng": 129.1566,
                  "label": "해운대구 좌동"
            }
      },
      {
            "code": "26350_dong_4",
            "name": "송정동",
            "center": {
                  "lat": 35.1571,
                  "lng": 129.1636,
                  "label": "해운대구 송정동"
            }
      },
      {
            "code": "26350_dong_5",
            "name": "재송동",
            "center": {
                  "lat": 35.1631,
                  "lng": 129.1636,
                  "label": "해운대구 재송동"
            }
      },
      {
            "code": "26350_dong_6",
            "name": "반여동",
            "center": {
                  "lat": 35.1691,
                  "lng": 129.1636,
                  "label": "해운대구 반여동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "해운대구",
  },
  {
    code: "26380",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "사하구",
    fullName: "부산광역시 사하구",
    
    
    
    center: {"lat":35.1044,"lng":128.9749,"label":"부산 사하구(하단) 중심"},
    dongs: [
      {
            "code": "26380_dong_1",
            "name": "하단동",
            "center": {
                  "lat": 35.0984,
                  "lng": 128.9679,
                  "label": "사하구 하단동"
            }
      },
      {
            "code": "26380_dong_2",
            "name": "괴정동",
            "center": {
                  "lat": 35.1044,
                  "lng": 128.9679,
                  "label": "사하구 괴정동"
            }
      },
      {
            "code": "26380_dong_3",
            "name": "다대동",
            "center": {
                  "lat": 35.1104,
                  "lng": 128.9679,
                  "label": "사하구 다대동"
            }
      },
      {
            "code": "26380_dong_4",
            "name": "당리동",
            "center": {
                  "lat": 35.0984,
                  "lng": 128.9749,
                  "label": "사하구 당리동"
            }
      },
      {
            "code": "26380_dong_5",
            "name": "신평동",
            "center": {
                  "lat": 35.1044,
                  "lng": 128.9749,
                  "label": "사하구 신평동"
            }
      },
      {
            "code": "26380_dong_6",
            "name": "장림동",
            "center": {
                  "lat": 35.1104,
                  "lng": 128.9749,
                  "label": "사하구 장림동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "사하구",
  },
  {
    code: "26410",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "금정구",
    fullName: "부산광역시 금정구",
    
    
    
    center: {"lat":35.2429,"lng":129.0927,"label":"부산 금정구(부산대) 중심"},
    dongs: [
      {
            "code": "26410_dong_1",
            "name": "장전동",
            "center": {
                  "lat": 35.2369,
                  "lng": 129.0857,
                  "label": "금정구 장전동"
            }
      },
      {
            "code": "26410_dong_2",
            "name": "구서동",
            "center": {
                  "lat": 35.2429,
                  "lng": 129.0857,
                  "label": "금정구 구서동"
            }
      },
      {
            "code": "26410_dong_3",
            "name": "남산동",
            "center": {
                  "lat": 35.2489,
                  "lng": 129.0857,
                  "label": "금정구 남산동"
            }
      },
      {
            "code": "26410_dong_4",
            "name": "부곡동",
            "center": {
                  "lat": 35.2369,
                  "lng": 129.0927,
                  "label": "금정구 부곡동"
            }
      },
      {
            "code": "26410_dong_5",
            "name": "서동",
            "center": {
                  "lat": 35.2429,
                  "lng": 129.0927,
                  "label": "금정구 서동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "금정구",
  },
  {
    code: "26440",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "강서구",
    fullName: "부산광역시 강서구",
    
    
    
    center: {"lat":35.2122,"lng":128.9805,"label":"부산 강서구(명지) 중심"},
    dongs: [
      {
            "code": "26440_dong_1",
            "name": "명지동",
            "center": {
                  "lat": 35.2062,
                  "lng": 128.9735,
                  "label": "강서구 명지동"
            }
      },
      {
            "code": "26440_dong_2",
            "name": "대저동",
            "center": {
                  "lat": 35.2122,
                  "lng": 128.9735,
                  "label": "강서구 대저동"
            }
      },
      {
            "code": "26440_dong_3",
            "name": "강동동",
            "center": {
                  "lat": 35.2182,
                  "lng": 128.9735,
                  "label": "강서구 강동동"
            }
      },
      {
            "code": "26440_dong_4",
            "name": "녹산동",
            "center": {
                  "lat": 35.2062,
                  "lng": 128.9805,
                  "label": "강서구 녹산동"
            }
      },
      {
            "code": "26440_dong_5",
            "name": "가덕도동",
            "center": {
                  "lat": 35.2122,
                  "lng": 128.9805,
                  "label": "강서구 가덕도동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "강서구",
  },
  {
    code: "26470",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "연제구",
    fullName: "부산광역시 연제구",
    
    
    
    center: {"lat":35.1765,"lng":129.0798,"label":"부산 연제구(시청/연산) 중심"},
    dongs: [
      {
            "code": "26470_dong_1",
            "name": "연산동",
            "center": {
                  "lat": 35.1705,
                  "lng": 129.0728,
                  "label": "연제구 연산동"
            }
      },
      {
            "code": "26470_dong_2",
            "name": "거제동",
            "center": {
                  "lat": 35.1765,
                  "lng": 129.0728,
                  "label": "연제구 거제동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "연제구",
  },
  {
    code: "26500",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "수영구",
    fullName: "부산광역시 수영구",
    legacyCode: "busan_suyeong",
    
    
    center: {"lat":35.1456,"lng":129.1132,"label":"수영구(광안리) 중심"},
    dongs: [
      {
            "code": "26500_dong_1",
            "name": "광안동",
            "center": {
                  "lat": 35.1396,
                  "lng": 129.1062,
                  "label": "수영구 광안동"
            }
      },
      {
            "code": "26500_dong_2",
            "name": "남천동",
            "center": {
                  "lat": 35.1456,
                  "lng": 129.1062,
                  "label": "수영구 남천동"
            }
      },
      {
            "code": "26500_dong_3",
            "name": "민락동",
            "center": {
                  "lat": 35.1516,
                  "lng": 129.1062,
                  "label": "수영구 민락동"
            }
      },
      {
            "code": "26500_dong_4",
            "name": "망미동",
            "center": {
                  "lat": 35.1396,
                  "lng": 129.1132,
                  "label": "수영구 망미동"
            }
      },
      {
            "code": "26500_dong_5",
            "name": "수영동",
            "center": {
                  "lat": 35.1456,
                  "lng": 129.1132,
                  "label": "수영구 수영동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "수영구",
  },
  {
    code: "26530",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "사상구",
    fullName: "부산광역시 사상구",
    
    
    
    center: {"lat":35.1526,"lng":128.9912,"label":"부산 사상구 중심"},
    dongs: [
      {
            "code": "26530_dong_1",
            "name": "괘법동",
            "center": {
                  "lat": 35.1466,
                  "lng": 128.9842,
                  "label": "사상구 괘법동"
            }
      },
      {
            "code": "26530_dong_2",
            "name": "감전동",
            "center": {
                  "lat": 35.1526,
                  "lng": 128.9842,
                  "label": "사상구 감전동"
            }
      },
      {
            "code": "26530_dong_3",
            "name": "주례동",
            "center": {
                  "lat": 35.1586,
                  "lng": 128.9842,
                  "label": "사상구 주례동"
            }
      },
      {
            "code": "26530_dong_4",
            "name": "학장동",
            "center": {
                  "lat": 35.1466,
                  "lng": 128.9912,
                  "label": "사상구 학장동"
            }
      },
      {
            "code": "26530_dong_5",
            "name": "모라동",
            "center": {
                  "lat": 35.1526,
                  "lng": 128.9912,
                  "label": "사상구 모라동"
            }
      },
      {
            "code": "26530_dong_6",
            "name": "덕포동",
            "center": {
                  "lat": 35.1586,
                  "lng": 128.9912,
                  "label": "사상구 덕포동"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "사상구",
  },
  {
    code: "26710",
    sidoCode: "26",
    sidoName: "부산광역시",
    name: "기장군",
    fullName: "부산광역시 기장군",
    
    
    
    center: {"lat":35.2445,"lng":129.2223,"label":"기장군 중심"},
    dongs: [
      {
            "code": "26710_dong_1",
            "name": "기장읍",
            "center": {
                  "lat": 35.2385,
                  "lng": 129.2153,
                  "label": "기장군 기장읍"
            }
      },
      {
            "code": "26710_dong_2",
            "name": "정관읍",
            "center": {
                  "lat": 35.2445,
                  "lng": 129.2153,
                  "label": "기장군 정관읍"
            }
      },
      {
            "code": "26710_dong_3",
            "name": "일광읍",
            "center": {
                  "lat": 35.2505,
                  "lng": 129.2153,
                  "label": "기장군 일광읍"
            }
      },
      {
            "code": "26710_dong_4",
            "name": "장안읍",
            "center": {
                  "lat": 35.2385,
                  "lng": 129.2223,
                  "label": "기장군 장안읍"
            }
      },
      {
            "code": "26710_dong_5",
            "name": "철마면",
            "center": {
                  "lat": 35.2445,
                  "lng": 129.2223,
                  "label": "기장군 철마면"
            }
      }
],
    isActive: true,
    city: "부산광역시",
    gu: "기장군",
  },
  {
    code: "27110",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "중구",
    fullName: "대구광역시 중구",
    legacyCode: "daegu_jung",
    
    
    center: {"lat":35.8693,"lng":128.6062,"label":"대구 중구(동성로) 중심"},
    dongs: [
      {
            "code": "27110_dong_1",
            "name": "동성로동",
            "center": {
                  "lat": 35.8633,
                  "lng": 128.5992,
                  "label": "중구 동성로동"
            }
      },
      {
            "code": "27110_dong_2",
            "name": "삼덕동",
            "center": {
                  "lat": 35.8693,
                  "lng": 128.5992,
                  "label": "중구 삼덕동"
            }
      },
      {
            "code": "27110_dong_3",
            "name": "봉산동",
            "center": {
                  "lat": 35.8753,
                  "lng": 128.5992,
                  "label": "중구 봉산동"
            }
      },
      {
            "code": "27110_dong_4",
            "name": "대봉동",
            "center": {
                  "lat": 35.8633,
                  "lng": 128.6062,
                  "label": "중구 대봉동"
            }
      },
      {
            "code": "27110_dong_5",
            "name": "남산동",
            "center": {
                  "lat": 35.8693,
                  "lng": 128.6062,
                  "label": "중구 남산동"
            }
      },
      {
            "code": "27110_dong_6",
            "name": "대신동",
            "center": {
                  "lat": 35.8753,
                  "lng": 128.6062,
                  "label": "중구 대신동"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "중구",
  },
  {
    code: "27140",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "동구",
    fullName: "대구광역시 동구",
    
    
    
    center: {"lat":35.8868,"lng":128.6355,"label":"대구 동구(동대구역) 중심"},
    dongs: [
      {
            "code": "27140_dong_1",
            "name": "신천동",
            "center": {
                  "lat": 35.8808,
                  "lng": 128.6285,
                  "label": "동구 신천동"
            }
      },
      {
            "code": "27140_dong_2",
            "name": "효목동",
            "center": {
                  "lat": 35.8868,
                  "lng": 128.6285,
                  "label": "동구 효목동"
            }
      },
      {
            "code": "27140_dong_3",
            "name": "신암동",
            "center": {
                  "lat": 35.8928,
                  "lng": 128.6285,
                  "label": "동구 신암동"
            }
      },
      {
            "code": "27140_dong_4",
            "name": "불로동",
            "center": {
                  "lat": 35.8808,
                  "lng": 128.6355,
                  "label": "동구 불로동"
            }
      },
      {
            "code": "27140_dong_5",
            "name": "봉무동",
            "center": {
                  "lat": 35.8868,
                  "lng": 128.6355,
                  "label": "동구 봉무동"
            }
      },
      {
            "code": "27140_dong_6",
            "name": "안심동",
            "center": {
                  "lat": 35.8928,
                  "lng": 128.6355,
                  "label": "동구 안심동"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "동구",
  },
  {
    code: "27170",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "서구",
    fullName: "대구광역시 서구",
    
    
    
    center: {"lat":35.8719,"lng":128.5591,"label":"대구 서구 중심"},
    dongs: [
      {
            "code": "27170_dong_1",
            "name": "내당동",
            "center": {
                  "lat": 35.8659,
                  "lng": 128.5521,
                  "label": "서구 내당동"
            }
      },
      {
            "code": "27170_dong_2",
            "name": "비산동",
            "center": {
                  "lat": 35.8719,
                  "lng": 128.5521,
                  "label": "서구 비산동"
            }
      },
      {
            "code": "27170_dong_3",
            "name": "평리동",
            "center": {
                  "lat": 35.8779,
                  "lng": 128.5521,
                  "label": "서구 평리동"
            }
      },
      {
            "code": "27170_dong_4",
            "name": "상중이동",
            "center": {
                  "lat": 35.8659,
                  "lng": 128.5591,
                  "label": "서구 상중이동"
            }
      },
      {
            "code": "27170_dong_5",
            "name": "원대동",
            "center": {
                  "lat": 35.8719,
                  "lng": 128.5591,
                  "label": "서구 원대동"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "서구",
  },
  {
    code: "27200",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "남구",
    fullName: "대구광역시 남구",
    
    
    
    center: {"lat":35.8459,"lng":128.5973,"label":"대구 남구(앞산) 중심"},
    dongs: [
      {
            "code": "27200_dong_1",
            "name": "대명동",
            "center": {
                  "lat": 35.8399,
                  "lng": 128.5903,
                  "label": "남구 대명동"
            }
      },
      {
            "code": "27200_dong_2",
            "name": "봉덕동",
            "center": {
                  "lat": 35.8459,
                  "lng": 128.5903,
                  "label": "남구 봉덕동"
            }
      },
      {
            "code": "27200_dong_3",
            "name": "이천동",
            "center": {
                  "lat": 35.8519,
                  "lng": 128.5903,
                  "label": "남구 이천동"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "남구",
  },
  {
    code: "27230",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "북구",
    fullName: "대구광역시 북구",
    
    
    
    center: {"lat":35.8856,"lng":128.583,"label":"대구 북구(칠곡/복현) 중심"},
    dongs: [
      {
            "code": "27230_dong_1",
            "name": "산격동",
            "center": {
                  "lat": 35.8796,
                  "lng": 128.576,
                  "label": "북구 산격동"
            }
      },
      {
            "code": "27230_dong_2",
            "name": "복현동",
            "center": {
                  "lat": 35.8856,
                  "lng": 128.576,
                  "label": "북구 복현동"
            }
      },
      {
            "code": "27230_dong_3",
            "name": "칠곡동",
            "center": {
                  "lat": 35.8916,
                  "lng": 128.576,
                  "label": "북구 칠곡동"
            }
      },
      {
            "code": "27230_dong_4",
            "name": "침산동",
            "center": {
                  "lat": 35.8796,
                  "lng": 128.583,
                  "label": "북구 침산동"
            }
      },
      {
            "code": "27230_dong_5",
            "name": "태전동",
            "center": {
                  "lat": 35.8856,
                  "lng": 128.583,
                  "label": "북구 태전동"
            }
      },
      {
            "code": "27230_dong_6",
            "name": "구암동",
            "center": {
                  "lat": 35.8916,
                  "lng": 128.583,
                  "label": "북구 구암동"
            }
      },
      {
            "code": "27230_dong_7",
            "name": "동천동",
            "center": {
                  "lat": 35.8796,
                  "lng": 128.59,
                  "label": "북구 동천동"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "북구",
  },
  {
    code: "27260",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "수성구",
    fullName: "대구광역시 수성구",
    legacyCode: "daegu_suseong",
    
    
    center: {"lat":35.8583,"lng":128.6306,"label":"대구 수성구(범어/수성못) 중심"},
    dongs: [
      {
            "code": "27260_dong_1",
            "name": "범어동",
            "center": {
                  "lat": 35.8523,
                  "lng": 128.6236,
                  "label": "수성구 범어동"
            }
      },
      {
            "code": "27260_dong_2",
            "name": "만촌동",
            "center": {
                  "lat": 35.8583,
                  "lng": 128.6236,
                  "label": "수성구 만촌동"
            }
      },
      {
            "code": "27260_dong_3",
            "name": "수성동",
            "center": {
                  "lat": 35.8643,
                  "lng": 128.6236,
                  "label": "수성구 수성동"
            }
      },
      {
            "code": "27260_dong_4",
            "name": "황금동",
            "center": {
                  "lat": 35.8523,
                  "lng": 128.6306,
                  "label": "수성구 황금동"
            }
      },
      {
            "code": "27260_dong_5",
            "name": "두산동",
            "center": {
                  "lat": 35.8583,
                  "lng": 128.6306,
                  "label": "수성구 두산동"
            }
      },
      {
            "code": "27260_dong_6",
            "name": "지산동",
            "center": {
                  "lat": 35.8643,
                  "lng": 128.6306,
                  "label": "수성구 지산동"
            }
      },
      {
            "code": "27260_dong_7",
            "name": "시지동",
            "center": {
                  "lat": 35.8523,
                  "lng": 128.6376,
                  "label": "수성구 시지동"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "수성구",
  },
  {
    code: "27290",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "달서구",
    fullName: "대구광역시 달서구",
    
    
    
    center: {"lat":35.8299,"lng":128.5327,"label":"대구 달서구(상인/두류) 중심"},
    dongs: [
      {
            "code": "27290_dong_1",
            "name": "두류동",
            "center": {
                  "lat": 35.8239,
                  "lng": 128.5257,
                  "label": "달서구 두류동"
            }
      },
      {
            "code": "27290_dong_2",
            "name": "상인동",
            "center": {
                  "lat": 35.8299,
                  "lng": 128.5257,
                  "label": "달서구 상인동"
            }
      },
      {
            "code": "27290_dong_3",
            "name": "월성동",
            "center": {
                  "lat": 35.8359,
                  "lng": 128.5257,
                  "label": "달서구 월성동"
            }
      },
      {
            "code": "27290_dong_4",
            "name": "진천동",
            "center": {
                  "lat": 35.8239,
                  "lng": 128.5327,
                  "label": "달서구 진천동"
            }
      },
      {
            "code": "27290_dong_5",
            "name": "용산동",
            "center": {
                  "lat": 35.8299,
                  "lng": 128.5327,
                  "label": "달서구 용산동"
            }
      },
      {
            "code": "27290_dong_6",
            "name": "이곡동",
            "center": {
                  "lat": 35.8359,
                  "lng": 128.5327,
                  "label": "달서구 이곡동"
            }
      },
      {
            "code": "27290_dong_7",
            "name": "본리동",
            "center": {
                  "lat": 35.8239,
                  "lng": 128.5397,
                  "label": "달서구 본리동"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "달서구",
  },
  {
    code: "27710",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "달성군",
    fullName: "대구광역시 달성군",
    
    
    
    center: {"lat":35.7746,"lng":128.4313,"label":"달성군(현풍/다사) 중심"},
    dongs: [
      {
            "code": "27710_dong_1",
            "name": "화원읍",
            "center": {
                  "lat": 35.7686,
                  "lng": 128.4243,
                  "label": "달성군 화원읍"
            }
      },
      {
            "code": "27710_dong_2",
            "name": "논공읍",
            "center": {
                  "lat": 35.7746,
                  "lng": 128.4243,
                  "label": "달성군 논공읍"
            }
      },
      {
            "code": "27710_dong_3",
            "name": "다사읍",
            "center": {
                  "lat": 35.7806,
                  "lng": 128.4243,
                  "label": "달성군 다사읍"
            }
      },
      {
            "code": "27710_dong_4",
            "name": "유가읍",
            "center": {
                  "lat": 35.7686,
                  "lng": 128.4313,
                  "label": "달성군 유가읍"
            }
      },
      {
            "code": "27710_dong_5",
            "name": "옥포읍",
            "center": {
                  "lat": 35.7746,
                  "lng": 128.4313,
                  "label": "달성군 옥포읍"
            }
      },
      {
            "code": "27710_dong_6",
            "name": "현풍읍",
            "center": {
                  "lat": 35.7806,
                  "lng": 128.4313,
                  "label": "달성군 현풍읍"
            }
      },
      {
            "code": "27710_dong_7",
            "name": "가창면",
            "center": {
                  "lat": 35.7686,
                  "lng": 128.4383,
                  "label": "달성군 가창면"
            }
      },
      {
            "code": "27710_dong_8",
            "name": "하빈면",
            "center": {
                  "lat": 35.7746,
                  "lng": 128.4383,
                  "label": "달성군 하빈면"
            }
      },
      {
            "code": "27710_dong_9",
            "name": "구지면",
            "center": {
                  "lat": 35.7806,
                  "lng": 128.4383,
                  "label": "달성군 구지면"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "달성군",
  },
  {
    code: "27720",
    sidoCode: "27",
    sidoName: "대구광역시",
    name: "군위군",
    fullName: "대구광역시 군위군",
    
    
    
    center: {"lat":36.2428,"lng":128.5728,"label":"군위군 중심"},
    dongs: [
      {
            "code": "27720_dong_1",
            "name": "군위읍",
            "center": {
                  "lat": 36.2368,
                  "lng": 128.5658,
                  "label": "군위군 군위읍"
            }
      },
      {
            "code": "27720_dong_2",
            "name": "소보면",
            "center": {
                  "lat": 36.2428,
                  "lng": 128.5658,
                  "label": "군위군 소보면"
            }
      },
      {
            "code": "27720_dong_3",
            "name": "효령면",
            "center": {
                  "lat": 36.2488,
                  "lng": 128.5658,
                  "label": "군위군 효령면"
            }
      },
      {
            "code": "27720_dong_4",
            "name": "부계면",
            "center": {
                  "lat": 36.2368,
                  "lng": 128.5728,
                  "label": "군위군 부계면"
            }
      },
      {
            "code": "27720_dong_5",
            "name": "우보면",
            "center": {
                  "lat": 36.2428,
                  "lng": 128.5728,
                  "label": "군위군 우보면"
            }
      },
      {
            "code": "27720_dong_6",
            "name": "의흥면",
            "center": {
                  "lat": 36.2488,
                  "lng": 128.5728,
                  "label": "군위군 의흥면"
            }
      },
      {
            "code": "27720_dong_7",
            "name": "산성면",
            "center": {
                  "lat": 36.2368,
                  "lng": 128.5798,
                  "label": "군위군 산성면"
            }
      },
      {
            "code": "27720_dong_8",
            "name": "삼국유사면",
            "center": {
                  "lat": 36.2428,
                  "lng": 128.5798,
                  "label": "군위군 삼국유사면"
            }
      }
],
    isActive: true,
    city: "대구광역시",
    gu: "군위군",
  },
  {
    code: "28110",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "중구",
    fullName: "인천광역시 중구",
    legacyCode: "incheon_jung",
    
    
    center: {"lat":37.4738,"lng":126.6215,"label":"인천 중구(차이나타운/영종) 중심"},
    dongs: [
      {
            "code": "28110_dong_1",
            "name": "북성동",
            "center": {
                  "lat": 37.4678,
                  "lng": 126.6145,
                  "label": "중구 북성동"
            }
      },
      {
            "code": "28110_dong_2",
            "name": "신포동",
            "center": {
                  "lat": 37.4738,
                  "lng": 126.6145,
                  "label": "중구 신포동"
            }
      },
      {
            "code": "28110_dong_3",
            "name": "연안동",
            "center": {
                  "lat": 37.4798,
                  "lng": 126.6145,
                  "label": "중구 연안동"
            }
      },
      {
            "code": "28110_dong_4",
            "name": "영종동",
            "center": {
                  "lat": 37.4678,
                  "lng": 126.6215,
                  "label": "중구 영종동"
            }
      },
      {
            "code": "28110_dong_5",
            "name": "운서동",
            "center": {
                  "lat": 37.4738,
                  "lng": 126.6215,
                  "label": "중구 운서동"
            }
      },
      {
            "code": "28110_dong_6",
            "name": "용유동",
            "center": {
                  "lat": 37.4798,
                  "lng": 126.6215,
                  "label": "중구 용유동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "중구",
  },
  {
    code: "28140",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "동구",
    fullName: "인천광역시 동구",
    
    
    
    center: {"lat":37.4739,"lng":126.6433,"label":"인천 동구 중심"},
    dongs: [
      {
            "code": "28140_dong_1",
            "name": "만석동",
            "center": {
                  "lat": 37.4679,
                  "lng": 126.6363,
                  "label": "동구 만석동"
            }
      },
      {
            "code": "28140_dong_2",
            "name": "화수동",
            "center": {
                  "lat": 37.4739,
                  "lng": 126.6363,
                  "label": "동구 화수동"
            }
      },
      {
            "code": "28140_dong_3",
            "name": "송현동",
            "center": {
                  "lat": 37.4799,
                  "lng": 126.6363,
                  "label": "동구 송현동"
            }
      },
      {
            "code": "28140_dong_4",
            "name": "송림동",
            "center": {
                  "lat": 37.4679,
                  "lng": 126.6433,
                  "label": "동구 송림동"
            }
      },
      {
            "code": "28140_dong_5",
            "name": "금창동",
            "center": {
                  "lat": 37.4739,
                  "lng": 126.6433,
                  "label": "동구 금창동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "동구",
  },
  {
    code: "28177",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "미추홀구",
    fullName: "인천광역시 미추홀구",
    
    
    
    center: {"lat":37.4635,"lng":126.6506,"label":"미추홀구(주안) 중심"},
    dongs: [
      {
            "code": "28177_dong_1",
            "name": "주안동",
            "center": {
                  "lat": 37.4575,
                  "lng": 126.6436,
                  "label": "미추홀구 주안동"
            }
      },
      {
            "code": "28177_dong_2",
            "name": "도화동",
            "center": {
                  "lat": 37.4635,
                  "lng": 126.6436,
                  "label": "미추홀구 도화동"
            }
      },
      {
            "code": "28177_dong_3",
            "name": "숭의동",
            "center": {
                  "lat": 37.4695,
                  "lng": 126.6436,
                  "label": "미추홀구 숭의동"
            }
      },
      {
            "code": "28177_dong_4",
            "name": "용현동",
            "center": {
                  "lat": 37.4575,
                  "lng": 126.6506,
                  "label": "미추홀구 용현동"
            }
      },
      {
            "code": "28177_dong_5",
            "name": "학익동",
            "center": {
                  "lat": 37.4635,
                  "lng": 126.6506,
                  "label": "미추홀구 학익동"
            }
      },
      {
            "code": "28177_dong_6",
            "name": "관교동",
            "center": {
                  "lat": 37.4695,
                  "lng": 126.6506,
                  "label": "미추홀구 관교동"
            }
      },
      {
            "code": "28177_dong_7",
            "name": "문학동",
            "center": {
                  "lat": 37.4575,
                  "lng": 126.6576,
                  "label": "미추홀구 문학동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "미추홀구",
  },
  {
    code: "28185",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "연수구",
    fullName: "인천광역시 연수구",
    legacyCode: "incheon_yeonsu",
    
    
    center: {"lat":37.4101,"lng":126.6783,"label":"연수구(송도국제도시) 중심"},
    dongs: [
      {
            "code": "28185_dong_1",
            "name": "송도동",
            "center": {
                  "lat": 37.4041,
                  "lng": 126.6713,
                  "label": "연수구 송도동"
            }
      },
      {
            "code": "28185_dong_2",
            "name": "연수동",
            "center": {
                  "lat": 37.4101,
                  "lng": 126.6713,
                  "label": "연수구 연수동"
            }
      },
      {
            "code": "28185_dong_3",
            "name": "동춘동",
            "center": {
                  "lat": 37.4161,
                  "lng": 126.6713,
                  "label": "연수구 동춘동"
            }
      },
      {
            "code": "28185_dong_4",
            "name": "청학동",
            "center": {
                  "lat": 37.4041,
                  "lng": 126.6783,
                  "label": "연수구 청학동"
            }
      },
      {
            "code": "28185_dong_5",
            "name": "옥련동",
            "center": {
                  "lat": 37.4101,
                  "lng": 126.6783,
                  "label": "연수구 옥련동"
            }
      },
      {
            "code": "28185_dong_6",
            "name": "선학동",
            "center": {
                  "lat": 37.4161,
                  "lng": 126.6783,
                  "label": "연수구 선학동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "연수구",
  },
  {
    code: "28200",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "남동구",
    fullName: "인천광역시 남동구",
    
    
    
    center: {"lat":37.447,"lng":126.7314,"label":"남동구(구월동/소래포구) 중심"},
    dongs: [
      {
            "code": "28200_dong_1",
            "name": "구월동",
            "center": {
                  "lat": 37.441,
                  "lng": 126.7244,
                  "label": "남동구 구월동"
            }
      },
      {
            "code": "28200_dong_2",
            "name": "간석동",
            "center": {
                  "lat": 37.447,
                  "lng": 126.7244,
                  "label": "남동구 간석동"
            }
      },
      {
            "code": "28200_dong_3",
            "name": "만수동",
            "center": {
                  "lat": 37.453,
                  "lng": 126.7244,
                  "label": "남동구 만수동"
            }
      },
      {
            "code": "28200_dong_4",
            "name": "논현동",
            "center": {
                  "lat": 37.441,
                  "lng": 126.7314,
                  "label": "남동구 논현동"
            }
      },
      {
            "code": "28200_dong_5",
            "name": "고잔동",
            "center": {
                  "lat": 37.447,
                  "lng": 126.7314,
                  "label": "남동구 고잔동"
            }
      },
      {
            "code": "28200_dong_6",
            "name": "서창동",
            "center": {
                  "lat": 37.453,
                  "lng": 126.7314,
                  "label": "남동구 서창동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "남동구",
  },
  {
    code: "28237",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "부평구",
    fullName: "인천광역시 부평구",
    legacyCode: "incheon_bupyeong",
    
    
    center: {"lat":37.507,"lng":126.7219,"label":"부평구 중심"},
    dongs: [
      {
            "code": "28237_dong_1",
            "name": "부평동",
            "center": {
                  "lat": 37.501,
                  "lng": 126.7149,
                  "label": "부평구 부평동"
            }
      },
      {
            "code": "28237_dong_2",
            "name": "산곡동",
            "center": {
                  "lat": 37.507,
                  "lng": 126.7149,
                  "label": "부평구 산곡동"
            }
      },
      {
            "code": "28237_dong_3",
            "name": "청천동",
            "center": {
                  "lat": 37.513,
                  "lng": 126.7149,
                  "label": "부평구 청천동"
            }
      },
      {
            "code": "28237_dong_4",
            "name": "갈산동",
            "center": {
                  "lat": 37.501,
                  "lng": 126.7219,
                  "label": "부평구 갈산동"
            }
      },
      {
            "code": "28237_dong_5",
            "name": "삼산동",
            "center": {
                  "lat": 37.507,
                  "lng": 126.7219,
                  "label": "부평구 삼산동"
            }
      },
      {
            "code": "28237_dong_6",
            "name": "부개동",
            "center": {
                  "lat": 37.513,
                  "lng": 126.7219,
                  "label": "부평구 부개동"
            }
      },
      {
            "code": "28237_dong_7",
            "name": "일신동",
            "center": {
                  "lat": 37.501,
                  "lng": 126.7289,
                  "label": "부평구 일신동"
            }
      },
      {
            "code": "28237_dong_8",
            "name": "십정동",
            "center": {
                  "lat": 37.507,
                  "lng": 126.7289,
                  "label": "부평구 십정동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "부평구",
  },
  {
    code: "28245",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "계양구",
    fullName: "인천광역시 계양구",
    
    
    
    center: {"lat":37.5374,"lng":126.7378,"label":"계양구(계산동) 중심"},
    dongs: [
      {
            "code": "28245_dong_1",
            "name": "계산동",
            "center": {
                  "lat": 37.5314,
                  "lng": 126.7308,
                  "label": "계양구 계산동"
            }
      },
      {
            "code": "28245_dong_2",
            "name": "작전동",
            "center": {
                  "lat": 37.5374,
                  "lng": 126.7308,
                  "label": "계양구 작전동"
            }
      },
      {
            "code": "28245_dong_3",
            "name": "효성동",
            "center": {
                  "lat": 37.5434,
                  "lng": 126.7308,
                  "label": "계양구 효성동"
            }
      },
      {
            "code": "28245_dong_4",
            "name": "서운동",
            "center": {
                  "lat": 37.5314,
                  "lng": 126.7378,
                  "label": "계양구 서운동"
            }
      },
      {
            "code": "28245_dong_5",
            "name": "계양동",
            "center": {
                  "lat": 37.5374,
                  "lng": 126.7378,
                  "label": "계양구 계양동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "계양구",
  },
  {
    code: "28260",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "서구",
    fullName: "인천광역시 서구",
    
    
    
    center: {"lat":37.5454,"lng":126.676,"label":"인천 서구(청라/검단) 중심"},
    dongs: [
      {
            "code": "28260_dong_1",
            "name": "청라동",
            "center": {
                  "lat": 37.5394,
                  "lng": 126.669,
                  "label": "서구 청라동"
            }
      },
      {
            "code": "28260_dong_2",
            "name": "검단동",
            "center": {
                  "lat": 37.5454,
                  "lng": 126.669,
                  "label": "서구 검단동"
            }
      },
      {
            "code": "28260_dong_3",
            "name": "가정동",
            "center": {
                  "lat": 37.5514,
                  "lng": 126.669,
                  "label": "서구 가정동"
            }
      },
      {
            "code": "28260_dong_4",
            "name": "신현동",
            "center": {
                  "lat": 37.5394,
                  "lng": 126.676,
                  "label": "서구 신현동"
            }
      },
      {
            "code": "28260_dong_5",
            "name": "석남동",
            "center": {
                  "lat": 37.5454,
                  "lng": 126.676,
                  "label": "서구 석남동"
            }
      },
      {
            "code": "28260_dong_6",
            "name": "가좌동",
            "center": {
                  "lat": 37.5514,
                  "lng": 126.676,
                  "label": "서구 가좌동"
            }
      },
      {
            "code": "28260_dong_7",
            "name": "검암동",
            "center": {
                  "lat": 37.5394,
                  "lng": 126.683,
                  "label": "서구 검암동"
            }
      },
      {
            "code": "28260_dong_8",
            "name": "경서동",
            "center": {
                  "lat": 37.5454,
                  "lng": 126.683,
                  "label": "서구 경서동"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "서구",
  },
  {
    code: "28710",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "강화군",
    fullName: "인천광역시 강화군",
    
    
    
    center: {"lat":37.7463,"lng":126.488,"label":"강화군 중심"},
    dongs: [
      {
            "code": "28710_dong_1",
            "name": "강화읍",
            "center": {
                  "lat": 37.7403,
                  "lng": 126.481,
                  "label": "강화군 강화읍"
            }
      },
      {
            "code": "28710_dong_2",
            "name": "선원면",
            "center": {
                  "lat": 37.7463,
                  "lng": 126.481,
                  "label": "강화군 선원면"
            }
      },
      {
            "code": "28710_dong_3",
            "name": "불은면",
            "center": {
                  "lat": 37.7523,
                  "lng": 126.481,
                  "label": "강화군 불은면"
            }
      },
      {
            "code": "28710_dong_4",
            "name": "길상면",
            "center": {
                  "lat": 37.7403,
                  "lng": 126.488,
                  "label": "강화군 길상면"
            }
      },
      {
            "code": "28710_dong_5",
            "name": "화도면",
            "center": {
                  "lat": 37.7463,
                  "lng": 126.488,
                  "label": "강화군 화도면"
            }
      },
      {
            "code": "28710_dong_6",
            "name": "양도면",
            "center": {
                  "lat": 37.7523,
                  "lng": 126.488,
                  "label": "강화군 양도면"
            }
      },
      {
            "code": "28710_dong_7",
            "name": "내가면",
            "center": {
                  "lat": 37.7403,
                  "lng": 126.495,
                  "label": "강화군 내가면"
            }
      },
      {
            "code": "28710_dong_8",
            "name": "하점면",
            "center": {
                  "lat": 37.7463,
                  "lng": 126.495,
                  "label": "강화군 하점면"
            }
      },
      {
            "code": "28710_dong_9",
            "name": "양사면",
            "center": {
                  "lat": 37.7523,
                  "lng": 126.495,
                  "label": "강화군 양사면"
            }
      },
      {
            "code": "28710_dong_10",
            "name": "송해면",
            "center": {
                  "lat": 37.7403,
                  "lng": 126.502,
                  "label": "강화군 송해면"
            }
      },
      {
            "code": "28710_dong_11",
            "name": "교동면",
            "center": {
                  "lat": 37.7463,
                  "lng": 126.502,
                  "label": "강화군 교동면"
            }
      },
      {
            "code": "28710_dong_12",
            "name": "삼산면",
            "center": {
                  "lat": 37.7523,
                  "lng": 126.502,
                  "label": "강화군 삼산면"
            }
      },
      {
            "code": "28710_dong_13",
            "name": "서도면",
            "center": {
                  "lat": 37.7403,
                  "lng": 126.509,
                  "label": "강화군 서도면"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "강화군",
  },
  {
    code: "28720",
    sidoCode: "28",
    sidoName: "인천광역시",
    name: "옹진군",
    fullName: "인천광역시 옹진군",
    
    
    
    center: {"lat":37.4468,"lng":126.6369,"label":"옹진군 중심"},
    dongs: [
      {
            "code": "28720_dong_1",
            "name": "백령면",
            "center": {
                  "lat": 37.4408,
                  "lng": 126.6299,
                  "label": "옹진군 백령면"
            }
      },
      {
            "code": "28720_dong_2",
            "name": "대청면",
            "center": {
                  "lat": 37.4468,
                  "lng": 126.6299,
                  "label": "옹진군 대청면"
            }
      },
      {
            "code": "28720_dong_3",
            "name": "연평면",
            "center": {
                  "lat": 37.4528,
                  "lng": 126.6299,
                  "label": "옹진군 연평면"
            }
      },
      {
            "code": "28720_dong_4",
            "name": "북도면",
            "center": {
                  "lat": 37.4408,
                  "lng": 126.6369,
                  "label": "옹진군 북도면"
            }
      },
      {
            "code": "28720_dong_5",
            "name": "덕적면",
            "center": {
                  "lat": 37.4468,
                  "lng": 126.6369,
                  "label": "옹진군 덕적면"
            }
      },
      {
            "code": "28720_dong_6",
            "name": "자월면",
            "center": {
                  "lat": 37.4528,
                  "lng": 126.6369,
                  "label": "옹진군 자월면"
            }
      },
      {
            "code": "28720_dong_7",
            "name": "영흥면",
            "center": {
                  "lat": 37.4408,
                  "lng": 126.6439,
                  "label": "옹진군 영흥면"
            }
      }
],
    isActive: true,
    city: "인천광역시",
    gu: "옹진군",
  },
  {
    code: "29110",
    sidoCode: "29",
    sidoName: "광주광역시",
    name: "동구",
    fullName: "광주광역시 동구",
    legacyCode: "gwangju_dong",
    
    
    center: {"lat":35.146,"lng":126.9231,"label":"광주 동구(충장로/아시아문화전당) 중심"},
    dongs: [
      {
            "code": "29110_dong_1",
            "name": "충장동",
            "center": {
                  "lat": 35.14,
                  "lng": 126.9161,
                  "label": "동구 충장동"
            }
      },
      {
            "code": "29110_dong_2",
            "name": "동명동",
            "center": {
                  "lat": 35.146,
                  "lng": 126.9161,
                  "label": "동구 동명동"
            }
      },
      {
            "code": "29110_dong_3",
            "name": "계림동",
            "center": {
                  "lat": 35.152,
                  "lng": 126.9161,
                  "label": "동구 계림동"
            }
      },
      {
            "code": "29110_dong_4",
            "name": "산수동",
            "center": {
                  "lat": 35.14,
                  "lng": 126.9231,
                  "label": "동구 산수동"
            }
      },
      {
            "code": "29110_dong_5",
            "name": "지산동",
            "center": {
                  "lat": 35.146,
                  "lng": 126.9231,
                  "label": "동구 지산동"
            }
      },
      {
            "code": "29110_dong_6",
            "name": "서남동",
            "center": {
                  "lat": 35.152,
                  "lng": 126.9231,
                  "label": "동구 서남동"
            }
      },
      {
            "code": "29110_dong_7",
            "name": "학동",
            "center": {
                  "lat": 35.14,
                  "lng": 126.9301,
                  "label": "동구 학동"
            }
      },
      {
            "code": "29110_dong_8",
            "name": "학운동",
            "center": {
                  "lat": 35.146,
                  "lng": 126.9301,
                  "label": "동구 학운동"
            }
      },
      {
            "code": "29110_dong_9",
            "name": "지원동",
            "center": {
                  "lat": 35.152,
                  "lng": 126.9301,
                  "label": "동구 지원동"
            }
      }
],
    isActive: true,
    city: "광주광역시",
    gu: "동구",
  },
  {
    code: "29140",
    sidoCode: "29",
    sidoName: "광주광역시",
    name: "서구",
    fullName: "광주광역시 서구",
    legacyCode: "gwangju_seo",
    
    
    center: {"lat":35.152,"lng":126.8896,"label":"광주 서구(상무지구) 중심"},
    dongs: [
      {
            "code": "29140_dong_1",
            "name": "치평동",
            "center": {
                  "lat": 35.146,
                  "lng": 126.8826,
                  "label": "서구 치평동"
            }
      },
      {
            "code": "29140_dong_2",
            "name": "상무동",
            "center": {
                  "lat": 35.152,
                  "lng": 126.8826,
                  "label": "서구 상무동"
            }
      },
      {
            "code": "29140_dong_3",
            "name": "화정동",
            "center": {
                  "lat": 35.158,
                  "lng": 126.8826,
                  "label": "서구 화정동"
            }
      },
      {
            "code": "29140_dong_4",
            "name": "농성동",
            "center": {
                  "lat": 35.146,
                  "lng": 126.8896,
                  "label": "서구 농성동"
            }
      },
      {
            "code": "29140_dong_5",
            "name": "광천동",
            "center": {
                  "lat": 35.152,
                  "lng": 126.8896,
                  "label": "서구 광천동"
            }
      },
      {
            "code": "29140_dong_6",
            "name": "풍암동",
            "center": {
                  "lat": 35.158,
                  "lng": 126.8896,
                  "label": "서구 풍암동"
            }
      },
      {
            "code": "29140_dong_7",
            "name": "금호동",
            "center": {
                  "lat": 35.146,
                  "lng": 126.8966,
                  "label": "서구 금호동"
            }
      },
      {
            "code": "29140_dong_8",
            "name": "유덕동",
            "center": {
                  "lat": 35.152,
                  "lng": 126.8966,
                  "label": "서구 유덕동"
            }
      },
      {
            "code": "29140_dong_9",
            "name": "동천동",
            "center": {
                  "lat": 35.158,
                  "lng": 126.8966,
                  "label": "서구 동천동"
            }
      }
],
    isActive: true,
    city: "광주광역시",
    gu: "서구",
  },
  {
    code: "29155",
    sidoCode: "29",
    sidoName: "광주광역시",
    name: "남구",
    fullName: "광주광역시 남구",
    
    
    
    center: {"lat":35.1329,"lng":126.9025,"label":"광주 남구(양림동/봉선동) 중심"},
    dongs: [
      {
            "code": "29155_dong_1",
            "name": "양림동",
            "center": {
                  "lat": 35.1269,
                  "lng": 126.8955,
                  "label": "남구 양림동"
            }
      },
      {
            "code": "29155_dong_2",
            "name": "봉선동",
            "center": {
                  "lat": 35.1329,
                  "lng": 126.8955,
                  "label": "남구 봉선동"
            }
      },
      {
            "code": "29155_dong_3",
            "name": "방림동",
            "center": {
                  "lat": 35.1389,
                  "lng": 126.8955,
                  "label": "남구 방림동"
            }
      },
      {
            "code": "29155_dong_4",
            "name": "백운동",
            "center": {
                  "lat": 35.1269,
                  "lng": 126.9025,
                  "label": "남구 백운동"
            }
      },
      {
            "code": "29155_dong_5",
            "name": "월산동",
            "center": {
                  "lat": 35.1329,
                  "lng": 126.9025,
                  "label": "남구 월산동"
            }
      },
      {
            "code": "29155_dong_6",
            "name": "주월동",
            "center": {
                  "lat": 35.1389,
                  "lng": 126.9025,
                  "label": "남구 주월동"
            }
      },
      {
            "code": "29155_dong_7",
            "name": "진월동",
            "center": {
                  "lat": 35.1269,
                  "lng": 126.9095,
                  "label": "남구 진월동"
            }
      },
      {
            "code": "29155_dong_8",
            "name": "효덕동",
            "center": {
                  "lat": 35.1329,
                  "lng": 126.9095,
                  "label": "남구 효덕동"
            }
      },
      {
            "code": "29155_dong_9",
            "name": "송암동",
            "center": {
                  "lat": 35.1389,
                  "lng": 126.9095,
                  "label": "남구 송암동"
            }
      },
      {
            "code": "29155_dong_10",
            "name": "대촌동",
            "center": {
                  "lat": 35.1269,
                  "lng": 126.9165,
                  "label": "남구 대촌동"
            }
      }
],
    isActive: true,
    city: "광주광역시",
    gu: "남구",
  },
  {
    code: "29170",
    sidoCode: "29",
    sidoName: "광주광역시",
    name: "북구",
    fullName: "광주광역시 북구",
    
    
    
    center: {"lat":35.1741,"lng":126.9121,"label":"광주 북구(전남대) 중심"},
    dongs: [
      {
            "code": "29170_dong_1",
            "name": "용봉동",
            "center": {
                  "lat": 35.1681,
                  "lng": 126.9051,
                  "label": "북구 용봉동"
            }
      },
      {
            "code": "29170_dong_2",
            "name": "중흥동",
            "center": {
                  "lat": 35.1741,
                  "lng": 126.9051,
                  "label": "북구 중흥동"
            }
      },
      {
            "code": "29170_dong_3",
            "name": "우산동",
            "center": {
                  "lat": 35.1801,
                  "lng": 126.9051,
                  "label": "북구 우산동"
            }
      },
      {
            "code": "29170_dong_4",
            "name": "풍향동",
            "center": {
                  "lat": 35.1681,
                  "lng": 126.9121,
                  "label": "북구 풍향동"
            }
      },
      {
            "code": "29170_dong_5",
            "name": "두암동",
            "center": {
                  "lat": 35.1741,
                  "lng": 126.9121,
                  "label": "북구 두암동"
            }
      },
      {
            "code": "29170_dong_6",
            "name": "문흥동",
            "center": {
                  "lat": 35.1801,
                  "lng": 126.9121,
                  "label": "북구 문흥동"
            }
      },
      {
            "code": "29170_dong_7",
            "name": "운암동",
            "center": {
                  "lat": 35.1681,
                  "lng": 126.9191,
                  "label": "북구 운암동"
            }
      },
      {
            "code": "29170_dong_8",
            "name": "동림동",
            "center": {
                  "lat": 35.1741,
                  "lng": 126.9191,
                  "label": "북구 동림동"
            }
      },
      {
            "code": "29170_dong_9",
            "name": "일곡동",
            "center": {
                  "lat": 35.1801,
                  "lng": 126.9191,
                  "label": "북구 일곡동"
            }
      },
      {
            "code": "29170_dong_10",
            "name": "매곡동",
            "center": {
                  "lat": 35.1681,
                  "lng": 126.9261,
                  "label": "북구 매곡동"
            }
      },
      {
            "code": "29170_dong_11",
            "name": "건국동",
            "center": {
                  "lat": 35.1741,
                  "lng": 126.9261,
                  "label": "북구 건국동"
            }
      },
      {
            "code": "29170_dong_12",
            "name": "양산동",
            "center": {
                  "lat": 35.1801,
                  "lng": 126.9261,
                  "label": "북구 양산동"
            }
      }
],
    isActive: true,
    city: "광주광역시",
    gu: "북구",
  },
  {
    code: "29200",
    sidoCode: "29",
    sidoName: "광주광역시",
    name: "광산구",
    fullName: "광주광역시 광산구",
    
    
    
    center: {"lat":35.1395,"lng":126.7937,"label":"광주 광산구(수완/첨단/송정) 중심"},
    dongs: [
      {
            "code": "29200_dong_1",
            "name": "송정동",
            "center": {
                  "lat": 35.1335,
                  "lng": 126.7867,
                  "label": "광산구 송정동"
            }
      },
      {
            "code": "29200_dong_2",
            "name": "수완동",
            "center": {
                  "lat": 35.1395,
                  "lng": 126.7867,
                  "label": "광산구 수완동"
            }
      },
      {
            "code": "29200_dong_3",
            "name": "첨단동",
            "center": {
                  "lat": 35.1455,
                  "lng": 126.7867,
                  "label": "광산구 첨단동"
            }
      },
      {
            "code": "29200_dong_4",
            "name": "신창동",
            "center": {
                  "lat": 35.1335,
                  "lng": 126.7937,
                  "label": "광산구 신창동"
            }
      },
      {
            "code": "29200_dong_5",
            "name": "신가동",
            "center": {
                  "lat": 35.1395,
                  "lng": 126.7937,
                  "label": "광산구 신가동"
            }
      },
      {
            "code": "29200_dong_6",
            "name": "월곡동",
            "center": {
                  "lat": 35.1455,
                  "lng": 126.7937,
                  "label": "광산구 월곡동"
            }
      },
      {
            "code": "29200_dong_7",
            "name": "운남동",
            "center": {
                  "lat": 35.1335,
                  "lng": 126.8007,
                  "label": "광산구 운남동"
            }
      },
      {
            "code": "29200_dong_8",
            "name": "우산동",
            "center": {
                  "lat": 35.1395,
                  "lng": 126.8007,
                  "label": "광산구 우산동"
            }
      },
      {
            "code": "29200_dong_9",
            "name": "비아동",
            "center": {
                  "lat": 35.1455,
                  "lng": 126.8007,
                  "label": "광산구 비아동"
            }
      },
      {
            "code": "29200_dong_10",
            "name": "하남동",
            "center": {
                  "lat": 35.1335,
                  "lng": 126.8077,
                  "label": "광산구 하남동"
            }
      },
      {
            "code": "29200_dong_11",
            "name": "임곡동",
            "center": {
                  "lat": 35.1395,
                  "lng": 126.8077,
                  "label": "광산구 임곡동"
            }
      },
      {
            "code": "29200_dong_12",
            "name": "동곡동",
            "center": {
                  "lat": 35.1455,
                  "lng": 126.8077,
                  "label": "광산구 동곡동"
            }
      },
      {
            "code": "29200_dong_13",
            "name": "평동",
            "center": {
                  "lat": 35.1335,
                  "lng": 126.8147,
                  "label": "광산구 평동"
            }
      },
      {
            "code": "29200_dong_14",
            "name": "삼도동",
            "center": {
                  "lat": 35.1395,
                  "lng": 126.8147,
                  "label": "광산구 삼도동"
            }
      },
      {
            "code": "29200_dong_15",
            "name": "본량동",
            "center": {
                  "lat": 35.1455,
                  "lng": 126.8147,
                  "label": "광산구 본량동"
            }
      }
],
    isActive: true,
    city: "광주광역시",
    gu: "광산구",
  },
  {
    code: "30110",
    sidoCode: "30",
    sidoName: "대전광역시",
    name: "동구",
    fullName: "대전광역시 동구",
    
    
    
    center: {"lat":36.3314,"lng":127.4342,"label":"대전 동구(대전역) 중심"},
    dongs: [
      {
            "code": "30110_dong_1",
            "name": "중앙동",
            "center": {
                  "lat": 36.3254,
                  "lng": 127.4272,
                  "label": "동구 중앙동"
            }
      },
      {
            "code": "30110_dong_2",
            "name": "신인동",
            "center": {
                  "lat": 36.3314,
                  "lng": 127.4272,
                  "label": "동구 신인동"
            }
      },
      {
            "code": "30110_dong_3",
            "name": "효동",
            "center": {
                  "lat": 36.3374,
                  "lng": 127.4272,
                  "label": "동구 효동"
            }
      },
      {
            "code": "30110_dong_4",
            "name": "판암동",
            "center": {
                  "lat": 36.3254,
                  "lng": 127.4342,
                  "label": "동구 판암동"
            }
      },
      {
            "code": "30110_dong_5",
            "name": "용운동",
            "center": {
                  "lat": 36.3314,
                  "lng": 127.4342,
                  "label": "동구 용운동"
            }
      },
      {
            "code": "30110_dong_6",
            "name": "대동",
            "center": {
                  "lat": 36.3374,
                  "lng": 127.4342,
                  "label": "동구 대동"
            }
      },
      {
            "code": "30110_dong_7",
            "name": "자양동",
            "center": {
                  "lat": 36.3254,
                  "lng": 127.4412,
                  "label": "동구 자양동"
            }
      },
      {
            "code": "30110_dong_8",
            "name": "가양동",
            "center": {
                  "lat": 36.3314,
                  "lng": 127.4412,
                  "label": "동구 가양동"
            }
      },
      {
            "code": "30110_dong_9",
            "name": "용전동",
            "center": {
                  "lat": 36.3374,
                  "lng": 127.4412,
                  "label": "동구 용전동"
            }
      },
      {
            "code": "30110_dong_10",
            "name": "성남동",
            "center": {
                  "lat": 36.3254,
                  "lng": 127.4482,
                  "label": "동구 성남동"
            }
      },
      {
            "code": "30110_dong_11",
            "name": "홍도동",
            "center": {
                  "lat": 36.3314,
                  "lng": 127.4482,
                  "label": "동구 홍도동"
            }
      },
      {
            "code": "30110_dong_12",
            "name": "삼성동",
            "center": {
                  "lat": 36.3374,
                  "lng": 127.4482,
                  "label": "동구 삼성동"
            }
      },
      {
            "code": "30110_dong_13",
            "name": "산내동",
            "center": {
                  "lat": 36.3254,
                  "lng": 127.4552,
                  "label": "동구 산내동"
            }
      }
],
    isActive: true,
    city: "대전광역시",
    gu: "동구",
  },
  {
    code: "30140",
    sidoCode: "30",
    sidoName: "대전광역시",
    name: "중구",
    fullName: "대전광역시 중구",
    legacyCode: "daejeon_jung",
    
    
    center: {"lat":36.3258,"lng":127.4214,"label":"대전 중구(은행동/성심당) 중심"},
    dongs: [
      {
            "code": "30140_dong_1",
            "name": "은행선화동",
            "center": {
                  "lat": 36.3198,
                  "lng": 127.4144,
                  "label": "중구 은행선화동"
            }
      },
      {
            "code": "30140_dong_2",
            "name": "목동",
            "center": {
                  "lat": 36.3258,
                  "lng": 127.4144,
                  "label": "중구 목동"
            }
      },
      {
            "code": "30140_dong_3",
            "name": "중촌동",
            "center": {
                  "lat": 36.3318,
                  "lng": 127.4144,
                  "label": "중구 중촌동"
            }
      },
      {
            "code": "30140_dong_4",
            "name": "대흥동",
            "center": {
                  "lat": 36.3198,
                  "lng": 127.4214,
                  "label": "중구 대흥동"
            }
      },
      {
            "code": "30140_dong_5",
            "name": "문창동",
            "center": {
                  "lat": 36.3258,
                  "lng": 127.4214,
                  "label": "중구 문창동"
            }
      },
      {
            "code": "30140_dong_6",
            "name": "석교동",
            "center": {
                  "lat": 36.3318,
                  "lng": 127.4214,
                  "label": "중구 석교동"
            }
      },
      {
            "code": "30140_dong_7",
            "name": "대사동",
            "center": {
                  "lat": 36.3198,
                  "lng": 127.4284,
                  "label": "중구 대사동"
            }
      },
      {
            "code": "30140_dong_8",
            "name": "부사동",
            "center": {
                  "lat": 36.3258,
                  "lng": 127.4284,
                  "label": "중구 부사동"
            }
      },
      {
            "code": "30140_dong_9",
            "name": "용두동",
            "center": {
                  "lat": 36.3318,
                  "lng": 127.4284,
                  "label": "중구 용두동"
            }
      },
      {
            "code": "30140_dong_10",
            "name": "오류동",
            "center": {
                  "lat": 36.3198,
                  "lng": 127.4354,
                  "label": "중구 오류동"
            }
      },
      {
            "code": "30140_dong_11",
            "name": "태평동",
            "center": {
                  "lat": 36.3258,
                  "lng": 127.4354,
                  "label": "중구 태평동"
            }
      },
      {
            "code": "30140_dong_12",
            "name": "유천동",
            "center": {
                  "lat": 36.3318,
                  "lng": 127.4354,
                  "label": "중구 유천동"
            }
      },
      {
            "code": "30140_dong_13",
            "name": "문화동",
            "center": {
                  "lat": 36.3198,
                  "lng": 127.4424,
                  "label": "중구 문화동"
            }
      },
      {
            "code": "30140_dong_14",
            "name": "산성동",
            "center": {
                  "lat": 36.3258,
                  "lng": 127.4424,
                  "label": "중구 산성동"
            }
      }
],
    isActive: true,
    city: "대전광역시",
    gu: "중구",
  },
  {
    code: "30170",
    sidoCode: "30",
    sidoName: "대전광역시",
    name: "서구",
    fullName: "대전광역시 서구",
    legacyCode: "daejeon_seo",
    
    
    center: {"lat":36.3553,"lng":127.3838,"label":"대전 서구(둔산동) 중심"},
    dongs: [
      {
            "code": "30170_dong_1",
            "name": "둔산동",
            "center": {
                  "lat": 36.3493,
                  "lng": 127.3768,
                  "label": "서구 둔산동"
            }
      },
      {
            "code": "30170_dong_2",
            "name": "갈마동",
            "center": {
                  "lat": 36.3553,
                  "lng": 127.3768,
                  "label": "서구 갈마동"
            }
      },
      {
            "code": "30170_dong_3",
            "name": "월평동",
            "center": {
                  "lat": 36.3613,
                  "lng": 127.3768,
                  "label": "서구 월평동"
            }
      },
      {
            "code": "30170_dong_4",
            "name": "만년동",
            "center": {
                  "lat": 36.3493,
                  "lng": 127.3838,
                  "label": "서구 만년동"
            }
      },
      {
            "code": "30170_dong_5",
            "name": "탄방동",
            "center": {
                  "lat": 36.3553,
                  "lng": 127.3838,
                  "label": "서구 탄방동"
            }
      },
      {
            "code": "30170_dong_6",
            "name": "괴정동",
            "center": {
                  "lat": 36.3613,
                  "lng": 127.3838,
                  "label": "서구 괴정동"
            }
      },
      {
            "code": "30170_dong_7",
            "name": "가장동",
            "center": {
                  "lat": 36.3493,
                  "lng": 127.3908,
                  "label": "서구 가장동"
            }
      },
      {
            "code": "30170_dong_8",
            "name": "내동",
            "center": {
                  "lat": 36.3553,
                  "lng": 127.3908,
                  "label": "서구 내동"
            }
      },
      {
            "code": "30170_dong_9",
            "name": "변동",
            "center": {
                  "lat": 36.3613,
                  "lng": 127.3908,
                  "label": "서구 변동"
            }
      },
      {
            "code": "30170_dong_10",
            "name": "용문동",
            "center": {
                  "lat": 36.3493,
                  "lng": 127.3978,
                  "label": "서구 용문동"
            }
      },
      {
            "code": "30170_dong_11",
            "name": "도마동",
            "center": {
                  "lat": 36.3553,
                  "lng": 127.3978,
                  "label": "서구 도마동"
            }
      },
      {
            "code": "30170_dong_12",
            "name": "정림동",
            "center": {
                  "lat": 36.3613,
                  "lng": 127.3978,
                  "label": "서구 정림동"
            }
      },
      {
            "code": "30170_dong_13",
            "name": "복수동",
            "center": {
                  "lat": 36.3493,
                  "lng": 127.4048,
                  "label": "서구 복수동"
            }
      },
      {
            "code": "30170_dong_14",
            "name": "가수원동",
            "center": {
                  "lat": 36.3553,
                  "lng": 127.4048,
                  "label": "서구 가수원동"
            }
      },
      {
            "code": "30170_dong_15",
            "name": "도안동",
            "center": {
                  "lat": 36.3613,
                  "lng": 127.4048,
                  "label": "서구 도안동"
            }
      },
      {
            "code": "30170_dong_16",
            "name": "관저동",
            "center": {
                  "lat": 36.3493,
                  "lng": 127.4118,
                  "label": "서구 관저동"
            }
      },
      {
            "code": "30170_dong_17",
            "name": "기성동",
            "center": {
                  "lat": 36.3553,
                  "lng": 127.4118,
                  "label": "서구 기성동"
            }
      }
],
    isActive: true,
    city: "대전광역시",
    gu: "서구",
  },
  {
    code: "30200",
    sidoCode: "30",
    sidoName: "대전광역시",
    name: "유성구",
    fullName: "대전광역시 유성구",
    legacyCode: "daejeon_yuseong",
    
    
    center: {"lat":36.3623,"lng":127.3563,"label":"대전 유성구(봉명동/도안) 중심"},
    dongs: [
      {
            "code": "30200_dong_1",
            "name": "봉명동",
            "center": {
                  "lat": 36.3563,
                  "lng": 127.3493,
                  "label": "유성구 봉명동"
            }
      },
      {
            "code": "30200_dong_2",
            "name": "온천동",
            "center": {
                  "lat": 36.3623,
                  "lng": 127.3493,
                  "label": "유성구 온천동"
            }
      },
      {
            "code": "30200_dong_3",
            "name": "노은동",
            "center": {
                  "lat": 36.3683,
                  "lng": 127.3493,
                  "label": "유성구 노은동"
            }
      },
      {
            "code": "30200_dong_4",
            "name": "신성동",
            "center": {
                  "lat": 36.3563,
                  "lng": 127.3563,
                  "label": "유성구 신성동"
            }
      },
      {
            "code": "30200_dong_5",
            "name": "전민동",
            "center": {
                  "lat": 36.3623,
                  "lng": 127.3563,
                  "label": "유성구 전민동"
            }
      },
      {
            "code": "30200_dong_6",
            "name": "구즉동",
            "center": {
                  "lat": 36.3683,
                  "lng": 127.3563,
                  "label": "유성구 구즉동"
            }
      },
      {
            "code": "30200_dong_7",
            "name": "관평동",
            "center": {
                  "lat": 36.3563,
                  "lng": 127.3633,
                  "label": "유성구 관평동"
            }
      },
      {
            "code": "30200_dong_8",
            "name": "원신흥동",
            "center": {
                  "lat": 36.3623,
                  "lng": 127.3633,
                  "label": "유성구 원신흥동"
            }
      },
      {
            "code": "30200_dong_9",
            "name": "상대동",
            "center": {
                  "lat": 36.3683,
                  "lng": 127.3633,
                  "label": "유성구 상대동"
            }
      },
      {
            "code": "30200_dong_10",
            "name": "진잠동",
            "center": {
                  "lat": 36.3563,
                  "lng": 127.3703,
                  "label": "유성구 진잠동"
            }
      },
      {
            "code": "30200_dong_11",
            "name": "학하동",
            "center": {
                  "lat": 36.3623,
                  "lng": 127.3703,
                  "label": "유성구 학하동"
            }
      }
],
    isActive: true,
    city: "대전광역시",
    gu: "유성구",
  },
  {
    code: "30230",
    sidoCode: "30",
    sidoName: "대전광역시",
    name: "대덕구",
    fullName: "대전광역시 대덕구",
    
    
    
    center: {"lat":36.3467,"lng":127.4156,"label":"대전 대덕구 중심"},
    dongs: [
      {
            "code": "30230_dong_1",
            "name": "오정동",
            "center": {
                  "lat": 36.3407,
                  "lng": 127.4086,
                  "label": "대덕구 오정동"
            }
      },
      {
            "code": "30230_dong_2",
            "name": "대화동",
            "center": {
                  "lat": 36.3467,
                  "lng": 127.4086,
                  "label": "대덕구 대화동"
            }
      },
      {
            "code": "30230_dong_3",
            "name": "회덕동",
            "center": {
                  "lat": 36.3527,
                  "lng": 127.4086,
                  "label": "대덕구 회덕동"
            }
      },
      {
            "code": "30230_dong_4",
            "name": "비래동",
            "center": {
                  "lat": 36.3407,
                  "lng": 127.4156,
                  "label": "대덕구 비래동"
            }
      },
      {
            "code": "30230_dong_5",
            "name": "송촌동",
            "center": {
                  "lat": 36.3467,
                  "lng": 127.4156,
                  "label": "대덕구 송촌동"
            }
      },
      {
            "code": "30230_dong_6",
            "name": "중리동",
            "center": {
                  "lat": 36.3527,
                  "lng": 127.4156,
                  "label": "대덕구 중리동"
            }
      },
      {
            "code": "30230_dong_7",
            "name": "신탄진동",
            "center": {
                  "lat": 36.3407,
                  "lng": 127.4226,
                  "label": "대덕구 신탄진동"
            }
      },
      {
            "code": "30230_dong_8",
            "name": "석봉동",
            "center": {
                  "lat": 36.3467,
                  "lng": 127.4226,
                  "label": "대덕구 석봉동"
            }
      },
      {
            "code": "30230_dong_9",
            "name": "덕암동",
            "center": {
                  "lat": 36.3527,
                  "lng": 127.4226,
                  "label": "대덕구 덕암동"
            }
      },
      {
            "code": "30230_dong_10",
            "name": "목상동",
            "center": {
                  "lat": 36.3407,
                  "lng": 127.4296,
                  "label": "대덕구 목상동"
            }
      }
],
    isActive: true,
    city: "대전광역시",
    gu: "대덕구",
  },
  {
    code: "31110",
    sidoCode: "31",
    sidoName: "울산광역시",
    name: "중구",
    fullName: "울산광역시 중구",
    legacyCode: "ulsan_jung",
    
    
    center: {"lat":35.5696,"lng":129.3328,"label":"울산 중구(성남동) 중심"},
    dongs: [
      {
            "code": "31110_dong_1",
            "name": "성남동",
            "center": {
                  "lat": 35.5636,
                  "lng": 129.3258,
                  "label": "중구 성남동"
            }
      },
      {
            "code": "31110_dong_2",
            "name": "옥교동",
            "center": {
                  "lat": 35.5696,
                  "lng": 129.3258,
                  "label": "중구 옥교동"
            }
      },
      {
            "code": "31110_dong_3",
            "name": "우정동",
            "center": {
                  "lat": 35.5756,
                  "lng": 129.3258,
                  "label": "중구 우정동"
            }
      },
      {
            "code": "31110_dong_4",
            "name": "태화동",
            "center": {
                  "lat": 35.5636,
                  "lng": 129.3328,
                  "label": "중구 태화동"
            }
      },
      {
            "code": "31110_dong_5",
            "name": "다운동",
            "center": {
                  "lat": 35.5696,
                  "lng": 129.3328,
                  "label": "중구 다운동"
            }
      },
      {
            "code": "31110_dong_6",
            "name": "병영동",
            "center": {
                  "lat": 35.5756,
                  "lng": 129.3328,
                  "label": "중구 병영동"
            }
      },
      {
            "code": "31110_dong_7",
            "name": "약사동",
            "center": {
                  "lat": 35.5636,
                  "lng": 129.3398,
                  "label": "중구 약사동"
            }
      },
      {
            "code": "31110_dong_8",
            "name": "반구동",
            "center": {
                  "lat": 35.5696,
                  "lng": 129.3398,
                  "label": "중구 반구동"
            }
      },
      {
            "code": "31110_dong_9",
            "name": "학성동",
            "center": {
                  "lat": 35.5756,
                  "lng": 129.3398,
                  "label": "중구 학성동"
            }
      },
      {
            "code": "31110_dong_10",
            "name": "복산동",
            "center": {
                  "lat": 35.5636,
                  "lng": 129.3468,
                  "label": "중구 복산동"
            }
      }
],
    isActive: true,
    city: "울산광역시",
    gu: "중구",
  },
  {
    code: "31140",
    sidoCode: "31",
    sidoName: "울산광역시",
    name: "남구",
    fullName: "울산광역시 남구",
    legacyCode: "ulsan_nam",
    
    
    center: {"lat":35.5439,"lng":129.3301,"label":"울산 남구(삼산동) 중심"},
    dongs: [
      {
            "code": "31140_dong_1",
            "name": "삼산동",
            "center": {
                  "lat": 35.5379,
                  "lng": 129.3231,
                  "label": "남구 삼산동"
            }
      },
      {
            "code": "31140_dong_2",
            "name": "달동",
            "center": {
                  "lat": 35.5439,
                  "lng": 129.3231,
                  "label": "남구 달동"
            }
      },
      {
            "code": "31140_dong_3",
            "name": "신정동",
            "center": {
                  "lat": 35.5499,
                  "lng": 129.3231,
                  "label": "남구 신정동"
            }
      },
      {
            "code": "31140_dong_4",
            "name": "무거동",
            "center": {
                  "lat": 35.5379,
                  "lng": 129.3301,
                  "label": "남구 무거동"
            }
      },
      {
            "code": "31140_dong_5",
            "name": "옥동",
            "center": {
                  "lat": 35.5439,
                  "lng": 129.3301,
                  "label": "남구 옥동"
            }
      },
      {
            "code": "31140_dong_6",
            "name": "야음장생포동",
            "center": {
                  "lat": 35.5499,
                  "lng": 129.3301,
                  "label": "남구 야음장생포동"
            }
      },
      {
            "code": "31140_dong_7",
            "name": "수암동",
            "center": {
                  "lat": 35.5379,
                  "lng": 129.3371,
                  "label": "남구 수암동"
            }
      },
      {
            "code": "31140_dong_8",
            "name": "선암동",
            "center": {
                  "lat": 35.5439,
                  "lng": 129.3371,
                  "label": "남구 선암동"
            }
      },
      {
            "code": "31140_dong_9",
            "name": "대현동",
            "center": {
                  "lat": 35.5499,
                  "lng": 129.3371,
                  "label": "남구 대현동"
            }
      }
],
    isActive: true,
    city: "울산광역시",
    gu: "남구",
  },
  {
    code: "31170",
    sidoCode: "31",
    sidoName: "울산광역시",
    name: "동구",
    fullName: "울산광역시 동구",
    
    
    
    center: {"lat":35.5048,"lng":129.4167,"label":"울산 동구(일산지/방어진) 중심"},
    dongs: [
      {
            "code": "31170_dong_1",
            "name": "방어동",
            "center": {
                  "lat": 35.4988,
                  "lng": 129.4097,
                  "label": "동구 방어동"
            }
      },
      {
            "code": "31170_dong_2",
            "name": "일산동",
            "center": {
                  "lat": 35.5048,
                  "lng": 129.4097,
                  "label": "동구 일산동"
            }
      },
      {
            "code": "31170_dong_3",
            "name": "화정동",
            "center": {
                  "lat": 35.5108,
                  "lng": 129.4097,
                  "label": "동구 화정동"
            }
      },
      {
            "code": "31170_dong_4",
            "name": "대송동",
            "center": {
                  "lat": 35.4988,
                  "lng": 129.4167,
                  "label": "동구 대송동"
            }
      },
      {
            "code": "31170_dong_5",
            "name": "전하동",
            "center": {
                  "lat": 35.5048,
                  "lng": 129.4167,
                  "label": "동구 전하동"
            }
      },
      {
            "code": "31170_dong_6",
            "name": "남목동",
            "center": {
                  "lat": 35.5108,
                  "lng": 129.4167,
                  "label": "동구 남목동"
            }
      }
],
    isActive: true,
    city: "울산광역시",
    gu: "동구",
  },
  {
    code: "31200",
    sidoCode: "31",
    sidoName: "울산광역시",
    name: "북구",
    fullName: "울산광역시 북구",
    
    
    
    center: {"lat":35.5828,"lng":129.3614,"label":"울산 북구(송정/화봉) 중심"},
    dongs: [
      {
            "code": "31200_dong_1",
            "name": "농소동",
            "center": {
                  "lat": 35.5768,
                  "lng": 129.3544,
                  "label": "북구 농소동"
            }
      },
      {
            "code": "31200_dong_2",
            "name": "강동동",
            "center": {
                  "lat": 35.5828,
                  "lng": 129.3544,
                  "label": "북구 강동동"
            }
      },
      {
            "code": "31200_dong_3",
            "name": "효문동",
            "center": {
                  "lat": 35.5888,
                  "lng": 129.3544,
                  "label": "북구 효문동"
            }
      },
      {
            "code": "31200_dong_4",
            "name": "송정동",
            "center": {
                  "lat": 35.5768,
                  "lng": 129.3614,
                  "label": "북구 송정동"
            }
      },
      {
            "code": "31200_dong_5",
            "name": "양정동",
            "center": {
                  "lat": 35.5828,
                  "lng": 129.3614,
                  "label": "북구 양정동"
            }
      },
      {
            "code": "31200_dong_6",
            "name": "염포동",
            "center": {
                  "lat": 35.5888,
                  "lng": 129.3614,
                  "label": "북구 염포동"
            }
      }
],
    isActive: true,
    city: "울산광역시",
    gu: "북구",
  },
  {
    code: "31710",
    sidoCode: "31",
    sidoName: "울산광역시",
    name: "울주군",
    fullName: "울산광역시 울주군",
    
    
    
    center: {"lat":35.5396,"lng":129.135,"label":"울주군(언양/범서) 중심"},
    dongs: [
      {
            "code": "31710_dong_1",
            "name": "온산읍",
            "center": {
                  "lat": 35.5336,
                  "lng": 129.128,
                  "label": "울주군 온산읍"
            }
      },
      {
            "code": "31710_dong_2",
            "name": "언양읍",
            "center": {
                  "lat": 35.5396,
                  "lng": 129.128,
                  "label": "울주군 언양읍"
            }
      },
      {
            "code": "31710_dong_3",
            "name": "온양읍",
            "center": {
                  "lat": 35.5456,
                  "lng": 129.128,
                  "label": "울주군 온양읍"
            }
      },
      {
            "code": "31710_dong_4",
            "name": "범서읍",
            "center": {
                  "lat": 35.5336,
                  "lng": 129.135,
                  "label": "울주군 범서읍"
            }
      },
      {
            "code": "31710_dong_5",
            "name": "청량읍",
            "center": {
                  "lat": 35.5396,
                  "lng": 129.135,
                  "label": "울주군 청량읍"
            }
      },
      {
            "code": "31710_dong_6",
            "name": "서생면",
            "center": {
                  "lat": 35.5456,
                  "lng": 129.135,
                  "label": "울주군 서생면"
            }
      },
      {
            "code": "31710_dong_7",
            "name": "웅촌면",
            "center": {
                  "lat": 35.5336,
                  "lng": 129.142,
                  "label": "울주군 웅촌면"
            }
      },
      {
            "code": "31710_dong_8",
            "name": "두동면",
            "center": {
                  "lat": 35.5396,
                  "lng": 129.142,
                  "label": "울주군 두동면"
            }
      },
      {
            "code": "31710_dong_9",
            "name": "두서면",
            "center": {
                  "lat": 35.5456,
                  "lng": 129.142,
                  "label": "울주군 두서면"
            }
      },
      {
            "code": "31710_dong_10",
            "name": "상북면",
            "center": {
                  "lat": 35.5336,
                  "lng": 129.149,
                  "label": "울주군 상북면"
            }
      },
      {
            "code": "31710_dong_11",
            "name": "삼남읍",
            "center": {
                  "lat": 35.5396,
                  "lng": 129.149,
                  "label": "울주군 삼남읍"
            }
      },
      {
            "code": "31710_dong_12",
            "name": "삼동면",
            "center": {
                  "lat": 35.5456,
                  "lng": 129.149,
                  "label": "울주군 삼동면"
            }
      }
],
    isActive: true,
    city: "울산광역시",
    gu: "울주군",
  },
  {
    code: "36110",
    sidoCode: "36",
    sidoName: "세종특별자치시",
    name: "세종시",
    fullName: "세종특별자치시",
    legacyCode: "sejong",
    
    
    center: {"lat":36.48,"lng":127.289,"label":"세종특별자치시 중심"},
    dongs: [
      {
            "code": "36110_dong_1",
            "name": "보람동",
            "center": {
                  "lat": 36.474,
                  "lng": 127.282,
                  "label": "세종시 보람동"
            }
      },
      {
            "code": "36110_dong_2",
            "name": "나성동",
            "center": {
                  "lat": 36.48,
                  "lng": 127.282,
                  "label": "세종시 나성동"
            }
      },
      {
            "code": "36110_dong_3",
            "name": "새롬동",
            "center": {
                  "lat": 36.486,
                  "lng": 127.282,
                  "label": "세종시 새롬동"
            }
      },
      {
            "code": "36110_dong_4",
            "name": "다정동",
            "center": {
                  "lat": 36.474,
                  "lng": 127.289,
                  "label": "세종시 다정동"
            }
      },
      {
            "code": "36110_dong_5",
            "name": "어진동",
            "center": {
                  "lat": 36.48,
                  "lng": 127.289,
                  "label": "세종시 어진동"
            }
      },
      {
            "code": "36110_dong_6",
            "name": "도담동",
            "center": {
                  "lat": 36.486,
                  "lng": 127.289,
                  "label": "세종시 도담동"
            }
      },
      {
            "code": "36110_dong_7",
            "name": "아름동",
            "center": {
                  "lat": 36.474,
                  "lng": 127.296,
                  "label": "세종시 아름동"
            }
      },
      {
            "code": "36110_dong_8",
            "name": "종촌동",
            "center": {
                  "lat": 36.48,
                  "lng": 127.296,
                  "label": "세종시 종촌동"
            }
      },
      {
            "code": "36110_dong_9",
            "name": "고운동",
            "center": {
                  "lat": 36.486,
                  "lng": 127.296,
                  "label": "세종시 고운동"
            }
      },
      {
            "code": "36110_dong_10",
            "name": "소담동",
            "center": {
                  "lat": 36.474,
                  "lng": 127.303,
                  "label": "세종시 소담동"
            }
      },
      {
            "code": "36110_dong_11",
            "name": "반곡동",
            "center": {
                  "lat": 36.48,
                  "lng": 127.303,
                  "label": "세종시 반곡동"
            }
      },
      {
            "code": "36110_dong_12",
            "name": "해밀동",
            "center": {
                  "lat": 36.486,
                  "lng": 127.303,
                  "label": "세종시 해밀동"
            }
      },
      {
            "code": "36110_dong_13",
            "name": "산울동",
            "center": {
                  "lat": 36.474,
                  "lng": 127.31,
                  "label": "세종시 산울동"
            }
      },
      {
            "code": "36110_dong_14",
            "name": "집현동",
            "center": {
                  "lat": 36.48,
                  "lng": 127.31,
                  "label": "세종시 집현동"
            }
      },
      {
            "code": "36110_dong_15",
            "name": "조치원읍",
            "center": {
                  "lat": 36.486,
                  "lng": 127.31,
                  "label": "세종시 조치원읍"
            }
      },
      {
            "code": "36110_dong_16",
            "name": "연기면",
            "center": {
                  "lat": 36.474,
                  "lng": 127.317,
                  "label": "세종시 연기면"
            }
      },
      {
            "code": "36110_dong_17",
            "name": "연동면",
            "center": {
                  "lat": 36.48,
                  "lng": 127.317,
                  "label": "세종시 연동면"
            }
      },
      {
            "code": "36110_dong_18",
            "name": "부강면",
            "center": {
                  "lat": 36.486,
                  "lng": 127.317,
                  "label": "세종시 부강면"
            }
      },
      {
            "code": "36110_dong_19",
            "name": "금남면",
            "center": {
                  "lat": 36.474,
                  "lng": 127.324,
                  "label": "세종시 금남면"
            }
      },
      {
            "code": "36110_dong_20",
            "name": "장군면",
            "center": {
                  "lat": 36.48,
                  "lng": 127.324,
                  "label": "세종시 장군면"
            }
      },
      {
            "code": "36110_dong_21",
            "name": "연서면",
            "center": {
                  "lat": 36.486,
                  "lng": 127.324,
                  "label": "세종시 연서면"
            }
      },
      {
            "code": "36110_dong_22",
            "name": "전의면",
            "center": {
                  "lat": 36.474,
                  "lng": 127.331,
                  "label": "세종시 전의면"
            }
      },
      {
            "code": "36110_dong_23",
            "name": "전동면",
            "center": {
                  "lat": 36.48,
                  "lng": 127.331,
                  "label": "세종시 전동면"
            }
      },
      {
            "code": "36110_dong_24",
            "name": "소정면",
            "center": {
                  "lat": 36.486,
                  "lng": 127.331,
                  "label": "세종시 소정면"
            }
      }
],
    isActive: true,
    city: "세종특별자치시",
    gu: "세종시",
  },
  {
    code: "41111",
    sidoCode: "41",
    sidoName: "경기도",
    name: "수원시 장안구",
    fullName: "경기도 수원시 장안구",
    
    parentCity: "수원시",
    isGeneralGu: true,
    center: {"lat":37.3038,"lng":127.0108,"label":"수원시 장안구 중심"},
    dongs: [
      {
            "code": "41111_dong_1",
            "name": "정자동",
            "center": {
                  "lat": 37.2978,
                  "lng": 127.0038,
                  "label": "수원시 장안구 정자동"
            }
      },
      {
            "code": "41111_dong_2",
            "name": "영화동",
            "center": {
                  "lat": 37.3038,
                  "lng": 127.0038,
                  "label": "수원시 장안구 영화동"
            }
      },
      {
            "code": "41111_dong_3",
            "name": "송죽동",
            "center": {
                  "lat": 37.3098,
                  "lng": 127.0038,
                  "label": "수원시 장안구 송죽동"
            }
      },
      {
            "code": "41111_dong_4",
            "name": "조원동",
            "center": {
                  "lat": 37.2978,
                  "lng": 127.0108,
                  "label": "수원시 장안구 조원동"
            }
      },
      {
            "code": "41111_dong_5",
            "name": "연무동",
            "center": {
                  "lat": 37.3038,
                  "lng": 127.0108,
                  "label": "수원시 장안구 연무동"
            }
      },
      {
            "code": "41111_dong_6",
            "name": "율천동",
            "center": {
                  "lat": 37.3098,
                  "lng": 127.0108,
                  "label": "수원시 장안구 율천동"
            }
      },
      {
            "code": "41111_dong_7",
            "name": "파장동",
            "center": {
                  "lat": 37.2978,
                  "lng": 127.0178,
                  "label": "수원시 장안구 파장동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "수원시 장안구",
  },
  {
    code: "41113",
    sidoCode: "41",
    sidoName: "경기도",
    name: "수원시 권선구",
    fullName: "경기도 수원시 권선구",
    
    parentCity: "수원시",
    isGeneralGu: true,
    center: {"lat":37.2576,"lng":126.9719,"label":"수원시 권선구 중심"},
    dongs: [
      {
            "code": "41113_dong_1",
            "name": "세류동",
            "center": {
                  "lat": 37.2516,
                  "lng": 126.9649,
                  "label": "수원시 권선구 세류동"
            }
      },
      {
            "code": "41113_dong_2",
            "name": "평동",
            "center": {
                  "lat": 37.2576,
                  "lng": 126.9649,
                  "label": "수원시 권선구 평동"
            }
      },
      {
            "code": "41113_dong_3",
            "name": "서둔동",
            "center": {
                  "lat": 37.2636,
                  "lng": 126.9649,
                  "label": "수원시 권선구 서둔동"
            }
      },
      {
            "code": "41113_dong_4",
            "name": "구운동",
            "center": {
                  "lat": 37.2516,
                  "lng": 126.9719,
                  "label": "수원시 권선구 구운동"
            }
      },
      {
            "code": "41113_dong_5",
            "name": "금곡동",
            "center": {
                  "lat": 37.2576,
                  "lng": 126.9719,
                  "label": "수원시 권선구 금곡동"
            }
      },
      {
            "code": "41113_dong_6",
            "name": "호매실동",
            "center": {
                  "lat": 37.2636,
                  "lng": 126.9719,
                  "label": "수원시 권선구 호매실동"
            }
      },
      {
            "code": "41113_dong_7",
            "name": "권선동",
            "center": {
                  "lat": 37.2516,
                  "lng": 126.9789,
                  "label": "수원시 권선구 권선동"
            }
      },
      {
            "code": "41113_dong_8",
            "name": "곡선동",
            "center": {
                  "lat": 37.2576,
                  "lng": 126.9789,
                  "label": "수원시 권선구 곡선동"
            }
      },
      {
            "code": "41113_dong_9",
            "name": "입북동",
            "center": {
                  "lat": 37.2636,
                  "lng": 126.9789,
                  "label": "수원시 권선구 입북동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "수원시 권선구",
  },
  {
    code: "41115",
    sidoCode: "41",
    sidoName: "경기도",
    name: "수원시 팔달구",
    fullName: "경기도 수원시 팔달구",
    legacyCode: "gyeonggi_suwon_paldal",
    parentCity: "수원시",
    isGeneralGu: true,
    center: {"lat":37.2825,"lng":127.0189,"label":"수원시 팔달구(행궁동/인계동) 중심"},
    dongs: [
      {
            "code": "41115_dong_1",
            "name": "행궁동",
            "center": {
                  "lat": 37.2765,
                  "lng": 127.0119,
                  "label": "수원시 팔달구 행궁동"
            }
      },
      {
            "code": "41115_dong_2",
            "name": "인계동",
            "center": {
                  "lat": 37.2825,
                  "lng": 127.0119,
                  "label": "수원시 팔달구 인계동"
            }
      },
      {
            "code": "41115_dong_3",
            "name": "매교동",
            "center": {
                  "lat": 37.2885,
                  "lng": 127.0119,
                  "label": "수원시 팔달구 매교동"
            }
      },
      {
            "code": "41115_dong_4",
            "name": "매산동",
            "center": {
                  "lat": 37.2765,
                  "lng": 127.0189,
                  "label": "수원시 팔달구 매산동"
            }
      },
      {
            "code": "41115_dong_5",
            "name": "고등동",
            "center": {
                  "lat": 37.2825,
                  "lng": 127.0189,
                  "label": "수원시 팔달구 고등동"
            }
      },
      {
            "code": "41115_dong_6",
            "name": "화서동",
            "center": {
                  "lat": 37.2885,
                  "lng": 127.0189,
                  "label": "수원시 팔달구 화서동"
            }
      },
      {
            "code": "41115_dong_7",
            "name": "지동",
            "center": {
                  "lat": 37.2765,
                  "lng": 127.0259,
                  "label": "수원시 팔달구 지동"
            }
      },
      {
            "code": "41115_dong_8",
            "name": "우만동",
            "center": {
                  "lat": 37.2825,
                  "lng": 127.0259,
                  "label": "수원시 팔달구 우만동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "수원시 팔달구",
  },
  {
    code: "41117",
    sidoCode: "41",
    sidoName: "경기도",
    name: "수원시 영통구",
    fullName: "경기도 수원시 영통구",
    
    parentCity: "수원시",
    isGeneralGu: true,
    center: {"lat":37.2596,"lng":127.0465,"label":"수원시 영통구(광교) 중심"},
    dongs: [
      {
            "code": "41117_dong_1",
            "name": "영통동",
            "center": {
                  "lat": 37.2536,
                  "lng": 127.0395,
                  "label": "수원시 영통구 영통동"
            }
      },
      {
            "code": "41117_dong_2",
            "name": "매탄동",
            "center": {
                  "lat": 37.2596,
                  "lng": 127.0395,
                  "label": "수원시 영통구 매탄동"
            }
      },
      {
            "code": "41117_dong_3",
            "name": "원천동",
            "center": {
                  "lat": 37.2656,
                  "lng": 127.0395,
                  "label": "수원시 영통구 원천동"
            }
      },
      {
            "code": "41117_dong_4",
            "name": "광교1동",
            "center": {
                  "lat": 37.2536,
                  "lng": 127.0465,
                  "label": "수원시 영통구 광교1동"
            }
      },
      {
            "code": "41117_dong_5",
            "name": "광교2동",
            "center": {
                  "lat": 37.2596,
                  "lng": 127.0465,
                  "label": "수원시 영통구 광교2동"
            }
      },
      {
            "code": "41117_dong_6",
            "name": "망포동",
            "center": {
                  "lat": 37.2656,
                  "lng": 127.0465,
                  "label": "수원시 영통구 망포동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "수원시 영통구",
  },
  {
    code: "41131",
    sidoCode: "41",
    sidoName: "경기도",
    name: "성남시 수정구",
    fullName: "경기도 성남시 수정구",
    
    parentCity: "성남시",
    isGeneralGu: true,
    center: {"lat":37.4516,"lng":127.1367,"label":"성남시 수정구 중심"},
    dongs: [
      {
            "code": "41131_dong_1",
            "name": "신흥동",
            "center": {
                  "lat": 37.4456,
                  "lng": 127.1297,
                  "label": "성남시 수정구 신흥동"
            }
      },
      {
            "code": "41131_dong_2",
            "name": "태평동",
            "center": {
                  "lat": 37.4516,
                  "lng": 127.1297,
                  "label": "성남시 수정구 태평동"
            }
      },
      {
            "code": "41131_dong_3",
            "name": "수진동",
            "center": {
                  "lat": 37.4576,
                  "lng": 127.1297,
                  "label": "성남시 수정구 수진동"
            }
      },
      {
            "code": "41131_dong_4",
            "name": "단대동",
            "center": {
                  "lat": 37.4456,
                  "lng": 127.1367,
                  "label": "성남시 수정구 단대동"
            }
      },
      {
            "code": "41131_dong_5",
            "name": "산성동",
            "center": {
                  "lat": 37.4516,
                  "lng": 127.1367,
                  "label": "성남시 수정구 산성동"
            }
      },
      {
            "code": "41131_dong_6",
            "name": "양지동",
            "center": {
                  "lat": 37.4576,
                  "lng": 127.1367,
                  "label": "성남시 수정구 양지동"
            }
      },
      {
            "code": "41131_dong_7",
            "name": "복정동",
            "center": {
                  "lat": 37.4456,
                  "lng": 127.1437,
                  "label": "성남시 수정구 복정동"
            }
      },
      {
            "code": "41131_dong_8",
            "name": "위례동",
            "center": {
                  "lat": 37.4516,
                  "lng": 127.1437,
                  "label": "성남시 수정구 위례동"
            }
      },
      {
            "code": "41131_dong_9",
            "name": "시흥동",
            "center": {
                  "lat": 37.4576,
                  "lng": 127.1437,
                  "label": "성남시 수정구 시흥동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "성남시 수정구",
  },
  {
    code: "41133",
    sidoCode: "41",
    sidoName: "경기도",
    name: "성남시 중원구",
    fullName: "경기도 성남시 중원구",
    
    parentCity: "성남시",
    isGeneralGu: true,
    center: {"lat":37.432,"lng":127.1565,"label":"성남시 중원구 중심"},
    dongs: [
      {
            "code": "41133_dong_1",
            "name": "성남동",
            "center": {
                  "lat": 37.426,
                  "lng": 127.1495,
                  "label": "성남시 중원구 성남동"
            }
      },
      {
            "code": "41133_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 37.432,
                  "lng": 127.1495,
                  "label": "성남시 중원구 중앙동"
            }
      },
      {
            "code": "41133_dong_3",
            "name": "금광동",
            "center": {
                  "lat": 37.438,
                  "lng": 127.1495,
                  "label": "성남시 중원구 금광동"
            }
      },
      {
            "code": "41133_dong_4",
            "name": "은행동",
            "center": {
                  "lat": 37.426,
                  "lng": 127.1565,
                  "label": "성남시 중원구 은행동"
            }
      },
      {
            "code": "41133_dong_5",
            "name": "상대원동",
            "center": {
                  "lat": 37.432,
                  "lng": 127.1565,
                  "label": "성남시 중원구 상대원동"
            }
      },
      {
            "code": "41133_dong_6",
            "name": "하대원동",
            "center": {
                  "lat": 37.438,
                  "lng": 127.1565,
                  "label": "성남시 중원구 하대원동"
            }
      },
      {
            "code": "41133_dong_7",
            "name": "도촌동",
            "center": {
                  "lat": 37.426,
                  "lng": 127.1635,
                  "label": "성남시 중원구 도촌동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "성남시 중원구",
  },
  {
    code: "41135",
    sidoCode: "41",
    sidoName: "경기도",
    name: "성남시 분당구",
    fullName: "경기도 성남시 분당구",
    legacyCode: "gyeonggi_seongnam_bundang",
    parentCity: "성남시",
    isGeneralGu: true,
    center: {"lat":37.3827,"lng":127.1189,"label":"성남시 분당구(판교/정자) 중심"},
    dongs: [
      {
            "code": "41135_dong_1",
            "name": "서현동",
            "center": {
                  "lat": 37.3767,
                  "lng": 127.1119,
                  "label": "성남시 분당구 서현동"
            }
      },
      {
            "code": "41135_dong_2",
            "name": "정자동",
            "center": {
                  "lat": 37.3827,
                  "lng": 127.1119,
                  "label": "성남시 분당구 정자동"
            }
      },
      {
            "code": "41135_dong_3",
            "name": "백현동",
            "center": {
                  "lat": 37.3887,
                  "lng": 127.1119,
                  "label": "성남시 분당구 백현동"
            }
      },
      {
            "code": "41135_dong_4",
            "name": "판교동",
            "center": {
                  "lat": 37.3767,
                  "lng": 127.1189,
                  "label": "성남시 분당구 판교동"
            }
      },
      {
            "code": "41135_dong_5",
            "name": "삼평동",
            "center": {
                  "lat": 37.3827,
                  "lng": 127.1189,
                  "label": "성남시 분당구 삼평동"
            }
      },
      {
            "code": "41135_dong_6",
            "name": "운중동",
            "center": {
                  "lat": 37.3887,
                  "lng": 127.1189,
                  "label": "성남시 분당구 운중동"
            }
      },
      {
            "code": "41135_dong_7",
            "name": "이매동",
            "center": {
                  "lat": 37.3767,
                  "lng": 127.1259,
                  "label": "성남시 분당구 이매동"
            }
      },
      {
            "code": "41135_dong_8",
            "name": "야탑동",
            "center": {
                  "lat": 37.3827,
                  "lng": 127.1259,
                  "label": "성남시 분당구 야탑동"
            }
      },
      {
            "code": "41135_dong_9",
            "name": "수내동",
            "center": {
                  "lat": 37.3887,
                  "lng": 127.1259,
                  "label": "성남시 분당구 수내동"
            }
      },
      {
            "code": "41135_dong_10",
            "name": "구미동",
            "center": {
                  "lat": 37.3767,
                  "lng": 127.1329,
                  "label": "성남시 분당구 구미동"
            }
      },
      {
            "code": "41135_dong_11",
            "name": "금곡동",
            "center": {
                  "lat": 37.3827,
                  "lng": 127.1329,
                  "label": "성남시 분당구 금곡동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "성남시 분당구",
  },
  {
    code: "41150",
    sidoCode: "41",
    sidoName: "경기도",
    name: "의정부시",
    fullName: "경기도 의정부시",
    
    
    
    center: {"lat":37.7381,"lng":127.0337,"label":"의정부시 중심"},
    dongs: [
      {
            "code": "41150_dong_1",
            "name": "의정부동",
            "center": {
                  "lat": 37.7321,
                  "lng": 127.0267,
                  "label": "의정부시 의정부동"
            }
      },
      {
            "code": "41150_dong_2",
            "name": "호원동",
            "center": {
                  "lat": 37.7381,
                  "lng": 127.0267,
                  "label": "의정부시 호원동"
            }
      },
      {
            "code": "41150_dong_3",
            "name": "장암동",
            "center": {
                  "lat": 37.7441,
                  "lng": 127.0267,
                  "label": "의정부시 장암동"
            }
      },
      {
            "code": "41150_dong_4",
            "name": "신곡동",
            "center": {
                  "lat": 37.7321,
                  "lng": 127.0337,
                  "label": "의정부시 신곡동"
            }
      },
      {
            "code": "41150_dong_5",
            "name": "송산동",
            "center": {
                  "lat": 37.7381,
                  "lng": 127.0337,
                  "label": "의정부시 송산동"
            }
      },
      {
            "code": "41150_dong_6",
            "name": "자금동",
            "center": {
                  "lat": 37.7441,
                  "lng": 127.0337,
                  "label": "의정부시 자금동"
            }
      },
      {
            "code": "41150_dong_7",
            "name": "가능동",
            "center": {
                  "lat": 37.7321,
                  "lng": 127.0407,
                  "label": "의정부시 가능동"
            }
      },
      {
            "code": "41150_dong_8",
            "name": "흥선동",
            "center": {
                  "lat": 37.7381,
                  "lng": 127.0407,
                  "label": "의정부시 흥선동"
            }
      },
      {
            "code": "41150_dong_9",
            "name": "녹양동",
            "center": {
                  "lat": 37.7441,
                  "lng": 127.0407,
                  "label": "의정부시 녹양동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "의정부시",
  },
  {
    code: "41171",
    sidoCode: "41",
    sidoName: "경기도",
    name: "안양시 만안구",
    fullName: "경기도 안양시 만안구",
    
    parentCity: "안양시",
    isGeneralGu: true,
    center: {"lat":37.4005,"lng":126.9142,"label":"안양시 만안구 중심"},
    dongs: [
      {
            "code": "41171_dong_1",
            "name": "안양동",
            "center": {
                  "lat": 37.3945,
                  "lng": 126.9072,
                  "label": "안양시 만안구 안양동"
            }
      },
      {
            "code": "41171_dong_2",
            "name": "석수동",
            "center": {
                  "lat": 37.4005,
                  "lng": 126.9072,
                  "label": "안양시 만안구 석수동"
            }
      },
      {
            "code": "41171_dong_3",
            "name": "박달동",
            "center": {
                  "lat": 37.4065,
                  "lng": 126.9072,
                  "label": "안양시 만안구 박달동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "안양시 만안구",
  },
  {
    code: "41173",
    sidoCode: "41",
    sidoName: "경기도",
    name: "안양시 동안구",
    fullName: "경기도 안양시 동안구",
    legacyCode: "gyeonggi_anyang_dongan",
    parentCity: "안양시",
    isGeneralGu: true,
    center: {"lat":37.3943,"lng":126.9568,"label":"안양시 동안구(평촌/범계) 중심"},
    dongs: [
      {
            "code": "41173_dong_1",
            "name": "비산동",
            "center": {
                  "lat": 37.3883,
                  "lng": 126.9498,
                  "label": "안양시 동안구 비산동"
            }
      },
      {
            "code": "41173_dong_2",
            "name": "부흥동",
            "center": {
                  "lat": 37.3943,
                  "lng": 126.9498,
                  "label": "안양시 동안구 부흥동"
            }
      },
      {
            "code": "41173_dong_3",
            "name": "달안동",
            "center": {
                  "lat": 37.4003,
                  "lng": 126.9498,
                  "label": "안양시 동안구 달안동"
            }
      },
      {
            "code": "41173_dong_4",
            "name": "관양동",
            "center": {
                  "lat": 37.3883,
                  "lng": 126.9568,
                  "label": "안양시 동안구 관양동"
            }
      },
      {
            "code": "41173_dong_5",
            "name": "평촌동",
            "center": {
                  "lat": 37.3943,
                  "lng": 126.9568,
                  "label": "안양시 동안구 평촌동"
            }
      },
      {
            "code": "41173_dong_6",
            "name": "호계동",
            "center": {
                  "lat": 37.4003,
                  "lng": 126.9568,
                  "label": "안양시 동안구 호계동"
            }
      },
      {
            "code": "41173_dong_7",
            "name": "범계동",
            "center": {
                  "lat": 37.3883,
                  "lng": 126.9638,
                  "label": "안양시 동안구 범계동"
            }
      },
      {
            "code": "41173_dong_8",
            "name": "신촌동",
            "center": {
                  "lat": 37.3943,
                  "lng": 126.9638,
                  "label": "안양시 동안구 신촌동"
            }
      },
      {
            "code": "41173_dong_9",
            "name": "갈산동",
            "center": {
                  "lat": 37.4003,
                  "lng": 126.9638,
                  "label": "안양시 동안구 갈산동"
            }
      },
      {
            "code": "41173_dong_10",
            "name": "귀인동",
            "center": {
                  "lat": 37.3883,
                  "lng": 126.9708,
                  "label": "안양시 동안구 귀인동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "안양시 동안구",
  },
  {
    code: "41192",
    sidoCode: "41",
    sidoName: "경기도",
    name: "부천시 원미구",
    fullName: "경기도 부천시 원미구",
    legacyCode: "gyeonggi_bucheon_wonmi",
    parentCity: "부천시",
    isGeneralGu: true,
    center: {"lat":37.5023,"lng":126.7766,"label":"부천시 원미구 중심"},
    dongs: [
      {
            "code": "41192_dong_1",
            "name": "심곡동",
            "center": {
                  "lat": 37.4963,
                  "lng": 126.7696,
                  "label": "부천시 원미구 심곡동"
            }
      },
      {
            "code": "41192_dong_2",
            "name": "원미동",
            "center": {
                  "lat": 37.5023,
                  "lng": 126.7696,
                  "label": "부천시 원미구 원미동"
            }
      },
      {
            "code": "41192_dong_3",
            "name": "소사동",
            "center": {
                  "lat": 37.5083,
                  "lng": 126.7696,
                  "label": "부천시 원미구 소사동"
            }
      },
      {
            "code": "41192_dong_4",
            "name": "역곡동",
            "center": {
                  "lat": 37.4963,
                  "lng": 126.7766,
                  "label": "부천시 원미구 역곡동"
            }
      },
      {
            "code": "41192_dong_5",
            "name": "춘의동",
            "center": {
                  "lat": 37.5023,
                  "lng": 126.7766,
                  "label": "부천시 원미구 춘의동"
            }
      },
      {
            "code": "41192_dong_6",
            "name": "도당동",
            "center": {
                  "lat": 37.5083,
                  "lng": 126.7766,
                  "label": "부천시 원미구 도당동"
            }
      },
      {
            "code": "41192_dong_7",
            "name": "약대동",
            "center": {
                  "lat": 37.4963,
                  "lng": 126.7836,
                  "label": "부천시 원미구 약대동"
            }
      },
      {
            "code": "41192_dong_8",
            "name": "중동",
            "center": {
                  "lat": 37.5023,
                  "lng": 126.7836,
                  "label": "부천시 원미구 중동"
            }
      },
      {
            "code": "41192_dong_9",
            "name": "상동",
            "center": {
                  "lat": 37.5083,
                  "lng": 126.7836,
                  "label": "부천시 원미구 상동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "부천시 원미구",
  },
  {
    code: "41194",
    sidoCode: "41",
    sidoName: "경기도",
    name: "부천시 소사구",
    fullName: "경기도 부천시 소사구",
    
    parentCity: "부천시",
    isGeneralGu: true,
    center: {"lat":37.4819,"lng":126.7958,"label":"부천시 소사구 중심"},
    dongs: [
      {
            "code": "41194_dong_1",
            "name": "소사본동",
            "center": {
                  "lat": 37.4759,
                  "lng": 126.7888,
                  "label": "부천시 소사구 소사본동"
            }
      },
      {
            "code": "41194_dong_2",
            "name": "심곡본동",
            "center": {
                  "lat": 37.4819,
                  "lng": 126.7888,
                  "label": "부천시 소사구 심곡본동"
            }
      },
      {
            "code": "41194_dong_3",
            "name": "범박동",
            "center": {
                  "lat": 37.4879,
                  "lng": 126.7888,
                  "label": "부천시 소사구 범박동"
            }
      },
      {
            "code": "41194_dong_4",
            "name": "괴안동",
            "center": {
                  "lat": 37.4759,
                  "lng": 126.7958,
                  "label": "부천시 소사구 괴안동"
            }
      },
      {
            "code": "41194_dong_5",
            "name": "송내동",
            "center": {
                  "lat": 37.4819,
                  "lng": 126.7958,
                  "label": "부천시 소사구 송내동"
            }
      },
      {
            "code": "41194_dong_6",
            "name": "옥길동",
            "center": {
                  "lat": 37.4879,
                  "lng": 126.7958,
                  "label": "부천시 소사구 옥길동"
            }
      },
      {
            "code": "41194_dong_7",
            "name": "계수동",
            "center": {
                  "lat": 37.4759,
                  "lng": 126.8028,
                  "label": "부천시 소사구 계수동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "부천시 소사구",
  },
  {
    code: "41196",
    sidoCode: "41",
    sidoName: "경기도",
    name: "부천시 오정구",
    fullName: "경기도 부천시 오정구",
    
    parentCity: "부천시",
    isGeneralGu: true,
    center: {"lat":37.5284,"lng":126.7915,"label":"부천시 오정구 중심"},
    dongs: [
      {
            "code": "41196_dong_1",
            "name": "오정동",
            "center": {
                  "lat": 37.5224,
                  "lng": 126.7845,
                  "label": "부천시 오정구 오정동"
            }
      },
      {
            "code": "41196_dong_2",
            "name": "원종동",
            "center": {
                  "lat": 37.5284,
                  "lng": 126.7845,
                  "label": "부천시 오정구 원종동"
            }
      },
      {
            "code": "41196_dong_3",
            "name": "고강동",
            "center": {
                  "lat": 37.5344,
                  "lng": 126.7845,
                  "label": "부천시 오정구 고강동"
            }
      },
      {
            "code": "41196_dong_4",
            "name": "삼정동",
            "center": {
                  "lat": 37.5224,
                  "lng": 126.7915,
                  "label": "부천시 오정구 삼정동"
            }
      },
      {
            "code": "41196_dong_5",
            "name": "내동",
            "center": {
                  "lat": 37.5284,
                  "lng": 126.7915,
                  "label": "부천시 오정구 내동"
            }
      },
      {
            "code": "41196_dong_6",
            "name": "여월동",
            "center": {
                  "lat": 37.5344,
                  "lng": 126.7915,
                  "label": "부천시 오정구 여월동"
            }
      },
      {
            "code": "41196_dong_7",
            "name": "작동",
            "center": {
                  "lat": 37.5224,
                  "lng": 126.7985,
                  "label": "부천시 오정구 작동"
            }
      },
      {
            "code": "41196_dong_8",
            "name": "대장동",
            "center": {
                  "lat": 37.5284,
                  "lng": 126.7985,
                  "label": "부천시 오정구 대장동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "부천시 오정구",
  },
  {
    code: "41210",
    sidoCode: "41",
    sidoName: "경기도",
    name: "광명시",
    fullName: "경기도 광명시",
    
    
    
    center: {"lat":37.4786,"lng":126.8647,"label":"광명시(철산/일직) 중심"},
    dongs: [
      {
            "code": "41210_dong_1",
            "name": "철산동",
            "center": {
                  "lat": 37.4726,
                  "lng": 126.8577,
                  "label": "광명시 철산동"
            }
      },
      {
            "code": "41210_dong_2",
            "name": "하안동",
            "center": {
                  "lat": 37.4786,
                  "lng": 126.8577,
                  "label": "광명시 하안동"
            }
      },
      {
            "code": "41210_dong_3",
            "name": "소하동",
            "center": {
                  "lat": 37.4846,
                  "lng": 126.8577,
                  "label": "광명시 소하동"
            }
      },
      {
            "code": "41210_dong_4",
            "name": "일직동",
            "center": {
                  "lat": 37.4726,
                  "lng": 126.8647,
                  "label": "광명시 일직동"
            }
      },
      {
            "code": "41210_dong_5",
            "name": "광명동",
            "center": {
                  "lat": 37.4786,
                  "lng": 126.8647,
                  "label": "광명시 광명동"
            }
      },
      {
            "code": "41210_dong_6",
            "name": "학온동",
            "center": {
                  "lat": 37.4846,
                  "lng": 126.8647,
                  "label": "광명시 학온동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "광명시",
  },
  {
    code: "41220",
    sidoCode: "41",
    sidoName: "경기도",
    name: "평택시",
    fullName: "경기도 평택시",
    
    
    
    center: {"lat":36.9921,"lng":127.1129,"label":"평택시(고덕/송탄) 중심"},
    dongs: [
      {
            "code": "41220_dong_1",
            "name": "고덕동",
            "center": {
                  "lat": 36.9861,
                  "lng": 127.1059,
                  "label": "평택시 고덕동"
            }
      },
      {
            "code": "41220_dong_2",
            "name": "비전동",
            "center": {
                  "lat": 36.9921,
                  "lng": 127.1059,
                  "label": "평택시 비전동"
            }
      },
      {
            "code": "41220_dong_3",
            "name": "세교동",
            "center": {
                  "lat": 36.9981,
                  "lng": 127.1059,
                  "label": "평택시 세교동"
            }
      },
      {
            "code": "41220_dong_4",
            "name": "평택동",
            "center": {
                  "lat": 36.9861,
                  "lng": 127.1129,
                  "label": "평택시 평택동"
            }
      },
      {
            "code": "41220_dong_5",
            "name": "안중읍",
            "center": {
                  "lat": 36.9921,
                  "lng": 127.1129,
                  "label": "평택시 안중읍"
            }
      },
      {
            "code": "41220_dong_6",
            "name": "포승읍",
            "center": {
                  "lat": 36.9981,
                  "lng": 127.1129,
                  "label": "평택시 포승읍"
            }
      },
      {
            "code": "41220_dong_7",
            "name": "팽성읍",
            "center": {
                  "lat": 36.9861,
                  "lng": 127.1199,
                  "label": "평택시 팽성읍"
            }
      },
      {
            "code": "41220_dong_8",
            "name": "송탄동",
            "center": {
                  "lat": 36.9921,
                  "lng": 127.1199,
                  "label": "평택시 송탄동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "평택시",
  },
  {
    code: "41250",
    sidoCode: "41",
    sidoName: "경기도",
    name: "동두천시",
    fullName: "경기도 동두천시",
    
    
    
    center: {"lat":37.9035,"lng":127.0607,"label":"동두천시 중심"},
    dongs: [
      {
            "code": "41250_dong_1",
            "name": "생연동",
            "center": {
                  "lat": 37.8975,
                  "lng": 127.0537,
                  "label": "동두천시 생연동"
            }
      },
      {
            "code": "41250_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 37.9035,
                  "lng": 127.0537,
                  "label": "동두천시 중앙동"
            }
      },
      {
            "code": "41250_dong_3",
            "name": "보산동",
            "center": {
                  "lat": 37.9095,
                  "lng": 127.0537,
                  "label": "동두천시 보산동"
            }
      },
      {
            "code": "41250_dong_4",
            "name": "불현동",
            "center": {
                  "lat": 37.8975,
                  "lng": 127.0607,
                  "label": "동두천시 불현동"
            }
      },
      {
            "code": "41250_dong_5",
            "name": "송내동",
            "center": {
                  "lat": 37.9035,
                  "lng": 127.0607,
                  "label": "동두천시 송내동"
            }
      },
      {
            "code": "41250_dong_6",
            "name": "소요동",
            "center": {
                  "lat": 37.9095,
                  "lng": 127.0607,
                  "label": "동두천시 소요동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "동두천시",
  },
  {
    code: "41271",
    sidoCode: "41",
    sidoName: "경기도",
    name: "안산시 상록구",
    fullName: "경기도 안산시 상록구",
    
    parentCity: "안산시",
    isGeneralGu: true,
    center: {"lat":37.3008,"lng":126.8466,"label":"안산시 상록구 중심"},
    dongs: [
      {
            "code": "41271_dong_1",
            "name": "본오동",
            "center": {
                  "lat": 37.2948,
                  "lng": 126.8396,
                  "label": "안산시 상록구 본오동"
            }
      },
      {
            "code": "41271_dong_2",
            "name": "일동",
            "center": {
                  "lat": 37.3008,
                  "lng": 126.8396,
                  "label": "안산시 상록구 일동"
            }
      },
      {
            "code": "41271_dong_3",
            "name": "이동",
            "center": {
                  "lat": 37.3068,
                  "lng": 126.8396,
                  "label": "안산시 상록구 이동"
            }
      },
      {
            "code": "41271_dong_4",
            "name": "사동",
            "center": {
                  "lat": 37.2948,
                  "lng": 126.8466,
                  "label": "안산시 상록구 사동"
            }
      },
      {
            "code": "41271_dong_5",
            "name": "월피동",
            "center": {
                  "lat": 37.3008,
                  "lng": 126.8466,
                  "label": "안산시 상록구 월피동"
            }
      },
      {
            "code": "41271_dong_6",
            "name": "성포동",
            "center": {
                  "lat": 37.3068,
                  "lng": 126.8466,
                  "label": "안산시 상록구 성포동"
            }
      },
      {
            "code": "41271_dong_7",
            "name": "반월동",
            "center": {
                  "lat": 37.2948,
                  "lng": 126.8536,
                  "label": "안산시 상록구 반월동"
            }
      },
      {
            "code": "41271_dong_8",
            "name": "안산동",
            "center": {
                  "lat": 37.3008,
                  "lng": 126.8536,
                  "label": "안산시 상록구 안산동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "안산시 상록구",
  },
  {
    code: "41273",
    sidoCode: "41",
    sidoName: "경기도",
    name: "안산시 단원구",
    fullName: "경기도 안산시 단원구",
    
    parentCity: "안산시",
    isGeneralGu: true,
    center: {"lat":37.3219,"lng":126.8309,"label":"안산시 단원구(고잔동) 중심"},
    dongs: [
      {
            "code": "41273_dong_1",
            "name": "고잔동",
            "center": {
                  "lat": 37.3159,
                  "lng": 126.8239,
                  "label": "안산시 단원구 고잔동"
            }
      },
      {
            "code": "41273_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 37.3219,
                  "lng": 126.8239,
                  "label": "안산시 단원구 중앙동"
            }
      },
      {
            "code": "41273_dong_3",
            "name": "호수동",
            "center": {
                  "lat": 37.3279,
                  "lng": 126.8239,
                  "label": "안산시 단원구 호수동"
            }
      },
      {
            "code": "41273_dong_4",
            "name": "초지동",
            "center": {
                  "lat": 37.3159,
                  "lng": 126.8309,
                  "label": "안산시 단원구 초지동"
            }
      },
      {
            "code": "41273_dong_5",
            "name": "원곡동",
            "center": {
                  "lat": 37.3219,
                  "lng": 126.8309,
                  "label": "안산시 단원구 원곡동"
            }
      },
      {
            "code": "41273_dong_6",
            "name": "선부동",
            "center": {
                  "lat": 37.3279,
                  "lng": 126.8309,
                  "label": "안산시 단원구 선부동"
            }
      },
      {
            "code": "41273_dong_7",
            "name": "와동",
            "center": {
                  "lat": 37.3159,
                  "lng": 126.8379,
                  "label": "안산시 단원구 와동"
            }
      },
      {
            "code": "41273_dong_8",
            "name": "대부동",
            "center": {
                  "lat": 37.3219,
                  "lng": 126.8379,
                  "label": "안산시 단원구 대부동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "안산시 단원구",
  },
  {
    code: "41281",
    sidoCode: "41",
    sidoName: "경기도",
    name: "고양시 덕양구",
    fullName: "경기도 고양시 덕양구",
    
    parentCity: "고양시",
    isGeneralGu: true,
    center: {"lat":37.6374,"lng":126.8328,"label":"고양시 덕양구(화정/원흥) 중심"},
    dongs: [
      {
            "code": "41281_dong_1",
            "name": "화정동",
            "center": {
                  "lat": 37.6314,
                  "lng": 126.8258,
                  "label": "고양시 덕양구 화정동"
            }
      },
      {
            "code": "41281_dong_2",
            "name": "행신동",
            "center": {
                  "lat": 37.6374,
                  "lng": 126.8258,
                  "label": "고양시 덕양구 행신동"
            }
      },
      {
            "code": "41281_dong_3",
            "name": "원흥동",
            "center": {
                  "lat": 37.6434,
                  "lng": 126.8258,
                  "label": "고양시 덕양구 원흥동"
            }
      },
      {
            "code": "41281_dong_4",
            "name": "삼송동",
            "center": {
                  "lat": 37.6314,
                  "lng": 126.8328,
                  "label": "고양시 덕양구 삼송동"
            }
      },
      {
            "code": "41281_dong_5",
            "name": "지축동",
            "center": {
                  "lat": 37.6374,
                  "lng": 126.8328,
                  "label": "고양시 덕양구 지축동"
            }
      },
      {
            "code": "41281_dong_6",
            "name": "향동동",
            "center": {
                  "lat": 37.6434,
                  "lng": 126.8328,
                  "label": "고양시 덕양구 향동동"
            }
      },
      {
            "code": "41281_dong_7",
            "name": "덕은동",
            "center": {
                  "lat": 37.6314,
                  "lng": 126.8398,
                  "label": "고양시 덕양구 덕은동"
            }
      },
      {
            "code": "41281_dong_8",
            "name": "주교동",
            "center": {
                  "lat": 37.6374,
                  "lng": 126.8398,
                  "label": "고양시 덕양구 주교동"
            }
      },
      {
            "code": "41281_dong_9",
            "name": "성사동",
            "center": {
                  "lat": 37.6434,
                  "lng": 126.8398,
                  "label": "고양시 덕양구 성사동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "고양시 덕양구",
  },
  {
    code: "41285",
    sidoCode: "41",
    sidoName: "경기도",
    name: "고양시 일산동구",
    fullName: "경기도 고양시 일산동구",
    legacyCode: "gyeonggi_goyang_ilsandong",
    parentCity: "고양시",
    isGeneralGu: true,
    center: {"lat":37.6584,"lng":126.7725,"label":"고양시 일산동구(라페스타/웨돔) 중심"},
    dongs: [
      {
            "code": "41285_dong_1",
            "name": "장항동",
            "center": {
                  "lat": 37.6524,
                  "lng": 126.7655,
                  "label": "고양시 일산동구 장항동"
            }
      },
      {
            "code": "41285_dong_2",
            "name": "백석동",
            "center": {
                  "lat": 37.6584,
                  "lng": 126.7655,
                  "label": "고양시 일산동구 백석동"
            }
      },
      {
            "code": "41285_dong_3",
            "name": "마두동",
            "center": {
                  "lat": 37.6644,
                  "lng": 126.7655,
                  "label": "고양시 일산동구 마두동"
            }
      },
      {
            "code": "41285_dong_4",
            "name": "식사동",
            "center": {
                  "lat": 37.6524,
                  "lng": 126.7725,
                  "label": "고양시 일산동구 식사동"
            }
      },
      {
            "code": "41285_dong_5",
            "name": "풍동",
            "center": {
                  "lat": 37.6584,
                  "lng": 126.7725,
                  "label": "고양시 일산동구 풍동"
            }
      },
      {
            "code": "41285_dong_6",
            "name": "정발산동",
            "center": {
                  "lat": 37.6644,
                  "lng": 126.7725,
                  "label": "고양시 일산동구 정발산동"
            }
      },
      {
            "code": "41285_dong_7",
            "name": "중산동",
            "center": {
                  "lat": 37.6524,
                  "lng": 126.7795,
                  "label": "고양시 일산동구 중산동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "고양시 일산동구",
  },
  {
    code: "41287",
    sidoCode: "41",
    sidoName: "경기도",
    name: "고양시 일산서구",
    fullName: "경기도 고양시 일산서구",
    
    parentCity: "고양시",
    isGeneralGu: true,
    center: {"lat":37.6754,"lng":126.748,"label":"고양시 일산서구(킨텍스/주엽) 중심"},
    dongs: [
      {
            "code": "41287_dong_1",
            "name": "주엽동",
            "center": {
                  "lat": 37.6694,
                  "lng": 126.741,
                  "label": "고양시 일산서구 주엽동"
            }
      },
      {
            "code": "41287_dong_2",
            "name": "일산동",
            "center": {
                  "lat": 37.6754,
                  "lng": 126.741,
                  "label": "고양시 일산서구 일산동"
            }
      },
      {
            "code": "41287_dong_3",
            "name": "대화동",
            "center": {
                  "lat": 37.6814,
                  "lng": 126.741,
                  "label": "고양시 일산서구 대화동"
            }
      },
      {
            "code": "41287_dong_4",
            "name": "탄현동",
            "center": {
                  "lat": 37.6694,
                  "lng": 126.748,
                  "label": "고양시 일산서구 탄현동"
            }
      },
      {
            "code": "41287_dong_5",
            "name": "송포동",
            "center": {
                  "lat": 37.6754,
                  "lng": 126.748,
                  "label": "고양시 일산서구 송포동"
            }
      },
      {
            "code": "41287_dong_6",
            "name": "덕이동",
            "center": {
                  "lat": 37.6814,
                  "lng": 126.748,
                  "label": "고양시 일산서구 덕이동"
            }
      },
      {
            "code": "41287_dong_7",
            "name": "가좌동",
            "center": {
                  "lat": 37.6694,
                  "lng": 126.755,
                  "label": "고양시 일산서구 가좌동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "고양시 일산서구",
  },
  {
    code: "41290",
    sidoCode: "41",
    sidoName: "경기도",
    name: "과천시",
    fullName: "경기도 과천시",
    
    
    
    center: {"lat":37.4292,"lng":126.9876,"label":"과천시 중심"},
    dongs: [
      {
            "code": "41290_dong_1",
            "name": "중앙동",
            "center": {
                  "lat": 37.4232,
                  "lng": 126.9806,
                  "label": "과천시 중앙동"
            }
      },
      {
            "code": "41290_dong_2",
            "name": "갈현동",
            "center": {
                  "lat": 37.4292,
                  "lng": 126.9806,
                  "label": "과천시 갈현동"
            }
      },
      {
            "code": "41290_dong_3",
            "name": "별양동",
            "center": {
                  "lat": 37.4352,
                  "lng": 126.9806,
                  "label": "과천시 별양동"
            }
      },
      {
            "code": "41290_dong_4",
            "name": "부림동",
            "center": {
                  "lat": 37.4232,
                  "lng": 126.9876,
                  "label": "과천시 부림동"
            }
      },
      {
            "code": "41290_dong_5",
            "name": "과천동",
            "center": {
                  "lat": 37.4292,
                  "lng": 126.9876,
                  "label": "과천시 과천동"
            }
      },
      {
            "code": "41290_dong_6",
            "name": "문원동",
            "center": {
                  "lat": 37.4352,
                  "lng": 126.9876,
                  "label": "과천시 문원동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "과천시",
  },
  {
    code: "41310",
    sidoCode: "41",
    sidoName: "경기도",
    name: "구리시",
    fullName: "경기도 구리시",
    
    
    
    center: {"lat":37.5943,"lng":127.1296,"label":"구리시 중심"},
    dongs: [
      {
            "code": "41310_dong_1",
            "name": "갈매동",
            "center": {
                  "lat": 37.5883,
                  "lng": 127.1226,
                  "label": "구리시 갈매동"
            }
      },
      {
            "code": "41310_dong_2",
            "name": "인창동",
            "center": {
                  "lat": 37.5943,
                  "lng": 127.1226,
                  "label": "구리시 인창동"
            }
      },
      {
            "code": "41310_dong_3",
            "name": "교문동",
            "center": {
                  "lat": 37.6003,
                  "lng": 127.1226,
                  "label": "구리시 교문동"
            }
      },
      {
            "code": "41310_dong_4",
            "name": "수택동",
            "center": {
                  "lat": 37.5883,
                  "lng": 127.1296,
                  "label": "구리시 수택동"
            }
      },
      {
            "code": "41310_dong_5",
            "name": "토평동",
            "center": {
                  "lat": 37.5943,
                  "lng": 127.1296,
                  "label": "구리시 토평동"
            }
      },
      {
            "code": "41310_dong_6",
            "name": "동구동",
            "center": {
                  "lat": 37.6003,
                  "lng": 127.1296,
                  "label": "구리시 동구동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "구리시",
  },
  {
    code: "41360",
    sidoCode: "41",
    sidoName: "경기도",
    name: "남양주시",
    fullName: "경기도 남양주시",
    
    
    
    center: {"lat":37.636,"lng":127.2165,"label":"남양주시(다산/별내) 중심"},
    dongs: [
      {
            "code": "41360_dong_1",
            "name": "다산동",
            "center": {
                  "lat": 37.63,
                  "lng": 127.2095,
                  "label": "남양주시 다산동"
            }
      },
      {
            "code": "41360_dong_2",
            "name": "별내동",
            "center": {
                  "lat": 37.636,
                  "lng": 127.2095,
                  "label": "남양주시 별내동"
            }
      },
      {
            "code": "41360_dong_3",
            "name": "호평동",
            "center": {
                  "lat": 37.642,
                  "lng": 127.2095,
                  "label": "남양주시 호평동"
            }
      },
      {
            "code": "41360_dong_4",
            "name": "평내동",
            "center": {
                  "lat": 37.63,
                  "lng": 127.2165,
                  "label": "남양주시 평내동"
            }
      },
      {
            "code": "41360_dong_5",
            "name": "와부읍",
            "center": {
                  "lat": 37.636,
                  "lng": 127.2165,
                  "label": "남양주시 와부읍"
            }
      },
      {
            "code": "41360_dong_6",
            "name": "진접읍",
            "center": {
                  "lat": 37.642,
                  "lng": 127.2165,
                  "label": "남양주시 진접읍"
            }
      },
      {
            "code": "41360_dong_7",
            "name": "화도읍",
            "center": {
                  "lat": 37.63,
                  "lng": 127.2235,
                  "label": "남양주시 화도읍"
            }
      },
      {
            "code": "41360_dong_8",
            "name": "진건읍",
            "center": {
                  "lat": 37.636,
                  "lng": 127.2235,
                  "label": "남양주시 진건읍"
            }
      },
      {
            "code": "41360_dong_9",
            "name": "오남읍",
            "center": {
                  "lat": 37.642,
                  "lng": 127.2235,
                  "label": "남양주시 오남읍"
            }
      },
      {
            "code": "41360_dong_10",
            "name": "퇴계원읍",
            "center": {
                  "lat": 37.63,
                  "lng": 127.2305,
                  "label": "남양주시 퇴계원읍"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "남양주시",
  },
  {
    code: "41370",
    sidoCode: "41",
    sidoName: "경기도",
    name: "오산시",
    fullName: "경기도 오산시",
    
    
    
    center: {"lat":37.1498,"lng":127.0772,"label":"오산시 중심"},
    dongs: [
      {
            "code": "41370_dong_1",
            "name": "중앙동",
            "center": {
                  "lat": 37.1438,
                  "lng": 127.0702,
                  "label": "오산시 중앙동"
            }
      },
      {
            "code": "41370_dong_2",
            "name": "대원동",
            "center": {
                  "lat": 37.1498,
                  "lng": 127.0702,
                  "label": "오산시 대원동"
            }
      },
      {
            "code": "41370_dong_3",
            "name": "남촌동",
            "center": {
                  "lat": 37.1558,
                  "lng": 127.0702,
                  "label": "오산시 남촌동"
            }
      },
      {
            "code": "41370_dong_4",
            "name": "신장동",
            "center": {
                  "lat": 37.1438,
                  "lng": 127.0772,
                  "label": "오산시 신장동"
            }
      },
      {
            "code": "41370_dong_5",
            "name": "세마동",
            "center": {
                  "lat": 37.1498,
                  "lng": 127.0772,
                  "label": "오산시 세마동"
            }
      },
      {
            "code": "41370_dong_6",
            "name": "초평동",
            "center": {
                  "lat": 37.1558,
                  "lng": 127.0772,
                  "label": "오산시 초평동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "오산시",
  },
  {
    code: "41390",
    sidoCode: "41",
    sidoName: "경기도",
    name: "시흥시",
    fullName: "경기도 시흥시",
    
    
    
    center: {"lat":37.3802,"lng":126.8029,"label":"시흥시(배곧/은계) 중심"},
    dongs: [
      {
            "code": "41390_dong_1",
            "name": "배곧동",
            "center": {
                  "lat": 37.3742,
                  "lng": 126.7959,
                  "label": "시흥시 배곧동"
            }
      },
      {
            "code": "41390_dong_2",
            "name": "정왕동",
            "center": {
                  "lat": 37.3802,
                  "lng": 126.7959,
                  "label": "시흥시 정왕동"
            }
      },
      {
            "code": "41390_dong_3",
            "name": "은계동",
            "center": {
                  "lat": 37.3862,
                  "lng": 126.7959,
                  "label": "시흥시 은계동"
            }
      },
      {
            "code": "41390_dong_4",
            "name": "목감동",
            "center": {
                  "lat": 37.3742,
                  "lng": 126.8029,
                  "label": "시흥시 목감동"
            }
      },
      {
            "code": "41390_dong_5",
            "name": "신천동",
            "center": {
                  "lat": 37.3802,
                  "lng": 126.8029,
                  "label": "시흥시 신천동"
            }
      },
      {
            "code": "41390_dong_6",
            "name": "대야동",
            "center": {
                  "lat": 37.3862,
                  "lng": 126.8029,
                  "label": "시흥시 대야동"
            }
      },
      {
            "code": "41390_dong_7",
            "name": "은행동",
            "center": {
                  "lat": 37.3742,
                  "lng": 126.8099,
                  "label": "시흥시 은행동"
            }
      },
      {
            "code": "41390_dong_8",
            "name": "능곡동",
            "center": {
                  "lat": 37.3802,
                  "lng": 126.8099,
                  "label": "시흥시 능곡동"
            }
      },
      {
            "code": "41390_dong_9",
            "name": "장곡동",
            "center": {
                  "lat": 37.3862,
                  "lng": 126.8099,
                  "label": "시흥시 장곡동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "시흥시",
  },
  {
    code: "41410",
    sidoCode: "41",
    sidoName: "경기도",
    name: "군포시",
    fullName: "경기도 군포시",
    
    
    
    center: {"lat":37.3616,"lng":126.9352,"label":"군포시(산본) 중심"},
    dongs: [
      {
            "code": "41410_dong_1",
            "name": "산본동",
            "center": {
                  "lat": 37.3556,
                  "lng": 126.9282,
                  "label": "군포시 산본동"
            }
      },
      {
            "code": "41410_dong_2",
            "name": "금정동",
            "center": {
                  "lat": 37.3616,
                  "lng": 126.9282,
                  "label": "군포시 금정동"
            }
      },
      {
            "code": "41410_dong_3",
            "name": "당동",
            "center": {
                  "lat": 37.3676,
                  "lng": 126.9282,
                  "label": "군포시 당동"
            }
      },
      {
            "code": "41410_dong_4",
            "name": "당정동",
            "center": {
                  "lat": 37.3556,
                  "lng": 126.9352,
                  "label": "군포시 당정동"
            }
      },
      {
            "code": "41410_dong_5",
            "name": "부곡동",
            "center": {
                  "lat": 37.3616,
                  "lng": 126.9352,
                  "label": "군포시 부곡동"
            }
      },
      {
            "code": "41410_dong_6",
            "name": "군포동",
            "center": {
                  "lat": 37.3676,
                  "lng": 126.9352,
                  "label": "군포시 군포동"
            }
      },
      {
            "code": "41410_dong_7",
            "name": "대야동",
            "center": {
                  "lat": 37.3556,
                  "lng": 126.9422,
                  "label": "군포시 대야동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "군포시",
  },
  {
    code: "41430",
    sidoCode: "41",
    sidoName: "경기도",
    name: "의왕시",
    fullName: "경기도 의왕시",
    
    
    
    center: {"lat":37.3448,"lng":126.9683,"label":"의왕시(백운호수) 중심"},
    dongs: [
      {
            "code": "41430_dong_1",
            "name": "고천동",
            "center": {
                  "lat": 37.3388,
                  "lng": 126.9613,
                  "label": "의왕시 고천동"
            }
      },
      {
            "code": "41430_dong_2",
            "name": "오전동",
            "center": {
                  "lat": 37.3448,
                  "lng": 126.9613,
                  "label": "의왕시 오전동"
            }
      },
      {
            "code": "41430_dong_3",
            "name": "부곡동",
            "center": {
                  "lat": 37.3508,
                  "lng": 126.9613,
                  "label": "의왕시 부곡동"
            }
      },
      {
            "code": "41430_dong_4",
            "name": "내손동",
            "center": {
                  "lat": 37.3388,
                  "lng": 126.9683,
                  "label": "의왕시 내손동"
            }
      },
      {
            "code": "41430_dong_5",
            "name": "청계동",
            "center": {
                  "lat": 37.3448,
                  "lng": 126.9683,
                  "label": "의왕시 청계동"
            }
      },
      {
            "code": "41430_dong_6",
            "name": "포일동",
            "center": {
                  "lat": 37.3508,
                  "lng": 126.9683,
                  "label": "의왕시 포일동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "의왕시",
  },
  {
    code: "41450",
    sidoCode: "41",
    sidoName: "경기도",
    name: "하남시",
    fullName: "경기도 하남시",
    
    
    
    center: {"lat":37.5393,"lng":127.2148,"label":"하남시(미사강변) 중심"},
    dongs: [
      {
            "code": "41450_dong_1",
            "name": "미사동",
            "center": {
                  "lat": 37.5333,
                  "lng": 127.2078,
                  "label": "하남시 미사동"
            }
      },
      {
            "code": "41450_dong_2",
            "name": "망월동",
            "center": {
                  "lat": 37.5393,
                  "lng": 127.2078,
                  "label": "하남시 망월동"
            }
      },
      {
            "code": "41450_dong_3",
            "name": "신장동",
            "center": {
                  "lat": 37.5453,
                  "lng": 127.2078,
                  "label": "하남시 신장동"
            }
      },
      {
            "code": "41450_dong_4",
            "name": "덕풍동",
            "center": {
                  "lat": 37.5333,
                  "lng": 127.2148,
                  "label": "하남시 덕풍동"
            }
      },
      {
            "code": "41450_dong_5",
            "name": "감일동",
            "center": {
                  "lat": 37.5393,
                  "lng": 127.2148,
                  "label": "하남시 감일동"
            }
      },
      {
            "code": "41450_dong_6",
            "name": "위례동",
            "center": {
                  "lat": 37.5453,
                  "lng": 127.2148,
                  "label": "하남시 위례동"
            }
      },
      {
            "code": "41450_dong_7",
            "name": "풍산동",
            "center": {
                  "lat": 37.5333,
                  "lng": 127.2218,
                  "label": "하남시 풍산동"
            }
      },
      {
            "code": "41450_dong_8",
            "name": "초이동",
            "center": {
                  "lat": 37.5393,
                  "lng": 127.2218,
                  "label": "하남시 초이동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "하남시",
  },
  {
    code: "41461",
    sidoCode: "41",
    sidoName: "경기도",
    name: "용인시 처인구",
    fullName: "경기도 용인시 처인구",
    
    parentCity: "용인시",
    isGeneralGu: true,
    center: {"lat":37.2343,"lng":127.2013,"label":"용인시 처인구(역북) 중심"},
    dongs: [
      {
            "code": "41461_dong_1",
            "name": "역북동",
            "center": {
                  "lat": 37.2283,
                  "lng": 127.1943,
                  "label": "용인시 처인구 역북동"
            }
      },
      {
            "code": "41461_dong_2",
            "name": "김량장동",
            "center": {
                  "lat": 37.2343,
                  "lng": 127.1943,
                  "label": "용인시 처인구 김량장동"
            }
      },
      {
            "code": "41461_dong_3",
            "name": "삼가동",
            "center": {
                  "lat": 37.2403,
                  "lng": 127.1943,
                  "label": "용인시 처인구 삼가동"
            }
      },
      {
            "code": "41461_dong_4",
            "name": "유방동",
            "center": {
                  "lat": 37.2283,
                  "lng": 127.2013,
                  "label": "용인시 처인구 유방동"
            }
      },
      {
            "code": "41461_dong_5",
            "name": "고림동",
            "center": {
                  "lat": 37.2343,
                  "lng": 127.2013,
                  "label": "용인시 처인구 고림동"
            }
      },
      {
            "code": "41461_dong_6",
            "name": "포곡읍",
            "center": {
                  "lat": 37.2403,
                  "lng": 127.2013,
                  "label": "용인시 처인구 포곡읍"
            }
      },
      {
            "code": "41461_dong_7",
            "name": "모현읍",
            "center": {
                  "lat": 37.2283,
                  "lng": 127.2083,
                  "label": "용인시 처인구 모현읍"
            }
      },
      {
            "code": "41461_dong_8",
            "name": "이동읍",
            "center": {
                  "lat": 37.2343,
                  "lng": 127.2083,
                  "label": "용인시 처인구 이동읍"
            }
      },
      {
            "code": "41461_dong_9",
            "name": "남사읍",
            "center": {
                  "lat": 37.2403,
                  "lng": 127.2083,
                  "label": "용인시 처인구 남사읍"
            }
      },
      {
            "code": "41461_dong_10",
            "name": "원삼면",
            "center": {
                  "lat": 37.2283,
                  "lng": 127.2153,
                  "label": "용인시 처인구 원삼면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "용인시 처인구",
  },
  {
    code: "41463",
    sidoCode: "41",
    sidoName: "경기도",
    name: "용인시 기흥구",
    fullName: "경기도 용인시 기흥구",
    
    parentCity: "용인시",
    isGeneralGu: true,
    center: {"lat":37.2804,"lng":127.1147,"label":"용인시 기흥구(동백/보정) 중심"},
    dongs: [
      {
            "code": "41463_dong_1",
            "name": "신갈동",
            "center": {
                  "lat": 37.2744,
                  "lng": 127.1077,
                  "label": "용인시 기흥구 신갈동"
            }
      },
      {
            "code": "41463_dong_2",
            "name": "구갈동",
            "center": {
                  "lat": 37.2804,
                  "lng": 127.1077,
                  "label": "용인시 기흥구 구갈동"
            }
      },
      {
            "code": "41463_dong_3",
            "name": "상갈동",
            "center": {
                  "lat": 37.2864,
                  "lng": 127.1077,
                  "label": "용인시 기흥구 상갈동"
            }
      },
      {
            "code": "41463_dong_4",
            "name": "보정동",
            "center": {
                  "lat": 37.2744,
                  "lng": 127.1147,
                  "label": "용인시 기흥구 보정동"
            }
      },
      {
            "code": "41463_dong_5",
            "name": "기흥동",
            "center": {
                  "lat": 37.2804,
                  "lng": 127.1147,
                  "label": "용인시 기흥구 기흥동"
            }
      },
      {
            "code": "41463_dong_6",
            "name": "서농동",
            "center": {
                  "lat": 37.2864,
                  "lng": 127.1147,
                  "label": "용인시 기흥구 서농동"
            }
      },
      {
            "code": "41463_dong_7",
            "name": "구성동",
            "center": {
                  "lat": 37.2744,
                  "lng": 127.1217,
                  "label": "용인시 기흥구 구성동"
            }
      },
      {
            "code": "41463_dong_8",
            "name": "마북동",
            "center": {
                  "lat": 37.2804,
                  "lng": 127.1217,
                  "label": "용인시 기흥구 마북동"
            }
      },
      {
            "code": "41463_dong_9",
            "name": "동백동",
            "center": {
                  "lat": 37.2864,
                  "lng": 127.1217,
                  "label": "용인시 기흥구 동백동"
            }
      },
      {
            "code": "41463_dong_10",
            "name": "상하동",
            "center": {
                  "lat": 37.2744,
                  "lng": 127.1287,
                  "label": "용인시 기흥구 상하동"
            }
      },
      {
            "code": "41463_dong_11",
            "name": "영덕동",
            "center": {
                  "lat": 37.2804,
                  "lng": 127.1287,
                  "label": "용인시 기흥구 영덕동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "용인시 기흥구",
  },
  {
    code: "41465",
    sidoCode: "41",
    sidoName: "경기도",
    name: "용인시 수지구",
    fullName: "경기도 용인시 수지구",
    legacyCode: "gyeonggi_yongin_suji",
    parentCity: "용인시",
    isGeneralGu: true,
    center: {"lat":37.322,"lng":127.0975,"label":"용인시 수지구(동천/성복) 중심"},
    dongs: [
      {
            "code": "41465_dong_1",
            "name": "풍덕천동",
            "center": {
                  "lat": 37.316,
                  "lng": 127.0905,
                  "label": "용인시 수지구 풍덕천동"
            }
      },
      {
            "code": "41465_dong_2",
            "name": "신봉동",
            "center": {
                  "lat": 37.322,
                  "lng": 127.0905,
                  "label": "용인시 수지구 신봉동"
            }
      },
      {
            "code": "41465_dong_3",
            "name": "죽전동",
            "center": {
                  "lat": 37.328,
                  "lng": 127.0905,
                  "label": "용인시 수지구 죽전동"
            }
      },
      {
            "code": "41465_dong_4",
            "name": "동천동",
            "center": {
                  "lat": 37.316,
                  "lng": 127.0975,
                  "label": "용인시 수지구 동천동"
            }
      },
      {
            "code": "41465_dong_5",
            "name": "상현동",
            "center": {
                  "lat": 37.322,
                  "lng": 127.0975,
                  "label": "용인시 수지구 상현동"
            }
      },
      {
            "code": "41465_dong_6",
            "name": "성복동",
            "center": {
                  "lat": 37.328,
                  "lng": 127.0975,
                  "label": "용인시 수지구 성복동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "용인시 수지구",
  },
  {
    code: "41480",
    sidoCode: "41",
    sidoName: "경기도",
    name: "파주시",
    fullName: "경기도 파주시",
    
    
    
    center: {"lat":37.76,"lng":126.7798,"label":"파주시(운정) 중심"},
    dongs: [
      {
            "code": "41480_dong_1",
            "name": "운정동",
            "center": {
                  "lat": 37.754,
                  "lng": 126.7728,
                  "label": "파주시 운정동"
            }
      },
      {
            "code": "41480_dong_2",
            "name": "목동동",
            "center": {
                  "lat": 37.76,
                  "lng": 126.7728,
                  "label": "파주시 목동동"
            }
      },
      {
            "code": "41480_dong_3",
            "name": "와동동",
            "center": {
                  "lat": 37.766,
                  "lng": 126.7728,
                  "label": "파주시 와동동"
            }
      },
      {
            "code": "41480_dong_4",
            "name": "야당동",
            "center": {
                  "lat": 37.754,
                  "lng": 126.7798,
                  "label": "파주시 야당동"
            }
      },
      {
            "code": "41480_dong_5",
            "name": "금촌동",
            "center": {
                  "lat": 37.76,
                  "lng": 126.7798,
                  "label": "파주시 금촌동"
            }
      },
      {
            "code": "41480_dong_6",
            "name": "문산읍",
            "center": {
                  "lat": 37.766,
                  "lng": 126.7798,
                  "label": "파주시 문산읍"
            }
      },
      {
            "code": "41480_dong_7",
            "name": "교하동",
            "center": {
                  "lat": 37.754,
                  "lng": 126.7868,
                  "label": "파주시 교하동"
            }
      },
      {
            "code": "41480_dong_8",
            "name": "조리읍",
            "center": {
                  "lat": 37.76,
                  "lng": 126.7868,
                  "label": "파주시 조리읍"
            }
      },
      {
            "code": "41480_dong_9",
            "name": "헤이리",
            "center": {
                  "lat": 37.766,
                  "lng": 126.7868,
                  "label": "파주시 헤이리"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "파주시",
  },
  {
    code: "41500",
    sidoCode: "41",
    sidoName: "경기도",
    name: "이천시",
    fullName: "경기도 이천시",
    
    
    
    center: {"lat":37.2723,"lng":127.435,"label":"이천시 중심"},
    dongs: [
      {
            "code": "41500_dong_1",
            "name": "창전동",
            "center": {
                  "lat": 37.2663,
                  "lng": 127.428,
                  "label": "이천시 창전동"
            }
      },
      {
            "code": "41500_dong_2",
            "name": "중리동",
            "center": {
                  "lat": 37.2723,
                  "lng": 127.428,
                  "label": "이천시 중리동"
            }
      },
      {
            "code": "41500_dong_3",
            "name": "관고동",
            "center": {
                  "lat": 37.2783,
                  "lng": 127.428,
                  "label": "이천시 관고동"
            }
      },
      {
            "code": "41500_dong_4",
            "name": "증포동",
            "center": {
                  "lat": 37.2663,
                  "lng": 127.435,
                  "label": "이천시 증포동"
            }
      },
      {
            "code": "41500_dong_5",
            "name": "부발읍",
            "center": {
                  "lat": 37.2723,
                  "lng": 127.435,
                  "label": "이천시 부발읍"
            }
      },
      {
            "code": "41500_dong_6",
            "name": "장호원읍",
            "center": {
                  "lat": 37.2783,
                  "lng": 127.435,
                  "label": "이천시 장호원읍"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "이천시",
  },
  {
    code: "41550",
    sidoCode: "41",
    sidoName: "경기도",
    name: "안성시",
    fullName: "경기도 안성시",
    
    
    
    center: {"lat":37.008,"lng":127.2797,"label":"안성시 중심"},
    dongs: [
      {
            "code": "41550_dong_1",
            "name": "안성동",
            "center": {
                  "lat": 37.002,
                  "lng": 127.2727,
                  "label": "안성시 안성동"
            }
      },
      {
            "code": "41550_dong_2",
            "name": "공도읍",
            "center": {
                  "lat": 37.008,
                  "lng": 127.2727,
                  "label": "안성시 공도읍"
            }
      },
      {
            "code": "41550_dong_3",
            "name": "대덕면",
            "center": {
                  "lat": 37.014,
                  "lng": 127.2727,
                  "label": "안성시 대덕면"
            }
      },
      {
            "code": "41550_dong_4",
            "name": "죽산면",
            "center": {
                  "lat": 37.002,
                  "lng": 127.2797,
                  "label": "안성시 죽산면"
            }
      },
      {
            "code": "41550_dong_5",
            "name": "일죽면",
            "center": {
                  "lat": 37.008,
                  "lng": 127.2797,
                  "label": "안성시 일죽면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "안성시",
  },
  {
    code: "41570",
    sidoCode: "41",
    sidoName: "경기도",
    name: "김포시",
    fullName: "경기도 김포시",
    
    
    
    center: {"lat":37.6153,"lng":126.7157,"label":"김포시(구래/사우) 중심"},
    dongs: [
      {
            "code": "41570_dong_1",
            "name": "구래동",
            "center": {
                  "lat": 37.6093,
                  "lng": 126.7087,
                  "label": "김포시 구래동"
            }
      },
      {
            "code": "41570_dong_2",
            "name": "장기동",
            "center": {
                  "lat": 37.6153,
                  "lng": 126.7087,
                  "label": "김포시 장기동"
            }
      },
      {
            "code": "41570_dong_3",
            "name": "운양동",
            "center": {
                  "lat": 37.6213,
                  "lng": 126.7087,
                  "label": "김포시 운양동"
            }
      },
      {
            "code": "41570_dong_4",
            "name": "사우동",
            "center": {
                  "lat": 37.6093,
                  "lng": 126.7157,
                  "label": "김포시 사우동"
            }
      },
      {
            "code": "41570_dong_5",
            "name": "풍무동",
            "center": {
                  "lat": 37.6153,
                  "lng": 126.7157,
                  "label": "김포시 풍무동"
            }
      },
      {
            "code": "41570_dong_6",
            "name": "걸포동",
            "center": {
                  "lat": 37.6213,
                  "lng": 126.7157,
                  "label": "김포시 걸포동"
            }
      },
      {
            "code": "41570_dong_7",
            "name": "통진읍",
            "center": {
                  "lat": 37.6093,
                  "lng": 126.7227,
                  "label": "김포시 통진읍"
            }
      },
      {
            "code": "41570_dong_8",
            "name": "고촌읍",
            "center": {
                  "lat": 37.6153,
                  "lng": 126.7227,
                  "label": "김포시 고촌읍"
            }
      },
      {
            "code": "41570_dong_9",
            "name": "양촌읍",
            "center": {
                  "lat": 37.6213,
                  "lng": 126.7227,
                  "label": "김포시 양촌읍"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "김포시",
  },
  {
    code: "41590",
    sidoCode: "41",
    sidoName: "경기도",
    name: "화성시",
    fullName: "경기도 화성시",
    
    
    
    center: {"lat":37.1995,"lng":126.8315,"label":"화성시(동탄/향남/새솔) 중심"},
    dongs: [
      {
            "code": "41590_dong_1",
            "name": "동탄동",
            "center": {
                  "lat": 37.1935,
                  "lng": 126.8245,
                  "label": "화성시 동탄동"
            }
      },
      {
            "code": "41590_dong_2",
            "name": "병점동",
            "center": {
                  "lat": 37.1995,
                  "lng": 126.8245,
                  "label": "화성시 병점동"
            }
      },
      {
            "code": "41590_dong_3",
            "name": "봉담읍",
            "center": {
                  "lat": 37.2055,
                  "lng": 126.8245,
                  "label": "화성시 봉담읍"
            }
      },
      {
            "code": "41590_dong_4",
            "name": "향남읍",
            "center": {
                  "lat": 37.1935,
                  "lng": 126.8315,
                  "label": "화성시 향남읍"
            }
      },
      {
            "code": "41590_dong_5",
            "name": "남양읍",
            "center": {
                  "lat": 37.1995,
                  "lng": 126.8315,
                  "label": "화성시 남양읍"
            }
      },
      {
            "code": "41590_dong_6",
            "name": "우정읍",
            "center": {
                  "lat": 37.2055,
                  "lng": 126.8315,
                  "label": "화성시 우정읍"
            }
      },
      {
            "code": "41590_dong_7",
            "name": "새솔동",
            "center": {
                  "lat": 37.1935,
                  "lng": 126.8385,
                  "label": "화성시 새솔동"
            }
      },
      {
            "code": "41590_dong_8",
            "name": "진안동",
            "center": {
                  "lat": 37.1995,
                  "lng": 126.8385,
                  "label": "화성시 진안동"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "화성시",
  },
  {
    code: "41610",
    sidoCode: "41",
    sidoName: "경기도",
    name: "광주시",
    fullName: "경기도 광주시",
    
    
    
    center: {"lat":37.4294,"lng":127.2551,"label":"경기 광주시 중심"},
    dongs: [
      {
            "code": "41610_dong_1",
            "name": "경안동",
            "center": {
                  "lat": 37.4234,
                  "lng": 127.2481,
                  "label": "광주시 경안동"
            }
      },
      {
            "code": "41610_dong_2",
            "name": "송정동",
            "center": {
                  "lat": 37.4294,
                  "lng": 127.2481,
                  "label": "광주시 송정동"
            }
      },
      {
            "code": "41610_dong_3",
            "name": "광남동",
            "center": {
                  "lat": 37.4354,
                  "lng": 127.2481,
                  "label": "광주시 광남동"
            }
      },
      {
            "code": "41610_dong_4",
            "name": "태전동",
            "center": {
                  "lat": 37.4234,
                  "lng": 127.2551,
                  "label": "광주시 태전동"
            }
      },
      {
            "code": "41610_dong_5",
            "name": "오포읍",
            "center": {
                  "lat": 37.4294,
                  "lng": 127.2551,
                  "label": "광주시 오포읍"
            }
      },
      {
            "code": "41610_dong_6",
            "name": "초월읍",
            "center": {
                  "lat": 37.4354,
                  "lng": 127.2551,
                  "label": "광주시 초월읍"
            }
      },
      {
            "code": "41610_dong_7",
            "name": "곤지암읍",
            "center": {
                  "lat": 37.4234,
                  "lng": 127.2621,
                  "label": "광주시 곤지암읍"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "광주시",
  },
  {
    code: "41630",
    sidoCode: "41",
    sidoName: "경기도",
    name: "양주시",
    fullName: "경기도 양주시",
    
    
    
    center: {"lat":37.7853,"lng":127.0458,"label":"양주시(옥정/회천) 중심"},
    dongs: [
      {
            "code": "41630_dong_1",
            "name": "옥정동",
            "center": {
                  "lat": 37.7793,
                  "lng": 127.0388,
                  "label": "양주시 옥정동"
            }
      },
      {
            "code": "41630_dong_2",
            "name": "회천동",
            "center": {
                  "lat": 37.7853,
                  "lng": 127.0388,
                  "label": "양주시 회천동"
            }
      },
      {
            "code": "41630_dong_3",
            "name": "고읍동",
            "center": {
                  "lat": 37.7913,
                  "lng": 127.0388,
                  "label": "양주시 고읍동"
            }
      },
      {
            "code": "41630_dong_4",
            "name": "삼숭동",
            "center": {
                  "lat": 37.7793,
                  "lng": 127.0458,
                  "label": "양주시 삼숭동"
            }
      },
      {
            "code": "41630_dong_5",
            "name": "백석읍",
            "center": {
                  "lat": 37.7853,
                  "lng": 127.0458,
                  "label": "양주시 백석읍"
            }
      },
      {
            "code": "41630_dong_6",
            "name": "광적면",
            "center": {
                  "lat": 37.7913,
                  "lng": 127.0458,
                  "label": "양주시 광적면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "양주시",
  },
  {
    code: "41650",
    sidoCode: "41",
    sidoName: "경기도",
    name: "포천시",
    fullName: "경기도 포천시",
    
    
    
    center: {"lat":37.8949,"lng":127.2003,"label":"포천시 중심"},
    dongs: [
      {
            "code": "41650_dong_1",
            "name": "포천동",
            "center": {
                  "lat": 37.8889,
                  "lng": 127.1933,
                  "label": "포천시 포천동"
            }
      },
      {
            "code": "41650_dong_2",
            "name": "선단동",
            "center": {
                  "lat": 37.8949,
                  "lng": 127.1933,
                  "label": "포천시 선단동"
            }
      },
      {
            "code": "41650_dong_3",
            "name": "소흘읍",
            "center": {
                  "lat": 37.9009,
                  "lng": 127.1933,
                  "label": "포천시 소흘읍"
            }
      },
      {
            "code": "41650_dong_4",
            "name": "신북면",
            "center": {
                  "lat": 37.8889,
                  "lng": 127.2003,
                  "label": "포천시 신북면"
            }
      },
      {
            "code": "41650_dong_5",
            "name": "일동면",
            "center": {
                  "lat": 37.8949,
                  "lng": 127.2003,
                  "label": "포천시 일동면"
            }
      },
      {
            "code": "41650_dong_6",
            "name": "이동면",
            "center": {
                  "lat": 37.9009,
                  "lng": 127.2003,
                  "label": "포천시 이동면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "포천시",
  },
  {
    code: "41670",
    sidoCode: "41",
    sidoName: "경기도",
    name: "여주시",
    fullName: "경기도 여주시",
    
    
    
    center: {"lat":37.2983,"lng":127.6371,"label":"여주시 중심"},
    dongs: [
      {
            "code": "41670_dong_1",
            "name": "여흥동",
            "center": {
                  "lat": 37.2923,
                  "lng": 127.6301,
                  "label": "여주시 여흥동"
            }
      },
      {
            "code": "41670_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 37.2983,
                  "lng": 127.6301,
                  "label": "여주시 중앙동"
            }
      },
      {
            "code": "41670_dong_3",
            "name": "오학동",
            "center": {
                  "lat": 37.3043,
                  "lng": 127.6301,
                  "label": "여주시 오학동"
            }
      },
      {
            "code": "41670_dong_4",
            "name": "가남읍",
            "center": {
                  "lat": 37.2923,
                  "lng": 127.6371,
                  "label": "여주시 가남읍"
            }
      },
      {
            "code": "41670_dong_5",
            "name": "세종대왕면",
            "center": {
                  "lat": 37.2983,
                  "lng": 127.6371,
                  "label": "여주시 세종대왕면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "여주시",
  },
  {
    code: "41800",
    sidoCode: "41",
    sidoName: "경기도",
    name: "연천군",
    fullName: "경기도 연천군",
    
    
    
    center: {"lat":38.0964,"lng":127.0747,"label":"연천군 중심"},
    dongs: [
      {
            "code": "41800_dong_1",
            "name": "연천읍",
            "center": {
                  "lat": 38.0904,
                  "lng": 127.0677,
                  "label": "연천군 연천읍"
            }
      },
      {
            "code": "41800_dong_2",
            "name": "전곡읍",
            "center": {
                  "lat": 38.0964,
                  "lng": 127.0677,
                  "label": "연천군 전곡읍"
            }
      },
      {
            "code": "41800_dong_3",
            "name": "군남면",
            "center": {
                  "lat": 38.1024,
                  "lng": 127.0677,
                  "label": "연천군 군남면"
            }
      },
      {
            "code": "41800_dong_4",
            "name": "청산면",
            "center": {
                  "lat": 38.0904,
                  "lng": 127.0747,
                  "label": "연천군 청산면"
            }
      },
      {
            "code": "41800_dong_5",
            "name": "백학면",
            "center": {
                  "lat": 38.0964,
                  "lng": 127.0747,
                  "label": "연천군 백학면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "연천군",
  },
  {
    code: "41820",
    sidoCode: "41",
    sidoName: "경기도",
    name: "가평군",
    fullName: "경기도 가평군",
    
    
    
    center: {"lat":37.8315,"lng":127.5097,"label":"가평군(청평/설악) 중심"},
    dongs: [
      {
            "code": "41820_dong_1",
            "name": "가평읍",
            "center": {
                  "lat": 37.8255,
                  "lng": 127.5027,
                  "label": "가평군 가평읍"
            }
      },
      {
            "code": "41820_dong_2",
            "name": "설악면",
            "center": {
                  "lat": 37.8315,
                  "lng": 127.5027,
                  "label": "가평군 설악면"
            }
      },
      {
            "code": "41820_dong_3",
            "name": "청평면",
            "center": {
                  "lat": 37.8375,
                  "lng": 127.5027,
                  "label": "가평군 청평면"
            }
      },
      {
            "code": "41820_dong_4",
            "name": "상면",
            "center": {
                  "lat": 37.8255,
                  "lng": 127.5097,
                  "label": "가평군 상면"
            }
      },
      {
            "code": "41820_dong_5",
            "name": "조종면",
            "center": {
                  "lat": 37.8315,
                  "lng": 127.5097,
                  "label": "가평군 조종면"
            }
      },
      {
            "code": "41820_dong_6",
            "name": "북면",
            "center": {
                  "lat": 37.8375,
                  "lng": 127.5097,
                  "label": "가평군 북면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "가평군",
  },
  {
    code: "41830",
    sidoCode: "41",
    sidoName: "경기도",
    name: "양평군",
    fullName: "경기도 양평군",
    
    
    
    center: {"lat":37.4917,"lng":127.4876,"label":"양평군 중심"},
    dongs: [
      {
            "code": "41830_dong_1",
            "name": "양평읍",
            "center": {
                  "lat": 37.4857,
                  "lng": 127.4806,
                  "label": "양평군 양평읍"
            }
      },
      {
            "code": "41830_dong_2",
            "name": "강상면",
            "center": {
                  "lat": 37.4917,
                  "lng": 127.4806,
                  "label": "양평군 강상면"
            }
      },
      {
            "code": "41830_dong_3",
            "name": "강하면",
            "center": {
                  "lat": 37.4977,
                  "lng": 127.4806,
                  "label": "양평군 강하면"
            }
      },
      {
            "code": "41830_dong_4",
            "name": "양서면",
            "center": {
                  "lat": 37.4857,
                  "lng": 127.4876,
                  "label": "양평군 양서면"
            }
      },
      {
            "code": "41830_dong_5",
            "name": "옥천면",
            "center": {
                  "lat": 37.4917,
                  "lng": 127.4876,
                  "label": "양평군 옥천면"
            }
      },
      {
            "code": "41830_dong_6",
            "name": "서종면",
            "center": {
                  "lat": 37.4977,
                  "lng": 127.4876,
                  "label": "양평군 서종면"
            }
      },
      {
            "code": "41830_dong_7",
            "name": "용문면",
            "center": {
                  "lat": 37.4857,
                  "lng": 127.4946,
                  "label": "양평군 용문면"
            }
      }
],
    isActive: true,
    city: "경기도",
    gu: "양평군",
  },
  {
    code: "42110",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "춘천시",
    fullName: "강원특별자치도 춘천시",
    legacyCode: "gangwon_chuncheon",
    
    
    center: {"lat":37.8813,"lng":127.7298,"label":"춘천시(명동/온의동) 중심"},
    dongs: [
      {
            "code": "42110_dong_1",
            "name": "온의동",
            "center": {
                  "lat": 37.8753,
                  "lng": 127.7228,
                  "label": "춘천시 온의동"
            }
      },
      {
            "code": "42110_dong_2",
            "name": "퇴계동",
            "center": {
                  "lat": 37.8813,
                  "lng": 127.7228,
                  "label": "춘천시 퇴계동"
            }
      },
      {
            "code": "42110_dong_3",
            "name": "석사동",
            "center": {
                  "lat": 37.8873,
                  "lng": 127.7228,
                  "label": "춘천시 석사동"
            }
      },
      {
            "code": "42110_dong_4",
            "name": "후평동",
            "center": {
                  "lat": 37.8753,
                  "lng": 127.7298,
                  "label": "춘천시 후평동"
            }
      },
      {
            "code": "42110_dong_5",
            "name": "효자동",
            "center": {
                  "lat": 37.8813,
                  "lng": 127.7298,
                  "label": "춘천시 효자동"
            }
      },
      {
            "code": "42110_dong_6",
            "name": "조운동",
            "center": {
                  "lat": 37.8873,
                  "lng": 127.7298,
                  "label": "춘천시 조운동"
            }
      },
      {
            "code": "42110_dong_7",
            "name": "약사명동",
            "center": {
                  "lat": 37.8753,
                  "lng": 127.7368,
                  "label": "춘천시 약사명동"
            }
      },
      {
            "code": "42110_dong_8",
            "name": "신북읍",
            "center": {
                  "lat": 37.8813,
                  "lng": 127.7368,
                  "label": "춘천시 신북읍"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "춘천시",
  },
  {
    code: "42130",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "원주시",
    fullName: "강원특별자치도 원주시",
    
    
    
    center: {"lat":37.3422,"lng":127.9202,"label":"원주시(무실/혁신) 중심"},
    dongs: [
      {
            "code": "42130_dong_1",
            "name": "무실동",
            "center": {
                  "lat": 37.3362,
                  "lng": 127.9132,
                  "label": "원주시 무실동"
            }
      },
      {
            "code": "42130_dong_2",
            "name": "단구동",
            "center": {
                  "lat": 37.3422,
                  "lng": 127.9132,
                  "label": "원주시 단구동"
            }
      },
      {
            "code": "42130_dong_3",
            "name": "반곡관설동",
            "center": {
                  "lat": 37.3482,
                  "lng": 127.9132,
                  "label": "원주시 반곡관설동"
            }
      },
      {
            "code": "42130_dong_4",
            "name": "단계동",
            "center": {
                  "lat": 37.3362,
                  "lng": 127.9202,
                  "label": "원주시 단계동"
            }
      },
      {
            "code": "42130_dong_5",
            "name": "중앙동",
            "center": {
                  "lat": 37.3422,
                  "lng": 127.9202,
                  "label": "원주시 중앙동"
            }
      },
      {
            "code": "42130_dong_6",
            "name": "일산동",
            "center": {
                  "lat": 37.3482,
                  "lng": 127.9202,
                  "label": "원주시 일산동"
            }
      },
      {
            "code": "42130_dong_7",
            "name": "태장동",
            "center": {
                  "lat": 37.3362,
                  "lng": 127.9272,
                  "label": "원주시 태장동"
            }
      },
      {
            "code": "42130_dong_8",
            "name": "문막읍",
            "center": {
                  "lat": 37.3422,
                  "lng": 127.9272,
                  "label": "원주시 문막읍"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "원주시",
  },
  {
    code: "42150",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "강릉시",
    fullName: "강원특별자치도 강릉시",
    legacyCode: "gangwon_gangneung",
    
    
    center: {"lat":37.7519,"lng":128.8761,"label":"강릉시(교동/안목/초당) 중심"},
    dongs: [
      {
            "code": "42150_dong_1",
            "name": "교동",
            "center": {
                  "lat": 37.7459,
                  "lng": 128.8691,
                  "label": "강릉시 교동"
            }
      },
      {
            "code": "42150_dong_2",
            "name": "초당동",
            "center": {
                  "lat": 37.7519,
                  "lng": 128.8691,
                  "label": "강릉시 초당동"
            }
      },
      {
            "code": "42150_dong_3",
            "name": "견소동",
            "center": {
                  "lat": 37.7579,
                  "lng": 128.8691,
                  "label": "강릉시 견소동"
            }
      },
      {
            "code": "42150_dong_4",
            "name": "포남동",
            "center": {
                  "lat": 37.7459,
                  "lng": 128.8761,
                  "label": "강릉시 포남동"
            }
      },
      {
            "code": "42150_dong_5",
            "name": "홍제동",
            "center": {
                  "lat": 37.7519,
                  "lng": 128.8761,
                  "label": "강릉시 홍제동"
            }
      },
      {
            "code": "42150_dong_6",
            "name": "중앙동",
            "center": {
                  "lat": 37.7579,
                  "lng": 128.8761,
                  "label": "강릉시 중앙동"
            }
      },
      {
            "code": "42150_dong_7",
            "name": "옥천동",
            "center": {
                  "lat": 37.7459,
                  "lng": 128.8831,
                  "label": "강릉시 옥천동"
            }
      },
      {
            "code": "42150_dong_8",
            "name": "주문진읍",
            "center": {
                  "lat": 37.7519,
                  "lng": 128.8831,
                  "label": "강릉시 주문진읍"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "강릉시",
  },
  {
    code: "42170",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "동해시",
    fullName: "강원특별자치도 동해시",
    
    
    
    center: {"lat":37.5247,"lng":129.1143,"label":"동해시(천곡동) 중심"},
    dongs: [
      {
            "code": "42170_dong_1",
            "name": "천곡동",
            "center": {
                  "lat": 37.5187,
                  "lng": 129.1073,
                  "label": "동해시 천곡동"
            }
      },
      {
            "code": "42170_dong_2",
            "name": "송정동",
            "center": {
                  "lat": 37.5247,
                  "lng": 129.1073,
                  "label": "동해시 송정동"
            }
      },
      {
            "code": "42170_dong_3",
            "name": "북삼동",
            "center": {
                  "lat": 37.5307,
                  "lng": 129.1073,
                  "label": "동해시 북삼동"
            }
      },
      {
            "code": "42170_dong_4",
            "name": "부곡동",
            "center": {
                  "lat": 37.5187,
                  "lng": 129.1143,
                  "label": "동해시 부곡동"
            }
      },
      {
            "code": "42170_dong_5",
            "name": "동호동",
            "center": {
                  "lat": 37.5247,
                  "lng": 129.1143,
                  "label": "동해시 동호동"
            }
      },
      {
            "code": "42170_dong_6",
            "name": "발한동",
            "center": {
                  "lat": 37.5307,
                  "lng": 129.1143,
                  "label": "동해시 발한동"
            }
      },
      {
            "code": "42170_dong_7",
            "name": "묵호동",
            "center": {
                  "lat": 37.5187,
                  "lng": 129.1213,
                  "label": "동해시 묵호동"
            }
      },
      {
            "code": "42170_dong_8",
            "name": "북평동",
            "center": {
                  "lat": 37.5247,
                  "lng": 129.1213,
                  "label": "동해시 북평동"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "동해시",
  },
  {
    code: "42190",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "태백시",
    fullName: "강원특별자치도 태백시",
    
    
    
    center: {"lat":37.1641,"lng":128.9856,"label":"태백시 중심"},
    dongs: [
      {
            "code": "42190_dong_1",
            "name": "황지동",
            "center": {
                  "lat": 37.1581,
                  "lng": 128.9786,
                  "label": "태백시 황지동"
            }
      },
      {
            "code": "42190_dong_2",
            "name": "황연동",
            "center": {
                  "lat": 37.1641,
                  "lng": 128.9786,
                  "label": "태백시 황연동"
            }
      },
      {
            "code": "42190_dong_3",
            "name": "삼수동",
            "center": {
                  "lat": 37.1701,
                  "lng": 128.9786,
                  "label": "태백시 삼수동"
            }
      },
      {
            "code": "42190_dong_4",
            "name": "상장동",
            "center": {
                  "lat": 37.1581,
                  "lng": 128.9856,
                  "label": "태백시 상장동"
            }
      },
      {
            "code": "42190_dong_5",
            "name": "문곡소도동",
            "center": {
                  "lat": 37.1641,
                  "lng": 128.9856,
                  "label": "태백시 문곡소도동"
            }
      },
      {
            "code": "42190_dong_6",
            "name": "장성동",
            "center": {
                  "lat": 37.1701,
                  "lng": 128.9856,
                  "label": "태백시 장성동"
            }
      },
      {
            "code": "42190_dong_7",
            "name": "구문소동",
            "center": {
                  "lat": 37.1581,
                  "lng": 128.9926,
                  "label": "태백시 구문소동"
            }
      },
      {
            "code": "42190_dong_8",
            "name": "철암동",
            "center": {
                  "lat": 37.1641,
                  "lng": 128.9926,
                  "label": "태백시 철암동"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "태백시",
  },
  {
    code: "42210",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "속초시",
    fullName: "강원특별자치도 속초시",
    legacyCode: "gangwon_sokcho",
    
    
    center: {"lat":38.207,"lng":128.5918,"label":"속초시(중앙시장/청초호) 중심"},
    dongs: [
      {
            "code": "42210_dong_1",
            "name": "청호동",
            "center": {
                  "lat": 38.201,
                  "lng": 128.5848,
                  "label": "속초시 청호동"
            }
      },
      {
            "code": "42210_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 38.207,
                  "lng": 128.5848,
                  "label": "속초시 중앙동"
            }
      },
      {
            "code": "42210_dong_3",
            "name": "조양동",
            "center": {
                  "lat": 38.213,
                  "lng": 128.5848,
                  "label": "속초시 조양동"
            }
      },
      {
            "code": "42210_dong_4",
            "name": "교동",
            "center": {
                  "lat": 38.201,
                  "lng": 128.5918,
                  "label": "속초시 교동"
            }
      },
      {
            "code": "42210_dong_5",
            "name": "노학동",
            "center": {
                  "lat": 38.207,
                  "lng": 128.5918,
                  "label": "속초시 노학동"
            }
      },
      {
            "code": "42210_dong_6",
            "name": "영랑동",
            "center": {
                  "lat": 38.213,
                  "lng": 128.5918,
                  "label": "속초시 영랑동"
            }
      },
      {
            "code": "42210_dong_7",
            "name": "동명동",
            "center": {
                  "lat": 38.201,
                  "lng": 128.5988,
                  "label": "속초시 동명동"
            }
      },
      {
            "code": "42210_dong_8",
            "name": "대포동",
            "center": {
                  "lat": 38.207,
                  "lng": 128.5988,
                  "label": "속초시 대포동"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "속초시",
  },
  {
    code: "42230",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "삼척시",
    fullName: "강원특별자치도 삼척시",
    
    
    
    center: {"lat":37.4499,"lng":129.1653,"label":"삼척시 중심"},
    dongs: [
      {
            "code": "42230_dong_1",
            "name": "남양동",
            "center": {
                  "lat": 37.4439,
                  "lng": 129.1583,
                  "label": "삼척시 남양동"
            }
      },
      {
            "code": "42230_dong_2",
            "name": "성내동",
            "center": {
                  "lat": 37.4499,
                  "lng": 129.1583,
                  "label": "삼척시 성내동"
            }
      },
      {
            "code": "42230_dong_3",
            "name": "교동",
            "center": {
                  "lat": 37.4559,
                  "lng": 129.1583,
                  "label": "삼척시 교동"
            }
      },
      {
            "code": "42230_dong_4",
            "name": "정라동",
            "center": {
                  "lat": 37.4439,
                  "lng": 129.1653,
                  "label": "삼척시 정라동"
            }
      },
      {
            "code": "42230_dong_5",
            "name": "도계읍",
            "center": {
                  "lat": 37.4499,
                  "lng": 129.1653,
                  "label": "삼척시 도계읍"
            }
      },
      {
            "code": "42230_dong_6",
            "name": "원덕읍",
            "center": {
                  "lat": 37.4559,
                  "lng": 129.1653,
                  "label": "삼척시 원덕읍"
            }
      },
      {
            "code": "42230_dong_7",
            "name": "근덕면",
            "center": {
                  "lat": 37.4439,
                  "lng": 129.1723,
                  "label": "삼척시 근덕면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "삼척시",
  },
  {
    code: "42720",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "홍천군",
    fullName: "강원특별자치도 홍천군",
    
    
    
    center: {"lat":37.6972,"lng":127.8887,"label":"홍천군 중심"},
    dongs: [
      {
            "code": "42720_dong_1",
            "name": "홍천읍",
            "center": {
                  "lat": 37.6912,
                  "lng": 127.8817,
                  "label": "홍천군 홍천읍"
            }
      },
      {
            "code": "42720_dong_2",
            "name": "화촌면",
            "center": {
                  "lat": 37.6972,
                  "lng": 127.8817,
                  "label": "홍천군 화촌면"
            }
      },
      {
            "code": "42720_dong_3",
            "name": "두촌면",
            "center": {
                  "lat": 37.7032,
                  "lng": 127.8817,
                  "label": "홍천군 두촌면"
            }
      },
      {
            "code": "42720_dong_4",
            "name": "내촌면",
            "center": {
                  "lat": 37.6912,
                  "lng": 127.8887,
                  "label": "홍천군 내촌면"
            }
      },
      {
            "code": "42720_dong_5",
            "name": "서석면",
            "center": {
                  "lat": 37.6972,
                  "lng": 127.8887,
                  "label": "홍천군 서석면"
            }
      },
      {
            "code": "42720_dong_6",
            "name": "영귀미면",
            "center": {
                  "lat": 37.7032,
                  "lng": 127.8887,
                  "label": "홍천군 영귀미면"
            }
      },
      {
            "code": "42720_dong_7",
            "name": "남면",
            "center": {
                  "lat": 37.6912,
                  "lng": 127.8957,
                  "label": "홍천군 남면"
            }
      },
      {
            "code": "42720_dong_8",
            "name": "서면",
            "center": {
                  "lat": 37.6972,
                  "lng": 127.8957,
                  "label": "홍천군 서면"
            }
      },
      {
            "code": "42720_dong_9",
            "name": "북방면",
            "center": {
                  "lat": 37.7032,
                  "lng": 127.8957,
                  "label": "홍천군 북방면"
            }
      },
      {
            "code": "42720_dong_10",
            "name": "내면",
            "center": {
                  "lat": 37.6912,
                  "lng": 127.9027,
                  "label": "홍천군 내면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "홍천군",
  },
  {
    code: "42730",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "횡성군",
    fullName: "강원특별자치도 횡성군",
    
    
    
    center: {"lat":37.4918,"lng":127.9851,"label":"횡성군 중심"},
    dongs: [
      {
            "code": "42730_dong_1",
            "name": "횡성읍",
            "center": {
                  "lat": 37.4858,
                  "lng": 127.9781,
                  "label": "횡성군 횡성읍"
            }
      },
      {
            "code": "42730_dong_2",
            "name": "우천면",
            "center": {
                  "lat": 37.4918,
                  "lng": 127.9781,
                  "label": "횡성군 우천면"
            }
      },
      {
            "code": "42730_dong_3",
            "name": "안흥면",
            "center": {
                  "lat": 37.4978,
                  "lng": 127.9781,
                  "label": "횡성군 안흥면"
            }
      },
      {
            "code": "42730_dong_4",
            "name": "둔내면",
            "center": {
                  "lat": 37.4858,
                  "lng": 127.9851,
                  "label": "횡성군 둔내면"
            }
      },
      {
            "code": "42730_dong_5",
            "name": "갑천면",
            "center": {
                  "lat": 37.4918,
                  "lng": 127.9851,
                  "label": "횡성군 갑천면"
            }
      },
      {
            "code": "42730_dong_6",
            "name": "청일면",
            "center": {
                  "lat": 37.4978,
                  "lng": 127.9851,
                  "label": "횡성군 청일면"
            }
      },
      {
            "code": "42730_dong_7",
            "name": "공근면",
            "center": {
                  "lat": 37.4858,
                  "lng": 127.9921,
                  "label": "횡성군 공근면"
            }
      },
      {
            "code": "42730_dong_8",
            "name": "서원면",
            "center": {
                  "lat": 37.4918,
                  "lng": 127.9921,
                  "label": "횡성군 서원면"
            }
      },
      {
            "code": "42730_dong_9",
            "name": "강림면",
            "center": {
                  "lat": 37.4978,
                  "lng": 127.9921,
                  "label": "횡성군 강림면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "횡성군",
  },
  {
    code: "42750",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "영월군",
    fullName: "강원특별자치도 영월군",
    
    
    
    center: {"lat":37.1838,"lng":128.4619,"label":"영월군 중심"},
    dongs: [
      {
            "code": "42750_dong_1",
            "name": "영월읍",
            "center": {
                  "lat": 37.1778,
                  "lng": 128.4549,
                  "label": "영월군 영월읍"
            }
      },
      {
            "code": "42750_dong_2",
            "name": "상동읍",
            "center": {
                  "lat": 37.1838,
                  "lng": 128.4549,
                  "label": "영월군 상동읍"
            }
      },
      {
            "code": "42750_dong_3",
            "name": "산솔면",
            "center": {
                  "lat": 37.1898,
                  "lng": 128.4549,
                  "label": "영월군 산솔면"
            }
      },
      {
            "code": "42750_dong_4",
            "name": "김삿갓면",
            "center": {
                  "lat": 37.1778,
                  "lng": 128.4619,
                  "label": "영월군 김삿갓면"
            }
      },
      {
            "code": "42750_dong_5",
            "name": "북면",
            "center": {
                  "lat": 37.1838,
                  "lng": 128.4619,
                  "label": "영월군 북면"
            }
      },
      {
            "code": "42750_dong_6",
            "name": "남면",
            "center": {
                  "lat": 37.1898,
                  "lng": 128.4619,
                  "label": "영월군 남면"
            }
      },
      {
            "code": "42750_dong_7",
            "name": "한반도면",
            "center": {
                  "lat": 37.1778,
                  "lng": 128.4689,
                  "label": "영월군 한반도면"
            }
      },
      {
            "code": "42750_dong_8",
            "name": "주천면",
            "center": {
                  "lat": 37.1838,
                  "lng": 128.4689,
                  "label": "영월군 주천면"
            }
      },
      {
            "code": "42750_dong_9",
            "name": "무릉도원면",
            "center": {
                  "lat": 37.1898,
                  "lng": 128.4689,
                  "label": "영월군 무릉도원면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "영월군",
  },
  {
    code: "42760",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "평창군",
    fullName: "강원특별자치도 평창군",
    
    
    
    center: {"lat":37.3705,"lng":128.3902,"label":"평창군(대관령) 중심"},
    dongs: [
      {
            "code": "42760_dong_1",
            "name": "평창읍",
            "center": {
                  "lat": 37.3645,
                  "lng": 128.3832,
                  "label": "평창군 평창읍"
            }
      },
      {
            "code": "42760_dong_2",
            "name": "미탄면",
            "center": {
                  "lat": 37.3705,
                  "lng": 128.3832,
                  "label": "평창군 미탄면"
            }
      },
      {
            "code": "42760_dong_3",
            "name": "방림면",
            "center": {
                  "lat": 37.3765,
                  "lng": 128.3832,
                  "label": "평창군 방림면"
            }
      },
      {
            "code": "42760_dong_4",
            "name": "대화면",
            "center": {
                  "lat": 37.3645,
                  "lng": 128.3902,
                  "label": "평창군 대화면"
            }
      },
      {
            "code": "42760_dong_5",
            "name": "봉평면",
            "center": {
                  "lat": 37.3705,
                  "lng": 128.3902,
                  "label": "평창군 봉평면"
            }
      },
      {
            "code": "42760_dong_6",
            "name": "용평면",
            "center": {
                  "lat": 37.3765,
                  "lng": 128.3902,
                  "label": "평창군 용평면"
            }
      },
      {
            "code": "42760_dong_7",
            "name": "진부면",
            "center": {
                  "lat": 37.3645,
                  "lng": 128.3972,
                  "label": "평창군 진부면"
            }
      },
      {
            "code": "42760_dong_8",
            "name": "대관령면",
            "center": {
                  "lat": 37.3705,
                  "lng": 128.3972,
                  "label": "평창군 대관령면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "평창군",
  },
  {
    code: "42770",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "정선군",
    fullName: "강원특별자치도 정선군",
    
    
    
    center: {"lat":37.3806,"lng":128.6608,"label":"정선군 중심"},
    dongs: [
      {
            "code": "42770_dong_1",
            "name": "정선읍",
            "center": {
                  "lat": 37.3746,
                  "lng": 128.6538,
                  "label": "정선군 정선읍"
            }
      },
      {
            "code": "42770_dong_2",
            "name": "고한읍",
            "center": {
                  "lat": 37.3806,
                  "lng": 128.6538,
                  "label": "정선군 고한읍"
            }
      },
      {
            "code": "42770_dong_3",
            "name": "사북읍",
            "center": {
                  "lat": 37.3866,
                  "lng": 128.6538,
                  "label": "정선군 사북읍"
            }
      },
      {
            "code": "42770_dong_4",
            "name": "신동읍",
            "center": {
                  "lat": 37.3746,
                  "lng": 128.6608,
                  "label": "정선군 신동읍"
            }
      },
      {
            "code": "42770_dong_5",
            "name": "화암면",
            "center": {
                  "lat": 37.3806,
                  "lng": 128.6608,
                  "label": "정선군 화암면"
            }
      },
      {
            "code": "42770_dong_6",
            "name": "남면",
            "center": {
                  "lat": 37.3866,
                  "lng": 128.6608,
                  "label": "정선군 남면"
            }
      },
      {
            "code": "42770_dong_7",
            "name": "여량면",
            "center": {
                  "lat": 37.3746,
                  "lng": 128.6678,
                  "label": "정선군 여량면"
            }
      },
      {
            "code": "42770_dong_8",
            "name": "북평면",
            "center": {
                  "lat": 37.3806,
                  "lng": 128.6678,
                  "label": "정선군 북평면"
            }
      },
      {
            "code": "42770_dong_9",
            "name": "임계면",
            "center": {
                  "lat": 37.3866,
                  "lng": 128.6678,
                  "label": "정선군 임계면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "정선군",
  },
  {
    code: "42780",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "철원군",
    fullName: "강원특별자치도 철원군",
    
    
    
    center: {"lat":38.1468,"lng":127.3134,"label":"철원군 중심"},
    dongs: [
      {
            "code": "42780_dong_1",
            "name": "철원읍",
            "center": {
                  "lat": 38.1408,
                  "lng": 127.3064,
                  "label": "철원군 철원읍"
            }
      },
      {
            "code": "42780_dong_2",
            "name": "김화읍",
            "center": {
                  "lat": 38.1468,
                  "lng": 127.3064,
                  "label": "철원군 김화읍"
            }
      },
      {
            "code": "42780_dong_3",
            "name": "갈말읍",
            "center": {
                  "lat": 38.1528,
                  "lng": 127.3064,
                  "label": "철원군 갈말읍"
            }
      },
      {
            "code": "42780_dong_4",
            "name": "동송읍",
            "center": {
                  "lat": 38.1408,
                  "lng": 127.3134,
                  "label": "철원군 동송읍"
            }
      },
      {
            "code": "42780_dong_5",
            "name": "서면",
            "center": {
                  "lat": 38.1468,
                  "lng": 127.3134,
                  "label": "철원군 서면"
            }
      },
      {
            "code": "42780_dong_6",
            "name": "근남면",
            "center": {
                  "lat": 38.1528,
                  "lng": 127.3134,
                  "label": "철원군 근남면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "철원군",
  },
  {
    code: "42790",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "화천군",
    fullName: "강원특별자치도 화천군",
    
    
    
    center: {"lat":38.1062,"lng":127.7082,"label":"화천군 중심"},
    dongs: [
      {
            "code": "42790_dong_1",
            "name": "화천읍",
            "center": {
                  "lat": 38.1002,
                  "lng": 127.7012,
                  "label": "화천군 화천읍"
            }
      },
      {
            "code": "42790_dong_2",
            "name": "간동면",
            "center": {
                  "lat": 38.1062,
                  "lng": 127.7012,
                  "label": "화천군 간동면"
            }
      },
      {
            "code": "42790_dong_3",
            "name": "하남면",
            "center": {
                  "lat": 38.1122,
                  "lng": 127.7012,
                  "label": "화천군 하남면"
            }
      },
      {
            "code": "42790_dong_4",
            "name": "상서면",
            "center": {
                  "lat": 38.1002,
                  "lng": 127.7082,
                  "label": "화천군 상서면"
            }
      },
      {
            "code": "42790_dong_5",
            "name": "사내면",
            "center": {
                  "lat": 38.1062,
                  "lng": 127.7082,
                  "label": "화천군 사내면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "화천군",
  },
  {
    code: "42800",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "양구군",
    fullName: "강원특별자치도 양구군",
    
    
    
    center: {"lat":38.1097,"lng":127.9897,"label":"양구군 중심"},
    dongs: [
      {
            "code": "42800_dong_1",
            "name": "양구읍",
            "center": {
                  "lat": 38.1037,
                  "lng": 127.9827,
                  "label": "양구군 양구읍"
            }
      },
      {
            "code": "42800_dong_2",
            "name": "국토정중앙면",
            "center": {
                  "lat": 38.1097,
                  "lng": 127.9827,
                  "label": "양구군 국토정중앙면"
            }
      },
      {
            "code": "42800_dong_3",
            "name": "동면",
            "center": {
                  "lat": 38.1157,
                  "lng": 127.9827,
                  "label": "양구군 동면"
            }
      },
      {
            "code": "42800_dong_4",
            "name": "방산면",
            "center": {
                  "lat": 38.1037,
                  "lng": 127.9897,
                  "label": "양구군 방산면"
            }
      },
      {
            "code": "42800_dong_5",
            "name": "해안면",
            "center": {
                  "lat": 38.1097,
                  "lng": 127.9897,
                  "label": "양구군 해안면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "양구군",
  },
  {
    code: "42810",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "인제군",
    fullName: "강원특별자치도 인제군",
    
    
    
    center: {"lat":38.0697,"lng":128.1704,"label":"인제군(원대리/원통) 중심"},
    dongs: [
      {
            "code": "42810_dong_1",
            "name": "인제읍",
            "center": {
                  "lat": 38.0637,
                  "lng": 128.1634,
                  "label": "인제군 인제읍"
            }
      },
      {
            "code": "42810_dong_2",
            "name": "남면",
            "center": {
                  "lat": 38.0697,
                  "lng": 128.1634,
                  "label": "인제군 남면"
            }
      },
      {
            "code": "42810_dong_3",
            "name": "북면",
            "center": {
                  "lat": 38.0757,
                  "lng": 128.1634,
                  "label": "인제군 북면"
            }
      },
      {
            "code": "42810_dong_4",
            "name": "기린면",
            "center": {
                  "lat": 38.0637,
                  "lng": 128.1704,
                  "label": "인제군 기린면"
            }
      },
      {
            "code": "42810_dong_5",
            "name": "서화면",
            "center": {
                  "lat": 38.0697,
                  "lng": 128.1704,
                  "label": "인제군 서화면"
            }
      },
      {
            "code": "42810_dong_6",
            "name": "상남면",
            "center": {
                  "lat": 38.0757,
                  "lng": 128.1704,
                  "label": "인제군 상남면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "인제군",
  },
  {
    code: "42820",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "고성군",
    fullName: "강원특별자치도 고성군",
    
    
    
    center: {"lat":38.3806,"lng":128.4678,"label":"강원 고성군 중심"},
    dongs: [
      {
            "code": "42820_dong_1",
            "name": "간성읍",
            "center": {
                  "lat": 38.3746,
                  "lng": 128.4608,
                  "label": "고성군 간성읍"
            }
      },
      {
            "code": "42820_dong_2",
            "name": "거진읍",
            "center": {
                  "lat": 38.3806,
                  "lng": 128.4608,
                  "label": "고성군 거진읍"
            }
      },
      {
            "code": "42820_dong_3",
            "name": "현내면",
            "center": {
                  "lat": 38.3866,
                  "lng": 128.4608,
                  "label": "고성군 현내면"
            }
      },
      {
            "code": "42820_dong_4",
            "name": "죽왕면",
            "center": {
                  "lat": 38.3746,
                  "lng": 128.4678,
                  "label": "고성군 죽왕면"
            }
      },
      {
            "code": "42820_dong_5",
            "name": "토성면",
            "center": {
                  "lat": 38.3806,
                  "lng": 128.4678,
                  "label": "고성군 토성면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "고성군",
  },
  {
    code: "42830",
    sidoCode: "42",
    sidoName: "강원특별자치도",
    name: "양양군",
    fullName: "강원특별자치도 양양군",
    
    
    
    center: {"lat":38.0754,"lng":128.6189,"label":"양양군(서피비치/인구) 중심"},
    dongs: [
      {
            "code": "42830_dong_1",
            "name": "양양읍",
            "center": {
                  "lat": 38.0694,
                  "lng": 128.6119,
                  "label": "양양군 양양읍"
            }
      },
      {
            "code": "42830_dong_2",
            "name": "서면",
            "center": {
                  "lat": 38.0754,
                  "lng": 128.6119,
                  "label": "양양군 서면"
            }
      },
      {
            "code": "42830_dong_3",
            "name": "손양면",
            "center": {
                  "lat": 38.0814,
                  "lng": 128.6119,
                  "label": "양양군 손양면"
            }
      },
      {
            "code": "42830_dong_4",
            "name": "현북면",
            "center": {
                  "lat": 38.0694,
                  "lng": 128.6189,
                  "label": "양양군 현북면"
            }
      },
      {
            "code": "42830_dong_5",
            "name": "현남면",
            "center": {
                  "lat": 38.0754,
                  "lng": 128.6189,
                  "label": "양양군 현남면"
            }
      },
      {
            "code": "42830_dong_6",
            "name": "강현면",
            "center": {
                  "lat": 38.0814,
                  "lng": 128.6189,
                  "label": "양양군 강현면"
            }
      }
],
    isActive: true,
    city: "강원특별자치도",
    gu: "양양군",
  },
  {
    code: "43111",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "청주시 상당구",
    fullName: "충청북도 청주시 상당구",
    legacyCode: "chungbuk_cheongju_sangdang",
    parentCity: "청주시",
    isGeneralGu: true,
    center: {"lat":36.6358,"lng":127.4914,"label":"청주시 상당구(성안길) 중심"},
    dongs: [
      {
            "code": "43111_dong_1",
            "name": "성안동",
            "center": {
                  "lat": 36.6298,
                  "lng": 127.4844,
                  "label": "청주시 상당구 성안동"
            }
      },
      {
            "code": "43111_dong_2",
            "name": "탑대성동",
            "center": {
                  "lat": 36.6358,
                  "lng": 127.4844,
                  "label": "청주시 상당구 탑대성동"
            }
      },
      {
            "code": "43111_dong_3",
            "name": "영운동",
            "center": {
                  "lat": 36.6418,
                  "lng": 127.4844,
                  "label": "청주시 상당구 영운동"
            }
      },
      {
            "code": "43111_dong_4",
            "name": "금천동",
            "center": {
                  "lat": 36.6298,
                  "lng": 127.4914,
                  "label": "청주시 상당구 금천동"
            }
      },
      {
            "code": "43111_dong_5",
            "name": "용담명암산성동",
            "center": {
                  "lat": 36.6358,
                  "lng": 127.4914,
                  "label": "청주시 상당구 용담명암산성동"
            }
      },
      {
            "code": "43111_dong_6",
            "name": "용암동",
            "center": {
                  "lat": 36.6418,
                  "lng": 127.4914,
                  "label": "청주시 상당구 용암동"
            }
      },
      {
            "code": "43111_dong_7",
            "name": "낭성면",
            "center": {
                  "lat": 36.6298,
                  "lng": 127.4984,
                  "label": "청주시 상당구 낭성면"
            }
      },
      {
            "code": "43111_dong_8",
            "name": "미원면",
            "center": {
                  "lat": 36.6358,
                  "lng": 127.4984,
                  "label": "청주시 상당구 미원면"
            }
      },
      {
            "code": "43111_dong_9",
            "name": "가덕면",
            "center": {
                  "lat": 36.6418,
                  "lng": 127.4984,
                  "label": "청주시 상당구 가덕면"
            }
      },
      {
            "code": "43111_dong_10",
            "name": "남일면",
            "center": {
                  "lat": 36.6298,
                  "lng": 127.5054,
                  "label": "청주시 상당구 남일면"
            }
      },
      {
            "code": "43111_dong_11",
            "name": "문의면",
            "center": {
                  "lat": 36.6358,
                  "lng": 127.5054,
                  "label": "청주시 상당구 문의면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "청주시 상당구",
  },
  {
    code: "43112",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "청주시 서원구",
    fullName: "충청북도 청주시 서원구",
    
    parentCity: "청주시",
    isGeneralGu: true,
    center: {"lat":36.6206,"lng":127.4682,"label":"청주시 서원구(산남/성화) 중심"},
    dongs: [
      {
            "code": "43112_dong_1",
            "name": "사직동",
            "center": {
                  "lat": 36.6146,
                  "lng": 127.4612,
                  "label": "청주시 서원구 사직동"
            }
      },
      {
            "code": "43112_dong_2",
            "name": "사창동",
            "center": {
                  "lat": 36.6206,
                  "lng": 127.4612,
                  "label": "청주시 서원구 사창동"
            }
      },
      {
            "code": "43112_dong_3",
            "name": "모충동",
            "center": {
                  "lat": 36.6266,
                  "lng": 127.4612,
                  "label": "청주시 서원구 모충동"
            }
      },
      {
            "code": "43112_dong_4",
            "name": "산남동",
            "center": {
                  "lat": 36.6146,
                  "lng": 127.4682,
                  "label": "청주시 서원구 산남동"
            }
      },
      {
            "code": "43112_dong_5",
            "name": "분평동",
            "center": {
                  "lat": 36.6206,
                  "lng": 127.4682,
                  "label": "청주시 서원구 분평동"
            }
      },
      {
            "code": "43112_dong_6",
            "name": "수곡동",
            "center": {
                  "lat": 36.6266,
                  "lng": 127.4682,
                  "label": "청주시 서원구 수곡동"
            }
      },
      {
            "code": "43112_dong_7",
            "name": "성화개신죽림동",
            "center": {
                  "lat": 36.6146,
                  "lng": 127.4752,
                  "label": "청주시 서원구 성화개신죽림동"
            }
      },
      {
            "code": "43112_dong_8",
            "name": "남이면",
            "center": {
                  "lat": 36.6206,
                  "lng": 127.4752,
                  "label": "청주시 서원구 남이면"
            }
      },
      {
            "code": "43112_dong_9",
            "name": "현도면",
            "center": {
                  "lat": 36.6266,
                  "lng": 127.4752,
                  "label": "청주시 서원구 현도면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "청주시 서원구",
  },
  {
    code: "43113",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "청주시 흥덕구",
    fullName: "충청북도 청주시 흥덕구",
    
    parentCity: "청주시",
    isGeneralGu: true,
    center: {"lat":36.6348,"lng":127.4283,"label":"청주시 흥덕구(복대/오송) 중심"},
    dongs: [
      {
            "code": "43113_dong_1",
            "name": "복대동",
            "center": {
                  "lat": 36.6288,
                  "lng": 127.4213,
                  "label": "청주시 흥덕구 복대동"
            }
      },
      {
            "code": "43113_dong_2",
            "name": "가경동",
            "center": {
                  "lat": 36.6348,
                  "lng": 127.4213,
                  "label": "청주시 흥덕구 가경동"
            }
      },
      {
            "code": "43113_dong_3",
            "name": "봉명동",
            "center": {
                  "lat": 36.6408,
                  "lng": 127.4213,
                  "label": "청주시 흥덕구 봉명동"
            }
      },
      {
            "code": "43113_dong_4",
            "name": "강서동",
            "center": {
                  "lat": 36.6288,
                  "lng": 127.4283,
                  "label": "청주시 흥덕구 강서동"
            }
      },
      {
            "code": "43113_dong_5",
            "name": "오송읍",
            "center": {
                  "lat": 36.6348,
                  "lng": 127.4283,
                  "label": "청주시 흥덕구 오송읍"
            }
      },
      {
            "code": "43113_dong_6",
            "name": "옥산면",
            "center": {
                  "lat": 36.6408,
                  "lng": 127.4283,
                  "label": "청주시 흥덕구 옥산면"
            }
      },
      {
            "code": "43113_dong_7",
            "name": "강내면",
            "center": {
                  "lat": 36.6288,
                  "lng": 127.4353,
                  "label": "청주시 흥덕구 강내면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "청주시 흥덕구",
  },
  {
    code: "43114",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "청주시 청원구",
    fullName: "충청북도 청주시 청원구",
    
    parentCity: "청주시",
    isGeneralGu: true,
    center: {"lat":36.6534,"lng":127.489,"label":"청주시 청원구(율량/오창) 중심"},
    dongs: [
      {
            "code": "43114_dong_1",
            "name": "율량사천동",
            "center": {
                  "lat": 36.6474,
                  "lng": 127.482,
                  "label": "청주시 청원구 율량사천동"
            }
      },
      {
            "code": "43114_dong_2",
            "name": "우암동",
            "center": {
                  "lat": 36.6534,
                  "lng": 127.482,
                  "label": "청주시 청원구 우암동"
            }
      },
      {
            "code": "43114_dong_3",
            "name": "내덕동",
            "center": {
                  "lat": 36.6594,
                  "lng": 127.482,
                  "label": "청주시 청원구 내덕동"
            }
      },
      {
            "code": "43114_dong_4",
            "name": "오근장동",
            "center": {
                  "lat": 36.6474,
                  "lng": 127.489,
                  "label": "청주시 청원구 오근장동"
            }
      },
      {
            "code": "43114_dong_5",
            "name": "오창읍",
            "center": {
                  "lat": 36.6534,
                  "lng": 127.489,
                  "label": "청주시 청원구 오창읍"
            }
      },
      {
            "code": "43114_dong_6",
            "name": "내수읍",
            "center": {
                  "lat": 36.6594,
                  "lng": 127.489,
                  "label": "청주시 청원구 내수읍"
            }
      },
      {
            "code": "43114_dong_7",
            "name": "북이면",
            "center": {
                  "lat": 36.6474,
                  "lng": 127.496,
                  "label": "청주시 청원구 북이면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "청주시 청원구",
  },
  {
    code: "43130",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "충주시",
    fullName: "충청북도 충주시",
    
    
    
    center: {"lat":36.991,"lng":127.9259,"label":"충주시 중심"},
    dongs: [
      {
            "code": "43130_dong_1",
            "name": "성내충인동",
            "center": {
                  "lat": 36.985,
                  "lng": 127.9189,
                  "label": "충주시 성내충인동"
            }
      },
      {
            "code": "43130_dong_2",
            "name": "교현안림동",
            "center": {
                  "lat": 36.991,
                  "lng": 127.9189,
                  "label": "충주시 교현안림동"
            }
      },
      {
            "code": "43130_dong_3",
            "name": "용산동",
            "center": {
                  "lat": 36.997,
                  "lng": 127.9189,
                  "label": "충주시 용산동"
            }
      },
      {
            "code": "43130_dong_4",
            "name": "지현동",
            "center": {
                  "lat": 36.985,
                  "lng": 127.9259,
                  "label": "충주시 지현동"
            }
      },
      {
            "code": "43130_dong_5",
            "name": "문화동",
            "center": {
                  "lat": 36.991,
                  "lng": 127.9259,
                  "label": "충주시 문화동"
            }
      },
      {
            "code": "43130_dong_6",
            "name": "호암직동",
            "center": {
                  "lat": 36.997,
                  "lng": 127.9259,
                  "label": "충주시 호암직동"
            }
      },
      {
            "code": "43130_dong_7",
            "name": "연수동",
            "center": {
                  "lat": 36.985,
                  "lng": 127.9329,
                  "label": "충주시 연수동"
            }
      },
      {
            "code": "43130_dong_8",
            "name": "칠금금릉동",
            "center": {
                  "lat": 36.991,
                  "lng": 127.9329,
                  "label": "충주시 칠금금릉동"
            }
      },
      {
            "code": "43130_dong_9",
            "name": "목행용탄동",
            "center": {
                  "lat": 36.997,
                  "lng": 127.9329,
                  "label": "충주시 목행용탄동"
            }
      },
      {
            "code": "43130_dong_10",
            "name": "주덕읍",
            "center": {
                  "lat": 36.985,
                  "lng": 127.9399,
                  "label": "충주시 주덕읍"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "충주시",
  },
  {
    code: "43150",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "제천시",
    fullName: "충청북도 제천시",
    
    
    
    center: {"lat":37.1326,"lng":128.2117,"label":"제천시 중심"},
    dongs: [
      {
            "code": "43150_dong_1",
            "name": "중앙동",
            "center": {
                  "lat": 37.1266,
                  "lng": 128.2047,
                  "label": "제천시 중앙동"
            }
      },
      {
            "code": "43150_dong_2",
            "name": "남현동",
            "center": {
                  "lat": 37.1326,
                  "lng": 128.2047,
                  "label": "제천시 남현동"
            }
      },
      {
            "code": "43150_dong_3",
            "name": "영서동",
            "center": {
                  "lat": 37.1386,
                  "lng": 128.2047,
                  "label": "제천시 영서동"
            }
      },
      {
            "code": "43150_dong_4",
            "name": "용두동",
            "center": {
                  "lat": 37.1266,
                  "lng": 128.2117,
                  "label": "제천시 용두동"
            }
      },
      {
            "code": "43150_dong_5",
            "name": "신백동",
            "center": {
                  "lat": 37.1326,
                  "lng": 128.2117,
                  "label": "제천시 신백동"
            }
      },
      {
            "code": "43150_dong_6",
            "name": "청전동",
            "center": {
                  "lat": 37.1386,
                  "lng": 128.2117,
                  "label": "제천시 청전동"
            }
      },
      {
            "code": "43150_dong_7",
            "name": "화산동",
            "center": {
                  "lat": 37.1266,
                  "lng": 128.2187,
                  "label": "제천시 화산동"
            }
      },
      {
            "code": "43150_dong_8",
            "name": "봉양읍",
            "center": {
                  "lat": 37.1326,
                  "lng": 128.2187,
                  "label": "제천시 봉양읍"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "제천시",
  },
  {
    code: "43720",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "보은군",
    fullName: "충청북도 보은군",
    
    
    
    center: {"lat":36.4895,"lng":127.7335,"label":"보은군 중심"},
    dongs: [
      {
            "code": "43720_dong_1",
            "name": "보은읍",
            "center": {
                  "lat": 36.4835,
                  "lng": 127.7265,
                  "label": "보은군 보은읍"
            }
      },
      {
            "code": "43720_dong_2",
            "name": "속리산면",
            "center": {
                  "lat": 36.4895,
                  "lng": 127.7265,
                  "label": "보은군 속리산면"
            }
      },
      {
            "code": "43720_dong_3",
            "name": "장안면",
            "center": {
                  "lat": 36.4955,
                  "lng": 127.7265,
                  "label": "보은군 장안면"
            }
      },
      {
            "code": "43720_dong_4",
            "name": "마로면",
            "center": {
                  "lat": 36.4835,
                  "lng": 127.7335,
                  "label": "보은군 마로면"
            }
      },
      {
            "code": "43720_dong_5",
            "name": "탄부면",
            "center": {
                  "lat": 36.4895,
                  "lng": 127.7335,
                  "label": "보은군 탄부면"
            }
      },
      {
            "code": "43720_dong_6",
            "name": "삼승면",
            "center": {
                  "lat": 36.4955,
                  "lng": 127.7335,
                  "label": "보은군 삼승면"
            }
      },
      {
            "code": "43720_dong_7",
            "name": "수한면",
            "center": {
                  "lat": 36.4835,
                  "lng": 127.7405,
                  "label": "보은군 수한면"
            }
      },
      {
            "code": "43720_dong_8",
            "name": "회남면",
            "center": {
                  "lat": 36.4895,
                  "lng": 127.7405,
                  "label": "보은군 회남면"
            }
      },
      {
            "code": "43720_dong_9",
            "name": "회인면",
            "center": {
                  "lat": 36.4955,
                  "lng": 127.7405,
                  "label": "보은군 회인면"
            }
      },
      {
            "code": "43720_dong_10",
            "name": "내북면",
            "center": {
                  "lat": 36.4835,
                  "lng": 127.7475,
                  "label": "보은군 내북면"
            }
      },
      {
            "code": "43720_dong_11",
            "name": "산외면",
            "center": {
                  "lat": 36.4895,
                  "lng": 127.7475,
                  "label": "보은군 산외면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "보은군",
  },
  {
    code: "43730",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "옥천군",
    fullName: "충청북도 옥천군",
    
    
    
    center: {"lat":36.3064,"lng":127.5714,"label":"옥천군 중심"},
    dongs: [
      {
            "code": "43730_dong_1",
            "name": "옥천읍",
            "center": {
                  "lat": 36.3004,
                  "lng": 127.5644,
                  "label": "옥천군 옥천읍"
            }
      },
      {
            "code": "43730_dong_2",
            "name": "동이면",
            "center": {
                  "lat": 36.3064,
                  "lng": 127.5644,
                  "label": "옥천군 동이면"
            }
      },
      {
            "code": "43730_dong_3",
            "name": "안남면",
            "center": {
                  "lat": 36.3124,
                  "lng": 127.5644,
                  "label": "옥천군 안남면"
            }
      },
      {
            "code": "43730_dong_4",
            "name": "안내면",
            "center": {
                  "lat": 36.3004,
                  "lng": 127.5714,
                  "label": "옥천군 안내면"
            }
      },
      {
            "code": "43730_dong_5",
            "name": "청성면",
            "center": {
                  "lat": 36.3064,
                  "lng": 127.5714,
                  "label": "옥천군 청성면"
            }
      },
      {
            "code": "43730_dong_6",
            "name": "청산면",
            "center": {
                  "lat": 36.3124,
                  "lng": 127.5714,
                  "label": "옥천군 청산면"
            }
      },
      {
            "code": "43730_dong_7",
            "name": "이원면",
            "center": {
                  "lat": 36.3004,
                  "lng": 127.5784,
                  "label": "옥천군 이원면"
            }
      },
      {
            "code": "43730_dong_8",
            "name": "군서면",
            "center": {
                  "lat": 36.3064,
                  "lng": 127.5784,
                  "label": "옥천군 군서면"
            }
      },
      {
            "code": "43730_dong_9",
            "name": "군북면",
            "center": {
                  "lat": 36.3124,
                  "lng": 127.5784,
                  "label": "옥천군 군북면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "옥천군",
  },
  {
    code: "43740",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "영동군",
    fullName: "충청북도 영동군",
    
    
    
    center: {"lat":36.1751,"lng":127.7836,"label":"영동군 중심"},
    dongs: [
      {
            "code": "43740_dong_1",
            "name": "영동읍",
            "center": {
                  "lat": 36.1691,
                  "lng": 127.7766,
                  "label": "영동군 영동읍"
            }
      },
      {
            "code": "43740_dong_2",
            "name": "용산면",
            "center": {
                  "lat": 36.1751,
                  "lng": 127.7766,
                  "label": "영동군 용산면"
            }
      },
      {
            "code": "43740_dong_3",
            "name": "황간면",
            "center": {
                  "lat": 36.1811,
                  "lng": 127.7766,
                  "label": "영동군 황간면"
            }
      },
      {
            "code": "43740_dong_4",
            "name": "추풍령면",
            "center": {
                  "lat": 36.1691,
                  "lng": 127.7836,
                  "label": "영동군 추풍령면"
            }
      },
      {
            "code": "43740_dong_5",
            "name": "매곡면",
            "center": {
                  "lat": 36.1751,
                  "lng": 127.7836,
                  "label": "영동군 매곡면"
            }
      },
      {
            "code": "43740_dong_6",
            "name": "상촌면",
            "center": {
                  "lat": 36.1811,
                  "lng": 127.7836,
                  "label": "영동군 상촌면"
            }
      },
      {
            "code": "43740_dong_7",
            "name": "양강면",
            "center": {
                  "lat": 36.1691,
                  "lng": 127.7906,
                  "label": "영동군 양강면"
            }
      },
      {
            "code": "43740_dong_8",
            "name": "용화면",
            "center": {
                  "lat": 36.1751,
                  "lng": 127.7906,
                  "label": "영동군 용화면"
            }
      },
      {
            "code": "43740_dong_9",
            "name": "학산면",
            "center": {
                  "lat": 36.1811,
                  "lng": 127.7906,
                  "label": "영동군 학산면"
            }
      },
      {
            "code": "43740_dong_10",
            "name": "양산면",
            "center": {
                  "lat": 36.1691,
                  "lng": 127.7976,
                  "label": "영동군 양산면"
            }
      },
      {
            "code": "43740_dong_11",
            "name": "심천면",
            "center": {
                  "lat": 36.1751,
                  "lng": 127.7976,
                  "label": "영동군 심천면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "영동군",
  },
  {
    code: "43745",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "증평군",
    fullName: "충청북도 증평군",
    
    
    
    center: {"lat":36.7853,"lng":127.5814,"label":"증평군 중심"},
    dongs: [
      {
            "code": "43745_dong_1",
            "name": "증평읍",
            "center": {
                  "lat": 36.7793,
                  "lng": 127.5744,
                  "label": "증평군 증평읍"
            }
      },
      {
            "code": "43745_dong_2",
            "name": "도안면",
            "center": {
                  "lat": 36.7853,
                  "lng": 127.5744,
                  "label": "증평군 도안면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "증평군",
  },
  {
    code: "43750",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "진천군",
    fullName: "충청북도 진천군",
    
    
    
    center: {"lat":36.8554,"lng":127.4433,"label":"진천군(혁신도시) 중심"},
    dongs: [
      {
            "code": "43750_dong_1",
            "name": "진천읍",
            "center": {
                  "lat": 36.8494,
                  "lng": 127.4363,
                  "label": "진천군 진천읍"
            }
      },
      {
            "code": "43750_dong_2",
            "name": "덕산읍",
            "center": {
                  "lat": 36.8554,
                  "lng": 127.4363,
                  "label": "진천군 덕산읍"
            }
      },
      {
            "code": "43750_dong_3",
            "name": "초평면",
            "center": {
                  "lat": 36.8614,
                  "lng": 127.4363,
                  "label": "진천군 초평면"
            }
      },
      {
            "code": "43750_dong_4",
            "name": "문백면",
            "center": {
                  "lat": 36.8494,
                  "lng": 127.4433,
                  "label": "진천군 문백면"
            }
      },
      {
            "code": "43750_dong_5",
            "name": "백곡면",
            "center": {
                  "lat": 36.8554,
                  "lng": 127.4433,
                  "label": "진천군 백곡면"
            }
      },
      {
            "code": "43750_dong_6",
            "name": "이월면",
            "center": {
                  "lat": 36.8614,
                  "lng": 127.4433,
                  "label": "진천군 이월면"
            }
      },
      {
            "code": "43750_dong_7",
            "name": "광혜원면",
            "center": {
                  "lat": 36.8494,
                  "lng": 127.4503,
                  "label": "진천군 광혜원면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "진천군",
  },
  {
    code: "43760",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "괴산군",
    fullName: "충청북도 괴산군",
    
    
    
    center: {"lat":36.8153,"lng":127.7865,"label":"괴산군 중심"},
    dongs: [
      {
            "code": "43760_dong_1",
            "name": "괴산읍",
            "center": {
                  "lat": 36.8093,
                  "lng": 127.7795,
                  "label": "괴산군 괴산읍"
            }
      },
      {
            "code": "43760_dong_2",
            "name": "감물면",
            "center": {
                  "lat": 36.8153,
                  "lng": 127.7795,
                  "label": "괴산군 감물면"
            }
      },
      {
            "code": "43760_dong_3",
            "name": "칠성면",
            "center": {
                  "lat": 36.8213,
                  "lng": 127.7795,
                  "label": "괴산군 칠성면"
            }
      },
      {
            "code": "43760_dong_4",
            "name": "문광면",
            "center": {
                  "lat": 36.8093,
                  "lng": 127.7865,
                  "label": "괴산군 문광면"
            }
      },
      {
            "code": "43760_dong_5",
            "name": "청천면",
            "center": {
                  "lat": 36.8153,
                  "lng": 127.7865,
                  "label": "괴산군 청천면"
            }
      },
      {
            "code": "43760_dong_6",
            "name": "청안면",
            "center": {
                  "lat": 36.8213,
                  "lng": 127.7865,
                  "label": "괴산군 청안면"
            }
      },
      {
            "code": "43760_dong_7",
            "name": "사리면",
            "center": {
                  "lat": 36.8093,
                  "lng": 127.7935,
                  "label": "괴산군 사리면"
            }
      },
      {
            "code": "43760_dong_8",
            "name": "소수면",
            "center": {
                  "lat": 36.8153,
                  "lng": 127.7935,
                  "label": "괴산군 소수면"
            }
      },
      {
            "code": "43760_dong_9",
            "name": "불정면",
            "center": {
                  "lat": 36.8213,
                  "lng": 127.7935,
                  "label": "괴산군 불정면"
            }
      },
      {
            "code": "43760_dong_10",
            "name": "연풍면",
            "center": {
                  "lat": 36.8093,
                  "lng": 127.8005,
                  "label": "괴산군 연풍면"
            }
      },
      {
            "code": "43760_dong_11",
            "name": "장연면",
            "center": {
                  "lat": 36.8153,
                  "lng": 127.8005,
                  "label": "괴산군 장연면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "괴산군",
  },
  {
    code: "43770",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "음성군",
    fullName: "충청북도 음성군",
    
    
    
    center: {"lat":36.9326,"lng":127.6908,"label":"음성군(금왕/혁신) 중심"},
    dongs: [
      {
            "code": "43770_dong_1",
            "name": "음성읍",
            "center": {
                  "lat": 36.9266,
                  "lng": 127.6838,
                  "label": "음성군 음성읍"
            }
      },
      {
            "code": "43770_dong_2",
            "name": "금왕읍",
            "center": {
                  "lat": 36.9326,
                  "lng": 127.6838,
                  "label": "음성군 금왕읍"
            }
      },
      {
            "code": "43770_dong_3",
            "name": "소이면",
            "center": {
                  "lat": 36.9386,
                  "lng": 127.6838,
                  "label": "음성군 소이면"
            }
      },
      {
            "code": "43770_dong_4",
            "name": "원남면",
            "center": {
                  "lat": 36.9266,
                  "lng": 127.6908,
                  "label": "음성군 원남면"
            }
      },
      {
            "code": "43770_dong_5",
            "name": "맹동면",
            "center": {
                  "lat": 36.9326,
                  "lng": 127.6908,
                  "label": "음성군 맹동면"
            }
      },
      {
            "code": "43770_dong_6",
            "name": "대소면",
            "center": {
                  "lat": 36.9386,
                  "lng": 127.6908,
                  "label": "음성군 대소면"
            }
      },
      {
            "code": "43770_dong_7",
            "name": "삼성면",
            "center": {
                  "lat": 36.9266,
                  "lng": 127.6978,
                  "label": "음성군 삼성면"
            }
      },
      {
            "code": "43770_dong_8",
            "name": "생극면",
            "center": {
                  "lat": 36.9326,
                  "lng": 127.6978,
                  "label": "음성군 생극면"
            }
      },
      {
            "code": "43770_dong_9",
            "name": "감곡면",
            "center": {
                  "lat": 36.9386,
                  "lng": 127.6978,
                  "label": "음성군 감곡면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "음성군",
  },
  {
    code: "43800",
    sidoCode: "43",
    sidoName: "충청북도",
    name: "단양군",
    fullName: "충청북도 단양군",
    
    
    
    center: {"lat":36.9846,"lng":128.3656,"label":"단양군 중심"},
    dongs: [
      {
            "code": "43800_dong_1",
            "name": "단양읍",
            "center": {
                  "lat": 36.9786,
                  "lng": 128.3586,
                  "label": "단양군 단양읍"
            }
      },
      {
            "code": "43800_dong_2",
            "name": "매포읍",
            "center": {
                  "lat": 36.9846,
                  "lng": 128.3586,
                  "label": "단양군 매포읍"
            }
      },
      {
            "code": "43800_dong_3",
            "name": "단성면",
            "center": {
                  "lat": 36.9906,
                  "lng": 128.3586,
                  "label": "단양군 단성면"
            }
      },
      {
            "code": "43800_dong_4",
            "name": "대강면",
            "center": {
                  "lat": 36.9786,
                  "lng": 128.3656,
                  "label": "단양군 대강면"
            }
      },
      {
            "code": "43800_dong_5",
            "name": "가곡면",
            "center": {
                  "lat": 36.9846,
                  "lng": 128.3656,
                  "label": "단양군 가곡면"
            }
      },
      {
            "code": "43800_dong_6",
            "name": "영춘면",
            "center": {
                  "lat": 36.9906,
                  "lng": 128.3656,
                  "label": "단양군 영춘면"
            }
      },
      {
            "code": "43800_dong_7",
            "name": "어상천면",
            "center": {
                  "lat": 36.9786,
                  "lng": 128.3726,
                  "label": "단양군 어상천면"
            }
      },
      {
            "code": "43800_dong_8",
            "name": "적성면",
            "center": {
                  "lat": 36.9846,
                  "lng": 128.3726,
                  "label": "단양군 적성면"
            }
      }
],
    isActive: true,
    city: "충청북도",
    gu: "단양군",
  },
  {
    code: "44131",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "천안시 동남구",
    fullName: "충청남도 천안시 동남구",
    legacyCode: "chungnam_cheonan_dongnam",
    parentCity: "천안시",
    isGeneralGu: true,
    center: {"lat":36.8049,"lng":127.1524,"label":"천안시 동남구(신부동) 중심"},
    dongs: [
      {
            "code": "44131_dong_1",
            "name": "신부동",
            "center": {
                  "lat": 36.7989,
                  "lng": 127.1454,
                  "label": "천안시 동남구 신부동"
            }
      },
      {
            "code": "44131_dong_2",
            "name": "신방동",
            "center": {
                  "lat": 36.8049,
                  "lng": 127.1454,
                  "label": "천안시 동남구 신방동"
            }
      },
      {
            "code": "44131_dong_3",
            "name": "청수동",
            "center": {
                  "lat": 36.8109,
                  "lng": 127.1454,
                  "label": "천안시 동남구 청수동"
            }
      },
      {
            "code": "44131_dong_4",
            "name": "청당동",
            "center": {
                  "lat": 36.7989,
                  "lng": 127.1524,
                  "label": "천안시 동남구 청당동"
            }
      },
      {
            "code": "44131_dong_5",
            "name": "원성동",
            "center": {
                  "lat": 36.8049,
                  "lng": 127.1524,
                  "label": "천안시 동남구 원성동"
            }
      },
      {
            "code": "44131_dong_6",
            "name": "봉명동",
            "center": {
                  "lat": 36.8109,
                  "lng": 127.1524,
                  "label": "천안시 동남구 봉명동"
            }
      },
      {
            "code": "44131_dong_7",
            "name": "일봉동",
            "center": {
                  "lat": 36.7989,
                  "lng": 127.1594,
                  "label": "천안시 동남구 일봉동"
            }
      },
      {
            "code": "44131_dong_8",
            "name": "문성동",
            "center": {
                  "lat": 36.8049,
                  "lng": 127.1594,
                  "label": "천안시 동남구 문성동"
            }
      },
      {
            "code": "44131_dong_9",
            "name": "중앙동",
            "center": {
                  "lat": 36.8109,
                  "lng": 127.1594,
                  "label": "천안시 동남구 중앙동"
            }
      },
      {
            "code": "44131_dong_10",
            "name": "목천읍",
            "center": {
                  "lat": 36.7989,
                  "lng": 127.1664,
                  "label": "천안시 동남구 목천읍"
            }
      },
      {
            "code": "44131_dong_11",
            "name": "풍세면",
            "center": {
                  "lat": 36.8049,
                  "lng": 127.1664,
                  "label": "천안시 동남구 풍세면"
            }
      },
      {
            "code": "44131_dong_12",
            "name": "광덕면",
            "center": {
                  "lat": 36.8109,
                  "lng": 127.1664,
                  "label": "천안시 동남구 광덕면"
            }
      },
      {
            "code": "44131_dong_13",
            "name": "북면",
            "center": {
                  "lat": 36.7989,
                  "lng": 127.1734,
                  "label": "천안시 동남구 북면"
            }
      },
      {
            "code": "44131_dong_14",
            "name": "성남면",
            "center": {
                  "lat": 36.8049,
                  "lng": 127.1734,
                  "label": "천안시 동남구 성남면"
            }
      },
      {
            "code": "44131_dong_15",
            "name": "수신면",
            "center": {
                  "lat": 36.8109,
                  "lng": 127.1734,
                  "label": "천안시 동남구 수신면"
            }
      },
      {
            "code": "44131_dong_16",
            "name": "병천면",
            "center": {
                  "lat": 36.7989,
                  "lng": 127.1804,
                  "label": "천안시 동남구 병천면"
            }
      },
      {
            "code": "44131_dong_17",
            "name": "동면",
            "center": {
                  "lat": 36.8049,
                  "lng": 127.1804,
                  "label": "천안시 동남구 동면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "천안시 동남구",
  },
  {
    code: "44133",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "천안시 서북구",
    fullName: "충청남도 천안시 서북구",
    
    parentCity: "천안시",
    isGeneralGu: true,
    center: {"lat":36.8378,"lng":127.1107,"label":"천안시 서북구(불당동/두정동) 중심"},
    dongs: [
      {
            "code": "44133_dong_1",
            "name": "불당동",
            "center": {
                  "lat": 36.8318,
                  "lng": 127.1037,
                  "label": "천안시 서북구 불당동"
            }
      },
      {
            "code": "44133_dong_2",
            "name": "두정동",
            "center": {
                  "lat": 36.8378,
                  "lng": 127.1037,
                  "label": "천안시 서북구 두정동"
            }
      },
      {
            "code": "44133_dong_3",
            "name": "백석동",
            "center": {
                  "lat": 36.8438,
                  "lng": 127.1037,
                  "label": "천안시 서북구 백석동"
            }
      },
      {
            "code": "44133_dong_4",
            "name": "쌍용동",
            "center": {
                  "lat": 36.8318,
                  "lng": 127.1107,
                  "label": "천안시 서북구 쌍용동"
            }
      },
      {
            "code": "44133_dong_5",
            "name": "성정동",
            "center": {
                  "lat": 36.8378,
                  "lng": 127.1107,
                  "label": "천안시 서북구 성정동"
            }
      },
      {
            "code": "44133_dong_6",
            "name": "성성동",
            "center": {
                  "lat": 36.8438,
                  "lng": 127.1107,
                  "label": "천안시 서북구 성성동"
            }
      },
      {
            "code": "44133_dong_7",
            "name": "차암동",
            "center": {
                  "lat": 36.8318,
                  "lng": 127.1177,
                  "label": "천안시 서북구 차암동"
            }
      },
      {
            "code": "44133_dong_8",
            "name": "성환읍",
            "center": {
                  "lat": 36.8378,
                  "lng": 127.1177,
                  "label": "천안시 서북구 성환읍"
            }
      },
      {
            "code": "44133_dong_9",
            "name": "성거읍",
            "center": {
                  "lat": 36.8438,
                  "lng": 127.1177,
                  "label": "천안시 서북구 성거읍"
            }
      },
      {
            "code": "44133_dong_10",
            "name": "직산읍",
            "center": {
                  "lat": 36.8318,
                  "lng": 127.1247,
                  "label": "천안시 서북구 직산읍"
            }
      },
      {
            "code": "44133_dong_11",
            "name": "입장면",
            "center": {
                  "lat": 36.8378,
                  "lng": 127.1247,
                  "label": "천안시 서북구 입장면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "천안시 서북구",
  },
  {
    code: "44150",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "공주시",
    fullName: "충청남도 공주시",
    
    
    
    center: {"lat":36.4465,"lng":127.119,"label":"공주시(신관동/산성동) 중심"},
    dongs: [
      {
            "code": "44150_dong_1",
            "name": "신관동",
            "center": {
                  "lat": 36.4405,
                  "lng": 127.112,
                  "label": "공주시 신관동"
            }
      },
      {
            "code": "44150_dong_2",
            "name": "중학동",
            "center": {
                  "lat": 36.4465,
                  "lng": 127.112,
                  "label": "공주시 중학동"
            }
      },
      {
            "code": "44150_dong_3",
            "name": "웅진동",
            "center": {
                  "lat": 36.4525,
                  "lng": 127.112,
                  "label": "공주시 웅진동"
            }
      },
      {
            "code": "44150_dong_4",
            "name": "금학동",
            "center": {
                  "lat": 36.4405,
                  "lng": 127.119,
                  "label": "공주시 금학동"
            }
      },
      {
            "code": "44150_dong_5",
            "name": "옥룡동",
            "center": {
                  "lat": 36.4465,
                  "lng": 127.119,
                  "label": "공주시 옥룡동"
            }
      },
      {
            "code": "44150_dong_6",
            "name": "유구읍",
            "center": {
                  "lat": 36.4525,
                  "lng": 127.119,
                  "label": "공주시 유구읍"
            }
      },
      {
            "code": "44150_dong_7",
            "name": "이인면",
            "center": {
                  "lat": 36.4405,
                  "lng": 127.126,
                  "label": "공주시 이인면"
            }
      },
      {
            "code": "44150_dong_8",
            "name": "탄천면",
            "center": {
                  "lat": 36.4465,
                  "lng": 127.126,
                  "label": "공주시 탄천면"
            }
      },
      {
            "code": "44150_dong_9",
            "name": "계룡면",
            "center": {
                  "lat": 36.4525,
                  "lng": 127.126,
                  "label": "공주시 계룡면"
            }
      },
      {
            "code": "44150_dong_10",
            "name": "반포면",
            "center": {
                  "lat": 36.4405,
                  "lng": 127.133,
                  "label": "공주시 반포면"
            }
      },
      {
            "code": "44150_dong_11",
            "name": "의당면",
            "center": {
                  "lat": 36.4465,
                  "lng": 127.133,
                  "label": "공주시 의당면"
            }
      },
      {
            "code": "44150_dong_12",
            "name": "정안면",
            "center": {
                  "lat": 36.4525,
                  "lng": 127.133,
                  "label": "공주시 정안면"
            }
      },
      {
            "code": "44150_dong_13",
            "name": "우성면",
            "center": {
                  "lat": 36.4405,
                  "lng": 127.14,
                  "label": "공주시 우성면"
            }
      },
      {
            "code": "44150_dong_14",
            "name": "사곡면",
            "center": {
                  "lat": 36.4465,
                  "lng": 127.14,
                  "label": "공주시 사곡면"
            }
      },
      {
            "code": "44150_dong_15",
            "name": "신풍면",
            "center": {
                  "lat": 36.4525,
                  "lng": 127.14,
                  "label": "공주시 신풍면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "공주시",
  },
  {
    code: "44180",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "보령시",
    fullName: "충청남도 보령시",
    
    
    
    center: {"lat":36.3332,"lng":126.6129,"label":"보령시(대천해수욕장) 중심"},
    dongs: [
      {
            "code": "44180_dong_1",
            "name": "대천동",
            "center": {
                  "lat": 36.3272,
                  "lng": 126.6059,
                  "label": "보령시 대천동"
            }
      },
      {
            "code": "44180_dong_2",
            "name": "웅천읍",
            "center": {
                  "lat": 36.3332,
                  "lng": 126.6059,
                  "label": "보령시 웅천읍"
            }
      },
      {
            "code": "44180_dong_3",
            "name": "주포면",
            "center": {
                  "lat": 36.3392,
                  "lng": 126.6059,
                  "label": "보령시 주포면"
            }
      },
      {
            "code": "44180_dong_4",
            "name": "주교면",
            "center": {
                  "lat": 36.3272,
                  "lng": 126.6129,
                  "label": "보령시 주교면"
            }
      },
      {
            "code": "44180_dong_5",
            "name": "오천면",
            "center": {
                  "lat": 36.3332,
                  "lng": 126.6129,
                  "label": "보령시 오천면"
            }
      },
      {
            "code": "44180_dong_6",
            "name": "천북면",
            "center": {
                  "lat": 36.3392,
                  "lng": 126.6129,
                  "label": "보령시 천북면"
            }
      },
      {
            "code": "44180_dong_7",
            "name": "청소면",
            "center": {
                  "lat": 36.3272,
                  "lng": 126.6199,
                  "label": "보령시 청소면"
            }
      },
      {
            "code": "44180_dong_8",
            "name": "청라면",
            "center": {
                  "lat": 36.3332,
                  "lng": 126.6199,
                  "label": "보령시 청라면"
            }
      },
      {
            "code": "44180_dong_9",
            "name": "남포면",
            "center": {
                  "lat": 36.3392,
                  "lng": 126.6199,
                  "label": "보령시 남포면"
            }
      },
      {
            "code": "44180_dong_10",
            "name": "주산면",
            "center": {
                  "lat": 36.3272,
                  "lng": 126.6269,
                  "label": "보령시 주산면"
            }
      },
      {
            "code": "44180_dong_11",
            "name": "미산면",
            "center": {
                  "lat": 36.3332,
                  "lng": 126.6269,
                  "label": "보령시 미산면"
            }
      },
      {
            "code": "44180_dong_12",
            "name": "성주면",
            "center": {
                  "lat": 36.3392,
                  "lng": 126.6269,
                  "label": "보령시 성주면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "보령시",
  },
  {
    code: "44200",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "아산시",
    fullName: "충청남도 아산시",
    
    
    
    center: {"lat":36.7898,"lng":127.0019,"label":"아산시(온양/탕정/배방) 중심"},
    dongs: [
      {
            "code": "44200_dong_1",
            "name": "온양동",
            "center": {
                  "lat": 36.7838,
                  "lng": 126.9949,
                  "label": "아산시 온양동"
            }
      },
      {
            "code": "44200_dong_2",
            "name": "배방읍",
            "center": {
                  "lat": 36.7898,
                  "lng": 126.9949,
                  "label": "아산시 배방읍"
            }
      },
      {
            "code": "44200_dong_3",
            "name": "탕정면",
            "center": {
                  "lat": 36.7958,
                  "lng": 126.9949,
                  "label": "아산시 탕정면"
            }
      },
      {
            "code": "44200_dong_4",
            "name": "음봉면",
            "center": {
                  "lat": 36.7838,
                  "lng": 127.0019,
                  "label": "아산시 음봉면"
            }
      },
      {
            "code": "44200_dong_5",
            "name": "둔포면",
            "center": {
                  "lat": 36.7898,
                  "lng": 127.0019,
                  "label": "아산시 둔포면"
            }
      },
      {
            "code": "44200_dong_6",
            "name": "염치읍",
            "center": {
                  "lat": 36.7958,
                  "lng": 127.0019,
                  "label": "아산시 염치읍"
            }
      },
      {
            "code": "44200_dong_7",
            "name": "영인면",
            "center": {
                  "lat": 36.7838,
                  "lng": 127.0089,
                  "label": "아산시 영인면"
            }
      },
      {
            "code": "44200_dong_8",
            "name": "인주면",
            "center": {
                  "lat": 36.7898,
                  "lng": 127.0089,
                  "label": "아산시 인주면"
            }
      },
      {
            "code": "44200_dong_9",
            "name": "선장면",
            "center": {
                  "lat": 36.7958,
                  "lng": 127.0089,
                  "label": "아산시 선장면"
            }
      },
      {
            "code": "44200_dong_10",
            "name": "송악면",
            "center": {
                  "lat": 36.7838,
                  "lng": 127.0159,
                  "label": "아산시 송악면"
            }
      },
      {
            "code": "44200_dong_11",
            "name": "도고면",
            "center": {
                  "lat": 36.7898,
                  "lng": 127.0159,
                  "label": "아산시 도고면"
            }
      },
      {
            "code": "44200_dong_12",
            "name": "신창면",
            "center": {
                  "lat": 36.7958,
                  "lng": 127.0159,
                  "label": "아산시 신창면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "아산시",
  },
  {
    code: "44210",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "서산시",
    fullName: "충청남도 서산시",
    
    
    
    center: {"lat":36.7845,"lng":126.4503,"label":"서산시(호수공원) 중심"},
    dongs: [
      {
            "code": "44210_dong_1",
            "name": "부춘동",
            "center": {
                  "lat": 36.7785,
                  "lng": 126.4433,
                  "label": "서산시 부춘동"
            }
      },
      {
            "code": "44210_dong_2",
            "name": "동문동",
            "center": {
                  "lat": 36.7845,
                  "lng": 126.4433,
                  "label": "서산시 동문동"
            }
      },
      {
            "code": "44210_dong_3",
            "name": "활성동",
            "center": {
                  "lat": 36.7905,
                  "lng": 126.4433,
                  "label": "서산시 활성동"
            }
      },
      {
            "code": "44210_dong_4",
            "name": "수석동",
            "center": {
                  "lat": 36.7785,
                  "lng": 126.4503,
                  "label": "서산시 수석동"
            }
      },
      {
            "code": "44210_dong_5",
            "name": "석남동",
            "center": {
                  "lat": 36.7845,
                  "lng": 126.4503,
                  "label": "서산시 석남동"
            }
      },
      {
            "code": "44210_dong_6",
            "name": "대산읍",
            "center": {
                  "lat": 36.7905,
                  "lng": 126.4503,
                  "label": "서산시 대산읍"
            }
      },
      {
            "code": "44210_dong_7",
            "name": "인지면",
            "center": {
                  "lat": 36.7785,
                  "lng": 126.4573,
                  "label": "서산시 인지면"
            }
      },
      {
            "code": "44210_dong_8",
            "name": "부석면",
            "center": {
                  "lat": 36.7845,
                  "lng": 126.4573,
                  "label": "서산시 부석면"
            }
      },
      {
            "code": "44210_dong_9",
            "name": "팔봉면",
            "center": {
                  "lat": 36.7905,
                  "lng": 126.4573,
                  "label": "서산시 팔봉면"
            }
      },
      {
            "code": "44210_dong_10",
            "name": "지곡면",
            "center": {
                  "lat": 36.7785,
                  "lng": 126.4643,
                  "label": "서산시 지곡면"
            }
      },
      {
            "code": "44210_dong_11",
            "name": "성연면",
            "center": {
                  "lat": 36.7845,
                  "lng": 126.4643,
                  "label": "서산시 성연면"
            }
      },
      {
            "code": "44210_dong_12",
            "name": "음암면",
            "center": {
                  "lat": 36.7905,
                  "lng": 126.4643,
                  "label": "서산시 음암면"
            }
      },
      {
            "code": "44210_dong_13",
            "name": "운산면",
            "center": {
                  "lat": 36.7785,
                  "lng": 126.4713,
                  "label": "서산시 운산면"
            }
      },
      {
            "code": "44210_dong_14",
            "name": "해미면",
            "center": {
                  "lat": 36.7845,
                  "lng": 126.4713,
                  "label": "서산시 해미면"
            }
      },
      {
            "code": "44210_dong_15",
            "name": "고북면",
            "center": {
                  "lat": 36.7905,
                  "lng": 126.4713,
                  "label": "서산시 고북면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "서산시",
  },
  {
    code: "44230",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "논산시",
    fullName: "충청남도 논산시",
    
    
    
    center: {"lat":36.1872,"lng":127.0987,"label":"논산시 중심"},
    dongs: [
      {
            "code": "44230_dong_1",
            "name": "취암동",
            "center": {
                  "lat": 36.1812,
                  "lng": 127.0917,
                  "label": "논산시 취암동"
            }
      },
      {
            "code": "44230_dong_2",
            "name": "부창동",
            "center": {
                  "lat": 36.1872,
                  "lng": 127.0917,
                  "label": "논산시 부창동"
            }
      },
      {
            "code": "44230_dong_3",
            "name": "강경읍",
            "center": {
                  "lat": 36.1932,
                  "lng": 127.0917,
                  "label": "논산시 강경읍"
            }
      },
      {
            "code": "44230_dong_4",
            "name": "연무읍",
            "center": {
                  "lat": 36.1812,
                  "lng": 127.0987,
                  "label": "논산시 연무읍"
            }
      },
      {
            "code": "44230_dong_5",
            "name": "성동면",
            "center": {
                  "lat": 36.1872,
                  "lng": 127.0987,
                  "label": "논산시 성동면"
            }
      },
      {
            "code": "44230_dong_6",
            "name": "광석면",
            "center": {
                  "lat": 36.1932,
                  "lng": 127.0987,
                  "label": "논산시 광석면"
            }
      },
      {
            "code": "44230_dong_7",
            "name": "노성면",
            "center": {
                  "lat": 36.1812,
                  "lng": 127.1057,
                  "label": "논산시 노성면"
            }
      },
      {
            "code": "44230_dong_8",
            "name": "상월면",
            "center": {
                  "lat": 36.1872,
                  "lng": 127.1057,
                  "label": "논산시 상월면"
            }
      },
      {
            "code": "44230_dong_9",
            "name": "부적면",
            "center": {
                  "lat": 36.1932,
                  "lng": 127.1057,
                  "label": "논산시 부적면"
            }
      },
      {
            "code": "44230_dong_10",
            "name": "연산면",
            "center": {
                  "lat": 36.1812,
                  "lng": 127.1127,
                  "label": "논산시 연산면"
            }
      },
      {
            "code": "44230_dong_11",
            "name": "벌곡면",
            "center": {
                  "lat": 36.1872,
                  "lng": 127.1127,
                  "label": "논산시 벌곡면"
            }
      },
      {
            "code": "44230_dong_12",
            "name": "양촌면",
            "center": {
                  "lat": 36.1932,
                  "lng": 127.1127,
                  "label": "논산시 양촌면"
            }
      },
      {
            "code": "44230_dong_13",
            "name": "가야곡면",
            "center": {
                  "lat": 36.1812,
                  "lng": 127.1197,
                  "label": "논산시 가야곡면"
            }
      },
      {
            "code": "44230_dong_14",
            "name": "은진면",
            "center": {
                  "lat": 36.1872,
                  "lng": 127.1197,
                  "label": "논산시 은진면"
            }
      },
      {
            "code": "44230_dong_15",
            "name": "채운면",
            "center": {
                  "lat": 36.1932,
                  "lng": 127.1197,
                  "label": "논산시 채운면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "논산시",
  },
  {
    code: "44250",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "계룡시",
    fullName: "충청남도 계룡시",
    
    
    
    center: {"lat":36.2745,"lng":127.2486,"label":"계룡시 중심"},
    dongs: [
      {
            "code": "44250_dong_1",
            "name": "금암동",
            "center": {
                  "lat": 36.2685,
                  "lng": 127.2416,
                  "label": "계룡시 금암동"
            }
      },
      {
            "code": "44250_dong_2",
            "name": "두마면",
            "center": {
                  "lat": 36.2745,
                  "lng": 127.2416,
                  "label": "계룡시 두마면"
            }
      },
      {
            "code": "44250_dong_3",
            "name": "엄사면",
            "center": {
                  "lat": 36.2805,
                  "lng": 127.2416,
                  "label": "계룡시 엄사면"
            }
      },
      {
            "code": "44250_dong_4",
            "name": "신도안면",
            "center": {
                  "lat": 36.2685,
                  "lng": 127.2486,
                  "label": "계룡시 신도안면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "계룡시",
  },
  {
    code: "44270",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "당진시",
    fullName: "충청남도 당진시",
    
    
    
    center: {"lat":36.8898,"lng":126.6459,"label":"당진시 중심"},
    dongs: [
      {
            "code": "44270_dong_1",
            "name": "당진동",
            "center": {
                  "lat": 36.8838,
                  "lng": 126.6389,
                  "label": "당진시 당진동"
            }
      },
      {
            "code": "44270_dong_2",
            "name": "합덕읍",
            "center": {
                  "lat": 36.8898,
                  "lng": 126.6389,
                  "label": "당진시 합덕읍"
            }
      },
      {
            "code": "44270_dong_3",
            "name": "송악읍",
            "center": {
                  "lat": 36.8958,
                  "lng": 126.6389,
                  "label": "당진시 송악읍"
            }
      },
      {
            "code": "44270_dong_4",
            "name": "고대면",
            "center": {
                  "lat": 36.8838,
                  "lng": 126.6459,
                  "label": "당진시 고대면"
            }
      },
      {
            "code": "44270_dong_5",
            "name": "석문면",
            "center": {
                  "lat": 36.8898,
                  "lng": 126.6459,
                  "label": "당진시 석문면"
            }
      },
      {
            "code": "44270_dong_6",
            "name": "대호지면",
            "center": {
                  "lat": 36.8958,
                  "lng": 126.6459,
                  "label": "당진시 대호지면"
            }
      },
      {
            "code": "44270_dong_7",
            "name": "정미면",
            "center": {
                  "lat": 36.8838,
                  "lng": 126.6529,
                  "label": "당진시 정미면"
            }
      },
      {
            "code": "44270_dong_8",
            "name": "면천면",
            "center": {
                  "lat": 36.8898,
                  "lng": 126.6529,
                  "label": "당진시 면천면"
            }
      },
      {
            "code": "44270_dong_9",
            "name": "순성면",
            "center": {
                  "lat": 36.8958,
                  "lng": 126.6529,
                  "label": "당진시 순성면"
            }
      },
      {
            "code": "44270_dong_10",
            "name": "우강면",
            "center": {
                  "lat": 36.8838,
                  "lng": 126.6599,
                  "label": "당진시 우강면"
            }
      },
      {
            "code": "44270_dong_11",
            "name": "신평면",
            "center": {
                  "lat": 36.8898,
                  "lng": 126.6599,
                  "label": "당진시 신평면"
            }
      },
      {
            "code": "44270_dong_12",
            "name": "송산면",
            "center": {
                  "lat": 36.8958,
                  "lng": 126.6599,
                  "label": "당진시 송산면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "당진시",
  },
  {
    code: "44710",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "금산군",
    fullName: "충청남도 금산군",
    
    
    
    center: {"lat":36.1087,"lng":127.4881,"label":"금산군 중심"},
    dongs: [
      {
            "code": "44710_dong_1",
            "name": "금산읍",
            "center": {
                  "lat": 36.1027,
                  "lng": 127.4811,
                  "label": "금산군 금산읍"
            }
      },
      {
            "code": "44710_dong_2",
            "name": "금성면",
            "center": {
                  "lat": 36.1087,
                  "lng": 127.4811,
                  "label": "금산군 금성면"
            }
      },
      {
            "code": "44710_dong_3",
            "name": "제원면",
            "center": {
                  "lat": 36.1147,
                  "lng": 127.4811,
                  "label": "금산군 제원면"
            }
      },
      {
            "code": "44710_dong_4",
            "name": "부리면",
            "center": {
                  "lat": 36.1027,
                  "lng": 127.4881,
                  "label": "금산군 부리면"
            }
      },
      {
            "code": "44710_dong_5",
            "name": "군북면",
            "center": {
                  "lat": 36.1087,
                  "lng": 127.4881,
                  "label": "금산군 군북면"
            }
      },
      {
            "code": "44710_dong_6",
            "name": "남일면",
            "center": {
                  "lat": 36.1147,
                  "lng": 127.4881,
                  "label": "금산군 남일면"
            }
      },
      {
            "code": "44710_dong_7",
            "name": "남이면",
            "center": {
                  "lat": 36.1027,
                  "lng": 127.4951,
                  "label": "금산군 남이면"
            }
      },
      {
            "code": "44710_dong_8",
            "name": "진산면",
            "center": {
                  "lat": 36.1087,
                  "lng": 127.4951,
                  "label": "금산군 진산면"
            }
      },
      {
            "code": "44710_dong_9",
            "name": "복수면",
            "center": {
                  "lat": 36.1147,
                  "lng": 127.4951,
                  "label": "금산군 복수면"
            }
      },
      {
            "code": "44710_dong_10",
            "name": "추부면",
            "center": {
                  "lat": 36.1027,
                  "lng": 127.5021,
                  "label": "금산군 추부면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "금산군",
  },
  {
    code: "44760",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "부여군",
    fullName: "충청남도 부여군",
    
    
    
    center: {"lat":36.2757,"lng":126.9098,"label":"부여군 중심"},
    dongs: [
      {
            "code": "44760_dong_1",
            "name": "부여읍",
            "center": {
                  "lat": 36.2697,
                  "lng": 126.9028,
                  "label": "부여군 부여읍"
            }
      },
      {
            "code": "44760_dong_2",
            "name": "규암면",
            "center": {
                  "lat": 36.2757,
                  "lng": 126.9028,
                  "label": "부여군 규암면"
            }
      },
      {
            "code": "44760_dong_3",
            "name": "은산면",
            "center": {
                  "lat": 36.2817,
                  "lng": 126.9028,
                  "label": "부여군 은산면"
            }
      },
      {
            "code": "44760_dong_4",
            "name": "외산면",
            "center": {
                  "lat": 36.2697,
                  "lng": 126.9098,
                  "label": "부여군 외산면"
            }
      },
      {
            "code": "44760_dong_5",
            "name": "내산면",
            "center": {
                  "lat": 36.2757,
                  "lng": 126.9098,
                  "label": "부여군 내산면"
            }
      },
      {
            "code": "44760_dong_6",
            "name": "구룡면",
            "center": {
                  "lat": 36.2817,
                  "lng": 126.9098,
                  "label": "부여군 구룡면"
            }
      },
      {
            "code": "44760_dong_7",
            "name": "홍산면",
            "center": {
                  "lat": 36.2697,
                  "lng": 126.9168,
                  "label": "부여군 홍산면"
            }
      },
      {
            "code": "44760_dong_8",
            "name": "옥산면",
            "center": {
                  "lat": 36.2757,
                  "lng": 126.9168,
                  "label": "부여군 옥산면"
            }
      },
      {
            "code": "44760_dong_9",
            "name": "남면",
            "center": {
                  "lat": 36.2817,
                  "lng": 126.9168,
                  "label": "부여군 남면"
            }
      },
      {
            "code": "44760_dong_10",
            "name": "충화면",
            "center": {
                  "lat": 36.2697,
                  "lng": 126.9238,
                  "label": "부여군 충화면"
            }
      },
      {
            "code": "44760_dong_11",
            "name": "양화면",
            "center": {
                  "lat": 36.2757,
                  "lng": 126.9238,
                  "label": "부여군 양화면"
            }
      },
      {
            "code": "44760_dong_12",
            "name": "임천면",
            "center": {
                  "lat": 36.2817,
                  "lng": 126.9238,
                  "label": "부여군 임천면"
            }
      },
      {
            "code": "44760_dong_13",
            "name": "장암면",
            "center": {
                  "lat": 36.2697,
                  "lng": 126.9308,
                  "label": "부여군 장암면"
            }
      },
      {
            "code": "44760_dong_14",
            "name": "세도면",
            "center": {
                  "lat": 36.2757,
                  "lng": 126.9308,
                  "label": "부여군 세도면"
            }
      },
      {
            "code": "44760_dong_15",
            "name": "석성면",
            "center": {
                  "lat": 36.2817,
                  "lng": 126.9308,
                  "label": "부여군 석성면"
            }
      },
      {
            "code": "44760_dong_16",
            "name": "초촌면",
            "center": {
                  "lat": 36.2697,
                  "lng": 126.9378,
                  "label": "부여군 초촌면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "부여군",
  },
  {
    code: "44770",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "서천군",
    fullName: "충청남도 서천군",
    
    
    
    center: {"lat":36.0803,"lng":126.6919,"label":"서천군 중심"},
    dongs: [
      {
            "code": "44770_dong_1",
            "name": "장항읍",
            "center": {
                  "lat": 36.0743,
                  "lng": 126.6849,
                  "label": "서천군 장항읍"
            }
      },
      {
            "code": "44770_dong_2",
            "name": "서천읍",
            "center": {
                  "lat": 36.0803,
                  "lng": 126.6849,
                  "label": "서천군 서천읍"
            }
      },
      {
            "code": "44770_dong_3",
            "name": "마서면",
            "center": {
                  "lat": 36.0863,
                  "lng": 126.6849,
                  "label": "서천군 마서면"
            }
      },
      {
            "code": "44770_dong_4",
            "name": "화양면",
            "center": {
                  "lat": 36.0743,
                  "lng": 126.6919,
                  "label": "서천군 화양면"
            }
      },
      {
            "code": "44770_dong_5",
            "name": "기산면",
            "center": {
                  "lat": 36.0803,
                  "lng": 126.6919,
                  "label": "서천군 기산면"
            }
      },
      {
            "code": "44770_dong_6",
            "name": "시초면",
            "center": {
                  "lat": 36.0863,
                  "lng": 126.6919,
                  "label": "서천군 시초면"
            }
      },
      {
            "code": "44770_dong_7",
            "name": "문산면",
            "center": {
                  "lat": 36.0743,
                  "lng": 126.6989,
                  "label": "서천군 문산면"
            }
      },
      {
            "code": "44770_dong_8",
            "name": "판교면",
            "center": {
                  "lat": 36.0803,
                  "lng": 126.6989,
                  "label": "서천군 판교면"
            }
      },
      {
            "code": "44770_dong_9",
            "name": "종천면",
            "center": {
                  "lat": 36.0863,
                  "lng": 126.6989,
                  "label": "서천군 종천면"
            }
      },
      {
            "code": "44770_dong_10",
            "name": "비인면",
            "center": {
                  "lat": 36.0743,
                  "lng": 126.7059,
                  "label": "서천군 비인면"
            }
      },
      {
            "code": "44770_dong_11",
            "name": "서면",
            "center": {
                  "lat": 36.0803,
                  "lng": 126.7059,
                  "label": "서천군 서면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "서천군",
  },
  {
    code: "44790",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "청양군",
    fullName: "충청남도 청양군",
    
    
    
    center: {"lat":36.4589,"lng":126.8016,"label":"청양군 중심"},
    dongs: [
      {
            "code": "44790_dong_1",
            "name": "청양읍",
            "center": {
                  "lat": 36.4529,
                  "lng": 126.7946,
                  "label": "청양군 청양읍"
            }
      },
      {
            "code": "44790_dong_2",
            "name": "운곡면",
            "center": {
                  "lat": 36.4589,
                  "lng": 126.7946,
                  "label": "청양군 운곡면"
            }
      },
      {
            "code": "44790_dong_3",
            "name": "대치면",
            "center": {
                  "lat": 36.4649,
                  "lng": 126.7946,
                  "label": "청양군 대치면"
            }
      },
      {
            "code": "44790_dong_4",
            "name": "정산면",
            "center": {
                  "lat": 36.4529,
                  "lng": 126.8016,
                  "label": "청양군 정산면"
            }
      },
      {
            "code": "44790_dong_5",
            "name": "목면",
            "center": {
                  "lat": 36.4589,
                  "lng": 126.8016,
                  "label": "청양군 목면"
            }
      },
      {
            "code": "44790_dong_6",
            "name": "청남면",
            "center": {
                  "lat": 36.4649,
                  "lng": 126.8016,
                  "label": "청양군 청남면"
            }
      },
      {
            "code": "44790_dong_7",
            "name": "장평면",
            "center": {
                  "lat": 36.4529,
                  "lng": 126.8086,
                  "label": "청양군 장평면"
            }
      },
      {
            "code": "44790_dong_8",
            "name": "남양면",
            "center": {
                  "lat": 36.4589,
                  "lng": 126.8086,
                  "label": "청양군 남양면"
            }
      },
      {
            "code": "44790_dong_9",
            "name": "화성면",
            "center": {
                  "lat": 36.4649,
                  "lng": 126.8086,
                  "label": "청양군 화성면"
            }
      },
      {
            "code": "44790_dong_10",
            "name": "비봉면",
            "center": {
                  "lat": 36.4529,
                  "lng": 126.8156,
                  "label": "청양군 비봉면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "청양군",
  },
  {
    code: "44800",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "홍성군",
    fullName: "충청남도 홍성군",
    
    
    
    center: {"lat":36.6013,"lng":126.6608,"label":"홍성군(내포신도시) 중심"},
    dongs: [
      {
            "code": "44800_dong_1",
            "name": "홍성읍",
            "center": {
                  "lat": 36.5953,
                  "lng": 126.6538,
                  "label": "홍성군 홍성읍"
            }
      },
      {
            "code": "44800_dong_2",
            "name": "광천읍",
            "center": {
                  "lat": 36.6013,
                  "lng": 126.6538,
                  "label": "홍성군 광천읍"
            }
      },
      {
            "code": "44800_dong_3",
            "name": "홍북읍",
            "center": {
                  "lat": 36.6073,
                  "lng": 126.6538,
                  "label": "홍성군 홍북읍"
            }
      },
      {
            "code": "44800_dong_4",
            "name": "금마면",
            "center": {
                  "lat": 36.5953,
                  "lng": 126.6608,
                  "label": "홍성군 금마면"
            }
      },
      {
            "code": "44800_dong_5",
            "name": "홍동면",
            "center": {
                  "lat": 36.6013,
                  "lng": 126.6608,
                  "label": "홍성군 홍동면"
            }
      },
      {
            "code": "44800_dong_6",
            "name": "장곡면",
            "center": {
                  "lat": 36.6073,
                  "lng": 126.6608,
                  "label": "홍성군 장곡면"
            }
      },
      {
            "code": "44800_dong_7",
            "name": "은하면",
            "center": {
                  "lat": 36.5953,
                  "lng": 126.6678,
                  "label": "홍성군 은하면"
            }
      },
      {
            "code": "44800_dong_8",
            "name": "결성면",
            "center": {
                  "lat": 36.6013,
                  "lng": 126.6678,
                  "label": "홍성군 결성면"
            }
      },
      {
            "code": "44800_dong_9",
            "name": "서부면",
            "center": {
                  "lat": 36.6073,
                  "lng": 126.6678,
                  "label": "홍성군 서부면"
            }
      },
      {
            "code": "44800_dong_10",
            "name": "갈산면",
            "center": {
                  "lat": 36.5953,
                  "lng": 126.6748,
                  "label": "홍성군 갈산면"
            }
      },
      {
            "code": "44800_dong_11",
            "name": "구항면",
            "center": {
                  "lat": 36.6013,
                  "lng": 126.6748,
                  "label": "홍성군 구항면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "홍성군",
  },
  {
    code: "44810",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "예산군",
    fullName: "충청남도 예산군",
    
    
    
    center: {"lat":36.68,"lng":126.8454,"label":"예산군(예산시장) 중심"},
    dongs: [
      {
            "code": "44810_dong_1",
            "name": "예산읍",
            "center": {
                  "lat": 36.674,
                  "lng": 126.8384,
                  "label": "예산군 예산읍"
            }
      },
      {
            "code": "44810_dong_2",
            "name": "삽교읍",
            "center": {
                  "lat": 36.68,
                  "lng": 126.8384,
                  "label": "예산군 삽교읍"
            }
      },
      {
            "code": "44810_dong_3",
            "name": "대술면",
            "center": {
                  "lat": 36.686,
                  "lng": 126.8384,
                  "label": "예산군 대술면"
            }
      },
      {
            "code": "44810_dong_4",
            "name": "신양면",
            "center": {
                  "lat": 36.674,
                  "lng": 126.8454,
                  "label": "예산군 신양면"
            }
      },
      {
            "code": "44810_dong_5",
            "name": "광시면",
            "center": {
                  "lat": 36.68,
                  "lng": 126.8454,
                  "label": "예산군 광시면"
            }
      },
      {
            "code": "44810_dong_6",
            "name": "대흥면",
            "center": {
                  "lat": 36.686,
                  "lng": 126.8454,
                  "label": "예산군 대흥면"
            }
      },
      {
            "code": "44810_dong_7",
            "name": "응봉면",
            "center": {
                  "lat": 36.674,
                  "lng": 126.8524,
                  "label": "예산군 응봉면"
            }
      },
      {
            "code": "44810_dong_8",
            "name": "덕산면",
            "center": {
                  "lat": 36.68,
                  "lng": 126.8524,
                  "label": "예산군 덕산면"
            }
      },
      {
            "code": "44810_dong_9",
            "name": "봉산면",
            "center": {
                  "lat": 36.686,
                  "lng": 126.8524,
                  "label": "예산군 봉산면"
            }
      },
      {
            "code": "44810_dong_10",
            "name": "고덕면",
            "center": {
                  "lat": 36.674,
                  "lng": 126.8594,
                  "label": "예산군 고덕면"
            }
      },
      {
            "code": "44810_dong_11",
            "name": "신암면",
            "center": {
                  "lat": 36.68,
                  "lng": 126.8594,
                  "label": "예산군 신암면"
            }
      },
      {
            "code": "44810_dong_12",
            "name": "오가면",
            "center": {
                  "lat": 36.686,
                  "lng": 126.8594,
                  "label": "예산군 오가면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "예산군",
  },
  {
    code: "44825",
    sidoCode: "44",
    sidoName: "충청남도",
    name: "태안군",
    fullName: "충청남도 태안군",
    
    
    
    center: {"lat":36.7541,"lng":126.2981,"label":"태안군(안면도) 중심"},
    dongs: [
      {
            "code": "44825_dong_1",
            "name": "태안읍",
            "center": {
                  "lat": 36.7481,
                  "lng": 126.2911,
                  "label": "태안군 태안읍"
            }
      },
      {
            "code": "44825_dong_2",
            "name": "안면읍",
            "center": {
                  "lat": 36.7541,
                  "lng": 126.2911,
                  "label": "태안군 안면읍"
            }
      },
      {
            "code": "44825_dong_3",
            "name": "고남면",
            "center": {
                  "lat": 36.7601,
                  "lng": 126.2911,
                  "label": "태안군 고남면"
            }
      },
      {
            "code": "44825_dong_4",
            "name": "남면",
            "center": {
                  "lat": 36.7481,
                  "lng": 126.2981,
                  "label": "태안군 남면"
            }
      },
      {
            "code": "44825_dong_5",
            "name": "근흥면",
            "center": {
                  "lat": 36.7541,
                  "lng": 126.2981,
                  "label": "태안군 근흥면"
            }
      },
      {
            "code": "44825_dong_6",
            "name": "소원면",
            "center": {
                  "lat": 36.7601,
                  "lng": 126.2981,
                  "label": "태안군 소원면"
            }
      },
      {
            "code": "44825_dong_7",
            "name": "원북면",
            "center": {
                  "lat": 36.7481,
                  "lng": 126.3051,
                  "label": "태안군 원북면"
            }
      },
      {
            "code": "44825_dong_8",
            "name": "이원면",
            "center": {
                  "lat": 36.7541,
                  "lng": 126.3051,
                  "label": "태안군 이원면"
            }
      }
],
    isActive: true,
    city: "충청남도",
    gu: "태안군",
  },
  {
    code: "45111",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "전주시 완산구",
    fullName: "전북특별자치도 전주시 완산구",
    legacyCode: "jeonbuk_jeonju_wansan",
    parentCity: "전주시",
    isGeneralGu: true,
    center: {"lat":35.8124,"lng":127.1479,"label":"전주시 완산구(한옥마을/객리단길) 중심"},
    dongs: [
      {
            "code": "45111_dong_1",
            "name": "풍남동",
            "center": {
                  "lat": 35.8064,
                  "lng": 127.1409,
                  "label": "전주시 완산구 풍남동"
            }
      },
      {
            "code": "45111_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 35.8124,
                  "lng": 127.1409,
                  "label": "전주시 완산구 중앙동"
            }
      },
      {
            "code": "45111_dong_3",
            "name": "노송동",
            "center": {
                  "lat": 35.8184,
                  "lng": 127.1409,
                  "label": "전주시 완산구 노송동"
            }
      },
      {
            "code": "45111_dong_4",
            "name": "완산동",
            "center": {
                  "lat": 35.8064,
                  "lng": 127.1479,
                  "label": "전주시 완산구 완산동"
            }
      },
      {
            "code": "45111_dong_5",
            "name": "동서학동",
            "center": {
                  "lat": 35.8124,
                  "lng": 127.1479,
                  "label": "전주시 완산구 동서학동"
            }
      },
      {
            "code": "45111_dong_6",
            "name": "서서학동",
            "center": {
                  "lat": 35.8184,
                  "lng": 127.1479,
                  "label": "전주시 완산구 서서학동"
            }
      },
      {
            "code": "45111_dong_7",
            "name": "중화산동",
            "center": {
                  "lat": 35.8064,
                  "lng": 127.1549,
                  "label": "전주시 완산구 중화산동"
            }
      },
      {
            "code": "45111_dong_8",
            "name": "서신동",
            "center": {
                  "lat": 35.8124,
                  "lng": 127.1549,
                  "label": "전주시 완산구 서신동"
            }
      },
      {
            "code": "45111_dong_9",
            "name": "삼천동",
            "center": {
                  "lat": 35.8184,
                  "lng": 127.1549,
                  "label": "전주시 완산구 삼천동"
            }
      },
      {
            "code": "45111_dong_10",
            "name": "효자동",
            "center": {
                  "lat": 35.8064,
                  "lng": 127.1619,
                  "label": "전주시 완산구 효자동"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "전주시 완산구",
  },
  {
    code: "45113",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "전주시 덕진구",
    fullName: "전북특별자치도 전주시 덕진구",
    
    parentCity: "전주시",
    isGeneralGu: true,
    center: {"lat":35.8532,"lng":127.1218,"label":"전주시 덕진구(에코시티/전북대) 중심"},
    dongs: [
      {
            "code": "45113_dong_1",
            "name": "진북동",
            "center": {
                  "lat": 35.8472,
                  "lng": 127.1148,
                  "label": "전주시 덕진구 진북동"
            }
      },
      {
            "code": "45113_dong_2",
            "name": "인후동",
            "center": {
                  "lat": 35.8532,
                  "lng": 127.1148,
                  "label": "전주시 덕진구 인후동"
            }
      },
      {
            "code": "45113_dong_3",
            "name": "덕진동",
            "center": {
                  "lat": 35.8592,
                  "lng": 127.1148,
                  "label": "전주시 덕진구 덕진동"
            }
      },
      {
            "code": "45113_dong_4",
            "name": "금암동",
            "center": {
                  "lat": 35.8472,
                  "lng": 127.1218,
                  "label": "전주시 덕진구 금암동"
            }
      },
      {
            "code": "45113_dong_5",
            "name": "팔복동",
            "center": {
                  "lat": 35.8532,
                  "lng": 127.1218,
                  "label": "전주시 덕진구 팔복동"
            }
      },
      {
            "code": "45113_dong_6",
            "name": "우아동",
            "center": {
                  "lat": 35.8592,
                  "lng": 127.1218,
                  "label": "전주시 덕진구 우아동"
            }
      },
      {
            "code": "45113_dong_7",
            "name": "호성동",
            "center": {
                  "lat": 35.8472,
                  "lng": 127.1288,
                  "label": "전주시 덕진구 호성동"
            }
      },
      {
            "code": "45113_dong_8",
            "name": "송천동",
            "center": {
                  "lat": 35.8532,
                  "lng": 127.1288,
                  "label": "전주시 덕진구 송천동"
            }
      },
      {
            "code": "45113_dong_9",
            "name": "조촌동",
            "center": {
                  "lat": 35.8592,
                  "lng": 127.1288,
                  "label": "전주시 덕진구 조촌동"
            }
      },
      {
            "code": "45113_dong_10",
            "name": "여의동",
            "center": {
                  "lat": 35.8472,
                  "lng": 127.1358,
                  "label": "전주시 덕진구 여의동"
            }
      },
      {
            "code": "45113_dong_11",
            "name": "혁신동",
            "center": {
                  "lat": 35.8532,
                  "lng": 127.1358,
                  "label": "전주시 덕진구 혁신동"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "전주시 덕진구",
  },
  {
    code: "45130",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "군산시",
    fullName: "전북특별자치도 군산시",
    
    
    
    center: {"lat":35.9676,"lng":126.7366,"label":"군산시(수송동/월명동) 중심"},
    dongs: [
      {
            "code": "45130_dong_1",
            "name": "월명동",
            "center": {
                  "lat": 35.9616,
                  "lng": 126.7296,
                  "label": "군산시 월명동"
            }
      },
      {
            "code": "45130_dong_2",
            "name": "해신동",
            "center": {
                  "lat": 35.9676,
                  "lng": 126.7296,
                  "label": "군산시 해신동"
            }
      },
      {
            "code": "45130_dong_3",
            "name": "신풍동",
            "center": {
                  "lat": 35.9736,
                  "lng": 126.7296,
                  "label": "군산시 신풍동"
            }
      },
      {
            "code": "45130_dong_4",
            "name": "삼학동",
            "center": {
                  "lat": 35.9616,
                  "lng": 126.7366,
                  "label": "군산시 삼학동"
            }
      },
      {
            "code": "45130_dong_5",
            "name": "중앙동",
            "center": {
                  "lat": 35.9676,
                  "lng": 126.7366,
                  "label": "군산시 중앙동"
            }
      },
      {
            "code": "45130_dong_6",
            "name": "흥남동",
            "center": {
                  "lat": 35.9736,
                  "lng": 126.7366,
                  "label": "군산시 흥남동"
            }
      },
      {
            "code": "45130_dong_7",
            "name": "조촌동",
            "center": {
                  "lat": 35.9616,
                  "lng": 126.7436,
                  "label": "군산시 조촌동"
            }
      },
      {
            "code": "45130_dong_8",
            "name": "경암동",
            "center": {
                  "lat": 35.9676,
                  "lng": 126.7436,
                  "label": "군산시 경암동"
            }
      },
      {
            "code": "45130_dong_9",
            "name": "구암동",
            "center": {
                  "lat": 35.9736,
                  "lng": 126.7436,
                  "label": "군산시 구암동"
            }
      },
      {
            "code": "45130_dong_10",
            "name": "개정동",
            "center": {
                  "lat": 35.9616,
                  "lng": 126.7506,
                  "label": "군산시 개정동"
            }
      },
      {
            "code": "45130_dong_11",
            "name": "수송동",
            "center": {
                  "lat": 35.9676,
                  "lng": 126.7506,
                  "label": "군산시 수송동"
            }
      },
      {
            "code": "45130_dong_12",
            "name": "나운동",
            "center": {
                  "lat": 35.9736,
                  "lng": 126.7506,
                  "label": "군산시 나운동"
            }
      },
      {
            "code": "45130_dong_13",
            "name": "소룡동",
            "center": {
                  "lat": 35.9616,
                  "lng": 126.7576,
                  "label": "군산시 소룡동"
            }
      },
      {
            "code": "45130_dong_14",
            "name": "미성동",
            "center": {
                  "lat": 35.9676,
                  "lng": 126.7576,
                  "label": "군산시 미성동"
            }
      },
      {
            "code": "45130_dong_15",
            "name": "옥구읍",
            "center": {
                  "lat": 35.9736,
                  "lng": 126.7576,
                  "label": "군산시 옥구읍"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "군산시",
  },
  {
    code: "45140",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "익산시",
    fullName: "전북특별자치도 익산시",
    
    
    
    center: {"lat":35.9483,"lng":126.9576,"label":"익산시(영등동/모현동) 중심"},
    dongs: [
      {
            "code": "45140_dong_1",
            "name": "중앙동",
            "center": {
                  "lat": 35.9423,
                  "lng": 126.9506,
                  "label": "익산시 중앙동"
            }
      },
      {
            "code": "45140_dong_2",
            "name": "평화동",
            "center": {
                  "lat": 35.9483,
                  "lng": 126.9506,
                  "label": "익산시 평화동"
            }
      },
      {
            "code": "45140_dong_3",
            "name": "남중동",
            "center": {
                  "lat": 35.9543,
                  "lng": 126.9506,
                  "label": "익산시 남중동"
            }
      },
      {
            "code": "45140_dong_4",
            "name": "모현동",
            "center": {
                  "lat": 35.9423,
                  "lng": 126.9576,
                  "label": "익산시 모현동"
            }
      },
      {
            "code": "45140_dong_5",
            "name": "송학동",
            "center": {
                  "lat": 35.9483,
                  "lng": 126.9576,
                  "label": "익산시 송학동"
            }
      },
      {
            "code": "45140_dong_6",
            "name": "영등동",
            "center": {
                  "lat": 35.9543,
                  "lng": 126.9576,
                  "label": "익산시 영등동"
            }
      },
      {
            "code": "45140_dong_7",
            "name": "어양동",
            "center": {
                  "lat": 35.9423,
                  "lng": 126.9646,
                  "label": "익산시 어양동"
            }
      },
      {
            "code": "45140_dong_8",
            "name": "신동",
            "center": {
                  "lat": 35.9483,
                  "lng": 126.9646,
                  "label": "익산시 신동"
            }
      },
      {
            "code": "45140_dong_9",
            "name": "팔봉동",
            "center": {
                  "lat": 35.9543,
                  "lng": 126.9646,
                  "label": "익산시 팔봉동"
            }
      },
      {
            "code": "45140_dong_10",
            "name": "삼성동",
            "center": {
                  "lat": 35.9423,
                  "lng": 126.9716,
                  "label": "익산시 삼성동"
            }
      },
      {
            "code": "45140_dong_11",
            "name": "함열읍",
            "center": {
                  "lat": 35.9483,
                  "lng": 126.9716,
                  "label": "익산시 함열읍"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "익산시",
  },
  {
    code: "45180",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "정읍시",
    fullName: "전북특별자치도 정읍시",
    
    
    
    center: {"lat":35.5699,"lng":126.8576,"label":"정읍시(내장산) 중심"},
    dongs: [
      {
            "code": "45180_dong_1",
            "name": "수성동",
            "center": {
                  "lat": 35.5639,
                  "lng": 126.8506,
                  "label": "정읍시 수성동"
            }
      },
      {
            "code": "45180_dong_2",
            "name": "장명동",
            "center": {
                  "lat": 35.5699,
                  "lng": 126.8506,
                  "label": "정읍시 장명동"
            }
      },
      {
            "code": "45180_dong_3",
            "name": "내장상동",
            "center": {
                  "lat": 35.5759,
                  "lng": 126.8506,
                  "label": "정읍시 내장상동"
            }
      },
      {
            "code": "45180_dong_4",
            "name": "시기동",
            "center": {
                  "lat": 35.5639,
                  "lng": 126.8576,
                  "label": "정읍시 시기동"
            }
      },
      {
            "code": "45180_dong_5",
            "name": "초산동",
            "center": {
                  "lat": 35.5699,
                  "lng": 126.8576,
                  "label": "정읍시 초산동"
            }
      },
      {
            "code": "45180_dong_6",
            "name": "연지동",
            "center": {
                  "lat": 35.5759,
                  "lng": 126.8576,
                  "label": "정읍시 연지동"
            }
      },
      {
            "code": "45180_dong_7",
            "name": "농소동",
            "center": {
                  "lat": 35.5639,
                  "lng": 126.8646,
                  "label": "정읍시 농소동"
            }
      },
      {
            "code": "45180_dong_8",
            "name": "상교동",
            "center": {
                  "lat": 35.5699,
                  "lng": 126.8646,
                  "label": "정읍시 상교동"
            }
      },
      {
            "code": "45180_dong_9",
            "name": "신태인읍",
            "center": {
                  "lat": 35.5759,
                  "lng": 126.8646,
                  "label": "정읍시 신태인읍"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "정읍시",
  },
  {
    code: "45190",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "남원시",
    fullName: "전북특별자치도 남원시",
    
    
    
    center: {"lat":35.4164,"lng":127.3904,"label":"남원시(광한루) 중심"},
    dongs: [
      {
            "code": "45190_dong_1",
            "name": "동충동",
            "center": {
                  "lat": 35.4104,
                  "lng": 127.3834,
                  "label": "남원시 동충동"
            }
      },
      {
            "code": "45190_dong_2",
            "name": "죽항동",
            "center": {
                  "lat": 35.4164,
                  "lng": 127.3834,
                  "label": "남원시 죽항동"
            }
      },
      {
            "code": "45190_dong_3",
            "name": "노암동",
            "center": {
                  "lat": 35.4224,
                  "lng": 127.3834,
                  "label": "남원시 노암동"
            }
      },
      {
            "code": "45190_dong_4",
            "name": "금동",
            "center": {
                  "lat": 35.4104,
                  "lng": 127.3904,
                  "label": "남원시 금동"
            }
      },
      {
            "code": "45190_dong_5",
            "name": "왕정동",
            "center": {
                  "lat": 35.4164,
                  "lng": 127.3904,
                  "label": "남원시 왕정동"
            }
      },
      {
            "code": "45190_dong_6",
            "name": "향교동",
            "center": {
                  "lat": 35.4224,
                  "lng": 127.3904,
                  "label": "남원시 향교동"
            }
      },
      {
            "code": "45190_dong_7",
            "name": "도통동",
            "center": {
                  "lat": 35.4104,
                  "lng": 127.3974,
                  "label": "남원시 도통동"
            }
      },
      {
            "code": "45190_dong_8",
            "name": "운봉읍",
            "center": {
                  "lat": 35.4164,
                  "lng": 127.3974,
                  "label": "남원시 운봉읍"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "남원시",
  },
  {
    code: "45210",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "김제시",
    fullName: "전북특별자치도 김제시",
    
    
    
    center: {"lat":35.8036,"lng":126.8809,"label":"김제시 중심"},
    dongs: [
      {
            "code": "45210_dong_1",
            "name": "요촌동",
            "center": {
                  "lat": 35.7976,
                  "lng": 126.8739,
                  "label": "김제시 요촌동"
            }
      },
      {
            "code": "45210_dong_2",
            "name": "신풍동",
            "center": {
                  "lat": 35.8036,
                  "lng": 126.8739,
                  "label": "김제시 신풍동"
            }
      },
      {
            "code": "45210_dong_3",
            "name": "검산동",
            "center": {
                  "lat": 35.8096,
                  "lng": 126.8739,
                  "label": "김제시 검산동"
            }
      },
      {
            "code": "45210_dong_4",
            "name": "교월동",
            "center": {
                  "lat": 35.7976,
                  "lng": 126.8809,
                  "label": "김제시 교월동"
            }
      },
      {
            "code": "45210_dong_5",
            "name": "만경읍",
            "center": {
                  "lat": 35.8036,
                  "lng": 126.8809,
                  "label": "김제시 만경읍"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "김제시",
  },
  {
    code: "45710",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "완주군",
    fullName: "전북특별자치도 완주군",
    
    
    
    center: {"lat":35.9048,"lng":127.1624,"label":"완주군(삼례/봉동/이서) 중심"},
    dongs: [
      {
            "code": "45710_dong_1",
            "name": "삼례읍",
            "center": {
                  "lat": 35.8988,
                  "lng": 127.1554,
                  "label": "완주군 삼례읍"
            }
      },
      {
            "code": "45710_dong_2",
            "name": "봉동읍",
            "center": {
                  "lat": 35.9048,
                  "lng": 127.1554,
                  "label": "완주군 봉동읍"
            }
      },
      {
            "code": "45710_dong_3",
            "name": "용진읍",
            "center": {
                  "lat": 35.9108,
                  "lng": 127.1554,
                  "label": "완주군 용진읍"
            }
      },
      {
            "code": "45710_dong_4",
            "name": "상관면",
            "center": {
                  "lat": 35.8988,
                  "lng": 127.1624,
                  "label": "완주군 상관면"
            }
      },
      {
            "code": "45710_dong_5",
            "name": "이서면",
            "center": {
                  "lat": 35.9048,
                  "lng": 127.1624,
                  "label": "완주군 이서면"
            }
      },
      {
            "code": "45710_dong_6",
            "name": "소양면",
            "center": {
                  "lat": 35.9108,
                  "lng": 127.1624,
                  "label": "완주군 소양면"
            }
      },
      {
            "code": "45710_dong_7",
            "name": "구이면",
            "center": {
                  "lat": 35.8988,
                  "lng": 127.1694,
                  "label": "완주군 구이면"
            }
      },
      {
            "code": "45710_dong_8",
            "name": "고산면",
            "center": {
                  "lat": 35.9048,
                  "lng": 127.1694,
                  "label": "완주군 고산면"
            }
      },
      {
            "code": "45710_dong_9",
            "name": "비봉면",
            "center": {
                  "lat": 35.9108,
                  "lng": 127.1694,
                  "label": "완주군 비봉면"
            }
      },
      {
            "code": "45710_dong_10",
            "name": "운주면",
            "center": {
                  "lat": 35.8988,
                  "lng": 127.1764,
                  "label": "완주군 운주면"
            }
      },
      {
            "code": "45710_dong_11",
            "name": "화산면",
            "center": {
                  "lat": 35.9048,
                  "lng": 127.1764,
                  "label": "완주군 화산면"
            }
      },
      {
            "code": "45710_dong_12",
            "name": "동상면",
            "center": {
                  "lat": 35.9108,
                  "lng": 127.1764,
                  "label": "완주군 동상면"
            }
      },
      {
            "code": "45710_dong_13",
            "name": "경천면",
            "center": {
                  "lat": 35.8988,
                  "lng": 127.1834,
                  "label": "완주군 경천면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "완주군",
  },
  {
    code: "45720",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "진안군",
    fullName: "전북특별자치도 진안군",
    
    
    
    center: {"lat":35.7917,"lng":127.4249,"label":"진안군(마이산) 중심"},
    dongs: [
      {
            "code": "45720_dong_1",
            "name": "진안읍",
            "center": {
                  "lat": 35.7857,
                  "lng": 127.4179,
                  "label": "진안군 진안읍"
            }
      },
      {
            "code": "45720_dong_2",
            "name": "용담면",
            "center": {
                  "lat": 35.7917,
                  "lng": 127.4179,
                  "label": "진안군 용담면"
            }
      },
      {
            "code": "45720_dong_3",
            "name": "안천면",
            "center": {
                  "lat": 35.7977,
                  "lng": 127.4179,
                  "label": "진안군 안천면"
            }
      },
      {
            "code": "45720_dong_4",
            "name": "동향면",
            "center": {
                  "lat": 35.7857,
                  "lng": 127.4249,
                  "label": "진안군 동향면"
            }
      },
      {
            "code": "45720_dong_5",
            "name": "상전면",
            "center": {
                  "lat": 35.7917,
                  "lng": 127.4249,
                  "label": "진안군 상전면"
            }
      },
      {
            "code": "45720_dong_6",
            "name": "백운면",
            "center": {
                  "lat": 35.7977,
                  "lng": 127.4249,
                  "label": "진안군 백운면"
            }
      },
      {
            "code": "45720_dong_7",
            "name": "성수면",
            "center": {
                  "lat": 35.7857,
                  "lng": 127.4319,
                  "label": "진안군 성수면"
            }
      },
      {
            "code": "45720_dong_8",
            "name": "마령면",
            "center": {
                  "lat": 35.7917,
                  "lng": 127.4319,
                  "label": "진안군 마령면"
            }
      },
      {
            "code": "45720_dong_9",
            "name": "부귀면",
            "center": {
                  "lat": 35.7977,
                  "lng": 127.4319,
                  "label": "진안군 부귀면"
            }
      },
      {
            "code": "45720_dong_10",
            "name": "정천면",
            "center": {
                  "lat": 35.7857,
                  "lng": 127.4389,
                  "label": "진안군 정천면"
            }
      },
      {
            "code": "45720_dong_11",
            "name": "주천면",
            "center": {
                  "lat": 35.7917,
                  "lng": 127.4389,
                  "label": "진안군 주천면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "진안군",
  },
  {
    code: "45730",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "무주군",
    fullName: "전북특별자치도 무주군",
    
    
    
    center: {"lat":36.0068,"lng":127.6608,"label":"무주군(덕유산) 중심"},
    dongs: [
      {
            "code": "45730_dong_1",
            "name": "무주읍",
            "center": {
                  "lat": 36.0008,
                  "lng": 127.6538,
                  "label": "무주군 무주읍"
            }
      },
      {
            "code": "45730_dong_2",
            "name": "무풍면",
            "center": {
                  "lat": 36.0068,
                  "lng": 127.6538,
                  "label": "무주군 무풍면"
            }
      },
      {
            "code": "45730_dong_3",
            "name": "설천면",
            "center": {
                  "lat": 36.0128,
                  "lng": 127.6538,
                  "label": "무주군 설천면"
            }
      },
      {
            "code": "45730_dong_4",
            "name": "적상면",
            "center": {
                  "lat": 36.0008,
                  "lng": 127.6608,
                  "label": "무주군 적상면"
            }
      },
      {
            "code": "45730_dong_5",
            "name": "안성면",
            "center": {
                  "lat": 36.0068,
                  "lng": 127.6608,
                  "label": "무주군 안성면"
            }
      },
      {
            "code": "45730_dong_6",
            "name": "부남면",
            "center": {
                  "lat": 36.0128,
                  "lng": 127.6608,
                  "label": "무주군 부남면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "무주군",
  },
  {
    code: "45740",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "장수군",
    fullName: "전북특별자치도 장수군",
    
    
    
    center: {"lat":35.6475,"lng":127.5215,"label":"장수군 중심"},
    dongs: [
      {
            "code": "45740_dong_1",
            "name": "장수읍",
            "center": {
                  "lat": 35.6415,
                  "lng": 127.5145,
                  "label": "장수군 장수읍"
            }
      },
      {
            "code": "45740_dong_2",
            "name": "산서면",
            "center": {
                  "lat": 35.6475,
                  "lng": 127.5145,
                  "label": "장수군 산서면"
            }
      },
      {
            "code": "45740_dong_3",
            "name": "번암면",
            "center": {
                  "lat": 35.6535,
                  "lng": 127.5145,
                  "label": "장수군 번암면"
            }
      },
      {
            "code": "45740_dong_4",
            "name": "장계면",
            "center": {
                  "lat": 35.6415,
                  "lng": 127.5215,
                  "label": "장수군 장계면"
            }
      },
      {
            "code": "45740_dong_5",
            "name": "천천면",
            "center": {
                  "lat": 35.6475,
                  "lng": 127.5215,
                  "label": "장수군 천천면"
            }
      },
      {
            "code": "45740_dong_6",
            "name": "계남면",
            "center": {
                  "lat": 35.6535,
                  "lng": 127.5215,
                  "label": "장수군 계남면"
            }
      },
      {
            "code": "45740_dong_7",
            "name": "계북면",
            "center": {
                  "lat": 35.6415,
                  "lng": 127.5285,
                  "label": "장수군 계북면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "장수군",
  },
  {
    code: "45750",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "임실군",
    fullName: "전북특별자치도 임실군",
    
    
    
    center: {"lat":35.6178,"lng":127.2809,"label":"임실군(치즈마을/옥정호) 중심"},
    dongs: [
      {
            "code": "45750_dong_1",
            "name": "임실읍",
            "center": {
                  "lat": 35.6118,
                  "lng": 127.2739,
                  "label": "임실군 임실읍"
            }
      },
      {
            "code": "45750_dong_2",
            "name": "청웅면",
            "center": {
                  "lat": 35.6178,
                  "lng": 127.2739,
                  "label": "임실군 청웅면"
            }
      },
      {
            "code": "45750_dong_3",
            "name": "운암면",
            "center": {
                  "lat": 35.6238,
                  "lng": 127.2739,
                  "label": "임실군 운암면"
            }
      },
      {
            "code": "45750_dong_4",
            "name": "신평면",
            "center": {
                  "lat": 35.6118,
                  "lng": 127.2809,
                  "label": "임실군 신평면"
            }
      },
      {
            "code": "45750_dong_5",
            "name": "성수면",
            "center": {
                  "lat": 35.6178,
                  "lng": 127.2809,
                  "label": "임실군 성수면"
            }
      },
      {
            "code": "45750_dong_6",
            "name": "오수면",
            "center": {
                  "lat": 35.6238,
                  "lng": 127.2809,
                  "label": "임실군 오수면"
            }
      },
      {
            "code": "45750_dong_7",
            "name": "신덕면",
            "center": {
                  "lat": 35.6118,
                  "lng": 127.2879,
                  "label": "임실군 신덕면"
            }
      },
      {
            "code": "45750_dong_8",
            "name": "삼계면",
            "center": {
                  "lat": 35.6178,
                  "lng": 127.2879,
                  "label": "임실군 삼계면"
            }
      },
      {
            "code": "45750_dong_9",
            "name": "관촌면",
            "center": {
                  "lat": 35.6238,
                  "lng": 127.2879,
                  "label": "임실군 관촌면"
            }
      },
      {
            "code": "45750_dong_10",
            "name": "강진면",
            "center": {
                  "lat": 35.6118,
                  "lng": 127.2949,
                  "label": "임실군 강진면"
            }
      },
      {
            "code": "45750_dong_11",
            "name": "덕치면",
            "center": {
                  "lat": 35.6178,
                  "lng": 127.2949,
                  "label": "임실군 덕치면"
            }
      },
      {
            "code": "45750_dong_12",
            "name": "지사면",
            "center": {
                  "lat": 35.6238,
                  "lng": 127.2949,
                  "label": "임실군 지사면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "임실군",
  },
  {
    code: "45770",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "순창군",
    fullName: "전북특별자치도 순창군",
    
    
    
    center: {"lat":35.3744,"lng":127.1378,"label":"순창군(강천산) 중심"},
    dongs: [
      {
            "code": "45770_dong_1",
            "name": "순창읍",
            "center": {
                  "lat": 35.3684,
                  "lng": 127.1308,
                  "label": "순창군 순창읍"
            }
      },
      {
            "code": "45770_dong_2",
            "name": "인계면",
            "center": {
                  "lat": 35.3744,
                  "lng": 127.1308,
                  "label": "순창군 인계면"
            }
      },
      {
            "code": "45770_dong_3",
            "name": "동계면",
            "center": {
                  "lat": 35.3804,
                  "lng": 127.1308,
                  "label": "순창군 동계면"
            }
      },
      {
            "code": "45770_dong_4",
            "name": "적성면",
            "center": {
                  "lat": 35.3684,
                  "lng": 127.1378,
                  "label": "순창군 적성면"
            }
      },
      {
            "code": "45770_dong_5",
            "name": "유등면",
            "center": {
                  "lat": 35.3744,
                  "lng": 127.1378,
                  "label": "순창군 유등면"
            }
      },
      {
            "code": "45770_dong_6",
            "name": "풍산면",
            "center": {
                  "lat": 35.3804,
                  "lng": 127.1378,
                  "label": "순창군 풍산면"
            }
      },
      {
            "code": "45770_dong_7",
            "name": "금과면",
            "center": {
                  "lat": 35.3684,
                  "lng": 127.1448,
                  "label": "순창군 금과면"
            }
      },
      {
            "code": "45770_dong_8",
            "name": "팔덕면",
            "center": {
                  "lat": 35.3744,
                  "lng": 127.1448,
                  "label": "순창군 팔덕면"
            }
      },
      {
            "code": "45770_dong_9",
            "name": "복흥면",
            "center": {
                  "lat": 35.3804,
                  "lng": 127.1448,
                  "label": "순창군 복흥면"
            }
      },
      {
            "code": "45770_dong_10",
            "name": "쌍치면",
            "center": {
                  "lat": 35.3684,
                  "lng": 127.1518,
                  "label": "순창군 쌍치면"
            }
      },
      {
            "code": "45770_dong_11",
            "name": "구림면",
            "center": {
                  "lat": 35.3744,
                  "lng": 127.1518,
                  "label": "순창군 구림면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "순창군",
  },
  {
    code: "45790",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "고창군",
    fullName: "전북특별자치도 고창군",
    
    
    
    center: {"lat":35.4358,"lng":126.7021,"label":"고창군 중심"},
    dongs: [
      {
            "code": "45790_dong_1",
            "name": "고창읍",
            "center": {
                  "lat": 35.4298,
                  "lng": 126.6951,
                  "label": "고창군 고창읍"
            }
      },
      {
            "code": "45790_dong_2",
            "name": "고수면",
            "center": {
                  "lat": 35.4358,
                  "lng": 126.6951,
                  "label": "고창군 고수면"
            }
      },
      {
            "code": "45790_dong_3",
            "name": "아산면",
            "center": {
                  "lat": 35.4418,
                  "lng": 126.6951,
                  "label": "고창군 아산면"
            }
      },
      {
            "code": "45790_dong_4",
            "name": "무장면",
            "center": {
                  "lat": 35.4298,
                  "lng": 126.7021,
                  "label": "고창군 무장면"
            }
      },
      {
            "code": "45790_dong_5",
            "name": "공음면",
            "center": {
                  "lat": 35.4358,
                  "lng": 126.7021,
                  "label": "고창군 공음면"
            }
      },
      {
            "code": "45790_dong_6",
            "name": "상하면",
            "center": {
                  "lat": 35.4418,
                  "lng": 126.7021,
                  "label": "고창군 상하면"
            }
      },
      {
            "code": "45790_dong_7",
            "name": "해리면",
            "center": {
                  "lat": 35.4298,
                  "lng": 126.7091,
                  "label": "고창군 해리면"
            }
      },
      {
            "code": "45790_dong_8",
            "name": "성송면",
            "center": {
                  "lat": 35.4358,
                  "lng": 126.7091,
                  "label": "고창군 성송면"
            }
      },
      {
            "code": "45790_dong_9",
            "name": "대산면",
            "center": {
                  "lat": 35.4418,
                  "lng": 126.7091,
                  "label": "고창군 대산면"
            }
      },
      {
            "code": "45790_dong_10",
            "name": "심원면",
            "center": {
                  "lat": 35.4298,
                  "lng": 126.7161,
                  "label": "고창군 심원면"
            }
      },
      {
            "code": "45790_dong_11",
            "name": "흥덕면",
            "center": {
                  "lat": 35.4358,
                  "lng": 126.7161,
                  "label": "고창군 흥덕면"
            }
      },
      {
            "code": "45790_dong_12",
            "name": "성내면",
            "center": {
                  "lat": 35.4418,
                  "lng": 126.7161,
                  "label": "고창군 성내면"
            }
      },
      {
            "code": "45790_dong_13",
            "name": "신림면",
            "center": {
                  "lat": 35.4298,
                  "lng": 126.7231,
                  "label": "고창군 신림면"
            }
      },
      {
            "code": "45790_dong_14",
            "name": "부안면",
            "center": {
                  "lat": 35.4358,
                  "lng": 126.7231,
                  "label": "고창군 부안면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "고창군",
  },
  {
    code: "45800",
    sidoCode: "45",
    sidoName: "전북특별자치도",
    name: "부안군",
    fullName: "전북특별자치도 부안군",
    
    
    
    center: {"lat":35.7317,"lng":126.7332,"label":"부안군(변산반도) 중심"},
    dongs: [
      {
            "code": "45800_dong_1",
            "name": "부안읍",
            "center": {
                  "lat": 35.7257,
                  "lng": 126.7262,
                  "label": "부안군 부안읍"
            }
      },
      {
            "code": "45800_dong_2",
            "name": "주산면",
            "center": {
                  "lat": 35.7317,
                  "lng": 126.7262,
                  "label": "부안군 주산면"
            }
      },
      {
            "code": "45800_dong_3",
            "name": "동진면",
            "center": {
                  "lat": 35.7377,
                  "lng": 126.7262,
                  "label": "부안군 동진면"
            }
      },
      {
            "code": "45800_dong_4",
            "name": "행안면",
            "center": {
                  "lat": 35.7257,
                  "lng": 126.7332,
                  "label": "부안군 행안면"
            }
      },
      {
            "code": "45800_dong_5",
            "name": "계화면",
            "center": {
                  "lat": 35.7317,
                  "lng": 126.7332,
                  "label": "부안군 계화면"
            }
      },
      {
            "code": "45800_dong_6",
            "name": "보안면",
            "center": {
                  "lat": 35.7377,
                  "lng": 126.7332,
                  "label": "부안군 보안면"
            }
      },
      {
            "code": "45800_dong_7",
            "name": "변산면",
            "center": {
                  "lat": 35.7257,
                  "lng": 126.7402,
                  "label": "부안군 변산면"
            }
      },
      {
            "code": "45800_dong_8",
            "name": "진서면",
            "center": {
                  "lat": 35.7317,
                  "lng": 126.7402,
                  "label": "부안군 진서면"
            }
      },
      {
            "code": "45800_dong_9",
            "name": "백산면",
            "center": {
                  "lat": 35.7377,
                  "lng": 126.7402,
                  "label": "부안군 백산면"
            }
      },
      {
            "code": "45800_dong_10",
            "name": "상서면",
            "center": {
                  "lat": 35.7257,
                  "lng": 126.7472,
                  "label": "부안군 상서면"
            }
      },
      {
            "code": "45800_dong_11",
            "name": "하서면",
            "center": {
                  "lat": 35.7317,
                  "lng": 126.7472,
                  "label": "부안군 하서면"
            }
      },
      {
            "code": "45800_dong_12",
            "name": "줄포면",
            "center": {
                  "lat": 35.7377,
                  "lng": 126.7472,
                  "label": "부안군 줄포면"
            }
      },
      {
            "code": "45800_dong_13",
            "name": "위도면",
            "center": {
                  "lat": 35.7257,
                  "lng": 126.7542,
                  "label": "부안군 위도면"
            }
      }
],
    isActive: true,
    city: "전북특별자치도",
    gu: "부안군",
  },
  {
    code: "46110",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "목포시",
    fullName: "전라남도 목포시",
    
    
    
    center: {"lat":34.8118,"lng":126.3922,"label":"목포시(평화광장) 중심"},
    dongs: [
      {
            "code": "46110_dong_1",
            "name": "용당동",
            "center": {
                  "lat": 34.8058,
                  "lng": 126.3852,
                  "label": "목포시 용당동"
            }
      },
      {
            "code": "46110_dong_2",
            "name": "연동",
            "center": {
                  "lat": 34.8118,
                  "lng": 126.3852,
                  "label": "목포시 연동"
            }
      },
      {
            "code": "46110_dong_3",
            "name": "산정동",
            "center": {
                  "lat": 34.8178,
                  "lng": 126.3852,
                  "label": "목포시 산정동"
            }
      },
      {
            "code": "46110_dong_4",
            "name": "원산동",
            "center": {
                  "lat": 34.8058,
                  "lng": 126.3922,
                  "label": "목포시 원산동"
            }
      },
      {
            "code": "46110_dong_5",
            "name": "대성동",
            "center": {
                  "lat": 34.8118,
                  "lng": 126.3922,
                  "label": "목포시 대성동"
            }
      },
      {
            "code": "46110_dong_6",
            "name": "목원동",
            "center": {
                  "lat": 34.8178,
                  "lng": 126.3922,
                  "label": "목포시 목원동"
            }
      },
      {
            "code": "46110_dong_7",
            "name": "동명동",
            "center": {
                  "lat": 34.8058,
                  "lng": 126.3992,
                  "label": "목포시 동명동"
            }
      },
      {
            "code": "46110_dong_8",
            "name": "삼학동",
            "center": {
                  "lat": 34.8118,
                  "lng": 126.3992,
                  "label": "목포시 삼학동"
            }
      },
      {
            "code": "46110_dong_9",
            "name": "만호동",
            "center": {
                  "lat": 34.8178,
                  "lng": 126.3992,
                  "label": "목포시 만호동"
            }
      },
      {
            "code": "46110_dong_10",
            "name": "유달동",
            "center": {
                  "lat": 34.8058,
                  "lng": 126.4062,
                  "label": "목포시 유달동"
            }
      },
      {
            "code": "46110_dong_11",
            "name": "죽교동",
            "center": {
                  "lat": 34.8118,
                  "lng": 126.4062,
                  "label": "목포시 죽교동"
            }
      },
      {
            "code": "46110_dong_12",
            "name": "북항동",
            "center": {
                  "lat": 34.8178,
                  "lng": 126.4062,
                  "label": "목포시 북항동"
            }
      },
      {
            "code": "46110_dong_13",
            "name": "용해동",
            "center": {
                  "lat": 34.8058,
                  "lng": 126.4132,
                  "label": "목포시 용해동"
            }
      },
      {
            "code": "46110_dong_14",
            "name": "이로동",
            "center": {
                  "lat": 34.8118,
                  "lng": 126.4132,
                  "label": "목포시 이로동"
            }
      },
      {
            "code": "46110_dong_15",
            "name": "상동",
            "center": {
                  "lat": 34.8178,
                  "lng": 126.4132,
                  "label": "목포시 상동"
            }
      },
      {
            "code": "46110_dong_16",
            "name": "하당동",
            "center": {
                  "lat": 34.8058,
                  "lng": 126.4202,
                  "label": "목포시 하당동"
            }
      },
      {
            "code": "46110_dong_17",
            "name": "신흥동",
            "center": {
                  "lat": 34.8118,
                  "lng": 126.4202,
                  "label": "목포시 신흥동"
            }
      },
      {
            "code": "46110_dong_18",
            "name": "삼향동",
            "center": {
                  "lat": 34.8178,
                  "lng": 126.4202,
                  "label": "목포시 삼향동"
            }
      },
      {
            "code": "46110_dong_19",
            "name": "옥암동",
            "center": {
                  "lat": 34.8058,
                  "lng": 126.4272,
                  "label": "목포시 옥암동"
            }
      },
      {
            "code": "46110_dong_20",
            "name": "부흥동",
            "center": {
                  "lat": 34.8118,
                  "lng": 126.4272,
                  "label": "목포시 부흥동"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "목포시",
  },
  {
    code: "46130",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "여수시",
    fullName: "전라남도 여수시",
    legacyCode: "jeonnam_yeosu",
    
    
    center: {"lat":34.7604,"lng":127.6622,"label":"여수시(해양공원/낭만포차) 중심"},
    dongs: [
      {
            "code": "46130_dong_1",
            "name": "중앙동",
            "center": {
                  "lat": 34.7544,
                  "lng": 127.6552,
                  "label": "여수시 중앙동"
            }
      },
      {
            "code": "46130_dong_2",
            "name": "교동",
            "center": {
                  "lat": 34.7604,
                  "lng": 127.6552,
                  "label": "여수시 교동"
            }
      },
      {
            "code": "46130_dong_3",
            "name": "동문동",
            "center": {
                  "lat": 34.7664,
                  "lng": 127.6552,
                  "label": "여수시 동문동"
            }
      },
      {
            "code": "46130_dong_4",
            "name": "한려동",
            "center": {
                  "lat": 34.7544,
                  "lng": 127.6622,
                  "label": "여수시 한려동"
            }
      },
      {
            "code": "46130_dong_5",
            "name": "광림동",
            "center": {
                  "lat": 34.7604,
                  "lng": 127.6622,
                  "label": "여수시 광림동"
            }
      },
      {
            "code": "46130_dong_6",
            "name": "서강동",
            "center": {
                  "lat": 34.7664,
                  "lng": 127.6622,
                  "label": "여수시 서강동"
            }
      },
      {
            "code": "46130_dong_7",
            "name": "대교동",
            "center": {
                  "lat": 34.7544,
                  "lng": 127.6692,
                  "label": "여수시 대교동"
            }
      },
      {
            "code": "46130_dong_8",
            "name": "국동",
            "center": {
                  "lat": 34.7604,
                  "lng": 127.6692,
                  "label": "여수시 국동"
            }
      },
      {
            "code": "46130_dong_9",
            "name": "월호동",
            "center": {
                  "lat": 34.7664,
                  "lng": 127.6692,
                  "label": "여수시 월호동"
            }
      },
      {
            "code": "46130_dong_10",
            "name": "여서동",
            "center": {
                  "lat": 34.7544,
                  "lng": 127.6762,
                  "label": "여수시 여서동"
            }
      },
      {
            "code": "46130_dong_11",
            "name": "문수동",
            "center": {
                  "lat": 34.7604,
                  "lng": 127.6762,
                  "label": "여수시 문수동"
            }
      },
      {
            "code": "46130_dong_12",
            "name": "미평동",
            "center": {
                  "lat": 34.7664,
                  "lng": 127.6762,
                  "label": "여수시 미평동"
            }
      },
      {
            "code": "46130_dong_13",
            "name": "둔덕동",
            "center": {
                  "lat": 34.7544,
                  "lng": 127.6832,
                  "label": "여수시 둔덕동"
            }
      },
      {
            "code": "46130_dong_14",
            "name": "만덕동",
            "center": {
                  "lat": 34.7604,
                  "lng": 127.6832,
                  "label": "여수시 만덕동"
            }
      },
      {
            "code": "46130_dong_15",
            "name": "쌍봉동",
            "center": {
                  "lat": 34.7664,
                  "lng": 127.6832,
                  "label": "여수시 쌍봉동"
            }
      },
      {
            "code": "46130_dong_16",
            "name": "시전동",
            "center": {
                  "lat": 34.7544,
                  "lng": 127.6902,
                  "label": "여수시 시전동"
            }
      },
      {
            "code": "46130_dong_17",
            "name": "여천동",
            "center": {
                  "lat": 34.7604,
                  "lng": 127.6902,
                  "label": "여수시 여천동"
            }
      },
      {
            "code": "46130_dong_18",
            "name": "주삼동",
            "center": {
                  "lat": 34.7664,
                  "lng": 127.6902,
                  "label": "여수시 주삼동"
            }
      },
      {
            "code": "46130_dong_19",
            "name": "삼일동",
            "center": {
                  "lat": 34.7544,
                  "lng": 127.6972,
                  "label": "여수시 삼일동"
            }
      },
      {
            "code": "46130_dong_20",
            "name": "묘도동",
            "center": {
                  "lat": 34.7604,
                  "lng": 127.6972,
                  "label": "여수시 묘도동"
            }
      },
      {
            "code": "46130_dong_21",
            "name": "돌산읍",
            "center": {
                  "lat": 34.7664,
                  "lng": 127.6972,
                  "label": "여수시 돌산읍"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "여수시",
  },
  {
    code: "46150",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "순천시",
    fullName: "전라남도 순천시",
    legacyCode: "jeonnam_suncheon",
    
    
    center: {"lat":34.9506,"lng":127.4872,"label":"순천시(순천만/조례동) 중심"},
    dongs: [
      {
            "code": "46150_dong_1",
            "name": "향동",
            "center": {
                  "lat": 34.9446,
                  "lng": 127.4802,
                  "label": "순천시 향동"
            }
      },
      {
            "code": "46150_dong_2",
            "name": "매곡동",
            "center": {
                  "lat": 34.9506,
                  "lng": 127.4802,
                  "label": "순천시 매곡동"
            }
      },
      {
            "code": "46150_dong_3",
            "name": "삼산동",
            "center": {
                  "lat": 34.9566,
                  "lng": 127.4802,
                  "label": "순천시 삼산동"
            }
      },
      {
            "code": "46150_dong_4",
            "name": "조곡동",
            "center": {
                  "lat": 34.9446,
                  "lng": 127.4872,
                  "label": "순천시 조곡동"
            }
      },
      {
            "code": "46150_dong_5",
            "name": "덕연동",
            "center": {
                  "lat": 34.9506,
                  "lng": 127.4872,
                  "label": "순천시 덕연동"
            }
      },
      {
            "code": "46150_dong_6",
            "name": "풍덕동",
            "center": {
                  "lat": 34.9566,
                  "lng": 127.4872,
                  "label": "순천시 풍덕동"
            }
      },
      {
            "code": "46150_dong_7",
            "name": "남제동",
            "center": {
                  "lat": 34.9446,
                  "lng": 127.4942,
                  "label": "순천시 남제동"
            }
      },
      {
            "code": "46150_dong_8",
            "name": "저전동",
            "center": {
                  "lat": 34.9506,
                  "lng": 127.4942,
                  "label": "순천시 저전동"
            }
      },
      {
            "code": "46150_dong_9",
            "name": "장천동",
            "center": {
                  "lat": 34.9566,
                  "lng": 127.4942,
                  "label": "순천시 장천동"
            }
      },
      {
            "code": "46150_dong_10",
            "name": "중앙동",
            "center": {
                  "lat": 34.9446,
                  "lng": 127.5012,
                  "label": "순천시 중앙동"
            }
      },
      {
            "code": "46150_dong_11",
            "name": "도사동",
            "center": {
                  "lat": 34.9506,
                  "lng": 127.5012,
                  "label": "순천시 도사동"
            }
      },
      {
            "code": "46150_dong_12",
            "name": "왕조1동",
            "center": {
                  "lat": 34.9566,
                  "lng": 127.5012,
                  "label": "순천시 왕조1동"
            }
      },
      {
            "code": "46150_dong_13",
            "name": "왕조2동",
            "center": {
                  "lat": 34.9446,
                  "lng": 127.5082,
                  "label": "순천시 왕조2동"
            }
      },
      {
            "code": "46150_dong_14",
            "name": "승주읍",
            "center": {
                  "lat": 34.9506,
                  "lng": 127.5082,
                  "label": "순천시 승주읍"
            }
      },
      {
            "code": "46150_dong_15",
            "name": "해룡면",
            "center": {
                  "lat": 34.9566,
                  "lng": 127.5082,
                  "label": "순천시 해룡면"
            }
      },
      {
            "code": "46150_dong_16",
            "name": "서면",
            "center": {
                  "lat": 34.9446,
                  "lng": 127.5152,
                  "label": "순천시 서면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "순천시",
  },
  {
    code: "46170",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "나주시",
    fullName: "전라남도 나주시",
    
    
    
    center: {"lat":35.0161,"lng":126.7108,"label":"나주시(빛가람동/혁신도시) 중심"},
    dongs: [
      {
            "code": "46170_dong_1",
            "name": "빛가람동",
            "center": {
                  "lat": 35.0101,
                  "lng": 126.7038,
                  "label": "나주시 빛가람동"
            }
      },
      {
            "code": "46170_dong_2",
            "name": "송월동",
            "center": {
                  "lat": 35.0161,
                  "lng": 126.7038,
                  "label": "나주시 송월동"
            }
      },
      {
            "code": "46170_dong_3",
            "name": "영강동",
            "center": {
                  "lat": 35.0221,
                  "lng": 126.7038,
                  "label": "나주시 영강동"
            }
      },
      {
            "code": "46170_dong_4",
            "name": "금남동",
            "center": {
                  "lat": 35.0101,
                  "lng": 126.7108,
                  "label": "나주시 금남동"
            }
      },
      {
            "code": "46170_dong_5",
            "name": "성북동",
            "center": {
                  "lat": 35.0161,
                  "lng": 126.7108,
                  "label": "나주시 성북동"
            }
      },
      {
            "code": "46170_dong_6",
            "name": "영산동",
            "center": {
                  "lat": 35.0221,
                  "lng": 126.7108,
                  "label": "나주시 영산동"
            }
      },
      {
            "code": "46170_dong_7",
            "name": "이창동",
            "center": {
                  "lat": 35.0101,
                  "lng": 126.7178,
                  "label": "나주시 이창동"
            }
      },
      {
            "code": "46170_dong_8",
            "name": "남평읍",
            "center": {
                  "lat": 35.0161,
                  "lng": 126.7178,
                  "label": "나주시 남평읍"
            }
      },
      {
            "code": "46170_dong_9",
            "name": "세지면",
            "center": {
                  "lat": 35.0221,
                  "lng": 126.7178,
                  "label": "나주시 세지면"
            }
      },
      {
            "code": "46170_dong_10",
            "name": "왕곡면",
            "center": {
                  "lat": 35.0101,
                  "lng": 126.7248,
                  "label": "나주시 왕곡면"
            }
      },
      {
            "code": "46170_dong_11",
            "name": "반남면",
            "center": {
                  "lat": 35.0161,
                  "lng": 126.7248,
                  "label": "나주시 반남면"
            }
      },
      {
            "code": "46170_dong_12",
            "name": "공산면",
            "center": {
                  "lat": 35.0221,
                  "lng": 126.7248,
                  "label": "나주시 공산면"
            }
      },
      {
            "code": "46170_dong_13",
            "name": "동강면",
            "center": {
                  "lat": 35.0101,
                  "lng": 126.7318,
                  "label": "나주시 동강면"
            }
      },
      {
            "code": "46170_dong_14",
            "name": "다시면",
            "center": {
                  "lat": 35.0161,
                  "lng": 126.7318,
                  "label": "나주시 다시면"
            }
      },
      {
            "code": "46170_dong_15",
            "name": "문평면",
            "center": {
                  "lat": 35.0221,
                  "lng": 126.7318,
                  "label": "나주시 문평면"
            }
      },
      {
            "code": "46170_dong_16",
            "name": "노안면",
            "center": {
                  "lat": 35.0101,
                  "lng": 126.7388,
                  "label": "나주시 노안면"
            }
      },
      {
            "code": "46170_dong_17",
            "name": "금천면",
            "center": {
                  "lat": 35.0161,
                  "lng": 126.7388,
                  "label": "나주시 금천면"
            }
      },
      {
            "code": "46170_dong_18",
            "name": "산포면",
            "center": {
                  "lat": 35.0221,
                  "lng": 126.7388,
                  "label": "나주시 산포면"
            }
      },
      {
            "code": "46170_dong_19",
            "name": "다도면",
            "center": {
                  "lat": 35.0101,
                  "lng": 126.7458,
                  "label": "나주시 다도면"
            }
      },
      {
            "code": "46170_dong_20",
            "name": "봉황면",
            "center": {
                  "lat": 35.0161,
                  "lng": 126.7458,
                  "label": "나주시 봉황면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "나주시",
  },
  {
    code: "46230",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "광양시",
    fullName: "전라남도 광양시",
    
    
    
    center: {"lat":34.9407,"lng":127.6959,"label":"광양시(중마동) 중심"},
    dongs: [
      {
            "code": "46230_dong_1",
            "name": "광양읍",
            "center": {
                  "lat": 34.9347,
                  "lng": 127.6889,
                  "label": "광양시 광양읍"
            }
      },
      {
            "code": "46230_dong_2",
            "name": "중마동",
            "center": {
                  "lat": 34.9407,
                  "lng": 127.6889,
                  "label": "광양시 중마동"
            }
      },
      {
            "code": "46230_dong_3",
            "name": "광영동",
            "center": {
                  "lat": 34.9467,
                  "lng": 127.6889,
                  "label": "광양시 광영동"
            }
      },
      {
            "code": "46230_dong_4",
            "name": "금호동",
            "center": {
                  "lat": 34.9347,
                  "lng": 127.6959,
                  "label": "광양시 금호동"
            }
      },
      {
            "code": "46230_dong_5",
            "name": "태인동",
            "center": {
                  "lat": 34.9407,
                  "lng": 127.6959,
                  "label": "광양시 태인동"
            }
      },
      {
            "code": "46230_dong_6",
            "name": "골약동",
            "center": {
                  "lat": 34.9467,
                  "lng": 127.6959,
                  "label": "광양시 골약동"
            }
      },
      {
            "code": "46230_dong_7",
            "name": "봉강면",
            "center": {
                  "lat": 34.9347,
                  "lng": 127.7029,
                  "label": "광양시 봉강면"
            }
      },
      {
            "code": "46230_dong_8",
            "name": "옥룡면",
            "center": {
                  "lat": 34.9407,
                  "lng": 127.7029,
                  "label": "광양시 옥룡면"
            }
      },
      {
            "code": "46230_dong_9",
            "name": "옥곡면",
            "center": {
                  "lat": 34.9467,
                  "lng": 127.7029,
                  "label": "광양시 옥곡면"
            }
      },
      {
            "code": "46230_dong_10",
            "name": "진상면",
            "center": {
                  "lat": 34.9347,
                  "lng": 127.7099,
                  "label": "광양시 진상면"
            }
      },
      {
            "code": "46230_dong_11",
            "name": "진월면",
            "center": {
                  "lat": 34.9407,
                  "lng": 127.7099,
                  "label": "광양시 진월면"
            }
      },
      {
            "code": "46230_dong_12",
            "name": "다압면",
            "center": {
                  "lat": 34.9467,
                  "lng": 127.7099,
                  "label": "광양시 다압면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "광양시",
  },
  {
    code: "46710",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "담양군",
    fullName: "전라남도 담양군",
    
    
    
    center: {"lat":35.3211,"lng":126.9882,"label":"담양군(죽녹원) 중심"},
    dongs: [
      {
            "code": "46710_dong_1",
            "name": "담양읍",
            "center": {
                  "lat": 35.3151,
                  "lng": 126.9812,
                  "label": "담양군 담양읍"
            }
      },
      {
            "code": "46710_dong_2",
            "name": "봉산면",
            "center": {
                  "lat": 35.3211,
                  "lng": 126.9812,
                  "label": "담양군 봉산면"
            }
      },
      {
            "code": "46710_dong_3",
            "name": "고서면",
            "center": {
                  "lat": 35.3271,
                  "lng": 126.9812,
                  "label": "담양군 고서면"
            }
      },
      {
            "code": "46710_dong_4",
            "name": "가사문학면",
            "center": {
                  "lat": 35.3151,
                  "lng": 126.9882,
                  "label": "담양군 가사문학면"
            }
      },
      {
            "code": "46710_dong_5",
            "name": "창평면",
            "center": {
                  "lat": 35.3211,
                  "lng": 126.9882,
                  "label": "담양군 창평면"
            }
      },
      {
            "code": "46710_dong_6",
            "name": "대덕면",
            "center": {
                  "lat": 35.3271,
                  "lng": 126.9882,
                  "label": "담양군 대덕면"
            }
      },
      {
            "code": "46710_dong_7",
            "name": "무정면",
            "center": {
                  "lat": 35.3151,
                  "lng": 126.9952,
                  "label": "담양군 무정면"
            }
      },
      {
            "code": "46710_dong_8",
            "name": "금성면",
            "center": {
                  "lat": 35.3211,
                  "lng": 126.9952,
                  "label": "담양군 금성면"
            }
      },
      {
            "code": "46710_dong_9",
            "name": "용면",
            "center": {
                  "lat": 35.3271,
                  "lng": 126.9952,
                  "label": "담양군 용면"
            }
      },
      {
            "code": "46710_dong_10",
            "name": "월산면",
            "center": {
                  "lat": 35.3151,
                  "lng": 127.0022,
                  "label": "담양군 월산면"
            }
      },
      {
            "code": "46710_dong_11",
            "name": "수북면",
            "center": {
                  "lat": 35.3211,
                  "lng": 127.0022,
                  "label": "담양군 수북면"
            }
      },
      {
            "code": "46710_dong_12",
            "name": "대전면",
            "center": {
                  "lat": 35.3271,
                  "lng": 127.0022,
                  "label": "담양군 대전면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "담양군",
  },
  {
    code: "46720",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "곡성군",
    fullName: "전라남도 곡성군",
    
    
    
    center: {"lat":35.282,"lng":127.2921,"label":"곡성군(기차마을) 중심"},
    dongs: [
      {
            "code": "46720_dong_1",
            "name": "곡성읍",
            "center": {
                  "lat": 35.276,
                  "lng": 127.2851,
                  "label": "곡성군 곡성읍"
            }
      },
      {
            "code": "46720_dong_2",
            "name": "오곡면",
            "center": {
                  "lat": 35.282,
                  "lng": 127.2851,
                  "label": "곡성군 오곡면"
            }
      },
      {
            "code": "46720_dong_3",
            "name": "삼기면",
            "center": {
                  "lat": 35.288,
                  "lng": 127.2851,
                  "label": "곡성군 삼기면"
            }
      },
      {
            "code": "46720_dong_4",
            "name": "석곡면",
            "center": {
                  "lat": 35.276,
                  "lng": 127.2921,
                  "label": "곡성군 석곡면"
            }
      },
      {
            "code": "46720_dong_5",
            "name": "목사동면",
            "center": {
                  "lat": 35.282,
                  "lng": 127.2921,
                  "label": "곡성군 목사동면"
            }
      },
      {
            "code": "46720_dong_6",
            "name": "죽곡면",
            "center": {
                  "lat": 35.288,
                  "lng": 127.2921,
                  "label": "곡성군 죽곡면"
            }
      },
      {
            "code": "46720_dong_7",
            "name": "옥과면",
            "center": {
                  "lat": 35.276,
                  "lng": 127.2991,
                  "label": "곡성군 옥과면"
            }
      },
      {
            "code": "46720_dong_8",
            "name": "입면",
            "center": {
                  "lat": 35.282,
                  "lng": 127.2991,
                  "label": "곡성군 입면"
            }
      },
      {
            "code": "46720_dong_9",
            "name": "겸면",
            "center": {
                  "lat": 35.288,
                  "lng": 127.2991,
                  "label": "곡성군 겸면"
            }
      },
      {
            "code": "46720_dong_10",
            "name": "오산면",
            "center": {
                  "lat": 35.276,
                  "lng": 127.3061,
                  "label": "곡성군 오산면"
            }
      },
      {
            "code": "46720_dong_11",
            "name": "고달면",
            "center": {
                  "lat": 35.282,
                  "lng": 127.3061,
                  "label": "곡성군 고달면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "곡성군",
  },
  {
    code: "46730",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "구례군",
    fullName: "전라남도 구례군",
    
    
    
    center: {"lat":35.2025,"lng":127.4628,"label":"구례군(지리산) 중심"},
    dongs: [
      {
            "code": "46730_dong_1",
            "name": "구례읍",
            "center": {
                  "lat": 35.1965,
                  "lng": 127.4558,
                  "label": "구례군 구례읍"
            }
      },
      {
            "code": "46730_dong_2",
            "name": "문척면",
            "center": {
                  "lat": 35.2025,
                  "lng": 127.4558,
                  "label": "구례군 문척면"
            }
      },
      {
            "code": "46730_dong_3",
            "name": "간전면",
            "center": {
                  "lat": 35.2085,
                  "lng": 127.4558,
                  "label": "구례군 간전면"
            }
      },
      {
            "code": "46730_dong_4",
            "name": "토지면",
            "center": {
                  "lat": 35.1965,
                  "lng": 127.4628,
                  "label": "구례군 토지면"
            }
      },
      {
            "code": "46730_dong_5",
            "name": "마산면",
            "center": {
                  "lat": 35.2025,
                  "lng": 127.4628,
                  "label": "구례군 마산면"
            }
      },
      {
            "code": "46730_dong_6",
            "name": "광의면",
            "center": {
                  "lat": 35.2085,
                  "lng": 127.4628,
                  "label": "구례군 광의면"
            }
      },
      {
            "code": "46730_dong_7",
            "name": "용방면",
            "center": {
                  "lat": 35.1965,
                  "lng": 127.4698,
                  "label": "구례군 용방면"
            }
      },
      {
            "code": "46730_dong_8",
            "name": "산동면",
            "center": {
                  "lat": 35.2025,
                  "lng": 127.4698,
                  "label": "구례군 산동면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "구례군",
  },
  {
    code: "46770",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "고흥군",
    fullName: "전라남도 고흥군",
    
    
    
    center: {"lat":34.6111,"lng":127.2847,"label":"고흥군(나로도) 중심"},
    dongs: [
      {
            "code": "46770_dong_1",
            "name": "고흥읍",
            "center": {
                  "lat": 34.6051,
                  "lng": 127.2777,
                  "label": "고흥군 고흥읍"
            }
      },
      {
            "code": "46770_dong_2",
            "name": "도양읍",
            "center": {
                  "lat": 34.6111,
                  "lng": 127.2777,
                  "label": "고흥군 도양읍"
            }
      },
      {
            "code": "46770_dong_3",
            "name": "풍양면",
            "center": {
                  "lat": 34.6171,
                  "lng": 127.2777,
                  "label": "고흥군 풍양면"
            }
      },
      {
            "code": "46770_dong_4",
            "name": "도덕면",
            "center": {
                  "lat": 34.6051,
                  "lng": 127.2847,
                  "label": "고흥군 도덕면"
            }
      },
      {
            "code": "46770_dong_5",
            "name": "금산면",
            "center": {
                  "lat": 34.6111,
                  "lng": 127.2847,
                  "label": "고흥군 금산면"
            }
      },
      {
            "code": "46770_dong_6",
            "name": "도화면",
            "center": {
                  "lat": 34.6171,
                  "lng": 127.2847,
                  "label": "고흥군 도화면"
            }
      },
      {
            "code": "46770_dong_7",
            "name": "포두면",
            "center": {
                  "lat": 34.6051,
                  "lng": 127.2917,
                  "label": "고흥군 포두면"
            }
      },
      {
            "code": "46770_dong_8",
            "name": "봉래면",
            "center": {
                  "lat": 34.6111,
                  "lng": 127.2917,
                  "label": "고흥군 봉래면"
            }
      },
      {
            "code": "46770_dong_9",
            "name": "동일면",
            "center": {
                  "lat": 34.6171,
                  "lng": 127.2917,
                  "label": "고흥군 동일면"
            }
      },
      {
            "code": "46770_dong_10",
            "name": "점암면",
            "center": {
                  "lat": 34.6051,
                  "lng": 127.2987,
                  "label": "고흥군 점암면"
            }
      },
      {
            "code": "46770_dong_11",
            "name": "영남면",
            "center": {
                  "lat": 34.6111,
                  "lng": 127.2987,
                  "label": "고흥군 영남면"
            }
      },
      {
            "code": "46770_dong_12",
            "name": "과역면",
            "center": {
                  "lat": 34.6171,
                  "lng": 127.2987,
                  "label": "고흥군 과역면"
            }
      },
      {
            "code": "46770_dong_13",
            "name": "남양면",
            "center": {
                  "lat": 34.6051,
                  "lng": 127.3057,
                  "label": "고흥군 남양면"
            }
      },
      {
            "code": "46770_dong_14",
            "name": "동강면",
            "center": {
                  "lat": 34.6111,
                  "lng": 127.3057,
                  "label": "고흥군 동강면"
            }
      },
      {
            "code": "46770_dong_15",
            "name": "대서면",
            "center": {
                  "lat": 34.6171,
                  "lng": 127.3057,
                  "label": "고흥군 대서면"
            }
      },
      {
            "code": "46770_dong_16",
            "name": "두원면",
            "center": {
                  "lat": 34.6051,
                  "lng": 127.3127,
                  "label": "고흥군 두원면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "고흥군",
  },
  {
    code: "46780",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "보성군",
    fullName: "전라남도 보성군",
    
    
    
    center: {"lat":34.7715,"lng":127.0799,"label":"보성군(녹차밭/벌교) 중심"},
    dongs: [
      {
            "code": "46780_dong_1",
            "name": "보성읍",
            "center": {
                  "lat": 34.7655,
                  "lng": 127.0729,
                  "label": "보성군 보성읍"
            }
      },
      {
            "code": "46780_dong_2",
            "name": "벌교읍",
            "center": {
                  "lat": 34.7715,
                  "lng": 127.0729,
                  "label": "보성군 벌교읍"
            }
      },
      {
            "code": "46780_dong_3",
            "name": "노동면",
            "center": {
                  "lat": 34.7775,
                  "lng": 127.0729,
                  "label": "보성군 노동면"
            }
      },
      {
            "code": "46780_dong_4",
            "name": "미력면",
            "center": {
                  "lat": 34.7655,
                  "lng": 127.0799,
                  "label": "보성군 미력면"
            }
      },
      {
            "code": "46780_dong_5",
            "name": "겸백면",
            "center": {
                  "lat": 34.7715,
                  "lng": 127.0799,
                  "label": "보성군 겸백면"
            }
      },
      {
            "code": "46780_dong_6",
            "name": "율어면",
            "center": {
                  "lat": 34.7775,
                  "lng": 127.0799,
                  "label": "보성군 율어면"
            }
      },
      {
            "code": "46780_dong_7",
            "name": "복내면",
            "center": {
                  "lat": 34.7655,
                  "lng": 127.0869,
                  "label": "보성군 복내면"
            }
      },
      {
            "code": "46780_dong_8",
            "name": "문덕면",
            "center": {
                  "lat": 34.7715,
                  "lng": 127.0869,
                  "label": "보성군 문덕면"
            }
      },
      {
            "code": "46780_dong_9",
            "name": "조성면",
            "center": {
                  "lat": 34.7775,
                  "lng": 127.0869,
                  "label": "보성군 조성면"
            }
      },
      {
            "code": "46780_dong_10",
            "name": "득량면",
            "center": {
                  "lat": 34.7655,
                  "lng": 127.0939,
                  "label": "보성군 득량면"
            }
      },
      {
            "code": "46780_dong_11",
            "name": "회천면",
            "center": {
                  "lat": 34.7715,
                  "lng": 127.0939,
                  "label": "보성군 회천면"
            }
      },
      {
            "code": "46780_dong_12",
            "name": "웅치면",
            "center": {
                  "lat": 34.7775,
                  "lng": 127.0939,
                  "label": "보성군 웅치면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "보성군",
  },
  {
    code: "46790",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "화순군",
    fullName: "전라남도 화순군",
    
    
    
    center: {"lat":35.0645,"lng":126.9865,"label":"화순군 중심"},
    dongs: [
      {
            "code": "46790_dong_1",
            "name": "화순읍",
            "center": {
                  "lat": 35.0585,
                  "lng": 126.9795,
                  "label": "화순군 화순읍"
            }
      },
      {
            "code": "46790_dong_2",
            "name": "한천면",
            "center": {
                  "lat": 35.0645,
                  "lng": 126.9795,
                  "label": "화순군 한천면"
            }
      },
      {
            "code": "46790_dong_3",
            "name": "춘양면",
            "center": {
                  "lat": 35.0705,
                  "lng": 126.9795,
                  "label": "화순군 춘양면"
            }
      },
      {
            "code": "46790_dong_4",
            "name": "청풍면",
            "center": {
                  "lat": 35.0585,
                  "lng": 126.9865,
                  "label": "화순군 청풍면"
            }
      },
      {
            "code": "46790_dong_5",
            "name": "이양면",
            "center": {
                  "lat": 35.0645,
                  "lng": 126.9865,
                  "label": "화순군 이양면"
            }
      },
      {
            "code": "46790_dong_6",
            "name": "능주면",
            "center": {
                  "lat": 35.0705,
                  "lng": 126.9865,
                  "label": "화순군 능주면"
            }
      },
      {
            "code": "46790_dong_7",
            "name": "도곡면",
            "center": {
                  "lat": 35.0585,
                  "lng": 126.9935,
                  "label": "화순군 도곡면"
            }
      },
      {
            "code": "46790_dong_8",
            "name": "도암면",
            "center": {
                  "lat": 35.0645,
                  "lng": 126.9935,
                  "label": "화순군 도암면"
            }
      },
      {
            "code": "46790_dong_9",
            "name": "이서면",
            "center": {
                  "lat": 35.0705,
                  "lng": 126.9935,
                  "label": "화순군 이서면"
            }
      },
      {
            "code": "46790_dong_10",
            "name": "백아면",
            "center": {
                  "lat": 35.0585,
                  "lng": 127.0005,
                  "label": "화순군 백아면"
            }
      },
      {
            "code": "46790_dong_11",
            "name": "동복면",
            "center": {
                  "lat": 35.0645,
                  "lng": 127.0005,
                  "label": "화순군 동복면"
            }
      },
      {
            "code": "46790_dong_12",
            "name": "사평면",
            "center": {
                  "lat": 35.0705,
                  "lng": 127.0005,
                  "label": "화순군 사평면"
            }
      },
      {
            "code": "46790_dong_13",
            "name": "동면",
            "center": {
                  "lat": 35.0585,
                  "lng": 127.0075,
                  "label": "화순군 동면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "화순군",
  },
  {
    code: "46800",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "장흥군",
    fullName: "전라남도 장흥군",
    
    
    
    center: {"lat":34.6816,"lng":126.9069,"label":"장흥군(정남진) 중심"},
    dongs: [
      {
            "code": "46800_dong_1",
            "name": "장흥읍",
            "center": {
                  "lat": 34.6756,
                  "lng": 126.8999,
                  "label": "장흥군 장흥읍"
            }
      },
      {
            "code": "46800_dong_2",
            "name": "관산읍",
            "center": {
                  "lat": 34.6816,
                  "lng": 126.8999,
                  "label": "장흥군 관산읍"
            }
      },
      {
            "code": "46800_dong_3",
            "name": "대덕읍",
            "center": {
                  "lat": 34.6876,
                  "lng": 126.8999,
                  "label": "장흥군 대덕읍"
            }
      },
      {
            "code": "46800_dong_4",
            "name": "용산면",
            "center": {
                  "lat": 34.6756,
                  "lng": 126.9069,
                  "label": "장흥군 용산면"
            }
      },
      {
            "code": "46800_dong_5",
            "name": "안양면",
            "center": {
                  "lat": 34.6816,
                  "lng": 126.9069,
                  "label": "장흥군 안양면"
            }
      },
      {
            "code": "46800_dong_6",
            "name": "장동면",
            "center": {
                  "lat": 34.6876,
                  "lng": 126.9069,
                  "label": "장흥군 장동면"
            }
      },
      {
            "code": "46800_dong_7",
            "name": "장평면",
            "center": {
                  "lat": 34.6756,
                  "lng": 126.9139,
                  "label": "장흥군 장평면"
            }
      },
      {
            "code": "46800_dong_8",
            "name": "유치면",
            "center": {
                  "lat": 34.6816,
                  "lng": 126.9139,
                  "label": "장흥군 유치면"
            }
      },
      {
            "code": "46800_dong_9",
            "name": "부산면",
            "center": {
                  "lat": 34.6876,
                  "lng": 126.9139,
                  "label": "장흥군 부산면"
            }
      },
      {
            "code": "46800_dong_10",
            "name": "회진면",
            "center": {
                  "lat": 34.6756,
                  "lng": 126.9209,
                  "label": "장흥군 회진면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "장흥군",
  },
  {
    code: "46810",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "강진군",
    fullName: "전라남도 강진군",
    
    
    
    center: {"lat":34.6409,"lng":126.7699,"label":"강진군 중심"},
    dongs: [
      {
            "code": "46810_dong_1",
            "name": "강진읍",
            "center": {
                  "lat": 34.6349,
                  "lng": 126.7629,
                  "label": "강진군 강진읍"
            }
      },
      {
            "code": "46810_dong_2",
            "name": "군동면",
            "center": {
                  "lat": 34.6409,
                  "lng": 126.7629,
                  "label": "강진군 군동면"
            }
      },
      {
            "code": "46810_dong_3",
            "name": "칠량면",
            "center": {
                  "lat": 34.6469,
                  "lng": 126.7629,
                  "label": "강진군 칠량면"
            }
      },
      {
            "code": "46810_dong_4",
            "name": "대구면",
            "center": {
                  "lat": 34.6349,
                  "lng": 126.7699,
                  "label": "강진군 대구면"
            }
      },
      {
            "code": "46810_dong_5",
            "name": "도암면",
            "center": {
                  "lat": 34.6409,
                  "lng": 126.7699,
                  "label": "강진군 도암면"
            }
      },
      {
            "code": "46810_dong_6",
            "name": "신전면",
            "center": {
                  "lat": 34.6469,
                  "lng": 126.7699,
                  "label": "강진군 신전면"
            }
      },
      {
            "code": "46810_dong_7",
            "name": "성전면",
            "center": {
                  "lat": 34.6349,
                  "lng": 126.7769,
                  "label": "강진군 성전면"
            }
      },
      {
            "code": "46810_dong_8",
            "name": "작천면",
            "center": {
                  "lat": 34.6409,
                  "lng": 126.7769,
                  "label": "강진군 작천면"
            }
      },
      {
            "code": "46810_dong_9",
            "name": "병영면",
            "center": {
                  "lat": 34.6469,
                  "lng": 126.7769,
                  "label": "강진군 병영면"
            }
      },
      {
            "code": "46810_dong_10",
            "name": "옴천면",
            "center": {
                  "lat": 34.6349,
                  "lng": 126.7839,
                  "label": "강진군 옴천면"
            }
      },
      {
            "code": "46810_dong_11",
            "name": "마량면",
            "center": {
                  "lat": 34.6409,
                  "lng": 126.7839,
                  "label": "강진군 마량면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "강진군",
  },
  {
    code: "46820",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "해남군",
    fullName: "전라남도 해남군",
    
    
    
    center: {"lat":34.5735,"lng":126.5989,"label":"해남군(땅끝마을) 중심"},
    dongs: [
      {
            "code": "46820_dong_1",
            "name": "해남읍",
            "center": {
                  "lat": 34.5675,
                  "lng": 126.5919,
                  "label": "해남군 해남읍"
            }
      },
      {
            "code": "46820_dong_2",
            "name": "삼산면",
            "center": {
                  "lat": 34.5735,
                  "lng": 126.5919,
                  "label": "해남군 삼산면"
            }
      },
      {
            "code": "46820_dong_3",
            "name": "화산면",
            "center": {
                  "lat": 34.5795,
                  "lng": 126.5919,
                  "label": "해남군 화산면"
            }
      },
      {
            "code": "46820_dong_4",
            "name": "현산면",
            "center": {
                  "lat": 34.5675,
                  "lng": 126.5989,
                  "label": "해남군 현산면"
            }
      },
      {
            "code": "46820_dong_5",
            "name": "송지면",
            "center": {
                  "lat": 34.5735,
                  "lng": 126.5989,
                  "label": "해남군 송지면"
            }
      },
      {
            "code": "46820_dong_6",
            "name": "북평면",
            "center": {
                  "lat": 34.5795,
                  "lng": 126.5989,
                  "label": "해남군 북평면"
            }
      },
      {
            "code": "46820_dong_7",
            "name": "북일면",
            "center": {
                  "lat": 34.5675,
                  "lng": 126.6059,
                  "label": "해남군 북일면"
            }
      },
      {
            "code": "46820_dong_8",
            "name": "옥천면",
            "center": {
                  "lat": 34.5735,
                  "lng": 126.6059,
                  "label": "해남군 옥천면"
            }
      },
      {
            "code": "46820_dong_9",
            "name": "계곡면",
            "center": {
                  "lat": 34.5795,
                  "lng": 126.6059,
                  "label": "해남군 계곡면"
            }
      },
      {
            "code": "46820_dong_10",
            "name": "마산면",
            "center": {
                  "lat": 34.5675,
                  "lng": 126.6129,
                  "label": "해남군 마산면"
            }
      },
      {
            "code": "46820_dong_11",
            "name": "황산면",
            "center": {
                  "lat": 34.5735,
                  "lng": 126.6129,
                  "label": "해남군 황산면"
            }
      },
      {
            "code": "46820_dong_12",
            "name": "산이면",
            "center": {
                  "lat": 34.5795,
                  "lng": 126.6129,
                  "label": "해남군 산이면"
            }
      },
      {
            "code": "46820_dong_13",
            "name": "문내면",
            "center": {
                  "lat": 34.5675,
                  "lng": 126.6199,
                  "label": "해남군 문내면"
            }
      },
      {
            "code": "46820_dong_14",
            "name": "화원면",
            "center": {
                  "lat": 34.5735,
                  "lng": 126.6199,
                  "label": "해남군 화원면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "해남군",
  },
  {
    code: "46830",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "영암군",
    fullName: "전라남도 영암군",
    
    
    
    center: {"lat":34.8001,"lng":126.6968,"label":"영암군(삼호/월출산) 중심"},
    dongs: [
      {
            "code": "46830_dong_1",
            "name": "영암읍",
            "center": {
                  "lat": 34.7941,
                  "lng": 126.6898,
                  "label": "영암군 영암읍"
            }
      },
      {
            "code": "46830_dong_2",
            "name": "삼호읍",
            "center": {
                  "lat": 34.8001,
                  "lng": 126.6898,
                  "label": "영암군 삼호읍"
            }
      },
      {
            "code": "46830_dong_3",
            "name": "덕진면",
            "center": {
                  "lat": 34.8061,
                  "lng": 126.6898,
                  "label": "영암군 덕진면"
            }
      },
      {
            "code": "46830_dong_4",
            "name": "금정면",
            "center": {
                  "lat": 34.7941,
                  "lng": 126.6968,
                  "label": "영암군 금정면"
            }
      },
      {
            "code": "46830_dong_5",
            "name": "신북면",
            "center": {
                  "lat": 34.8001,
                  "lng": 126.6968,
                  "label": "영암군 신북면"
            }
      },
      {
            "code": "46830_dong_6",
            "name": "시종면",
            "center": {
                  "lat": 34.8061,
                  "lng": 126.6968,
                  "label": "영암군 시종면"
            }
      },
      {
            "code": "46830_dong_7",
            "name": "도포면",
            "center": {
                  "lat": 34.7941,
                  "lng": 126.7038,
                  "label": "영암군 도포면"
            }
      },
      {
            "code": "46830_dong_8",
            "name": "군서면",
            "center": {
                  "lat": 34.8001,
                  "lng": 126.7038,
                  "label": "영암군 군서면"
            }
      },
      {
            "code": "46830_dong_9",
            "name": "서호면",
            "center": {
                  "lat": 34.8061,
                  "lng": 126.7038,
                  "label": "영암군 서호면"
            }
      },
      {
            "code": "46830_dong_10",
            "name": "학산면",
            "center": {
                  "lat": 34.7941,
                  "lng": 126.7108,
                  "label": "영암군 학산면"
            }
      },
      {
            "code": "46830_dong_11",
            "name": "미암면",
            "center": {
                  "lat": 34.8001,
                  "lng": 126.7108,
                  "label": "영암군 미암면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "영암군",
  },
  {
    code: "46840",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "무안군",
    fullName: "전라남도 무안군",
    
    
    
    center: {"lat":34.9904,"lng":126.4817,"label":"무안군(남악/전남도청) 중심"},
    dongs: [
      {
            "code": "46840_dong_1",
            "name": "무안읍",
            "center": {
                  "lat": 34.9844,
                  "lng": 126.4747,
                  "label": "무안군 무안읍"
            }
      },
      {
            "code": "46840_dong_2",
            "name": "일로읍",
            "center": {
                  "lat": 34.9904,
                  "lng": 126.4747,
                  "label": "무안군 일로읍"
            }
      },
      {
            "code": "46840_dong_3",
            "name": "삼향읍",
            "center": {
                  "lat": 34.9964,
                  "lng": 126.4747,
                  "label": "무안군 삼향읍"
            }
      },
      {
            "code": "46840_dong_4",
            "name": "몽탄면",
            "center": {
                  "lat": 34.9844,
                  "lng": 126.4817,
                  "label": "무안군 몽탄면"
            }
      },
      {
            "code": "46840_dong_5",
            "name": "청계면",
            "center": {
                  "lat": 34.9904,
                  "lng": 126.4817,
                  "label": "무안군 청계면"
            }
      },
      {
            "code": "46840_dong_6",
            "name": "현경면",
            "center": {
                  "lat": 34.9964,
                  "lng": 126.4817,
                  "label": "무안군 현경면"
            }
      },
      {
            "code": "46840_dong_7",
            "name": "망운면",
            "center": {
                  "lat": 34.9844,
                  "lng": 126.4887,
                  "label": "무안군 망운면"
            }
      },
      {
            "code": "46840_dong_8",
            "name": "해제면",
            "center": {
                  "lat": 34.9904,
                  "lng": 126.4887,
                  "label": "무안군 해제면"
            }
      },
      {
            "code": "46840_dong_9",
            "name": "운남면",
            "center": {
                  "lat": 34.9964,
                  "lng": 126.4887,
                  "label": "무안군 운남면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "무안군",
  },
  {
    code: "46860",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "함평군",
    fullName: "전라남도 함평군",
    
    
    
    center: {"lat":35.0658,"lng":126.5167,"label":"함평군 중심"},
    dongs: [
      {
            "code": "46860_dong_1",
            "name": "함평읍",
            "center": {
                  "lat": 35.0598,
                  "lng": 126.5097,
                  "label": "함평군 함평읍"
            }
      },
      {
            "code": "46860_dong_2",
            "name": "손불면",
            "center": {
                  "lat": 35.0658,
                  "lng": 126.5097,
                  "label": "함평군 손불면"
            }
      },
      {
            "code": "46860_dong_3",
            "name": "신광면",
            "center": {
                  "lat": 35.0718,
                  "lng": 126.5097,
                  "label": "함평군 신광면"
            }
      },
      {
            "code": "46860_dong_4",
            "name": "학교면",
            "center": {
                  "lat": 35.0598,
                  "lng": 126.5167,
                  "label": "함평군 학교면"
            }
      },
      {
            "code": "46860_dong_5",
            "name": "엄다면",
            "center": {
                  "lat": 35.0658,
                  "lng": 126.5167,
                  "label": "함평군 엄다면"
            }
      },
      {
            "code": "46860_dong_6",
            "name": "대동면",
            "center": {
                  "lat": 35.0718,
                  "lng": 126.5167,
                  "label": "함평군 대동면"
            }
      },
      {
            "code": "46860_dong_7",
            "name": "나산면",
            "center": {
                  "lat": 35.0598,
                  "lng": 126.5237,
                  "label": "함평군 나산면"
            }
      },
      {
            "code": "46860_dong_8",
            "name": "해보면",
            "center": {
                  "lat": 35.0658,
                  "lng": 126.5237,
                  "label": "함평군 해보면"
            }
      },
      {
            "code": "46860_dong_9",
            "name": "월야면",
            "center": {
                  "lat": 35.0718,
                  "lng": 126.5237,
                  "label": "함평군 월야면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "함평군",
  },
  {
    code: "46870",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "영광군",
    fullName: "전라남도 영광군",
    
    
    
    center: {"lat":35.2774,"lng":126.5121,"label":"영광군(굴비) 중심"},
    dongs: [
      {
            "code": "46870_dong_1",
            "name": "영광읍",
            "center": {
                  "lat": 35.2714,
                  "lng": 126.5051,
                  "label": "영광군 영광읍"
            }
      },
      {
            "code": "46870_dong_2",
            "name": "백수읍",
            "center": {
                  "lat": 35.2774,
                  "lng": 126.5051,
                  "label": "영광군 백수읍"
            }
      },
      {
            "code": "46870_dong_3",
            "name": "홍농읍",
            "center": {
                  "lat": 35.2834,
                  "lng": 126.5051,
                  "label": "영광군 홍농읍"
            }
      },
      {
            "code": "46870_dong_4",
            "name": "대마면",
            "center": {
                  "lat": 35.2714,
                  "lng": 126.5121,
                  "label": "영광군 대마면"
            }
      },
      {
            "code": "46870_dong_5",
            "name": "묘량면",
            "center": {
                  "lat": 35.2774,
                  "lng": 126.5121,
                  "label": "영광군 묘량면"
            }
      },
      {
            "code": "46870_dong_6",
            "name": "불갑면",
            "center": {
                  "lat": 35.2834,
                  "lng": 126.5121,
                  "label": "영광군 불갑면"
            }
      },
      {
            "code": "46870_dong_7",
            "name": "군서면",
            "center": {
                  "lat": 35.2714,
                  "lng": 126.5191,
                  "label": "영광군 군서면"
            }
      },
      {
            "code": "46870_dong_8",
            "name": "군남면",
            "center": {
                  "lat": 35.2774,
                  "lng": 126.5191,
                  "label": "영광군 군남면"
            }
      },
      {
            "code": "46870_dong_9",
            "name": "염산면",
            "center": {
                  "lat": 35.2834,
                  "lng": 126.5191,
                  "label": "영광군 염산면"
            }
      },
      {
            "code": "46870_dong_10",
            "name": "법성면",
            "center": {
                  "lat": 35.2714,
                  "lng": 126.5261,
                  "label": "영광군 법성면"
            }
      },
      {
            "code": "46870_dong_11",
            "name": "낙월면",
            "center": {
                  "lat": 35.2774,
                  "lng": 126.5261,
                  "label": "영광군 낙월면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "영광군",
  },
  {
    code: "46880",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "장성군",
    fullName: "전라남도 장성군",
    
    
    
    center: {"lat":35.3015,"lng":126.7847,"label":"장성군 중심"},
    dongs: [
      {
            "code": "46880_dong_1",
            "name": "장성읍",
            "center": {
                  "lat": 35.2955,
                  "lng": 126.7777,
                  "label": "장성군 장성읍"
            }
      },
      {
            "code": "46880_dong_2",
            "name": "진원면",
            "center": {
                  "lat": 35.3015,
                  "lng": 126.7777,
                  "label": "장성군 진원면"
            }
      },
      {
            "code": "46880_dong_3",
            "name": "남면",
            "center": {
                  "lat": 35.3075,
                  "lng": 126.7777,
                  "label": "장성군 남면"
            }
      },
      {
            "code": "46880_dong_4",
            "name": "동화면",
            "center": {
                  "lat": 35.2955,
                  "lng": 126.7847,
                  "label": "장성군 동화면"
            }
      },
      {
            "code": "46880_dong_5",
            "name": "삼서면",
            "center": {
                  "lat": 35.3015,
                  "lng": 126.7847,
                  "label": "장성군 삼서면"
            }
      },
      {
            "code": "46880_dong_6",
            "name": "삼계면",
            "center": {
                  "lat": 35.3075,
                  "lng": 126.7847,
                  "label": "장성군 삼계면"
            }
      },
      {
            "code": "46880_dong_7",
            "name": "황룡면",
            "center": {
                  "lat": 35.2955,
                  "lng": 126.7917,
                  "label": "장성군 황룡면"
            }
      },
      {
            "code": "46880_dong_8",
            "name": "서삼면",
            "center": {
                  "lat": 35.3015,
                  "lng": 126.7917,
                  "label": "장성군 서삼면"
            }
      },
      {
            "code": "46880_dong_9",
            "name": "북이면",
            "center": {
                  "lat": 35.3075,
                  "lng": 126.7917,
                  "label": "장성군 북이면"
            }
      },
      {
            "code": "46880_dong_10",
            "name": "북하면",
            "center": {
                  "lat": 35.2955,
                  "lng": 126.7987,
                  "label": "장성군 북하면"
            }
      },
      {
            "code": "46880_dong_11",
            "name": "북일면",
            "center": {
                  "lat": 35.3015,
                  "lng": 126.7987,
                  "label": "장성군 북일면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "장성군",
  },
  {
    code: "46890",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "완도군",
    fullName: "전라남도 완도군",
    
    
    
    center: {"lat":34.311,"lng":126.755,"label":"완도군(청산도/신지도) 중심"},
    dongs: [
      {
            "code": "46890_dong_1",
            "name": "완도읍",
            "center": {
                  "lat": 34.305,
                  "lng": 126.748,
                  "label": "완도군 완도읍"
            }
      },
      {
            "code": "46890_dong_2",
            "name": "금일읍",
            "center": {
                  "lat": 34.311,
                  "lng": 126.748,
                  "label": "완도군 금일읍"
            }
      },
      {
            "code": "46890_dong_3",
            "name": "노화읍",
            "center": {
                  "lat": 34.317,
                  "lng": 126.748,
                  "label": "완도군 노화읍"
            }
      },
      {
            "code": "46890_dong_4",
            "name": "군외면",
            "center": {
                  "lat": 34.305,
                  "lng": 126.755,
                  "label": "완도군 군외면"
            }
      },
      {
            "code": "46890_dong_5",
            "name": "신지면",
            "center": {
                  "lat": 34.311,
                  "lng": 126.755,
                  "label": "완도군 신지면"
            }
      },
      {
            "code": "46890_dong_6",
            "name": "고금면",
            "center": {
                  "lat": 34.317,
                  "lng": 126.755,
                  "label": "완도군 고금면"
            }
      },
      {
            "code": "46890_dong_7",
            "name": "약산면",
            "center": {
                  "lat": 34.305,
                  "lng": 126.762,
                  "label": "완도군 약산면"
            }
      },
      {
            "code": "46890_dong_8",
            "name": "청산면",
            "center": {
                  "lat": 34.311,
                  "lng": 126.762,
                  "label": "완도군 청산면"
            }
      },
      {
            "code": "46890_dong_9",
            "name": "소안면",
            "center": {
                  "lat": 34.317,
                  "lng": 126.762,
                  "label": "완도군 소안면"
            }
      },
      {
            "code": "46890_dong_10",
            "name": "금당면",
            "center": {
                  "lat": 34.305,
                  "lng": 126.769,
                  "label": "완도군 금당면"
            }
      },
      {
            "code": "46890_dong_11",
            "name": "보길면",
            "center": {
                  "lat": 34.311,
                  "lng": 126.769,
                  "label": "완도군 보길면"
            }
      },
      {
            "code": "46890_dong_12",
            "name": "생일면",
            "center": {
                  "lat": 34.317,
                  "lng": 126.769,
                  "label": "완도군 생일면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "완도군",
  },
  {
    code: "46900",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "진도군",
    fullName: "전라남도 진도군",
    
    
    
    center: {"lat":34.4868,"lng":126.2634,"label":"진도군 중심"},
    dongs: [
      {
            "code": "46900_dong_1",
            "name": "진도읍",
            "center": {
                  "lat": 34.4808,
                  "lng": 126.2564,
                  "label": "진도군 진도읍"
            }
      },
      {
            "code": "46900_dong_2",
            "name": "군내면",
            "center": {
                  "lat": 34.4868,
                  "lng": 126.2564,
                  "label": "진도군 군내면"
            }
      },
      {
            "code": "46900_dong_3",
            "name": "고군면",
            "center": {
                  "lat": 34.4928,
                  "lng": 126.2564,
                  "label": "진도군 고군면"
            }
      },
      {
            "code": "46900_dong_4",
            "name": "의신면",
            "center": {
                  "lat": 34.4808,
                  "lng": 126.2634,
                  "label": "진도군 의신면"
            }
      },
      {
            "code": "46900_dong_5",
            "name": "임회면",
            "center": {
                  "lat": 34.4868,
                  "lng": 126.2634,
                  "label": "진도군 임회면"
            }
      },
      {
            "code": "46900_dong_6",
            "name": "지산면",
            "center": {
                  "lat": 34.4928,
                  "lng": 126.2634,
                  "label": "진도군 지산면"
            }
      },
      {
            "code": "46900_dong_7",
            "name": "조도면",
            "center": {
                  "lat": 34.4808,
                  "lng": 126.2704,
                  "label": "진도군 조도면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "진도군",
  },
  {
    code: "46910",
    sidoCode: "46",
    sidoName: "전라남도",
    name: "신안군",
    fullName: "전라남도 신안군",
    
    
    
    center: {"lat":34.8336,"lng":126.3516,"label":"신안군(천사섬/자은/안좌) 중심"},
    dongs: [
      {
            "code": "46910_dong_1",
            "name": "지도읍",
            "center": {
                  "lat": 34.8276,
                  "lng": 126.3446,
                  "label": "신안군 지도읍"
            }
      },
      {
            "code": "46910_dong_2",
            "name": "압해읍",
            "center": {
                  "lat": 34.8336,
                  "lng": 126.3446,
                  "label": "신안군 압해읍"
            }
      },
      {
            "code": "46910_dong_3",
            "name": "증도면",
            "center": {
                  "lat": 34.8396,
                  "lng": 126.3446,
                  "label": "신안군 증도면"
            }
      },
      {
            "code": "46910_dong_4",
            "name": "임자면",
            "center": {
                  "lat": 34.8276,
                  "lng": 126.3516,
                  "label": "신안군 임자면"
            }
      },
      {
            "code": "46910_dong_5",
            "name": "자은면",
            "center": {
                  "lat": 34.8336,
                  "lng": 126.3516,
                  "label": "신안군 자은면"
            }
      },
      {
            "code": "46910_dong_6",
            "name": "비금면",
            "center": {
                  "lat": 34.8396,
                  "lng": 126.3516,
                  "label": "신안군 비금면"
            }
      },
      {
            "code": "46910_dong_7",
            "name": "도초면",
            "center": {
                  "lat": 34.8276,
                  "lng": 126.3586,
                  "label": "신안군 도초면"
            }
      },
      {
            "code": "46910_dong_8",
            "name": "흑산면",
            "center": {
                  "lat": 34.8336,
                  "lng": 126.3586,
                  "label": "신안군 흑산면"
            }
      },
      {
            "code": "46910_dong_9",
            "name": "하의면",
            "center": {
                  "lat": 34.8396,
                  "lng": 126.3586,
                  "label": "신안군 하의면"
            }
      },
      {
            "code": "46910_dong_10",
            "name": "신의면",
            "center": {
                  "lat": 34.8276,
                  "lng": 126.3656,
                  "label": "신안군 신의면"
            }
      },
      {
            "code": "46910_dong_11",
            "name": "장산면",
            "center": {
                  "lat": 34.8336,
                  "lng": 126.3656,
                  "label": "신안군 장산면"
            }
      },
      {
            "code": "46910_dong_12",
            "name": "안좌면",
            "center": {
                  "lat": 34.8396,
                  "lng": 126.3656,
                  "label": "신안군 안좌면"
            }
      },
      {
            "code": "46910_dong_13",
            "name": "팔금면",
            "center": {
                  "lat": 34.8276,
                  "lng": 126.3726,
                  "label": "신안군 팔금면"
            }
      },
      {
            "code": "46910_dong_14",
            "name": "암태면",
            "center": {
                  "lat": 34.8336,
                  "lng": 126.3726,
                  "label": "신안군 암태면"
            }
      }
],
    isActive: true,
    city: "전라남도",
    gu: "신안군",
  },
  {
    code: "47111",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "포항시 남구",
    fullName: "경상북도 포항시 남구",
    
    parentCity: "포항시",
    isGeneralGu: true,
    center: {"lat":35.9806,"lng":129.3622,"label":"포항시 남구(구룡포/효자) 중심"},
    dongs: [
      {
            "code": "47111_dong_1",
            "name": "상도동",
            "center": {
                  "lat": 35.9746,
                  "lng": 129.3552,
                  "label": "포항시 남구 상도동"
            }
      },
      {
            "code": "47111_dong_2",
            "name": "대도동",
            "center": {
                  "lat": 35.9806,
                  "lng": 129.3552,
                  "label": "포항시 남구 대도동"
            }
      },
      {
            "code": "47111_dong_3",
            "name": "연일읍",
            "center": {
                  "lat": 35.9866,
                  "lng": 129.3552,
                  "label": "포항시 남구 연일읍"
            }
      },
      {
            "code": "47111_dong_4",
            "name": "오천읍",
            "center": {
                  "lat": 35.9746,
                  "lng": 129.3622,
                  "label": "포항시 남구 오천읍"
            }
      },
      {
            "code": "47111_dong_5",
            "name": "구룡포읍",
            "center": {
                  "lat": 35.9806,
                  "lng": 129.3622,
                  "label": "포항시 남구 구룡포읍"
            }
      },
      {
            "code": "47111_dong_6",
            "name": "효자동",
            "center": {
                  "lat": 35.9866,
                  "lng": 129.3622,
                  "label": "포항시 남구 효자동"
            }
      },
      {
            "code": "47111_dong_7",
            "name": "이동",
            "center": {
                  "lat": 35.9746,
                  "lng": 129.3692,
                  "label": "포항시 남구 이동"
            }
      },
      {
            "code": "47111_dong_8",
            "name": "지곡동",
            "center": {
                  "lat": 35.9806,
                  "lng": 129.3692,
                  "label": "포항시 남구 지곡동"
            }
      },
      {
            "code": "47111_dong_9",
            "name": "송도동",
            "center": {
                  "lat": 35.9866,
                  "lng": 129.3692,
                  "label": "포항시 남구 송도동"
            }
      },
      {
            "code": "47111_dong_10",
            "name": "청림동",
            "center": {
                  "lat": 35.9746,
                  "lng": 129.3762,
                  "label": "포항시 남구 청림동"
            }
      },
      {
            "code": "47111_dong_11",
            "name": "동해면",
            "center": {
                  "lat": 35.9806,
                  "lng": 129.3762,
                  "label": "포항시 남구 동해면"
            }
      },
      {
            "code": "47111_dong_12",
            "name": "장기면",
            "center": {
                  "lat": 35.9866,
                  "lng": 129.3762,
                  "label": "포항시 남구 장기면"
            }
      },
      {
            "code": "47111_dong_13",
            "name": "호미곶면",
            "center": {
                  "lat": 35.9746,
                  "lng": 129.3832,
                  "label": "포항시 남구 호미곶면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "포항시 남구",
  },
  {
    code: "47113",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "포항시 북구",
    fullName: "경상북도 포항시 북구",
    legacyCode: "gyeongbuk_pohang_bukgu",
    parentCity: "포항시",
    isGeneralGu: true,
    center: {"lat":36.0469,"lng":129.3653,"label":"포항시 북구(영일대) 중심"},
    dongs: [
      {
            "code": "47113_dong_1",
            "name": "두호동",
            "center": {
                  "lat": 36.0409,
                  "lng": 129.3583,
                  "label": "포항시 북구 두호동"
            }
      },
      {
            "code": "47113_dong_2",
            "name": "장량동",
            "center": {
                  "lat": 36.0469,
                  "lng": 129.3583,
                  "label": "포항시 북구 장량동"
            }
      },
      {
            "code": "47113_dong_3",
            "name": "환여동",
            "center": {
                  "lat": 36.0529,
                  "lng": 129.3583,
                  "label": "포항시 북구 환여동"
            }
      },
      {
            "code": "47113_dong_4",
            "name": "중앙동",
            "center": {
                  "lat": 36.0409,
                  "lng": 129.3653,
                  "label": "포항시 북구 중앙동"
            }
      },
      {
            "code": "47113_dong_5",
            "name": "양학동",
            "center": {
                  "lat": 36.0469,
                  "lng": 129.3653,
                  "label": "포항시 북구 양학동"
            }
      },
      {
            "code": "47113_dong_6",
            "name": "우창동",
            "center": {
                  "lat": 36.0529,
                  "lng": 129.3653,
                  "label": "포항시 북구 우창동"
            }
      },
      {
            "code": "47113_dong_7",
            "name": "흥해읍",
            "center": {
                  "lat": 36.0409,
                  "lng": 129.3723,
                  "label": "포항시 북구 흥해읍"
            }
      },
      {
            "code": "47113_dong_8",
            "name": "송라면",
            "center": {
                  "lat": 36.0469,
                  "lng": 129.3723,
                  "label": "포항시 북구 송라면"
            }
      },
      {
            "code": "47113_dong_9",
            "name": "청하면",
            "center": {
                  "lat": 36.0529,
                  "lng": 129.3723,
                  "label": "포항시 북구 청하면"
            }
      },
      {
            "code": "47113_dong_10",
            "name": "신광면",
            "center": {
                  "lat": 36.0409,
                  "lng": 129.3793,
                  "label": "포항시 북구 신광면"
            }
      },
      {
            "code": "47113_dong_11",
            "name": "기계면",
            "center": {
                  "lat": 36.0469,
                  "lng": 129.3793,
                  "label": "포항시 북구 기계면"
            }
      },
      {
            "code": "47113_dong_12",
            "name": "죽장면",
            "center": {
                  "lat": 36.0529,
                  "lng": 129.3793,
                  "label": "포항시 북구 죽장면"
            }
      },
      {
            "code": "47113_dong_13",
            "name": "기북면",
            "center": {
                  "lat": 36.0409,
                  "lng": 129.3863,
                  "label": "포항시 북구 기북면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "포항시 북구",
  },
  {
    code: "47130",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "경주시",
    fullName: "경상북도 경주시",
    legacyCode: "gyeongbuk_gyeongju",
    
    
    center: {"lat":35.8562,"lng":129.2247,"label":"경주시(황리단길/보문단지) 중심"},
    dongs: [
      {
            "code": "47130_dong_1",
            "name": "황남동",
            "center": {
                  "lat": 35.8502,
                  "lng": 129.2177,
                  "label": "경주시 황남동"
            }
      },
      {
            "code": "47130_dong_2",
            "name": "황오동",
            "center": {
                  "lat": 35.8562,
                  "lng": 129.2177,
                  "label": "경주시 황오동"
            }
      },
      {
            "code": "47130_dong_3",
            "name": "성건동",
            "center": {
                  "lat": 35.8622,
                  "lng": 129.2177,
                  "label": "경주시 성건동"
            }
      },
      {
            "code": "47130_dong_4",
            "name": "중부동",
            "center": {
                  "lat": 35.8502,
                  "lng": 129.2247,
                  "label": "경주시 중부동"
            }
      },
      {
            "code": "47130_dong_5",
            "name": "월성동",
            "center": {
                  "lat": 35.8562,
                  "lng": 129.2247,
                  "label": "경주시 월성동"
            }
      },
      {
            "code": "47130_dong_6",
            "name": "보덕동",
            "center": {
                  "lat": 35.8622,
                  "lng": 129.2247,
                  "label": "경주시 보덕동"
            }
      },
      {
            "code": "47130_dong_7",
            "name": "동천동",
            "center": {
                  "lat": 35.8502,
                  "lng": 129.2317,
                  "label": "경주시 동천동"
            }
      },
      {
            "code": "47130_dong_8",
            "name": "용강동",
            "center": {
                  "lat": 35.8562,
                  "lng": 129.2317,
                  "label": "경주시 용강동"
            }
      },
      {
            "code": "47130_dong_9",
            "name": "황성동",
            "center": {
                  "lat": 35.8622,
                  "lng": 129.2317,
                  "label": "경주시 황성동"
            }
      },
      {
            "code": "47130_dong_10",
            "name": "불국동",
            "center": {
                  "lat": 35.8502,
                  "lng": 129.2387,
                  "label": "경주시 불국동"
            }
      },
      {
            "code": "47130_dong_11",
            "name": "감포읍",
            "center": {
                  "lat": 35.8562,
                  "lng": 129.2387,
                  "label": "경주시 감포읍"
            }
      },
      {
            "code": "47130_dong_12",
            "name": "안강읍",
            "center": {
                  "lat": 35.8622,
                  "lng": 129.2387,
                  "label": "경주시 안강읍"
            }
      },
      {
            "code": "47130_dong_13",
            "name": "건천읍",
            "center": {
                  "lat": 35.8502,
                  "lng": 129.2457,
                  "label": "경주시 건천읍"
            }
      },
      {
            "code": "47130_dong_14",
            "name": "외동읍",
            "center": {
                  "lat": 35.8562,
                  "lng": 129.2457,
                  "label": "경주시 외동읍"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "경주시",
  },
  {
    code: "47150",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "김천시",
    fullName: "경상북도 김천시",
    
    
    
    center: {"lat":36.1399,"lng":128.1136,"label":"김천시(율곡동/혁신도시) 중심"},
    dongs: [
      {
            "code": "47150_dong_1",
            "name": "율곡동",
            "center": {
                  "lat": 36.1339,
                  "lng": 128.1066,
                  "label": "김천시 율곡동"
            }
      },
      {
            "code": "47150_dong_2",
            "name": "평화남산동",
            "center": {
                  "lat": 36.1399,
                  "lng": 128.1066,
                  "label": "김천시 평화남산동"
            }
      },
      {
            "code": "47150_dong_3",
            "name": "양금동",
            "center": {
                  "lat": 36.1459,
                  "lng": 128.1066,
                  "label": "김천시 양금동"
            }
      },
      {
            "code": "47150_dong_4",
            "name": "대신동",
            "center": {
                  "lat": 36.1339,
                  "lng": 128.1136,
                  "label": "김천시 대신동"
            }
      },
      {
            "code": "47150_dong_5",
            "name": "대곡동",
            "center": {
                  "lat": 36.1399,
                  "lng": 128.1136,
                  "label": "김천시 대곡동"
            }
      },
      {
            "code": "47150_dong_6",
            "name": "지좌동",
            "center": {
                  "lat": 36.1459,
                  "lng": 128.1136,
                  "label": "김천시 지좌동"
            }
      },
      {
            "code": "47150_dong_7",
            "name": "아포읍",
            "center": {
                  "lat": 36.1339,
                  "lng": 128.1206,
                  "label": "김천시 아포읍"
            }
      },
      {
            "code": "47150_dong_8",
            "name": "농소면",
            "center": {
                  "lat": 36.1399,
                  "lng": 128.1206,
                  "label": "김천시 농소면"
            }
      },
      {
            "code": "47150_dong_9",
            "name": "남면",
            "center": {
                  "lat": 36.1459,
                  "lng": 128.1206,
                  "label": "김천시 남면"
            }
      },
      {
            "code": "47150_dong_10",
            "name": "개령면",
            "center": {
                  "lat": 36.1339,
                  "lng": 128.1276,
                  "label": "김천시 개령면"
            }
      },
      {
            "code": "47150_dong_11",
            "name": "감문면",
            "center": {
                  "lat": 36.1399,
                  "lng": 128.1276,
                  "label": "김천시 감문면"
            }
      },
      {
            "code": "47150_dong_12",
            "name": "어모면",
            "center": {
                  "lat": 36.1459,
                  "lng": 128.1276,
                  "label": "김천시 어모면"
            }
      },
      {
            "code": "47150_dong_13",
            "name": "봉산면",
            "center": {
                  "lat": 36.1339,
                  "lng": 128.1346,
                  "label": "김천시 봉산면"
            }
      },
      {
            "code": "47150_dong_14",
            "name": "대항면",
            "center": {
                  "lat": 36.1399,
                  "lng": 128.1346,
                  "label": "김천시 대항면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "김천시",
  },
  {
    code: "47170",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "안동시",
    fullName: "경상북도 안동시",
    
    
    
    center: {"lat":36.5684,"lng":128.7294,"label":"안동시(하회마을/도청) 중심"},
    dongs: [
      {
            "code": "47170_dong_1",
            "name": "중구동",
            "center": {
                  "lat": 36.5624,
                  "lng": 128.7224,
                  "label": "안동시 중구동"
            }
      },
      {
            "code": "47170_dong_2",
            "name": "명륜동",
            "center": {
                  "lat": 36.5684,
                  "lng": 128.7224,
                  "label": "안동시 명륜동"
            }
      },
      {
            "code": "47170_dong_3",
            "name": "용상동",
            "center": {
                  "lat": 36.5744,
                  "lng": 128.7224,
                  "label": "안동시 용상동"
            }
      },
      {
            "code": "47170_dong_4",
            "name": "서구동",
            "center": {
                  "lat": 36.5624,
                  "lng": 128.7294,
                  "label": "안동시 서구동"
            }
      },
      {
            "code": "47170_dong_5",
            "name": "태화동",
            "center": {
                  "lat": 36.5684,
                  "lng": 128.7294,
                  "label": "안동시 태화동"
            }
      },
      {
            "code": "47170_dong_6",
            "name": "평화동",
            "center": {
                  "lat": 36.5744,
                  "lng": 128.7294,
                  "label": "안동시 평화동"
            }
      },
      {
            "code": "47170_dong_7",
            "name": "안기동",
            "center": {
                  "lat": 36.5624,
                  "lng": 128.7364,
                  "label": "안동시 안기동"
            }
      },
      {
            "code": "47170_dong_8",
            "name": "옥동",
            "center": {
                  "lat": 36.5684,
                  "lng": 128.7364,
                  "label": "안동시 옥동"
            }
      },
      {
            "code": "47170_dong_9",
            "name": "송하동",
            "center": {
                  "lat": 36.5744,
                  "lng": 128.7364,
                  "label": "안동시 송하동"
            }
      },
      {
            "code": "47170_dong_10",
            "name": "강남동",
            "center": {
                  "lat": 36.5624,
                  "lng": 128.7434,
                  "label": "안동시 강남동"
            }
      },
      {
            "code": "47170_dong_11",
            "name": "풍천면",
            "center": {
                  "lat": 36.5684,
                  "lng": 128.7434,
                  "label": "안동시 풍천면"
            }
      },
      {
            "code": "47170_dong_12",
            "name": "풍산읍",
            "center": {
                  "lat": 36.5744,
                  "lng": 128.7434,
                  "label": "안동시 풍산읍"
            }
      },
      {
            "code": "47170_dong_13",
            "name": "와룡면",
            "center": {
                  "lat": 36.5624,
                  "lng": 128.7504,
                  "label": "안동시 와룡면"
            }
      },
      {
            "code": "47170_dong_14",
            "name": "북후면",
            "center": {
                  "lat": 36.5684,
                  "lng": 128.7504,
                  "label": "안동시 북후면"
            }
      },
      {
            "code": "47170_dong_15",
            "name": "서후면",
            "center": {
                  "lat": 36.5744,
                  "lng": 128.7504,
                  "label": "안동시 서후면"
            }
      },
      {
            "code": "47170_dong_16",
            "name": "일직면",
            "center": {
                  "lat": 36.5624,
                  "lng": 128.7574,
                  "label": "안동시 일직면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "안동시",
  },
  {
    code: "47190",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "구미시",
    fullName: "경상북도 구미시",
    
    
    
    center: {"lat":36.1195,"lng":128.3446,"label":"구미시(인동/송정/원평) 중심"},
    dongs: [
      {
            "code": "47190_dong_1",
            "name": "송정동",
            "center": {
                  "lat": 36.1135,
                  "lng": 128.3376,
                  "label": "구미시 송정동"
            }
      },
      {
            "code": "47190_dong_2",
            "name": "원평동",
            "center": {
                  "lat": 36.1195,
                  "lng": 128.3376,
                  "label": "구미시 원평동"
            }
      },
      {
            "code": "47190_dong_3",
            "name": "형곡동",
            "center": {
                  "lat": 36.1255,
                  "lng": 128.3376,
                  "label": "구미시 형곡동"
            }
      },
      {
            "code": "47190_dong_4",
            "name": "신평동",
            "center": {
                  "lat": 36.1135,
                  "lng": 128.3446,
                  "label": "구미시 신평동"
            }
      },
      {
            "code": "47190_dong_5",
            "name": "비산동",
            "center": {
                  "lat": 36.1195,
                  "lng": 128.3446,
                  "label": "구미시 비산동"
            }
      },
      {
            "code": "47190_dong_6",
            "name": "공단동",
            "center": {
                  "lat": 36.1255,
                  "lng": 128.3446,
                  "label": "구미시 공단동"
            }
      },
      {
            "code": "47190_dong_7",
            "name": "광평동",
            "center": {
                  "lat": 36.1135,
                  "lng": 128.3516,
                  "label": "구미시 광평동"
            }
      },
      {
            "code": "47190_dong_8",
            "name": "상모사곡동",
            "center": {
                  "lat": 36.1195,
                  "lng": 128.3516,
                  "label": "구미시 상모사곡동"
            }
      },
      {
            "code": "47190_dong_9",
            "name": "임오동",
            "center": {
                  "lat": 36.1255,
                  "lng": 128.3516,
                  "label": "구미시 임오동"
            }
      },
      {
            "code": "47190_dong_10",
            "name": "인동동",
            "center": {
                  "lat": 36.1135,
                  "lng": 128.3586,
                  "label": "구미시 인동동"
            }
      },
      {
            "code": "47190_dong_11",
            "name": "진미동",
            "center": {
                  "lat": 36.1195,
                  "lng": 128.3586,
                  "label": "구미시 진미동"
            }
      },
      {
            "code": "47190_dong_12",
            "name": "양포동",
            "center": {
                  "lat": 36.1255,
                  "lng": 128.3586,
                  "label": "구미시 양포동"
            }
      },
      {
            "code": "47190_dong_13",
            "name": "선산읍",
            "center": {
                  "lat": 36.1135,
                  "lng": 128.3656,
                  "label": "구미시 선산읍"
            }
      },
      {
            "code": "47190_dong_14",
            "name": "고아읍",
            "center": {
                  "lat": 36.1195,
                  "lng": 128.3656,
                  "label": "구미시 고아읍"
            }
      },
      {
            "code": "47190_dong_15",
            "name": "산동읍",
            "center": {
                  "lat": 36.1255,
                  "lng": 128.3656,
                  "label": "구미시 산동읍"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "구미시",
  },
  {
    code: "47210",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "영주시",
    fullName: "경상북도 영주시",
    
    
    
    center: {"lat":36.8057,"lng":128.6241,"label":"영주시 중심"},
    dongs: [
      {
            "code": "47210_dong_1",
            "name": "영주동",
            "center": {
                  "lat": 36.7997,
                  "lng": 128.6171,
                  "label": "영주시 영주동"
            }
      },
      {
            "code": "47210_dong_2",
            "name": "상망동",
            "center": {
                  "lat": 36.8057,
                  "lng": 128.6171,
                  "label": "영주시 상망동"
            }
      },
      {
            "code": "47210_dong_3",
            "name": "하망동",
            "center": {
                  "lat": 36.8117,
                  "lng": 128.6171,
                  "label": "영주시 하망동"
            }
      },
      {
            "code": "47210_dong_4",
            "name": "휴천동",
            "center": {
                  "lat": 36.7997,
                  "lng": 128.6241,
                  "label": "영주시 휴천동"
            }
      },
      {
            "code": "47210_dong_5",
            "name": "가흥동",
            "center": {
                  "lat": 36.8057,
                  "lng": 128.6241,
                  "label": "영주시 가흥동"
            }
      },
      {
            "code": "47210_dong_6",
            "name": "풍기읍",
            "center": {
                  "lat": 36.8117,
                  "lng": 128.6241,
                  "label": "영주시 풍기읍"
            }
      },
      {
            "code": "47210_dong_7",
            "name": "이산면",
            "center": {
                  "lat": 36.7997,
                  "lng": 128.6311,
                  "label": "영주시 이산면"
            }
      },
      {
            "code": "47210_dong_8",
            "name": "평은면",
            "center": {
                  "lat": 36.8057,
                  "lng": 128.6311,
                  "label": "영주시 평은면"
            }
      },
      {
            "code": "47210_dong_9",
            "name": "문수면",
            "center": {
                  "lat": 36.8117,
                  "lng": 128.6311,
                  "label": "영주시 문수면"
            }
      },
      {
            "code": "47210_dong_10",
            "name": "순흥면",
            "center": {
                  "lat": 36.7997,
                  "lng": 128.6381,
                  "label": "영주시 순흥면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "영주시",
  },
  {
    code: "47230",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "영천시",
    fullName: "경상북도 영천시",
    
    
    
    center: {"lat":35.9733,"lng":128.9385,"label":"영천시 중심"},
    dongs: [
      {
            "code": "47230_dong_1",
            "name": "동부동",
            "center": {
                  "lat": 35.9673,
                  "lng": 128.9315,
                  "label": "영천시 동부동"
            }
      },
      {
            "code": "47230_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 35.9733,
                  "lng": 128.9315,
                  "label": "영천시 중앙동"
            }
      },
      {
            "code": "47230_dong_3",
            "name": "서부동",
            "center": {
                  "lat": 35.9793,
                  "lng": 128.9315,
                  "label": "영천시 서부동"
            }
      },
      {
            "code": "47230_dong_4",
            "name": "완산동",
            "center": {
                  "lat": 35.9673,
                  "lng": 128.9385,
                  "label": "영천시 완산동"
            }
      },
      {
            "code": "47230_dong_5",
            "name": "남부동",
            "center": {
                  "lat": 35.9733,
                  "lng": 128.9385,
                  "label": "영천시 남부동"
            }
      },
      {
            "code": "47230_dong_6",
            "name": "금호읍",
            "center": {
                  "lat": 35.9793,
                  "lng": 128.9385,
                  "label": "영천시 금호읍"
            }
      },
      {
            "code": "47230_dong_7",
            "name": "청통면",
            "center": {
                  "lat": 35.9673,
                  "lng": 128.9455,
                  "label": "영천시 청통면"
            }
      },
      {
            "code": "47230_dong_8",
            "name": "신녕면",
            "center": {
                  "lat": 35.9733,
                  "lng": 128.9455,
                  "label": "영천시 신녕면"
            }
      },
      {
            "code": "47230_dong_9",
            "name": "화산면",
            "center": {
                  "lat": 35.9793,
                  "lng": 128.9455,
                  "label": "영천시 화산면"
            }
      },
      {
            "code": "47230_dong_10",
            "name": "화북면",
            "center": {
                  "lat": 35.9673,
                  "lng": 128.9525,
                  "label": "영천시 화북면"
            }
      },
      {
            "code": "47230_dong_11",
            "name": "화남면",
            "center": {
                  "lat": 35.9733,
                  "lng": 128.9525,
                  "label": "영천시 화남면"
            }
      },
      {
            "code": "47230_dong_12",
            "name": "자양면",
            "center": {
                  "lat": 35.9793,
                  "lng": 128.9525,
                  "label": "영천시 자양면"
            }
      },
      {
            "code": "47230_dong_13",
            "name": "임고면",
            "center": {
                  "lat": 35.9673,
                  "lng": 128.9595,
                  "label": "영천시 임고면"
            }
      },
      {
            "code": "47230_dong_14",
            "name": "고경면",
            "center": {
                  "lat": 35.9733,
                  "lng": 128.9595,
                  "label": "영천시 고경면"
            }
      },
      {
            "code": "47230_dong_15",
            "name": "북안면",
            "center": {
                  "lat": 35.9793,
                  "lng": 128.9595,
                  "label": "영천시 북안면"
            }
      },
      {
            "code": "47230_dong_16",
            "name": "대창면",
            "center": {
                  "lat": 35.9673,
                  "lng": 128.9665,
                  "label": "영천시 대창면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "영천시",
  },
  {
    code: "47250",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "상주시",
    fullName: "경상북도 상주시",
    
    
    
    center: {"lat":36.4109,"lng":128.1591,"label":"상주시 중심"},
    dongs: [
      {
            "code": "47250_dong_1",
            "name": "남원동",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.1521,
                  "label": "상주시 남원동"
            }
      },
      {
            "code": "47250_dong_2",
            "name": "북문동",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.1521,
                  "label": "상주시 북문동"
            }
      },
      {
            "code": "47250_dong_3",
            "name": "계림동",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.1521,
                  "label": "상주시 계림동"
            }
      },
      {
            "code": "47250_dong_4",
            "name": "동문동",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.1591,
                  "label": "상주시 동문동"
            }
      },
      {
            "code": "47250_dong_5",
            "name": "동성동",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.1591,
                  "label": "상주시 동성동"
            }
      },
      {
            "code": "47250_dong_6",
            "name": "신흥동",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.1591,
                  "label": "상주시 신흥동"
            }
      },
      {
            "code": "47250_dong_7",
            "name": "함창읍",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.1661,
                  "label": "상주시 함창읍"
            }
      },
      {
            "code": "47250_dong_8",
            "name": "사벌국면",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.1661,
                  "label": "상주시 사벌국면"
            }
      },
      {
            "code": "47250_dong_9",
            "name": "중동면",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.1661,
                  "label": "상주시 중동면"
            }
      },
      {
            "code": "47250_dong_10",
            "name": "낙동면",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.1731,
                  "label": "상주시 낙동면"
            }
      },
      {
            "code": "47250_dong_11",
            "name": "청리면",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.1731,
                  "label": "상주시 청리면"
            }
      },
      {
            "code": "47250_dong_12",
            "name": "공성면",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.1731,
                  "label": "상주시 공성면"
            }
      },
      {
            "code": "47250_dong_13",
            "name": "외남면",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.1801,
                  "label": "상주시 외남면"
            }
      },
      {
            "code": "47250_dong_14",
            "name": "내서면",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.1801,
                  "label": "상주시 내서면"
            }
      },
      {
            "code": "47250_dong_15",
            "name": "모동면",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.1801,
                  "label": "상주시 모동면"
            }
      },
      {
            "code": "47250_dong_16",
            "name": "모서면",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.1871,
                  "label": "상주시 모서면"
            }
      },
      {
            "code": "47250_dong_17",
            "name": "화동면",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.1871,
                  "label": "상주시 화동면"
            }
      },
      {
            "code": "47250_dong_18",
            "name": "화서면",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.1871,
                  "label": "상주시 화서면"
            }
      },
      {
            "code": "47250_dong_19",
            "name": "화북면",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.1941,
                  "label": "상주시 화북면"
            }
      },
      {
            "code": "47250_dong_20",
            "name": "외서면",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.1941,
                  "label": "상주시 외서면"
            }
      },
      {
            "code": "47250_dong_21",
            "name": "은척면",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.1941,
                  "label": "상주시 은척면"
            }
      },
      {
            "code": "47250_dong_22",
            "name": "공검면",
            "center": {
                  "lat": 36.4049,
                  "lng": 128.2011,
                  "label": "상주시 공검면"
            }
      },
      {
            "code": "47250_dong_23",
            "name": "이안면",
            "center": {
                  "lat": 36.4109,
                  "lng": 128.2011,
                  "label": "상주시 이안면"
            }
      },
      {
            "code": "47250_dong_24",
            "name": "화남면",
            "center": {
                  "lat": 36.4169,
                  "lng": 128.2011,
                  "label": "상주시 화남면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "상주시",
  },
  {
    code: "47280",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "문경시",
    fullName: "경상북도 문경시",
    
    
    
    center: {"lat":36.5938,"lng":128.1996,"label":"문경시(점촌/문경새재) 중심"},
    dongs: [
      {
            "code": "47280_dong_1",
            "name": "점촌동",
            "center": {
                  "lat": 36.5878,
                  "lng": 128.1926,
                  "label": "문경시 점촌동"
            }
      },
      {
            "code": "47280_dong_2",
            "name": "문경읍",
            "center": {
                  "lat": 36.5938,
                  "lng": 128.1926,
                  "label": "문경시 문경읍"
            }
      },
      {
            "code": "47280_dong_3",
            "name": "가은읍",
            "center": {
                  "lat": 36.5998,
                  "lng": 128.1926,
                  "label": "문경시 가은읍"
            }
      },
      {
            "code": "47280_dong_4",
            "name": "영순면",
            "center": {
                  "lat": 36.5878,
                  "lng": 128.1996,
                  "label": "문경시 영순면"
            }
      },
      {
            "code": "47280_dong_5",
            "name": "산양면",
            "center": {
                  "lat": 36.5938,
                  "lng": 128.1996,
                  "label": "문경시 산양면"
            }
      },
      {
            "code": "47280_dong_6",
            "name": "호계면",
            "center": {
                  "lat": 36.5998,
                  "lng": 128.1996,
                  "label": "문경시 호계면"
            }
      },
      {
            "code": "47280_dong_7",
            "name": "산북면",
            "center": {
                  "lat": 36.5878,
                  "lng": 128.2066,
                  "label": "문경시 산북면"
            }
      },
      {
            "code": "47280_dong_8",
            "name": "동로면",
            "center": {
                  "lat": 36.5938,
                  "lng": 128.2066,
                  "label": "문경시 동로면"
            }
      },
      {
            "code": "47280_dong_9",
            "name": "마성면",
            "center": {
                  "lat": 36.5998,
                  "lng": 128.2066,
                  "label": "문경시 마성면"
            }
      },
      {
            "code": "47280_dong_10",
            "name": "농암면",
            "center": {
                  "lat": 36.5878,
                  "lng": 128.2136,
                  "label": "문경시 농암면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "문경시",
  },
  {
    code: "47290",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "경산시",
    fullName: "경상북도 경산시",
    
    
    
    center: {"lat":35.8258,"lng":128.7414,"label":"경산시(영남대/하양) 중심"},
    dongs: [
      {
            "code": "47290_dong_1",
            "name": "중앙동",
            "center": {
                  "lat": 35.8198,
                  "lng": 128.7344,
                  "label": "경산시 중앙동"
            }
      },
      {
            "code": "47290_dong_2",
            "name": "동부동",
            "center": {
                  "lat": 35.8258,
                  "lng": 128.7344,
                  "label": "경산시 동부동"
            }
      },
      {
            "code": "47290_dong_3",
            "name": "서부동",
            "center": {
                  "lat": 35.8318,
                  "lng": 128.7344,
                  "label": "경산시 서부동"
            }
      },
      {
            "code": "47290_dong_4",
            "name": "남부동",
            "center": {
                  "lat": 35.8198,
                  "lng": 128.7414,
                  "label": "경산시 남부동"
            }
      },
      {
            "code": "47290_dong_5",
            "name": "북부동",
            "center": {
                  "lat": 35.8258,
                  "lng": 128.7414,
                  "label": "경산시 북부동"
            }
      },
      {
            "code": "47290_dong_6",
            "name": "중방동",
            "center": {
                  "lat": 35.8318,
                  "lng": 128.7414,
                  "label": "경산시 중방동"
            }
      },
      {
            "code": "47290_dong_7",
            "name": "하양읍",
            "center": {
                  "lat": 35.8198,
                  "lng": 128.7484,
                  "label": "경산시 하양읍"
            }
      },
      {
            "code": "47290_dong_8",
            "name": "진량읍",
            "center": {
                  "lat": 35.8258,
                  "lng": 128.7484,
                  "label": "경산시 진량읍"
            }
      },
      {
            "code": "47290_dong_9",
            "name": "압량읍",
            "center": {
                  "lat": 35.8318,
                  "lng": 128.7484,
                  "label": "경산시 압량읍"
            }
      },
      {
            "code": "47290_dong_10",
            "name": "와촌면",
            "center": {
                  "lat": 35.8198,
                  "lng": 128.7554,
                  "label": "경산시 와촌면"
            }
      },
      {
            "code": "47290_dong_11",
            "name": "자인면",
            "center": {
                  "lat": 35.8258,
                  "lng": 128.7554,
                  "label": "경산시 자인면"
            }
      },
      {
            "code": "47290_dong_12",
            "name": "용성면",
            "center": {
                  "lat": 35.8318,
                  "lng": 128.7554,
                  "label": "경산시 용성면"
            }
      },
      {
            "code": "47290_dong_13",
            "name": "남산면",
            "center": {
                  "lat": 35.8198,
                  "lng": 128.7624,
                  "label": "경산시 남산면"
            }
      },
      {
            "code": "47290_dong_14",
            "name": "남천면",
            "center": {
                  "lat": 35.8258,
                  "lng": 128.7624,
                  "label": "경산시 남천면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "경산시",
  },
  {
    code: "47720",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "의성군",
    fullName: "경상북도 의성군",
    
    
    
    center: {"lat":36.3527,"lng":128.6971,"label":"의성군 중심"},
    dongs: [
      {
            "code": "47720_dong_1",
            "name": "의성읍",
            "center": {
                  "lat": 36.3467,
                  "lng": 128.6901,
                  "label": "의성군 의성읍"
            }
      },
      {
            "code": "47720_dong_2",
            "name": "단촌면",
            "center": {
                  "lat": 36.3527,
                  "lng": 128.6901,
                  "label": "의성군 단촌면"
            }
      },
      {
            "code": "47720_dong_3",
            "name": "점곡면",
            "center": {
                  "lat": 36.3587,
                  "lng": 128.6901,
                  "label": "의성군 점곡면"
            }
      },
      {
            "code": "47720_dong_4",
            "name": "옥산면",
            "center": {
                  "lat": 36.3467,
                  "lng": 128.6971,
                  "label": "의성군 옥산면"
            }
      },
      {
            "code": "47720_dong_5",
            "name": "사곡면",
            "center": {
                  "lat": 36.3527,
                  "lng": 128.6971,
                  "label": "의성군 사곡면"
            }
      },
      {
            "code": "47720_dong_6",
            "name": "춘산면",
            "center": {
                  "lat": 36.3587,
                  "lng": 128.6971,
                  "label": "의성군 춘산면"
            }
      },
      {
            "code": "47720_dong_7",
            "name": "가음면",
            "center": {
                  "lat": 36.3467,
                  "lng": 128.7041,
                  "label": "의성군 가음면"
            }
      },
      {
            "code": "47720_dong_8",
            "name": "금성면",
            "center": {
                  "lat": 36.3527,
                  "lng": 128.7041,
                  "label": "의성군 금성면"
            }
      },
      {
            "code": "47720_dong_9",
            "name": "봉양면",
            "center": {
                  "lat": 36.3587,
                  "lng": 128.7041,
                  "label": "의성군 봉양면"
            }
      },
      {
            "code": "47720_dong_10",
            "name": "비안면",
            "center": {
                  "lat": 36.3467,
                  "lng": 128.7111,
                  "label": "의성군 비안면"
            }
      },
      {
            "code": "47720_dong_11",
            "name": "구천면",
            "center": {
                  "lat": 36.3527,
                  "lng": 128.7111,
                  "label": "의성군 구천면"
            }
      },
      {
            "code": "47720_dong_12",
            "name": "단밀면",
            "center": {
                  "lat": 36.3587,
                  "lng": 128.7111,
                  "label": "의성군 단밀면"
            }
      },
      {
            "code": "47720_dong_13",
            "name": "단북면",
            "center": {
                  "lat": 36.3467,
                  "lng": 128.7181,
                  "label": "의성군 단북면"
            }
      },
      {
            "code": "47720_dong_14",
            "name": "안계면",
            "center": {
                  "lat": 36.3527,
                  "lng": 128.7181,
                  "label": "의성군 안계면"
            }
      },
      {
            "code": "47720_dong_15",
            "name": "다인면",
            "center": {
                  "lat": 36.3587,
                  "lng": 128.7181,
                  "label": "의성군 다인면"
            }
      },
      {
            "code": "47720_dong_16",
            "name": "신평면",
            "center": {
                  "lat": 36.3467,
                  "lng": 128.7251,
                  "label": "의성군 신평면"
            }
      },
      {
            "code": "47720_dong_17",
            "name": "안평면",
            "center": {
                  "lat": 36.3527,
                  "lng": 128.7251,
                  "label": "의성군 안평면"
            }
      },
      {
            "code": "47720_dong_18",
            "name": "안사면",
            "center": {
                  "lat": 36.3587,
                  "lng": 128.7251,
                  "label": "의성군 안사면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "의성군",
  },
  {
    code: "47730",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "청송군",
    fullName: "경상북도 청송군",
    
    
    
    center: {"lat":36.4364,"lng":129.0573,"label":"청송군(주왕산) 중심"},
    dongs: [
      {
            "code": "47730_dong_1",
            "name": "청송읍",
            "center": {
                  "lat": 36.4304,
                  "lng": 129.0503,
                  "label": "청송군 청송읍"
            }
      },
      {
            "code": "47730_dong_2",
            "name": "주왕산면",
            "center": {
                  "lat": 36.4364,
                  "lng": 129.0503,
                  "label": "청송군 주왕산면"
            }
      },
      {
            "code": "47730_dong_3",
            "name": "부남면",
            "center": {
                  "lat": 36.4424,
                  "lng": 129.0503,
                  "label": "청송군 부남면"
            }
      },
      {
            "code": "47730_dong_4",
            "name": "현동면",
            "center": {
                  "lat": 36.4304,
                  "lng": 129.0573,
                  "label": "청송군 현동면"
            }
      },
      {
            "code": "47730_dong_5",
            "name": "현서면",
            "center": {
                  "lat": 36.4364,
                  "lng": 129.0573,
                  "label": "청송군 현서면"
            }
      },
      {
            "code": "47730_dong_6",
            "name": "안덕면",
            "center": {
                  "lat": 36.4424,
                  "lng": 129.0573,
                  "label": "청송군 안덕면"
            }
      },
      {
            "code": "47730_dong_7",
            "name": "파천면",
            "center": {
                  "lat": 36.4304,
                  "lng": 129.0643,
                  "label": "청송군 파천면"
            }
      },
      {
            "code": "47730_dong_8",
            "name": "진보면",
            "center": {
                  "lat": 36.4364,
                  "lng": 129.0643,
                  "label": "청송군 진보면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "청송군",
  },
  {
    code: "47750",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "영양군",
    fullName: "경상북도 영양군",
    
    
    
    center: {"lat":36.6667,"lng":129.1124,"label":"영양군 중심"},
    dongs: [
      {
            "code": "47750_dong_1",
            "name": "영양읍",
            "center": {
                  "lat": 36.6607,
                  "lng": 129.1054,
                  "label": "영양군 영양읍"
            }
      },
      {
            "code": "47750_dong_2",
            "name": "입암면",
            "center": {
                  "lat": 36.6667,
                  "lng": 129.1054,
                  "label": "영양군 입암면"
            }
      },
      {
            "code": "47750_dong_3",
            "name": "청기면",
            "center": {
                  "lat": 36.6727,
                  "lng": 129.1054,
                  "label": "영양군 청기면"
            }
      },
      {
            "code": "47750_dong_4",
            "name": "일월면",
            "center": {
                  "lat": 36.6607,
                  "lng": 129.1124,
                  "label": "영양군 일월면"
            }
      },
      {
            "code": "47750_dong_5",
            "name": "수비면",
            "center": {
                  "lat": 36.6667,
                  "lng": 129.1124,
                  "label": "영양군 수비면"
            }
      },
      {
            "code": "47750_dong_6",
            "name": "석보면",
            "center": {
                  "lat": 36.6727,
                  "lng": 129.1124,
                  "label": "영양군 석보면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "영양군",
  },
  {
    code: "47760",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "영덕군",
    fullName: "경상북도 영덕군",
    
    
    
    center: {"lat":36.4151,"lng":129.3656,"label":"영덕군(강구항/대게) 중심"},
    dongs: [
      {
            "code": "47760_dong_1",
            "name": "영덕읍",
            "center": {
                  "lat": 36.4091,
                  "lng": 129.3586,
                  "label": "영덕군 영덕읍"
            }
      },
      {
            "code": "47760_dong_2",
            "name": "강구면",
            "center": {
                  "lat": 36.4151,
                  "lng": 129.3586,
                  "label": "영덕군 강구면"
            }
      },
      {
            "code": "47760_dong_3",
            "name": "남정면",
            "center": {
                  "lat": 36.4211,
                  "lng": 129.3586,
                  "label": "영덕군 남정면"
            }
      },
      {
            "code": "47760_dong_4",
            "name": "달산면",
            "center": {
                  "lat": 36.4091,
                  "lng": 129.3656,
                  "label": "영덕군 달산면"
            }
      },
      {
            "code": "47760_dong_5",
            "name": "지품면",
            "center": {
                  "lat": 36.4151,
                  "lng": 129.3656,
                  "label": "영덕군 지품면"
            }
      },
      {
            "code": "47760_dong_6",
            "name": "축산면",
            "center": {
                  "lat": 36.4211,
                  "lng": 129.3656,
                  "label": "영덕군 축산면"
            }
      },
      {
            "code": "47760_dong_7",
            "name": "영해면",
            "center": {
                  "lat": 36.4091,
                  "lng": 129.3726,
                  "label": "영덕군 영해면"
            }
      },
      {
            "code": "47760_dong_8",
            "name": "병곡면",
            "center": {
                  "lat": 36.4151,
                  "lng": 129.3726,
                  "label": "영덕군 병곡면"
            }
      },
      {
            "code": "47760_dong_9",
            "name": "창수면",
            "center": {
                  "lat": 36.4211,
                  "lng": 129.3726,
                  "label": "영덕군 창수면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "영덕군",
  },
  {
    code: "47770",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "청도군",
    fullName: "경상북도 청도군",
    
    
    
    center: {"lat":35.6474,"lng":128.7341,"label":"청도군 중심"},
    dongs: [
      {
            "code": "47770_dong_1",
            "name": "청도읍",
            "center": {
                  "lat": 35.6414,
                  "lng": 128.7271,
                  "label": "청도군 청도읍"
            }
      },
      {
            "code": "47770_dong_2",
            "name": "화양읍",
            "center": {
                  "lat": 35.6474,
                  "lng": 128.7271,
                  "label": "청도군 화양읍"
            }
      },
      {
            "code": "47770_dong_3",
            "name": "각남면",
            "center": {
                  "lat": 35.6534,
                  "lng": 128.7271,
                  "label": "청도군 각남면"
            }
      },
      {
            "code": "47770_dong_4",
            "name": "풍각면",
            "center": {
                  "lat": 35.6414,
                  "lng": 128.7341,
                  "label": "청도군 풍각면"
            }
      },
      {
            "code": "47770_dong_5",
            "name": "각북면",
            "center": {
                  "lat": 35.6474,
                  "lng": 128.7341,
                  "label": "청도군 각북면"
            }
      },
      {
            "code": "47770_dong_6",
            "name": "이서면",
            "center": {
                  "lat": 35.6534,
                  "lng": 128.7341,
                  "label": "청도군 이서면"
            }
      },
      {
            "code": "47770_dong_7",
            "name": "운문면",
            "center": {
                  "lat": 35.6414,
                  "lng": 128.7411,
                  "label": "청도군 운문면"
            }
      },
      {
            "code": "47770_dong_8",
            "name": "금천면",
            "center": {
                  "lat": 35.6474,
                  "lng": 128.7411,
                  "label": "청도군 금천면"
            }
      },
      {
            "code": "47770_dong_9",
            "name": "매전면",
            "center": {
                  "lat": 35.6534,
                  "lng": 128.7411,
                  "label": "청도군 매전면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "청도군",
  },
  {
    code: "47820",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "고령군",
    fullName: "경상북도 고령군",
    
    
    
    center: {"lat":35.7262,"lng":128.2625,"label":"고령군 중심"},
    dongs: [
      {
            "code": "47820_dong_1",
            "name": "대가야읍",
            "center": {
                  "lat": 35.7202,
                  "lng": 128.2555,
                  "label": "고령군 대가야읍"
            }
      },
      {
            "code": "47820_dong_2",
            "name": "덕곡면",
            "center": {
                  "lat": 35.7262,
                  "lng": 128.2555,
                  "label": "고령군 덕곡면"
            }
      },
      {
            "code": "47820_dong_3",
            "name": "운수면",
            "center": {
                  "lat": 35.7322,
                  "lng": 128.2555,
                  "label": "고령군 운수면"
            }
      },
      {
            "code": "47820_dong_4",
            "name": "성산면",
            "center": {
                  "lat": 35.7202,
                  "lng": 128.2625,
                  "label": "고령군 성산면"
            }
      },
      {
            "code": "47820_dong_5",
            "name": "다산면",
            "center": {
                  "lat": 35.7262,
                  "lng": 128.2625,
                  "label": "고령군 다산면"
            }
      },
      {
            "code": "47820_dong_6",
            "name": "개진면",
            "center": {
                  "lat": 35.7322,
                  "lng": 128.2625,
                  "label": "고령군 개진면"
            }
      },
      {
            "code": "47820_dong_7",
            "name": "우곡면",
            "center": {
                  "lat": 35.7202,
                  "lng": 128.2695,
                  "label": "고령군 우곡면"
            }
      },
      {
            "code": "47820_dong_8",
            "name": "쌍림면",
            "center": {
                  "lat": 35.7262,
                  "lng": 128.2695,
                  "label": "고령군 쌍림면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "고령군",
  },
  {
    code: "47830",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "성주군",
    fullName: "경상북도 성주군",
    
    
    
    center: {"lat":35.9193,"lng":128.2831,"label":"성주군 중심"},
    dongs: [
      {
            "code": "47830_dong_1",
            "name": "성주읍",
            "center": {
                  "lat": 35.9133,
                  "lng": 128.2761,
                  "label": "성주군 성주읍"
            }
      },
      {
            "code": "47830_dong_2",
            "name": "선남면",
            "center": {
                  "lat": 35.9193,
                  "lng": 128.2761,
                  "label": "성주군 선남면"
            }
      },
      {
            "code": "47830_dong_3",
            "name": "용암면",
            "center": {
                  "lat": 35.9253,
                  "lng": 128.2761,
                  "label": "성주군 용암면"
            }
      },
      {
            "code": "47830_dong_4",
            "name": "수륜면",
            "center": {
                  "lat": 35.9133,
                  "lng": 128.2831,
                  "label": "성주군 수륜면"
            }
      },
      {
            "code": "47830_dong_5",
            "name": "가천면",
            "center": {
                  "lat": 35.9193,
                  "lng": 128.2831,
                  "label": "성주군 가천면"
            }
      },
      {
            "code": "47830_dong_6",
            "name": "금수면",
            "center": {
                  "lat": 35.9253,
                  "lng": 128.2831,
                  "label": "성주군 금수면"
            }
      },
      {
            "code": "47830_dong_7",
            "name": "대가면",
            "center": {
                  "lat": 35.9133,
                  "lng": 128.2901,
                  "label": "성주군 대가면"
            }
      },
      {
            "code": "47830_dong_8",
            "name": "벽진면",
            "center": {
                  "lat": 35.9193,
                  "lng": 128.2901,
                  "label": "성주군 벽진면"
            }
      },
      {
            "code": "47830_dong_9",
            "name": "초전면",
            "center": {
                  "lat": 35.9253,
                  "lng": 128.2901,
                  "label": "성주군 초전면"
            }
      },
      {
            "code": "47830_dong_10",
            "name": "월항면",
            "center": {
                  "lat": 35.9133,
                  "lng": 128.2971,
                  "label": "성주군 월항면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "성주군",
  },
  {
    code: "47840",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "칠곡군",
    fullName: "경상북도 칠곡군",
    
    
    
    center: {"lat":35.9956,"lng":128.4017,"label":"칠곡군(왜관/석적/북삼) 중심"},
    dongs: [
      {
            "code": "47840_dong_1",
            "name": "왜관읍",
            "center": {
                  "lat": 35.9896,
                  "lng": 128.3947,
                  "label": "칠곡군 왜관읍"
            }
      },
      {
            "code": "47840_dong_2",
            "name": "북삼읍",
            "center": {
                  "lat": 35.9956,
                  "lng": 128.3947,
                  "label": "칠곡군 북삼읍"
            }
      },
      {
            "code": "47840_dong_3",
            "name": "석적읍",
            "center": {
                  "lat": 36.0016,
                  "lng": 128.3947,
                  "label": "칠곡군 석적읍"
            }
      },
      {
            "code": "47840_dong_4",
            "name": "지천면",
            "center": {
                  "lat": 35.9896,
                  "lng": 128.4017,
                  "label": "칠곡군 지천면"
            }
      },
      {
            "code": "47840_dong_5",
            "name": "동명면",
            "center": {
                  "lat": 35.9956,
                  "lng": 128.4017,
                  "label": "칠곡군 동명면"
            }
      },
      {
            "code": "47840_dong_6",
            "name": "가산면",
            "center": {
                  "lat": 36.0016,
                  "lng": 128.4017,
                  "label": "칠곡군 가산면"
            }
      },
      {
            "code": "47840_dong_7",
            "name": "약목면",
            "center": {
                  "lat": 35.9896,
                  "lng": 128.4087,
                  "label": "칠곡군 약목면"
            }
      },
      {
            "code": "47840_dong_8",
            "name": "기산면",
            "center": {
                  "lat": 35.9956,
                  "lng": 128.4087,
                  "label": "칠곡군 기산면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "칠곡군",
  },
  {
    code: "47850",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "예천군",
    fullName: "경상북도 예천군",
    
    
    
    center: {"lat":36.6578,"lng":128.4528,"label":"예천군(경북도청신도시) 중심"},
    dongs: [
      {
            "code": "47850_dong_1",
            "name": "예천읍",
            "center": {
                  "lat": 36.6518,
                  "lng": 128.4458,
                  "label": "예천군 예천읍"
            }
      },
      {
            "code": "47850_dong_2",
            "name": "용문면",
            "center": {
                  "lat": 36.6578,
                  "lng": 128.4458,
                  "label": "예천군 용문면"
            }
      },
      {
            "code": "47850_dong_3",
            "name": "효자면",
            "center": {
                  "lat": 36.6638,
                  "lng": 128.4458,
                  "label": "예천군 효자면"
            }
      },
      {
            "code": "47850_dong_4",
            "name": "은풍면",
            "center": {
                  "lat": 36.6518,
                  "lng": 128.4528,
                  "label": "예천군 은풍면"
            }
      },
      {
            "code": "47850_dong_5",
            "name": "감천면",
            "center": {
                  "lat": 36.6578,
                  "lng": 128.4528,
                  "label": "예천군 감천면"
            }
      },
      {
            "code": "47850_dong_6",
            "name": "보문면",
            "center": {
                  "lat": 36.6638,
                  "lng": 128.4528,
                  "label": "예천군 보문면"
            }
      },
      {
            "code": "47850_dong_7",
            "name": "호명읍",
            "center": {
                  "lat": 36.6518,
                  "lng": 128.4598,
                  "label": "예천군 호명읍"
            }
      },
      {
            "code": "47850_dong_8",
            "name": "유천면",
            "center": {
                  "lat": 36.6578,
                  "lng": 128.4598,
                  "label": "예천군 유천면"
            }
      },
      {
            "code": "47850_dong_9",
            "name": "용궁면",
            "center": {
                  "lat": 36.6638,
                  "lng": 128.4598,
                  "label": "예천군 용궁면"
            }
      },
      {
            "code": "47850_dong_10",
            "name": "개포면",
            "center": {
                  "lat": 36.6518,
                  "lng": 128.4668,
                  "label": "예천군 개포면"
            }
      },
      {
            "code": "47850_dong_11",
            "name": "지보면",
            "center": {
                  "lat": 36.6578,
                  "lng": 128.4668,
                  "label": "예천군 지보면"
            }
      },
      {
            "code": "47850_dong_12",
            "name": "풍양면",
            "center": {
                  "lat": 36.6638,
                  "lng": 128.4668,
                  "label": "예천군 풍양면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "예천군",
  },
  {
    code: "47860",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "봉화군",
    fullName: "경상북도 봉화군",
    
    
    
    center: {"lat":36.8931,"lng":128.7325,"label":"봉화군 중심"},
    dongs: [
      {
            "code": "47860_dong_1",
            "name": "봉화읍",
            "center": {
                  "lat": 36.8871,
                  "lng": 128.7255,
                  "label": "봉화군 봉화읍"
            }
      },
      {
            "code": "47860_dong_2",
            "name": "물야면",
            "center": {
                  "lat": 36.8931,
                  "lng": 128.7255,
                  "label": "봉화군 물야면"
            }
      },
      {
            "code": "47860_dong_3",
            "name": "봉성면",
            "center": {
                  "lat": 36.8991,
                  "lng": 128.7255,
                  "label": "봉화군 봉성면"
            }
      },
      {
            "code": "47860_dong_4",
            "name": "법전면",
            "center": {
                  "lat": 36.8871,
                  "lng": 128.7325,
                  "label": "봉화군 법전면"
            }
      },
      {
            "code": "47860_dong_5",
            "name": "춘양면",
            "center": {
                  "lat": 36.8931,
                  "lng": 128.7325,
                  "label": "봉화군 춘양면"
            }
      },
      {
            "code": "47860_dong_6",
            "name": "소천면",
            "center": {
                  "lat": 36.8991,
                  "lng": 128.7325,
                  "label": "봉화군 소천면"
            }
      },
      {
            "code": "47860_dong_7",
            "name": "석포면",
            "center": {
                  "lat": 36.8871,
                  "lng": 128.7395,
                  "label": "봉화군 석포면"
            }
      },
      {
            "code": "47860_dong_8",
            "name": "재산면",
            "center": {
                  "lat": 36.8931,
                  "lng": 128.7395,
                  "label": "봉화군 재산면"
            }
      },
      {
            "code": "47860_dong_9",
            "name": "명호면",
            "center": {
                  "lat": 36.8991,
                  "lng": 128.7395,
                  "label": "봉화군 명호면"
            }
      },
      {
            "code": "47860_dong_10",
            "name": "상운면",
            "center": {
                  "lat": 36.8871,
                  "lng": 128.7465,
                  "label": "봉화군 상운면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "봉화군",
  },
  {
    code: "47900",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "울진군",
    fullName: "경상북도 울진군",
    
    
    
    center: {"lat":36.9931,"lng":129.4005,"label":"울진군(후포/죽변) 중심"},
    dongs: [
      {
            "code": "47900_dong_1",
            "name": "울진읍",
            "center": {
                  "lat": 36.9871,
                  "lng": 129.3935,
                  "label": "울진군 울진읍"
            }
      },
      {
            "code": "47900_dong_2",
            "name": "평해읍",
            "center": {
                  "lat": 36.9931,
                  "lng": 129.3935,
                  "label": "울진군 평해읍"
            }
      },
      {
            "code": "47900_dong_3",
            "name": "북면",
            "center": {
                  "lat": 36.9991,
                  "lng": 129.3935,
                  "label": "울진군 북면"
            }
      },
      {
            "code": "47900_dong_4",
            "name": "금강송면",
            "center": {
                  "lat": 36.9871,
                  "lng": 129.4005,
                  "label": "울진군 금강송면"
            }
      },
      {
            "code": "47900_dong_5",
            "name": "근남면",
            "center": {
                  "lat": 36.9931,
                  "lng": 129.4005,
                  "label": "울진군 근남면"
            }
      },
      {
            "code": "47900_dong_6",
            "name": "매화면",
            "center": {
                  "lat": 36.9991,
                  "lng": 129.4005,
                  "label": "울진군 매화면"
            }
      },
      {
            "code": "47900_dong_7",
            "name": "기성면",
            "center": {
                  "lat": 36.9871,
                  "lng": 129.4075,
                  "label": "울진군 기성면"
            }
      },
      {
            "code": "47900_dong_8",
            "name": "온정면",
            "center": {
                  "lat": 36.9931,
                  "lng": 129.4075,
                  "label": "울진군 온정면"
            }
      },
      {
            "code": "47900_dong_9",
            "name": "죽변면",
            "center": {
                  "lat": 36.9991,
                  "lng": 129.4075,
                  "label": "울진군 죽변면"
            }
      },
      {
            "code": "47900_dong_10",
            "name": "후포면",
            "center": {
                  "lat": 36.9871,
                  "lng": 129.4145,
                  "label": "울진군 후포면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "울진군",
  },
  {
    code: "47920",
    sidoCode: "47",
    sidoName: "경상북도",
    name: "울릉군",
    fullName: "경상북도 울릉군",
    
    
    
    center: {"lat":37.4845,"lng":130.9056,"label":"울릉군(독도) 중심"},
    dongs: [
      {
            "code": "47920_dong_1",
            "name": "울릉읍",
            "center": {
                  "lat": 37.4785,
                  "lng": 130.8986,
                  "label": "울릉군 울릉읍"
            }
      },
      {
            "code": "47920_dong_2",
            "name": "서면",
            "center": {
                  "lat": 37.4845,
                  "lng": 130.8986,
                  "label": "울릉군 서면"
            }
      },
      {
            "code": "47920_dong_3",
            "name": "북면",
            "center": {
                  "lat": 37.4905,
                  "lng": 130.8986,
                  "label": "울릉군 북면"
            }
      }
],
    isActive: true,
    city: "경상북도",
    gu: "울릉군",
  },
  {
    code: "48121",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "창원시 의창구",
    fullName: "경상남도 창원시 의창구",
    
    parentCity: "창원시",
    isGeneralGu: true,
    center: {"lat":35.2558,"lng":128.6369,"label":"창원시 의창구(도계/팔용) 중심"},
    dongs: [
      {
            "code": "48121_dong_1",
            "name": "의창동",
            "center": {
                  "lat": 35.2498,
                  "lng": 128.6299,
                  "label": "창원시 의창구 의창동"
            }
      },
      {
            "code": "48121_dong_2",
            "name": "팔룡동",
            "center": {
                  "lat": 35.2558,
                  "lng": 128.6299,
                  "label": "창원시 의창구 팔룡동"
            }
      },
      {
            "code": "48121_dong_3",
            "name": "명곡동",
            "center": {
                  "lat": 35.2618,
                  "lng": 128.6299,
                  "label": "창원시 의창구 명곡동"
            }
      },
      {
            "code": "48121_dong_4",
            "name": "봉림동",
            "center": {
                  "lat": 35.2498,
                  "lng": 128.6369,
                  "label": "창원시 의창구 봉림동"
            }
      },
      {
            "code": "48121_dong_5",
            "name": "동읍",
            "center": {
                  "lat": 35.2558,
                  "lng": 128.6369,
                  "label": "창원시 의창구 동읍"
            }
      },
      {
            "code": "48121_dong_6",
            "name": "북면",
            "center": {
                  "lat": 35.2618,
                  "lng": 128.6369,
                  "label": "창원시 의창구 북면"
            }
      },
      {
            "code": "48121_dong_7",
            "name": "대산면",
            "center": {
                  "lat": 35.2498,
                  "lng": 128.6439,
                  "label": "창원시 의창구 대산면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "창원시 의창구",
  },
  {
    code: "48123",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "창원시 성산구",
    fullName: "경상남도 창원시 성산구",
    legacyCode: "gyeongnam_changwon_seongsan",
    parentCity: "창원시",
    isGeneralGu: true,
    center: {"lat":35.2223,"lng":128.6823,"label":"창원시 성산구(상남동) 중심"},
    dongs: [
      {
            "code": "48123_dong_1",
            "name": "상남동",
            "center": {
                  "lat": 35.2163,
                  "lng": 128.6753,
                  "label": "창원시 성산구 상남동"
            }
      },
      {
            "code": "48123_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 35.2223,
                  "lng": 128.6753,
                  "label": "창원시 성산구 중앙동"
            }
      },
      {
            "code": "48123_dong_3",
            "name": "반송동",
            "center": {
                  "lat": 35.2283,
                  "lng": 128.6753,
                  "label": "창원시 성산구 반송동"
            }
      },
      {
            "code": "48123_dong_4",
            "name": "가음정동",
            "center": {
                  "lat": 35.2163,
                  "lng": 128.6823,
                  "label": "창원시 성산구 가음정동"
            }
      },
      {
            "code": "48123_dong_5",
            "name": "성주동",
            "center": {
                  "lat": 35.2223,
                  "lng": 128.6823,
                  "label": "창원시 성산구 성주동"
            }
      },
      {
            "code": "48123_dong_6",
            "name": "웅남동",
            "center": {
                  "lat": 35.2283,
                  "lng": 128.6823,
                  "label": "창원시 성산구 웅남동"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "창원시 성산구",
  },
  {
    code: "48125",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "창원시 마산합포구",
    fullName: "경상남도 창원시 마산합포구",
    
    parentCity: "창원시",
    isGeneralGu: true,
    center: {"lat":35.1978,"lng":128.5723,"label":"창원시 마산합포구(오동동/어시장) 중심"},
    dongs: [
      {
            "code": "48125_dong_1",
            "name": "월영동",
            "center": {
                  "lat": 35.1918,
                  "lng": 128.5653,
                  "label": "창원시 마산합포구 월영동"
            }
      },
      {
            "code": "48125_dong_2",
            "name": "오동동",
            "center": {
                  "lat": 35.1978,
                  "lng": 128.5653,
                  "label": "창원시 마산합포구 오동동"
            }
      },
      {
            "code": "48125_dong_3",
            "name": "교방동",
            "center": {
                  "lat": 35.2038,
                  "lng": 128.5653,
                  "label": "창원시 마산합포구 교방동"
            }
      },
      {
            "code": "48125_dong_4",
            "name": "노산동",
            "center": {
                  "lat": 35.1918,
                  "lng": 128.5723,
                  "label": "창원시 마산합포구 노산동"
            }
      },
      {
            "code": "48125_dong_5",
            "name": "합포동",
            "center": {
                  "lat": 35.1978,
                  "lng": 128.5723,
                  "label": "창원시 마산합포구 합포동"
            }
      },
      {
            "code": "48125_dong_6",
            "name": "산호동",
            "center": {
                  "lat": 35.2038,
                  "lng": 128.5723,
                  "label": "창원시 마산합포구 산호동"
            }
      },
      {
            "code": "48125_dong_7",
            "name": "완월동",
            "center": {
                  "lat": 35.1918,
                  "lng": 128.5793,
                  "label": "창원시 마산합포구 완월동"
            }
      },
      {
            "code": "48125_dong_8",
            "name": "자산동",
            "center": {
                  "lat": 35.1978,
                  "lng": 128.5793,
                  "label": "창원시 마산합포구 자산동"
            }
      },
      {
            "code": "48125_dong_9",
            "name": "구산면",
            "center": {
                  "lat": 35.2038,
                  "lng": 128.5793,
                  "label": "창원시 마산합포구 구산면"
            }
      },
      {
            "code": "48125_dong_10",
            "name": "진동면",
            "center": {
                  "lat": 35.1918,
                  "lng": 128.5863,
                  "label": "창원시 마산합포구 진동면"
            }
      },
      {
            "code": "48125_dong_11",
            "name": "진북면",
            "center": {
                  "lat": 35.1978,
                  "lng": 128.5863,
                  "label": "창원시 마산합포구 진북면"
            }
      },
      {
            "code": "48125_dong_12",
            "name": "진전면",
            "center": {
                  "lat": 35.2038,
                  "lng": 128.5863,
                  "label": "창원시 마산합포구 진전면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "창원시 마산합포구",
  },
  {
    code: "48127",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "창원시 마산회원구",
    fullName: "경상남도 창원시 마산회원구",
    
    parentCity: "창원시",
    isGeneralGu: true,
    center: {"lat":35.2268,"lng":128.5832,"label":"창원시 마산회원구(합성동/양덕동) 중심"},
    dongs: [
      {
            "code": "48127_dong_1",
            "name": "합성동",
            "center": {
                  "lat": 35.2208,
                  "lng": 128.5762,
                  "label": "창원시 마산회원구 합성동"
            }
      },
      {
            "code": "48127_dong_2",
            "name": "양덕동",
            "center": {
                  "lat": 35.2268,
                  "lng": 128.5762,
                  "label": "창원시 마산회원구 양덕동"
            }
      },
      {
            "code": "48127_dong_3",
            "name": "회원동",
            "center": {
                  "lat": 35.2328,
                  "lng": 128.5762,
                  "label": "창원시 마산회원구 회원동"
            }
      },
      {
            "code": "48127_dong_4",
            "name": "석전동",
            "center": {
                  "lat": 35.2208,
                  "lng": 128.5832,
                  "label": "창원시 마산회원구 석전동"
            }
      },
      {
            "code": "48127_dong_5",
            "name": "회성동",
            "center": {
                  "lat": 35.2268,
                  "lng": 128.5832,
                  "label": "창원시 마산회원구 회성동"
            }
      },
      {
            "code": "48127_dong_6",
            "name": "봉암동",
            "center": {
                  "lat": 35.2328,
                  "lng": 128.5832,
                  "label": "창원시 마산회원구 봉암동"
            }
      },
      {
            "code": "48127_dong_7",
            "name": "내서읍",
            "center": {
                  "lat": 35.2208,
                  "lng": 128.5902,
                  "label": "창원시 마산회원구 내서읍"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "창원시 마산회원구",
  },
  {
    code: "48129",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "창원시 진해구",
    fullName: "경상남도 창원시 진해구",
    
    parentCity: "창원시",
    isGeneralGu: true,
    center: {"lat":35.1492,"lng":128.6658,"label":"창원시 진해구(군항제/여좌천) 중심"},
    dongs: [
      {
            "code": "48129_dong_1",
            "name": "충무동",
            "center": {
                  "lat": 35.1432,
                  "lng": 128.6588,
                  "label": "창원시 진해구 충무동"
            }
      },
      {
            "code": "48129_dong_2",
            "name": "여좌동",
            "center": {
                  "lat": 35.1492,
                  "lng": 128.6588,
                  "label": "창원시 진해구 여좌동"
            }
      },
      {
            "code": "48129_dong_3",
            "name": "태평동",
            "center": {
                  "lat": 35.1552,
                  "lng": 128.6588,
                  "label": "창원시 진해구 태평동"
            }
      },
      {
            "code": "48129_dong_4",
            "name": "경화동",
            "center": {
                  "lat": 35.1432,
                  "lng": 128.6658,
                  "label": "창원시 진해구 경화동"
            }
      },
      {
            "code": "48129_dong_5",
            "name": "병암동",
            "center": {
                  "lat": 35.1492,
                  "lng": 128.6658,
                  "label": "창원시 진해구 병암동"
            }
      },
      {
            "code": "48129_dong_6",
            "name": "석동",
            "center": {
                  "lat": 35.1552,
                  "lng": 128.6658,
                  "label": "창원시 진해구 석동"
            }
      },
      {
            "code": "48129_dong_7",
            "name": "이동",
            "center": {
                  "lat": 35.1432,
                  "lng": 128.6728,
                  "label": "창원시 진해구 이동"
            }
      },
      {
            "code": "48129_dong_8",
            "name": "자은동",
            "center": {
                  "lat": 35.1492,
                  "lng": 128.6728,
                  "label": "창원시 진해구 자은동"
            }
      },
      {
            "code": "48129_dong_9",
            "name": "덕산동",
            "center": {
                  "lat": 35.1552,
                  "lng": 128.6728,
                  "label": "창원시 진해구 덕산동"
            }
      },
      {
            "code": "48129_dong_10",
            "name": "풍호동",
            "center": {
                  "lat": 35.1432,
                  "lng": 128.6798,
                  "label": "창원시 진해구 풍호동"
            }
      },
      {
            "code": "48129_dong_11",
            "name": "웅천동",
            "center": {
                  "lat": 35.1492,
                  "lng": 128.6798,
                  "label": "창원시 진해구 웅천동"
            }
      },
      {
            "code": "48129_dong_12",
            "name": "웅동",
            "center": {
                  "lat": 35.1552,
                  "lng": 128.6798,
                  "label": "창원시 진해구 웅동"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "창원시 진해구",
  },
  {
    code: "48170",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "진주시",
    fullName: "경상남도 진주시",
    legacyCode: "gyeongnam_jinju",
    
    
    center: {"lat":35.1802,"lng":128.1076,"label":"진주시(혁신/평거/하대) 중심"},
    dongs: [
      {
            "code": "48170_dong_1",
            "name": "충무공동",
            "center": {
                  "lat": 35.1742,
                  "lng": 128.1006,
                  "label": "진주시 충무공동"
            }
      },
      {
            "code": "48170_dong_2",
            "name": "평거동",
            "center": {
                  "lat": 35.1802,
                  "lng": 128.1006,
                  "label": "진주시 평거동"
            }
      },
      {
            "code": "48170_dong_3",
            "name": "신안동",
            "center": {
                  "lat": 35.1862,
                  "lng": 128.1006,
                  "label": "진주시 신안동"
            }
      },
      {
            "code": "48170_dong_4",
            "name": "하대동",
            "center": {
                  "lat": 35.1742,
                  "lng": 128.1076,
                  "label": "진주시 하대동"
            }
      },
      {
            "code": "48170_dong_5",
            "name": "상대동",
            "center": {
                  "lat": 35.1802,
                  "lng": 128.1076,
                  "label": "진주시 상대동"
            }
      },
      {
            "code": "48170_dong_6",
            "name": "초전동",
            "center": {
                  "lat": 35.1862,
                  "lng": 128.1076,
                  "label": "진주시 초전동"
            }
      },
      {
            "code": "48170_dong_7",
            "name": "칠암동",
            "center": {
                  "lat": 35.1742,
                  "lng": 128.1146,
                  "label": "진주시 칠암동"
            }
      },
      {
            "code": "48170_dong_8",
            "name": "가좌동",
            "center": {
                  "lat": 35.1802,
                  "lng": 128.1146,
                  "label": "진주시 가좌동"
            }
      },
      {
            "code": "48170_dong_9",
            "name": "성북동",
            "center": {
                  "lat": 35.1862,
                  "lng": 128.1146,
                  "label": "진주시 성북동"
            }
      },
      {
            "code": "48170_dong_10",
            "name": "중앙동",
            "center": {
                  "lat": 35.1742,
                  "lng": 128.1216,
                  "label": "진주시 중앙동"
            }
      },
      {
            "code": "48170_dong_11",
            "name": "상봉동",
            "center": {
                  "lat": 35.1802,
                  "lng": 128.1216,
                  "label": "진주시 상봉동"
            }
      },
      {
            "code": "48170_dong_12",
            "name": "문산읍",
            "center": {
                  "lat": 35.1862,
                  "lng": 128.1216,
                  "label": "진주시 문산읍"
            }
      },
      {
            "code": "48170_dong_13",
            "name": "진성면",
            "center": {
                  "lat": 35.1742,
                  "lng": 128.1286,
                  "label": "진주시 진성면"
            }
      },
      {
            "code": "48170_dong_14",
            "name": "일반성면",
            "center": {
                  "lat": 35.1802,
                  "lng": 128.1286,
                  "label": "진주시 일반성면"
            }
      },
      {
            "code": "48170_dong_15",
            "name": "금곡면",
            "center": {
                  "lat": 35.1862,
                  "lng": 128.1286,
                  "label": "진주시 금곡면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "진주시",
  },
  {
    code: "48220",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "통영시",
    fullName: "경상남도 통영시",
    
    
    
    center: {"lat":34.8544,"lng":128.4332,"label":"통영시(강구안/동피랑) 중심"},
    dongs: [
      {
            "code": "48220_dong_1",
            "name": "도천동",
            "center": {
                  "lat": 34.8484,
                  "lng": 128.4262,
                  "label": "통영시 도천동"
            }
      },
      {
            "code": "48220_dong_2",
            "name": "명정동",
            "center": {
                  "lat": 34.8544,
                  "lng": 128.4262,
                  "label": "통영시 명정동"
            }
      },
      {
            "code": "48220_dong_3",
            "name": "중앙동",
            "center": {
                  "lat": 34.8604,
                  "lng": 128.4262,
                  "label": "통영시 중앙동"
            }
      },
      {
            "code": "48220_dong_4",
            "name": "정량동",
            "center": {
                  "lat": 34.8484,
                  "lng": 128.4332,
                  "label": "통영시 정량동"
            }
      },
      {
            "code": "48220_dong_5",
            "name": "북신동",
            "center": {
                  "lat": 34.8544,
                  "lng": 128.4332,
                  "label": "통영시 북신동"
            }
      },
      {
            "code": "48220_dong_6",
            "name": "무전동",
            "center": {
                  "lat": 34.8604,
                  "lng": 128.4332,
                  "label": "통영시 무전동"
            }
      },
      {
            "code": "48220_dong_7",
            "name": "미수동",
            "center": {
                  "lat": 34.8484,
                  "lng": 128.4402,
                  "label": "통영시 미수동"
            }
      },
      {
            "code": "48220_dong_8",
            "name": "봉평동",
            "center": {
                  "lat": 34.8544,
                  "lng": 128.4402,
                  "label": "통영시 봉평동"
            }
      },
      {
            "code": "48220_dong_9",
            "name": "산양읍",
            "center": {
                  "lat": 34.8604,
                  "lng": 128.4402,
                  "label": "통영시 산양읍"
            }
      },
      {
            "code": "48220_dong_10",
            "name": "용남면",
            "center": {
                  "lat": 34.8484,
                  "lng": 128.4472,
                  "label": "통영시 용남면"
            }
      },
      {
            "code": "48220_dong_11",
            "name": "도산면",
            "center": {
                  "lat": 34.8544,
                  "lng": 128.4472,
                  "label": "통영시 도산면"
            }
      },
      {
            "code": "48220_dong_12",
            "name": "광도면",
            "center": {
                  "lat": 34.8604,
                  "lng": 128.4472,
                  "label": "통영시 광도면"
            }
      },
      {
            "code": "48220_dong_13",
            "name": "욕지면",
            "center": {
                  "lat": 34.8484,
                  "lng": 128.4542,
                  "label": "통영시 욕지면"
            }
      },
      {
            "code": "48220_dong_14",
            "name": "한산면",
            "center": {
                  "lat": 34.8544,
                  "lng": 128.4542,
                  "label": "통영시 한산면"
            }
      },
      {
            "code": "48220_dong_15",
            "name": "사량면",
            "center": {
                  "lat": 34.8604,
                  "lng": 128.4542,
                  "label": "통영시 사량면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "통영시",
  },
  {
    code: "48240",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "사천시",
    fullName: "경상남도 사천시",
    
    
    
    center: {"lat":35.0036,"lng":128.0645,"label":"사천시(삼천포) 중심"},
    dongs: [
      {
            "code": "48240_dong_1",
            "name": "삼천포동",
            "center": {
                  "lat": 34.9976,
                  "lng": 128.0575,
                  "label": "사천시 삼천포동"
            }
      },
      {
            "code": "48240_dong_2",
            "name": "동서동",
            "center": {
                  "lat": 35.0036,
                  "lng": 128.0575,
                  "label": "사천시 동서동"
            }
      },
      {
            "code": "48240_dong_3",
            "name": "선구동",
            "center": {
                  "lat": 35.0096,
                  "lng": 128.0575,
                  "label": "사천시 선구동"
            }
      },
      {
            "code": "48240_dong_4",
            "name": "동서금동",
            "center": {
                  "lat": 34.9976,
                  "lng": 128.0645,
                  "label": "사천시 동서금동"
            }
      },
      {
            "code": "48240_dong_5",
            "name": "벌용동",
            "center": {
                  "lat": 35.0036,
                  "lng": 128.0645,
                  "label": "사천시 벌용동"
            }
      },
      {
            "code": "48240_dong_6",
            "name": "향촌동",
            "center": {
                  "lat": 35.0096,
                  "lng": 128.0645,
                  "label": "사천시 향촌동"
            }
      },
      {
            "code": "48240_dong_7",
            "name": "남양동",
            "center": {
                  "lat": 34.9976,
                  "lng": 128.0715,
                  "label": "사천시 남양동"
            }
      },
      {
            "code": "48240_dong_8",
            "name": "사천읍",
            "center": {
                  "lat": 35.0036,
                  "lng": 128.0715,
                  "label": "사천시 사천읍"
            }
      },
      {
            "code": "48240_dong_9",
            "name": "정동면",
            "center": {
                  "lat": 35.0096,
                  "lng": 128.0715,
                  "label": "사천시 정동면"
            }
      },
      {
            "code": "48240_dong_10",
            "name": "사남면",
            "center": {
                  "lat": 34.9976,
                  "lng": 128.0785,
                  "label": "사천시 사남면"
            }
      },
      {
            "code": "48240_dong_11",
            "name": "용현면",
            "center": {
                  "lat": 35.0036,
                  "lng": 128.0785,
                  "label": "사천시 용현면"
            }
      },
      {
            "code": "48240_dong_12",
            "name": "축동면",
            "center": {
                  "lat": 35.0096,
                  "lng": 128.0785,
                  "label": "사천시 축동면"
            }
      },
      {
            "code": "48240_dong_13",
            "name": "곤양면",
            "center": {
                  "lat": 34.9976,
                  "lng": 128.0855,
                  "label": "사천시 곤양면"
            }
      },
      {
            "code": "48240_dong_14",
            "name": "곤명면",
            "center": {
                  "lat": 35.0036,
                  "lng": 128.0855,
                  "label": "사천시 곤명면"
            }
      },
      {
            "code": "48240_dong_15",
            "name": "서포면",
            "center": {
                  "lat": 35.0096,
                  "lng": 128.0855,
                  "label": "사천시 서포면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "사천시",
  },
  {
    code: "48250",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "김해시",
    fullName: "경상남도 김해시",
    
    
    
    center: {"lat":35.2285,"lng":128.8894,"label":"김해시(내외동/율하) 중심"},
    dongs: [
      {
            "code": "48250_dong_1",
            "name": "내외동",
            "center": {
                  "lat": 35.2225,
                  "lng": 128.8824,
                  "label": "김해시 내외동"
            }
      },
      {
            "code": "48250_dong_2",
            "name": "북부동",
            "center": {
                  "lat": 35.2285,
                  "lng": 128.8824,
                  "label": "김해시 북부동"
            }
      },
      {
            "code": "48250_dong_3",
            "name": "동상동",
            "center": {
                  "lat": 35.2345,
                  "lng": 128.8824,
                  "label": "김해시 동상동"
            }
      },
      {
            "code": "48250_dong_4",
            "name": "회현동",
            "center": {
                  "lat": 35.2225,
                  "lng": 128.8894,
                  "label": "김해시 회현동"
            }
      },
      {
            "code": "48250_dong_5",
            "name": "부원동",
            "center": {
                  "lat": 35.2285,
                  "lng": 128.8894,
                  "label": "김해시 부원동"
            }
      },
      {
            "code": "48250_dong_6",
            "name": "활천동",
            "center": {
                  "lat": 35.2345,
                  "lng": 128.8894,
                  "label": "김해시 활천동"
            }
      },
      {
            "code": "48250_dong_7",
            "name": "삼안동",
            "center": {
                  "lat": 35.2225,
                  "lng": 128.8964,
                  "label": "김해시 삼안동"
            }
      },
      {
            "code": "48250_dong_8",
            "name": "불암동",
            "center": {
                  "lat": 35.2285,
                  "lng": 128.8964,
                  "label": "김해시 불암동"
            }
      },
      {
            "code": "48250_dong_9",
            "name": "장유동",
            "center": {
                  "lat": 35.2345,
                  "lng": 128.8964,
                  "label": "김해시 장유동"
            }
      },
      {
            "code": "48250_dong_10",
            "name": "진영읍",
            "center": {
                  "lat": 35.2225,
                  "lng": 128.9034,
                  "label": "김해시 진영읍"
            }
      },
      {
            "code": "48250_dong_11",
            "name": "진례면",
            "center": {
                  "lat": 35.2285,
                  "lng": 128.9034,
                  "label": "김해시 진례면"
            }
      },
      {
            "code": "48250_dong_12",
            "name": "한림면",
            "center": {
                  "lat": 35.2345,
                  "lng": 128.9034,
                  "label": "김해시 한림면"
            }
      },
      {
            "code": "48250_dong_13",
            "name": "생림면",
            "center": {
                  "lat": 35.2225,
                  "lng": 128.9104,
                  "label": "김해시 생림면"
            }
      },
      {
            "code": "48250_dong_14",
            "name": "상동면",
            "center": {
                  "lat": 35.2285,
                  "lng": 128.9104,
                  "label": "김해시 상동면"
            }
      },
      {
            "code": "48250_dong_15",
            "name": "대동면",
            "center": {
                  "lat": 35.2345,
                  "lng": 128.9104,
                  "label": "김해시 대동면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "김해시",
  },
  {
    code: "48270",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "밀양시",
    fullName: "경상남도 밀양시",
    
    
    
    center: {"lat":35.5038,"lng":128.7466,"label":"밀양시 중심"},
    dongs: [
      {
            "code": "48270_dong_1",
            "name": "내일동",
            "center": {
                  "lat": 35.4978,
                  "lng": 128.7396,
                  "label": "밀양시 내일동"
            }
      },
      {
            "code": "48270_dong_2",
            "name": "내이동",
            "center": {
                  "lat": 35.5038,
                  "lng": 128.7396,
                  "label": "밀양시 내이동"
            }
      },
      {
            "code": "48270_dong_3",
            "name": "교동",
            "center": {
                  "lat": 35.5098,
                  "lng": 128.7396,
                  "label": "밀양시 교동"
            }
      },
      {
            "code": "48270_dong_4",
            "name": "삼문동",
            "center": {
                  "lat": 35.4978,
                  "lng": 128.7466,
                  "label": "밀양시 삼문동"
            }
      },
      {
            "code": "48270_dong_5",
            "name": "가곡동",
            "center": {
                  "lat": 35.5038,
                  "lng": 128.7466,
                  "label": "밀양시 가곡동"
            }
      },
      {
            "code": "48270_dong_6",
            "name": "삼랑진읍",
            "center": {
                  "lat": 35.5098,
                  "lng": 128.7466,
                  "label": "밀양시 삼랑진읍"
            }
      },
      {
            "code": "48270_dong_7",
            "name": "하남읍",
            "center": {
                  "lat": 35.4978,
                  "lng": 128.7536,
                  "label": "밀양시 하남읍"
            }
      },
      {
            "code": "48270_dong_8",
            "name": "부북면",
            "center": {
                  "lat": 35.5038,
                  "lng": 128.7536,
                  "label": "밀양시 부북면"
            }
      },
      {
            "code": "48270_dong_9",
            "name": "상동면",
            "center": {
                  "lat": 35.5098,
                  "lng": 128.7536,
                  "label": "밀양시 상동면"
            }
      },
      {
            "code": "48270_dong_10",
            "name": "산외면",
            "center": {
                  "lat": 35.4978,
                  "lng": 128.7606,
                  "label": "밀양시 산외면"
            }
      },
      {
            "code": "48270_dong_11",
            "name": "산내면",
            "center": {
                  "lat": 35.5038,
                  "lng": 128.7606,
                  "label": "밀양시 산내면"
            }
      },
      {
            "code": "48270_dong_12",
            "name": "단장면",
            "center": {
                  "lat": 35.5098,
                  "lng": 128.7606,
                  "label": "밀양시 단장면"
            }
      },
      {
            "code": "48270_dong_13",
            "name": "상남면",
            "center": {
                  "lat": 35.4978,
                  "lng": 128.7676,
                  "label": "밀양시 상남면"
            }
      },
      {
            "code": "48270_dong_14",
            "name": "초동면",
            "center": {
                  "lat": 35.5038,
                  "lng": 128.7676,
                  "label": "밀양시 초동면"
            }
      },
      {
            "code": "48270_dong_15",
            "name": "무안면",
            "center": {
                  "lat": 35.5098,
                  "lng": 128.7676,
                  "label": "밀양시 무안면"
            }
      },
      {
            "code": "48270_dong_16",
            "name": "청도면",
            "center": {
                  "lat": 35.4978,
                  "lng": 128.7746,
                  "label": "밀양시 청도면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "밀양시",
  },
  {
    code: "48310",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "거제시",
    fullName: "경상남도 거제시",
    
    
    
    center: {"lat":34.8806,"lng":128.6211,"label":"거제시(고현/옥포) 중심"},
    dongs: [
      {
            "code": "48310_dong_1",
            "name": "고현동",
            "center": {
                  "lat": 34.8746,
                  "lng": 128.6141,
                  "label": "거제시 고현동"
            }
      },
      {
            "code": "48310_dong_2",
            "name": "장평동",
            "center": {
                  "lat": 34.8806,
                  "lng": 128.6141,
                  "label": "거제시 장평동"
            }
      },
      {
            "code": "48310_dong_3",
            "name": "상문동",
            "center": {
                  "lat": 34.8866,
                  "lng": 128.6141,
                  "label": "거제시 상문동"
            }
      },
      {
            "code": "48310_dong_4",
            "name": "수양동",
            "center": {
                  "lat": 34.8746,
                  "lng": 128.6211,
                  "label": "거제시 수양동"
            }
      },
      {
            "code": "48310_dong_5",
            "name": "옥포동",
            "center": {
                  "lat": 34.8806,
                  "lng": 128.6211,
                  "label": "거제시 옥포동"
            }
      },
      {
            "code": "48310_dong_6",
            "name": "아주동",
            "center": {
                  "lat": 34.8866,
                  "lng": 128.6211,
                  "label": "거제시 아주동"
            }
      },
      {
            "code": "48310_dong_7",
            "name": "능포동",
            "center": {
                  "lat": 34.8746,
                  "lng": 128.6281,
                  "label": "거제시 능포동"
            }
      },
      {
            "code": "48310_dong_8",
            "name": "장승포동",
            "center": {
                  "lat": 34.8806,
                  "lng": 128.6281,
                  "label": "거제시 장승포동"
            }
      },
      {
            "code": "48310_dong_9",
            "name": "통영면",
            "center": {
                  "lat": 34.8866,
                  "lng": 128.6281,
                  "label": "거제시 통영면"
            }
      },
      {
            "code": "48310_dong_10",
            "name": "일운면",
            "center": {
                  "lat": 34.8746,
                  "lng": 128.6351,
                  "label": "거제시 일운면"
            }
      },
      {
            "code": "48310_dong_11",
            "name": "동부면",
            "center": {
                  "lat": 34.8806,
                  "lng": 128.6351,
                  "label": "거제시 동부면"
            }
      },
      {
            "code": "48310_dong_12",
            "name": "남부면",
            "center": {
                  "lat": 34.8866,
                  "lng": 128.6351,
                  "label": "거제시 남부면"
            }
      },
      {
            "code": "48310_dong_13",
            "name": "거제면",
            "center": {
                  "lat": 34.8746,
                  "lng": 128.6421,
                  "label": "거제시 거제면"
            }
      },
      {
            "code": "48310_dong_14",
            "name": "둔덕면",
            "center": {
                  "lat": 34.8806,
                  "lng": 128.6421,
                  "label": "거제시 둔덕면"
            }
      },
      {
            "code": "48310_dong_15",
            "name": "사등면",
            "center": {
                  "lat": 34.8866,
                  "lng": 128.6421,
                  "label": "거제시 사등면"
            }
      },
      {
            "code": "48310_dong_16",
            "name": "연초면",
            "center": {
                  "lat": 34.8746,
                  "lng": 128.6491,
                  "label": "거제시 연초면"
            }
      },
      {
            "code": "48310_dong_17",
            "name": "하청면",
            "center": {
                  "lat": 34.8806,
                  "lng": 128.6491,
                  "label": "거제시 하청면"
            }
      },
      {
            "code": "48310_dong_18",
            "name": "장목면",
            "center": {
                  "lat": 34.8866,
                  "lng": 128.6491,
                  "label": "거제시 장목면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "거제시",
  },
  {
    code: "48330",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "양산시",
    fullName: "경상남도 양산시",
    
    
    
    center: {"lat":35.335,"lng":129.0373,"label":"양산시(물금/증산) 중심"},
    dongs: [
      {
            "code": "48330_dong_1",
            "name": "물금읍",
            "center": {
                  "lat": 35.329,
                  "lng": 129.0303,
                  "label": "양산시 물금읍"
            }
      },
      {
            "code": "48330_dong_2",
            "name": "중앙동",
            "center": {
                  "lat": 35.335,
                  "lng": 129.0303,
                  "label": "양산시 중앙동"
            }
      },
      {
            "code": "48330_dong_3",
            "name": "양주동",
            "center": {
                  "lat": 35.341,
                  "lng": 129.0303,
                  "label": "양산시 양주동"
            }
      },
      {
            "code": "48330_dong_4",
            "name": "삼성동",
            "center": {
                  "lat": 35.329,
                  "lng": 129.0373,
                  "label": "양산시 삼성동"
            }
      },
      {
            "code": "48330_dong_5",
            "name": "강서동",
            "center": {
                  "lat": 35.335,
                  "lng": 129.0373,
                  "label": "양산시 강서동"
            }
      },
      {
            "code": "48330_dong_6",
            "name": "서창동",
            "center": {
                  "lat": 35.341,
                  "lng": 129.0373,
                  "label": "양산시 서창동"
            }
      },
      {
            "code": "48330_dong_7",
            "name": "소주동",
            "center": {
                  "lat": 35.329,
                  "lng": 129.0443,
                  "label": "양산시 소주동"
            }
      },
      {
            "code": "48330_dong_8",
            "name": "평산동",
            "center": {
                  "lat": 35.335,
                  "lng": 129.0443,
                  "label": "양산시 평산동"
            }
      },
      {
            "code": "48330_dong_9",
            "name": "덕계동",
            "center": {
                  "lat": 35.341,
                  "lng": 129.0443,
                  "label": "양산시 덕계동"
            }
      },
      {
            "code": "48330_dong_10",
            "name": "동면",
            "center": {
                  "lat": 35.329,
                  "lng": 129.0513,
                  "label": "양산시 동면"
            }
      },
      {
            "code": "48330_dong_11",
            "name": "원동면",
            "center": {
                  "lat": 35.335,
                  "lng": 129.0513,
                  "label": "양산시 원동면"
            }
      },
      {
            "code": "48330_dong_12",
            "name": "상북면",
            "center": {
                  "lat": 35.341,
                  "lng": 129.0513,
                  "label": "양산시 상북면"
            }
      },
      {
            "code": "48330_dong_13",
            "name": "하북면",
            "center": {
                  "lat": 35.329,
                  "lng": 129.0583,
                  "label": "양산시 하북면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "양산시",
  },
  {
    code: "48720",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "의령군",
    fullName: "경상남도 의령군",
    
    
    
    center: {"lat":35.3223,"lng":128.2618,"label":"의령군(소바/망개떡) 중심"},
    dongs: [
      {
            "code": "48720_dong_1",
            "name": "의령읍",
            "center": {
                  "lat": 35.3163,
                  "lng": 128.2548,
                  "label": "의령군 의령읍"
            }
      },
      {
            "code": "48720_dong_2",
            "name": "가례면",
            "center": {
                  "lat": 35.3223,
                  "lng": 128.2548,
                  "label": "의령군 가례면"
            }
      },
      {
            "code": "48720_dong_3",
            "name": "칠곡면",
            "center": {
                  "lat": 35.3283,
                  "lng": 128.2548,
                  "label": "의령군 칠곡면"
            }
      },
      {
            "code": "48720_dong_4",
            "name": "대의면",
            "center": {
                  "lat": 35.3163,
                  "lng": 128.2618,
                  "label": "의령군 대의면"
            }
      },
      {
            "code": "48720_dong_5",
            "name": "화정면",
            "center": {
                  "lat": 35.3223,
                  "lng": 128.2618,
                  "label": "의령군 화정면"
            }
      },
      {
            "code": "48720_dong_6",
            "name": "용덕면",
            "center": {
                  "lat": 35.3283,
                  "lng": 128.2618,
                  "label": "의령군 용덕면"
            }
      },
      {
            "code": "48720_dong_7",
            "name": "정곡면",
            "center": {
                  "lat": 35.3163,
                  "lng": 128.2688,
                  "label": "의령군 정곡면"
            }
      },
      {
            "code": "48720_dong_8",
            "name": "지정면",
            "center": {
                  "lat": 35.3223,
                  "lng": 128.2688,
                  "label": "의령군 지정면"
            }
      },
      {
            "code": "48720_dong_9",
            "name": "낙서면",
            "center": {
                  "lat": 35.3283,
                  "lng": 128.2688,
                  "label": "의령군 낙서면"
            }
      },
      {
            "code": "48720_dong_10",
            "name": "부림면",
            "center": {
                  "lat": 35.3163,
                  "lng": 128.2758,
                  "label": "의령군 부림면"
            }
      },
      {
            "code": "48720_dong_11",
            "name": "봉수면",
            "center": {
                  "lat": 35.3223,
                  "lng": 128.2758,
                  "label": "의령군 봉수면"
            }
      },
      {
            "code": "48720_dong_12",
            "name": "궁류면",
            "center": {
                  "lat": 35.3283,
                  "lng": 128.2758,
                  "label": "의령군 궁류면"
            }
      },
      {
            "code": "48720_dong_13",
            "name": "유곡면",
            "center": {
                  "lat": 35.3163,
                  "lng": 128.2828,
                  "label": "의령군 유곡면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "의령군",
  },
  {
    code: "48730",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "함안군",
    fullName: "경상남도 함안군",
    
    
    
    center: {"lat":35.2724,"lng":128.4065,"label":"함안군(가야/칠원) 중심"},
    dongs: [
      {
            "code": "48730_dong_1",
            "name": "가야읍",
            "center": {
                  "lat": 35.2664,
                  "lng": 128.3995,
                  "label": "함안군 가야읍"
            }
      },
      {
            "code": "48730_dong_2",
            "name": "칠원읍",
            "center": {
                  "lat": 35.2724,
                  "lng": 128.3995,
                  "label": "함안군 칠원읍"
            }
      },
      {
            "code": "48730_dong_3",
            "name": "함안면",
            "center": {
                  "lat": 35.2784,
                  "lng": 128.3995,
                  "label": "함안군 함안면"
            }
      },
      {
            "code": "48730_dong_4",
            "name": "군북면",
            "center": {
                  "lat": 35.2664,
                  "lng": 128.4065,
                  "label": "함안군 군북면"
            }
      },
      {
            "code": "48730_dong_5",
            "name": "법수면",
            "center": {
                  "lat": 35.2724,
                  "lng": 128.4065,
                  "label": "함안군 법수면"
            }
      },
      {
            "code": "48730_dong_6",
            "name": "대산면",
            "center": {
                  "lat": 35.2784,
                  "lng": 128.4065,
                  "label": "함안군 대산면"
            }
      },
      {
            "code": "48730_dong_7",
            "name": "칠서면",
            "center": {
                  "lat": 35.2664,
                  "lng": 128.4135,
                  "label": "함안군 칠서면"
            }
      },
      {
            "code": "48730_dong_8",
            "name": "칠북면",
            "center": {
                  "lat": 35.2724,
                  "lng": 128.4135,
                  "label": "함안군 칠북면"
            }
      },
      {
            "code": "48730_dong_9",
            "name": "산인면",
            "center": {
                  "lat": 35.2784,
                  "lng": 128.4135,
                  "label": "함안군 산인면"
            }
      },
      {
            "code": "48730_dong_10",
            "name": "여항면",
            "center": {
                  "lat": 35.2664,
                  "lng": 128.4205,
                  "label": "함안군 여항면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "함안군",
  },
  {
    code: "48740",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "창녕군",
    fullName: "경상남도 창녕군",
    
    
    
    center: {"lat":35.5412,"lng":128.4922,"label":"창녕군(우포늪/부곡) 중심"},
    dongs: [
      {
            "code": "48740_dong_1",
            "name": "창녕읍",
            "center": {
                  "lat": 35.5352,
                  "lng": 128.4852,
                  "label": "창녕군 창녕읍"
            }
      },
      {
            "code": "48740_dong_2",
            "name": "남지읍",
            "center": {
                  "lat": 35.5412,
                  "lng": 128.4852,
                  "label": "창녕군 남지읍"
            }
      },
      {
            "code": "48740_dong_3",
            "name": "고암면",
            "center": {
                  "lat": 35.5472,
                  "lng": 128.4852,
                  "label": "창녕군 고암면"
            }
      },
      {
            "code": "48740_dong_4",
            "name": "성산면",
            "center": {
                  "lat": 35.5352,
                  "lng": 128.4922,
                  "label": "창녕군 성산면"
            }
      },
      {
            "code": "48740_dong_5",
            "name": "대합면",
            "center": {
                  "lat": 35.5412,
                  "lng": 128.4922,
                  "label": "창녕군 대합면"
            }
      },
      {
            "code": "48740_dong_6",
            "name": "이방면",
            "center": {
                  "lat": 35.5472,
                  "lng": 128.4922,
                  "label": "창녕군 이방면"
            }
      },
      {
            "code": "48740_dong_7",
            "name": "유어면",
            "center": {
                  "lat": 35.5352,
                  "lng": 128.4992,
                  "label": "창녕군 유어면"
            }
      },
      {
            "code": "48740_dong_8",
            "name": "대지면",
            "center": {
                  "lat": 35.5412,
                  "lng": 128.4992,
                  "label": "창녕군 대지면"
            }
      },
      {
            "code": "48740_dong_9",
            "name": "계성면",
            "center": {
                  "lat": 35.5472,
                  "lng": 128.4992,
                  "label": "창녕군 계성면"
            }
      },
      {
            "code": "48740_dong_10",
            "name": "영산면",
            "center": {
                  "lat": 35.5352,
                  "lng": 128.5062,
                  "label": "창녕군 영산면"
            }
      },
      {
            "code": "48740_dong_11",
            "name": "장마면",
            "center": {
                  "lat": 35.5412,
                  "lng": 128.5062,
                  "label": "창녕군 장마면"
            }
      },
      {
            "code": "48740_dong_12",
            "name": "도천면",
            "center": {
                  "lat": 35.5472,
                  "lng": 128.5062,
                  "label": "창녕군 도천면"
            }
      },
      {
            "code": "48740_dong_13",
            "name": "길곡면",
            "center": {
                  "lat": 35.5352,
                  "lng": 128.5132,
                  "label": "창녕군 길곡면"
            }
      },
      {
            "code": "48740_dong_14",
            "name": "부곡면",
            "center": {
                  "lat": 35.5412,
                  "lng": 128.5132,
                  "label": "창녕군 부곡면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "창녕군",
  },
  {
    code: "48820",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "고성군",
    fullName: "경상남도 고성군",
    
    
    
    center: {"lat":34.9754,"lng":128.3225,"label":"경남 고성군(공룡엑스포) 중심"},
    dongs: [
      {
            "code": "48820_dong_1",
            "name": "고성읍",
            "center": {
                  "lat": 34.9694,
                  "lng": 128.3155,
                  "label": "고성군 고성읍"
            }
      },
      {
            "code": "48820_dong_2",
            "name": "삼산면",
            "center": {
                  "lat": 34.9754,
                  "lng": 128.3155,
                  "label": "고성군 삼산면"
            }
      },
      {
            "code": "48820_dong_3",
            "name": "하일면",
            "center": {
                  "lat": 34.9814,
                  "lng": 128.3155,
                  "label": "고성군 하일면"
            }
      },
      {
            "code": "48820_dong_4",
            "name": "하이면",
            "center": {
                  "lat": 34.9694,
                  "lng": 128.3225,
                  "label": "고성군 하이면"
            }
      },
      {
            "code": "48820_dong_5",
            "name": "상리면",
            "center": {
                  "lat": 34.9754,
                  "lng": 128.3225,
                  "label": "고성군 상리면"
            }
      },
      {
            "code": "48820_dong_6",
            "name": "대가면",
            "center": {
                  "lat": 34.9814,
                  "lng": 128.3225,
                  "label": "고성군 대가면"
            }
      },
      {
            "code": "48820_dong_7",
            "name": "영현면",
            "center": {
                  "lat": 34.9694,
                  "lng": 128.3295,
                  "label": "고성군 영현면"
            }
      },
      {
            "code": "48820_dong_8",
            "name": "영오면",
            "center": {
                  "lat": 34.9754,
                  "lng": 128.3295,
                  "label": "고성군 영오면"
            }
      },
      {
            "code": "48820_dong_9",
            "name": "개천면",
            "center": {
                  "lat": 34.9814,
                  "lng": 128.3295,
                  "label": "고성군 개천면"
            }
      },
      {
            "code": "48820_dong_10",
            "name": "구만면",
            "center": {
                  "lat": 34.9694,
                  "lng": 128.3365,
                  "label": "고성군 구만면"
            }
      },
      {
            "code": "48820_dong_11",
            "name": "회화면",
            "center": {
                  "lat": 34.9754,
                  "lng": 128.3365,
                  "label": "고성군 회화면"
            }
      },
      {
            "code": "48820_dong_12",
            "name": "마암면",
            "center": {
                  "lat": 34.9814,
                  "lng": 128.3365,
                  "label": "고성군 마암면"
            }
      },
      {
            "code": "48820_dong_13",
            "name": "동해면",
            "center": {
                  "lat": 34.9694,
                  "lng": 128.3435,
                  "label": "고성군 동해면"
            }
      },
      {
            "code": "48820_dong_14",
            "name": "거류면",
            "center": {
                  "lat": 34.9754,
                  "lng": 128.3435,
                  "label": "고성군 거류면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "고성군",
  },
  {
    code: "48840",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "남해군",
    fullName: "경상남도 남해군",
    
    
    
    center: {"lat":34.8378,"lng":127.8924,"label":"남해군(독일마을/다랭이마을) 중심"},
    dongs: [
      {
            "code": "48840_dong_1",
            "name": "남해읍",
            "center": {
                  "lat": 34.8318,
                  "lng": 127.8854,
                  "label": "남해군 남해읍"
            }
      },
      {
            "code": "48840_dong_2",
            "name": "이동면",
            "center": {
                  "lat": 34.8378,
                  "lng": 127.8854,
                  "label": "남해군 이동면"
            }
      },
      {
            "code": "48840_dong_3",
            "name": "상주면",
            "center": {
                  "lat": 34.8438,
                  "lng": 127.8854,
                  "label": "남해군 상주면"
            }
      },
      {
            "code": "48840_dong_4",
            "name": "삼동면",
            "center": {
                  "lat": 34.8318,
                  "lng": 127.8924,
                  "label": "남해군 삼동면"
            }
      },
      {
            "code": "48840_dong_5",
            "name": "미조면",
            "center": {
                  "lat": 34.8378,
                  "lng": 127.8924,
                  "label": "남해군 미조면"
            }
      },
      {
            "code": "48840_dong_6",
            "name": "남면",
            "center": {
                  "lat": 34.8438,
                  "lng": 127.8924,
                  "label": "남해군 남면"
            }
      },
      {
            "code": "48840_dong_7",
            "name": "서면",
            "center": {
                  "lat": 34.8318,
                  "lng": 127.8994,
                  "label": "남해군 서면"
            }
      },
      {
            "code": "48840_dong_8",
            "name": "고현면",
            "center": {
                  "lat": 34.8378,
                  "lng": 127.8994,
                  "label": "남해군 고현면"
            }
      },
      {
            "code": "48840_dong_9",
            "name": "설천면",
            "center": {
                  "lat": 34.8438,
                  "lng": 127.8994,
                  "label": "남해군 설천면"
            }
      },
      {
            "code": "48840_dong_10",
            "name": "창선면",
            "center": {
                  "lat": 34.8318,
                  "lng": 127.9064,
                  "label": "남해군 창선면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "남해군",
  },
  {
    code: "48850",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "하동군",
    fullName: "경상남도 하동군",
    
    
    
    center: {"lat":35.0672,"lng":127.7517,"label":"하동군(화개장터/최참판댁) 중심"},
    dongs: [
      {
            "code": "48850_dong_1",
            "name": "하동읍",
            "center": {
                  "lat": 35.0612,
                  "lng": 127.7447,
                  "label": "하동군 하동읍"
            }
      },
      {
            "code": "48850_dong_2",
            "name": "화개면",
            "center": {
                  "lat": 35.0672,
                  "lng": 127.7447,
                  "label": "하동군 화개면"
            }
      },
      {
            "code": "48850_dong_3",
            "name": "악양면",
            "center": {
                  "lat": 35.0732,
                  "lng": 127.7447,
                  "label": "하동군 악양면"
            }
      },
      {
            "code": "48850_dong_4",
            "name": "적량면",
            "center": {
                  "lat": 35.0612,
                  "lng": 127.7517,
                  "label": "하동군 적량면"
            }
      },
      {
            "code": "48850_dong_5",
            "name": "횡천면",
            "center": {
                  "lat": 35.0672,
                  "lng": 127.7517,
                  "label": "하동군 횡천면"
            }
      },
      {
            "code": "48850_dong_6",
            "name": "고전면",
            "center": {
                  "lat": 35.0732,
                  "lng": 127.7517,
                  "label": "하동군 고전면"
            }
      },
      {
            "code": "48850_dong_7",
            "name": "금남면",
            "center": {
                  "lat": 35.0612,
                  "lng": 127.7587,
                  "label": "하동군 금남면"
            }
      },
      {
            "code": "48850_dong_8",
            "name": "진교면",
            "center": {
                  "lat": 35.0672,
                  "lng": 127.7587,
                  "label": "하동군 진교면"
            }
      },
      {
            "code": "48850_dong_9",
            "name": "양보면",
            "center": {
                  "lat": 35.0732,
                  "lng": 127.7587,
                  "label": "하동군 양보면"
            }
      },
      {
            "code": "48850_dong_10",
            "name": "북천면",
            "center": {
                  "lat": 35.0612,
                  "lng": 127.7657,
                  "label": "하동군 북천면"
            }
      },
      {
            "code": "48850_dong_11",
            "name": "청암면",
            "center": {
                  "lat": 35.0672,
                  "lng": 127.7657,
                  "label": "하동군 청암면"
            }
      },
      {
            "code": "48850_dong_12",
            "name": "옥종면",
            "center": {
                  "lat": 35.0732,
                  "lng": 127.7657,
                  "label": "하동군 옥종면"
            }
      },
      {
            "code": "48850_dong_13",
            "name": "금성면",
            "center": {
                  "lat": 35.0612,
                  "lng": 127.7727,
                  "label": "하동군 금성면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "하동군",
  },
  {
    code: "48860",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "산청군",
    fullName: "경상남도 산청군",
    
    
    
    center: {"lat":35.4154,"lng":127.8735,"label":"산청군(동의보감촌) 중심"},
    dongs: [
      {
            "code": "48860_dong_1",
            "name": "산청읍",
            "center": {
                  "lat": 35.4094,
                  "lng": 127.8665,
                  "label": "산청군 산청읍"
            }
      },
      {
            "code": "48860_dong_2",
            "name": "차황면",
            "center": {
                  "lat": 35.4154,
                  "lng": 127.8665,
                  "label": "산청군 차황면"
            }
      },
      {
            "code": "48860_dong_3",
            "name": "오부면",
            "center": {
                  "lat": 35.4214,
                  "lng": 127.8665,
                  "label": "산청군 오부면"
            }
      },
      {
            "code": "48860_dong_4",
            "name": "생초면",
            "center": {
                  "lat": 35.4094,
                  "lng": 127.8735,
                  "label": "산청군 생초면"
            }
      },
      {
            "code": "48860_dong_5",
            "name": "금서면",
            "center": {
                  "lat": 35.4154,
                  "lng": 127.8735,
                  "label": "산청군 금서면"
            }
      },
      {
            "code": "48860_dong_6",
            "name": "삼장면",
            "center": {
                  "lat": 35.4214,
                  "lng": 127.8735,
                  "label": "산청군 삼장면"
            }
      },
      {
            "code": "48860_dong_7",
            "name": "시천면",
            "center": {
                  "lat": 35.4094,
                  "lng": 127.8805,
                  "label": "산청군 시천면"
            }
      },
      {
            "code": "48860_dong_8",
            "name": "단성면",
            "center": {
                  "lat": 35.4154,
                  "lng": 127.8805,
                  "label": "산청군 단성면"
            }
      },
      {
            "code": "48860_dong_9",
            "name": "신안면",
            "center": {
                  "lat": 35.4214,
                  "lng": 127.8805,
                  "label": "산청군 신안면"
            }
      },
      {
            "code": "48860_dong_10",
            "name": "생비량면",
            "center": {
                  "lat": 35.4094,
                  "lng": 127.8875,
                  "label": "산청군 생비량면"
            }
      },
      {
            "code": "48860_dong_11",
            "name": "신등면",
            "center": {
                  "lat": 35.4154,
                  "lng": 127.8875,
                  "label": "산청군 신등면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "산청군",
  },
  {
    code: "48870",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "함양군",
    fullName: "경상남도 함양군",
    
    
    
    center: {"lat":35.5205,"lng":127.7252,"label":"함양군(상림공원) 중심"},
    dongs: [
      {
            "code": "48870_dong_1",
            "name": "함양읍",
            "center": {
                  "lat": 35.5145,
                  "lng": 127.7182,
                  "label": "함양군 함양읍"
            }
      },
      {
            "code": "48870_dong_2",
            "name": "마천면",
            "center": {
                  "lat": 35.5205,
                  "lng": 127.7182,
                  "label": "함양군 마천면"
            }
      },
      {
            "code": "48870_dong_3",
            "name": "휴천면",
            "center": {
                  "lat": 35.5265,
                  "lng": 127.7182,
                  "label": "함양군 휴천면"
            }
      },
      {
            "code": "48870_dong_4",
            "name": "유림면",
            "center": {
                  "lat": 35.5145,
                  "lng": 127.7252,
                  "label": "함양군 유림면"
            }
      },
      {
            "code": "48870_dong_5",
            "name": "수동면",
            "center": {
                  "lat": 35.5205,
                  "lng": 127.7252,
                  "label": "함양군 수동면"
            }
      },
      {
            "code": "48870_dong_6",
            "name": "지곡면",
            "center": {
                  "lat": 35.5265,
                  "lng": 127.7252,
                  "label": "함양군 지곡면"
            }
      },
      {
            "code": "48870_dong_7",
            "name": "안의면",
            "center": {
                  "lat": 35.5145,
                  "lng": 127.7322,
                  "label": "함양군 안의면"
            }
      },
      {
            "code": "48870_dong_8",
            "name": "서하면",
            "center": {
                  "lat": 35.5205,
                  "lng": 127.7322,
                  "label": "함양군 서하면"
            }
      },
      {
            "code": "48870_dong_9",
            "name": "서상면",
            "center": {
                  "lat": 35.5265,
                  "lng": 127.7322,
                  "label": "함양군 서상면"
            }
      },
      {
            "code": "48870_dong_10",
            "name": "백전면",
            "center": {
                  "lat": 35.5145,
                  "lng": 127.7392,
                  "label": "함양군 백전면"
            }
      },
      {
            "code": "48870_dong_11",
            "name": "병곡면",
            "center": {
                  "lat": 35.5205,
                  "lng": 127.7392,
                  "label": "함양군 병곡면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "함양군",
  },
  {
    code: "48880",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "거창군",
    fullName: "경상남도 거창군",
    
    
    
    center: {"lat":35.6867,"lng":127.9095,"label":"거창군 중심"},
    dongs: [
      {
            "code": "48880_dong_1",
            "name": "거창읍",
            "center": {
                  "lat": 35.6807,
                  "lng": 127.9025,
                  "label": "거창군 거창읍"
            }
      },
      {
            "code": "48880_dong_2",
            "name": "주상면",
            "center": {
                  "lat": 35.6867,
                  "lng": 127.9025,
                  "label": "거창군 주상면"
            }
      },
      {
            "code": "48880_dong_3",
            "name": "웅양면",
            "center": {
                  "lat": 35.6927,
                  "lng": 127.9025,
                  "label": "거창군 웅양면"
            }
      },
      {
            "code": "48880_dong_4",
            "name": "고제면",
            "center": {
                  "lat": 35.6807,
                  "lng": 127.9095,
                  "label": "거창군 고제면"
            }
      },
      {
            "code": "48880_dong_5",
            "name": "북상면",
            "center": {
                  "lat": 35.6867,
                  "lng": 127.9095,
                  "label": "거창군 북상면"
            }
      },
      {
            "code": "48880_dong_6",
            "name": "위천면",
            "center": {
                  "lat": 35.6927,
                  "lng": 127.9095,
                  "label": "거창군 위천면"
            }
      },
      {
            "code": "48880_dong_7",
            "name": "마리면",
            "center": {
                  "lat": 35.6807,
                  "lng": 127.9165,
                  "label": "거창군 마리면"
            }
      },
      {
            "code": "48880_dong_8",
            "name": "남상면",
            "center": {
                  "lat": 35.6867,
                  "lng": 127.9165,
                  "label": "거창군 남상면"
            }
      },
      {
            "code": "48880_dong_9",
            "name": "남하면",
            "center": {
                  "lat": 35.6927,
                  "lng": 127.9165,
                  "label": "거창군 남하면"
            }
      },
      {
            "code": "48880_dong_10",
            "name": "신원면",
            "center": {
                  "lat": 35.6807,
                  "lng": 127.9235,
                  "label": "거창군 신원면"
            }
      },
      {
            "code": "48880_dong_11",
            "name": "가조면",
            "center": {
                  "lat": 35.6867,
                  "lng": 127.9235,
                  "label": "거창군 가조면"
            }
      },
      {
            "code": "48880_dong_12",
            "name": "가북면",
            "center": {
                  "lat": 35.6927,
                  "lng": 127.9235,
                  "label": "거창군 가북면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "거창군",
  },
  {
    code: "48890",
    sidoCode: "48",
    sidoName: "경상남도",
    name: "합천군",
    fullName: "경상남도 합천군",
    
    
    
    center: {"lat":35.5667,"lng":128.1658,"label":"합천군(해인사/영상테마파크) 중심"},
    dongs: [
      {
            "code": "48890_dong_1",
            "name": "합천읍",
            "center": {
                  "lat": 35.5607,
                  "lng": 128.1588,
                  "label": "합천군 합천읍"
            }
      },
      {
            "code": "48890_dong_2",
            "name": "봉산면",
            "center": {
                  "lat": 35.5667,
                  "lng": 128.1588,
                  "label": "합천군 봉산면"
            }
      },
      {
            "code": "48890_dong_3",
            "name": "묘산면",
            "center": {
                  "lat": 35.5727,
                  "lng": 128.1588,
                  "label": "합천군 묘산면"
            }
      },
      {
            "code": "48890_dong_4",
            "name": "가야면",
            "center": {
                  "lat": 35.5607,
                  "lng": 128.1658,
                  "label": "합천군 가야면"
            }
      },
      {
            "code": "48890_dong_5",
            "name": "야로면",
            "center": {
                  "lat": 35.5667,
                  "lng": 128.1658,
                  "label": "합천군 야로면"
            }
      },
      {
            "code": "48890_dong_6",
            "name": "율곡면",
            "center": {
                  "lat": 35.5727,
                  "lng": 128.1658,
                  "label": "합천군 율곡면"
            }
      },
      {
            "code": "48890_dong_7",
            "name": "초계면",
            "center": {
                  "lat": 35.5607,
                  "lng": 128.1728,
                  "label": "합천군 초계면"
            }
      },
      {
            "code": "48890_dong_8",
            "name": "쌍책면",
            "center": {
                  "lat": 35.5667,
                  "lng": 128.1728,
                  "label": "합천군 쌍책면"
            }
      },
      {
            "code": "48890_dong_9",
            "name": "덕곡면",
            "center": {
                  "lat": 35.5727,
                  "lng": 128.1728,
                  "label": "합천군 덕곡면"
            }
      },
      {
            "code": "48890_dong_10",
            "name": "청덕면",
            "center": {
                  "lat": 35.5607,
                  "lng": 128.1798,
                  "label": "합천군 청덕면"
            }
      },
      {
            "code": "48890_dong_11",
            "name": "적중면",
            "center": {
                  "lat": 35.5667,
                  "lng": 128.1798,
                  "label": "합천군 적중면"
            }
      },
      {
            "code": "48890_dong_12",
            "name": "대양면",
            "center": {
                  "lat": 35.5727,
                  "lng": 128.1798,
                  "label": "합천군 대양면"
            }
      },
      {
            "code": "48890_dong_13",
            "name": "쌍백면",
            "center": {
                  "lat": 35.5607,
                  "lng": 128.1868,
                  "label": "합천군 쌍백면"
            }
      },
      {
            "code": "48890_dong_14",
            "name": "삼가면",
            "center": {
                  "lat": 35.5667,
                  "lng": 128.1868,
                  "label": "합천군 삼가면"
            }
      },
      {
            "code": "48890_dong_15",
            "name": "가회면",
            "center": {
                  "lat": 35.5727,
                  "lng": 128.1868,
                  "label": "합천군 가회면"
            }
      },
      {
            "code": "48890_dong_16",
            "name": "대병면",
            "center": {
                  "lat": 35.5607,
                  "lng": 128.1938,
                  "label": "합천군 대병면"
            }
      },
      {
            "code": "48890_dong_17",
            "name": "용주면",
            "center": {
                  "lat": 35.5667,
                  "lng": 128.1938,
                  "label": "합천군 용주면"
            }
      }
],
    isActive: true,
    city: "경상남도",
    gu: "합천군",
  },
  {
    code: "50110",
    sidoCode: "50",
    sidoName: "제주특별자치도",
    name: "제주시",
    fullName: "제주특별자치도 제주시",
    legacyCode: "jeju_city",
    
    
    center: {"lat":33.4996,"lng":126.5312,"label":"제주시(연동/노형동/공항) 중심"},
    dongs: [
      {
            "code": "50110_dong_1",
            "name": "연동",
            "center": {
                  "lat": 33.4936,
                  "lng": 126.5242,
                  "label": "제주시 연동"
            }
      },
      {
            "code": "50110_dong_2",
            "name": "노형동",
            "center": {
                  "lat": 33.4996,
                  "lng": 126.5242,
                  "label": "제주시 노형동"
            }
      },
      {
            "code": "50110_dong_3",
            "name": "이도동",
            "center": {
                  "lat": 33.5056,
                  "lng": 126.5242,
                  "label": "제주시 이도동"
            }
      },
      {
            "code": "50110_dong_4",
            "name": "일도동",
            "center": {
                  "lat": 33.4936,
                  "lng": 126.5312,
                  "label": "제주시 일도동"
            }
      },
      {
            "code": "50110_dong_5",
            "name": "삼도동",
            "center": {
                  "lat": 33.4996,
                  "lng": 126.5312,
                  "label": "제주시 삼도동"
            }
      },
      {
            "code": "50110_dong_6",
            "name": "용담동",
            "center": {
                  "lat": 33.5056,
                  "lng": 126.5312,
                  "label": "제주시 용담동"
            }
      },
      {
            "code": "50110_dong_7",
            "name": "아라동",
            "center": {
                  "lat": 33.4936,
                  "lng": 126.5382,
                  "label": "제주시 아라동"
            }
      },
      {
            "code": "50110_dong_8",
            "name": "오라동",
            "center": {
                  "lat": 33.4996,
                  "lng": 126.5382,
                  "label": "제주시 오라동"
            }
      },
      {
            "code": "50110_dong_9",
            "name": "화북동",
            "center": {
                  "lat": 33.5056,
                  "lng": 126.5382,
                  "label": "제주시 화북동"
            }
      },
      {
            "code": "50110_dong_10",
            "name": "삼양동",
            "center": {
                  "lat": 33.4936,
                  "lng": 126.5452,
                  "label": "제주시 삼양동"
            }
      },
      {
            "code": "50110_dong_11",
            "name": "봉개동",
            "center": {
                  "lat": 33.4996,
                  "lng": 126.5452,
                  "label": "제주시 봉개동"
            }
      },
      {
            "code": "50110_dong_12",
            "name": "외도동",
            "center": {
                  "lat": 33.5056,
                  "lng": 126.5452,
                  "label": "제주시 외도동"
            }
      },
      {
            "code": "50110_dong_13",
            "name": "애월읍",
            "center": {
                  "lat": 33.4936,
                  "lng": 126.5522,
                  "label": "제주시 애월읍"
            }
      },
      {
            "code": "50110_dong_14",
            "name": "조천읍",
            "center": {
                  "lat": 33.4996,
                  "lng": 126.5522,
                  "label": "제주시 조천읍"
            }
      },
      {
            "code": "50110_dong_15",
            "name": "구좌읍",
            "center": {
                  "lat": 33.5056,
                  "lng": 126.5522,
                  "label": "제주시 구좌읍"
            }
      },
      {
            "code": "50110_dong_16",
            "name": "한림읍",
            "center": {
                  "lat": 33.4936,
                  "lng": 126.5592,
                  "label": "제주시 한림읍"
            }
      },
      {
            "code": "50110_dong_17",
            "name": "한경면",
            "center": {
                  "lat": 33.4996,
                  "lng": 126.5592,
                  "label": "제주시 한경면"
            }
      },
      {
            "code": "50110_dong_18",
            "name": "우도면",
            "center": {
                  "lat": 33.5056,
                  "lng": 126.5592,
                  "label": "제주시 우도면"
            }
      },
      {
            "code": "50110_dong_19",
            "name": "추자면",
            "center": {
                  "lat": 33.4936,
                  "lng": 126.5662,
                  "label": "제주시 추자면"
            }
      }
],
    isActive: true,
    city: "제주특별자치도",
    gu: "제주시",
  },
  {
    code: "50130",
    sidoCode: "50",
    sidoName: "제주특별자치도",
    name: "서귀포시",
    fullName: "제주특별자치도 서귀포시",
    legacyCode: "jeju_seogwipo",
    
    
    center: {"lat":33.2541,"lng":126.5601,"label":"서귀포시(중문/올레시장) 중심"},
    dongs: [
      {
            "code": "50130_dong_1",
            "name": "서귀동",
            "center": {
                  "lat": 33.2481,
                  "lng": 126.5531,
                  "label": "서귀포시 서귀동"
            }
      },
      {
            "code": "50130_dong_2",
            "name": "동홍동",
            "center": {
                  "lat": 33.2541,
                  "lng": 126.5531,
                  "label": "서귀포시 동홍동"
            }
      },
      {
            "code": "50130_dong_3",
            "name": "서홍동",
            "center": {
                  "lat": 33.2601,
                  "lng": 126.5531,
                  "label": "서귀포시 서홍동"
            }
      },
      {
            "code": "50130_dong_4",
            "name": "중문동",
            "center": {
                  "lat": 33.2481,
                  "lng": 126.5601,
                  "label": "서귀포시 중문동"
            }
      },
      {
            "code": "50130_dong_5",
            "name": "대륜동",
            "center": {
                  "lat": 33.2541,
                  "lng": 126.5601,
                  "label": "서귀포시 대륜동"
            }
      },
      {
            "code": "50130_dong_6",
            "name": "대천동",
            "center": {
                  "lat": 33.2601,
                  "lng": 126.5601,
                  "label": "서귀포시 대천동"
            }
      },
      {
            "code": "50130_dong_7",
            "name": "송산동",
            "center": {
                  "lat": 33.2481,
                  "lng": 126.5671,
                  "label": "서귀포시 송산동"
            }
      },
      {
            "code": "50130_dong_8",
            "name": "정방동",
            "center": {
                  "lat": 33.2541,
                  "lng": 126.5671,
                  "label": "서귀포시 정방동"
            }
      },
      {
            "code": "50130_dong_9",
            "name": "중앙동",
            "center": {
                  "lat": 33.2601,
                  "lng": 126.5671,
                  "label": "서귀포시 중앙동"
            }
      },
      {
            "code": "50130_dong_10",
            "name": "천지동",
            "center": {
                  "lat": 33.2481,
                  "lng": 126.5741,
                  "label": "서귀포시 천지동"
            }
      },
      {
            "code": "50130_dong_11",
            "name": "효돈동",
            "center": {
                  "lat": 33.2541,
                  "lng": 126.5741,
                  "label": "서귀포시 효돈동"
            }
      },
      {
            "code": "50130_dong_12",
            "name": "영천동",
            "center": {
                  "lat": 33.2601,
                  "lng": 126.5741,
                  "label": "서귀포시 영천동"
            }
      },
      {
            "code": "50130_dong_13",
            "name": "예래동",
            "center": {
                  "lat": 33.2481,
                  "lng": 126.5811,
                  "label": "서귀포시 예래동"
            }
      },
      {
            "code": "50130_dong_14",
            "name": "대정읍",
            "center": {
                  "lat": 33.2541,
                  "lng": 126.5811,
                  "label": "서귀포시 대정읍"
            }
      },
      {
            "code": "50130_dong_15",
            "name": "남원읍",
            "center": {
                  "lat": 33.2601,
                  "lng": 126.5811,
                  "label": "서귀포시 남원읍"
            }
      },
      {
            "code": "50130_dong_16",
            "name": "성산읍",
            "center": {
                  "lat": 33.2481,
                  "lng": 126.5881,
                  "label": "서귀포시 성산읍"
            }
      },
      {
            "code": "50130_dong_17",
            "name": "안덕면",
            "center": {
                  "lat": 33.2541,
                  "lng": 126.5881,
                  "label": "서귀포시 안덕면"
            }
      },
      {
            "code": "50130_dong_18",
            "name": "표선면",
            "center": {
                  "lat": 33.2601,
                  "lng": 126.5881,
                  "label": "서귀포시 표선면"
            }
      }
],
    isActive: true,
    city: "제주특별자치도",
    gu: "서귀포시",
  },
];

/**
 * 하위 호환성용 NATIONWIDE_DISTRICTS (기존 TARGET_DISTRICTS 호환)
 */
export const NATIONWIDE_DISTRICTS: DistrictOption[] = KOREAN_SIGUNGU_LIST;

/**
 * 17개 시/도 이름 목록
 */
export const NATIONWIDE_CITIES = KOREAN_SIDO_LIST.map((s) => s.name);

/**
 * 인기 핫플레이스 바로가기 목록
 */
export const POPULAR_HOTSPOTS = [
  { label: "서울 마포", code: "11440", legacyCode: "mapo" },
  { label: "서울 강남", code: "11680", legacyCode: "seoul_gangnam" },
  { label: "서울 성수", code: "11200", legacyCode: "seoul_seongdong" },
  { label: "부산 해운대", code: "26350", legacyCode: "busan_haeundae" },
  { label: "부산 서면", code: "26230", legacyCode: "busan_jin" },
  { label: "대구 동성로", code: "27110", legacyCode: "daegu_jung" },
  { label: "인천 송도", code: "28185", legacyCode: "incheon_yeonsu" },
  { label: "경기 수원", code: "41115", legacyCode: "gyeonggi_suwon_paldal" },
  { label: "강원 강릉", code: "42150", legacyCode: "gangwon_gangneung" },
  { label: "전북 전주", code: "45111", legacyCode: "jeonbuk_jeonju_wansan" },
  { label: "제주", code: "50110", legacyCode: "jeju_city" },
];

/**
 * 코드 및 시도별 빠른 조회를 위한 Map & Helper 함수
 */
export const SIGUNGU_BY_CODE = new Map<string, SigunguOption>();
export const SIGUNGU_BY_SIDO = new Map<string, SigunguOption[]>();

for (const item of KOREAN_SIGUNGU_LIST) {
  SIGUNGU_BY_CODE.set(item.code, item);
  if (item.legacyCode) {
    SIGUNGU_BY_CODE.set(item.legacyCode, item);
  }

  const list = SIGUNGU_BY_SIDO.get(item.sidoCode) || [];
  list.push(item);
  SIGUNGU_BY_SIDO.set(item.sidoCode, list);
}

/**
 * 코드(5자리 또는 레거시 영문코드)로 시군구 조회
 */
export function findDistrictByCode(code: string): SigunguOption | undefined {
  if (!code) return undefined;
  return SIGUNGU_BY_CODE.get(code) || KOREAN_SIGUNGU_LIST.find((d) => d.code === code || d.legacyCode === code);
}

/**
 * 지역명 키워드로 시군구 목록 검색 (예: "해운대", "분당", "전주", "강남")
 */
export function findDistrictsByQuery(query: string): SigunguOption[] {
  const q = query.trim().toLowerCase();
  if (!q) return KOREAN_SIGUNGU_LIST;
  return KOREAN_SIGUNGU_LIST.filter(
    (item) =>
      item.fullName.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.sidoName.toLowerCase().includes(q) ||
      (item.parentCity && item.parentCity.toLowerCase().includes(q)) ||
      item.dongs.some((d) => d.name.toLowerCase().includes(q))
  );
}
