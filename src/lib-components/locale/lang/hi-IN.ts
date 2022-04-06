export default {
  name: 'नाम',
  tel: 'फ़ोन',
  save: 'सहेजें',
  confirm: 'पुष्टि करना',
  cancel: 'रद्द करें',
  delete: 'हटाएं',
  loading: 'लोड हो रहा है...',
  noCoupon: 'कोई कूपन नहीं',
  nameEmpty: 'कृपया नाम भरें',
  addContact: 'संपर्क जोड़ें',
  telInvalid: 'विकृत फ़ोन नंबर',
  vanCalendar: {
    end: 'समाप्त',
    start: 'शुरू',
    title: 'पंचांग',
    weekdays: [
      'रविवार',
      'सोमवार',
      'मंगलवार',
      'बुधवार',
      'गुरूवार',
      'शुक्रवार',
      'शनिवार',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `${maxRange} दिन से अधिक नहीं चुनें`,
  },
  vanCascader: {
    select: 'चुनते हैं',
  },
  vanPagination: {
    prev: 'पहले का',
    next: 'अगला',
  },
  vanPullRefresh: {
    pulling: 'रीफ़्रेश करने के लिए खींचें...',
    loosing: 'ताज़ा करने के लिए ढीला...',
  },
  vanSubmitBar: {
    label: 'कुल:',
  },
  vanCoupon: {
    unlimited: 'असीमित',
    discount: (discount: number) => `${discount * 10}% छूट`,
    condition: (condition: number) => `कम से कम ${condition}`,
  },
  vanCouponCell: {
    title: 'कूपन',
    count: (count: number) => `आपके पास ${count} कूपन हैं`,
  },
  vanCouponList: {
    exchange: 'अदला बदली',
    close: 'बंद करे',
    enable: 'उपलब्ध',
    disabled: 'अनुपलब्ध',
    placeholder: 'कूपन कोड',
  },
  vanAddressEdit: {
    area: 'क्षेत्र',
    areaEmpty: 'कृपया एक क्षेत्र चुनें',
    addressEmpty: 'पता खाली नहीं हो सकता',
    addressDetail: 'पता',
    defaultAddress: 'डिफ़ॉल्ट पते के रूप में सेट करें',
  },
  vanAddressList: {
    add: 'नया पता जोड़ें',
  },
};
