// Testimonials shown on the landing page. Only real people, with their permission.
// A section stays hidden until it has at least one entry, so an empty list is safe.
//
// Teacher: { name: 'Ajeet Sir', role: 'CA Faculty', youtube: 'link', vertical: true,
//            line: 'their own words; these take turns beside the videos',
//            quote: 'optional, shows under the video',
//            featured: true (also shows the quote below the hero) }
// Student video: { name: 'Riya Sharma', youtube: 'link', vertical: true }
// Student note, no city: { name: 'Riya', role: 'Class 11', quote: 'Their own words.' }
window.PARTHU_PROOF = {
  teachers: [
    { name: 'Deepesh Sir', youtube: 'https://youtube.com/shorts/AkhEP6Lhc6w', vertical: true,
      line: 'मेरे लिए काम आसान हो गया और बच्चों के लिए सीखना आसान।' },
    { name: 'Ajeet Sir', youtube: 'https://youtube.com/shorts/JSAGmvCLc_s', vertical: true,
      line: 'PARTHU AI की हेल्प से अब मैं रेगुलर टेस्ट ले पाता हूँ।' },
    { name: 'Lokendra Sir', youtube: 'https://youtube.com/shorts/bo_gGXGRvXc', vertical: true,
      line: 'हम कॉपी को स्कैन करते हैं, चेक करते हैं और पेरेंट को WhatsApp पर सेंड कर सकते हैं।' }
  ],
  students: [
    { name: 'Tisha Jindal', youtube: 'https://youtube.com/shorts/IpVRZ0-MDNA', vertical: true },
    { name: 'Madhav Agarwal', youtube: 'https://youtube.com/shorts/uUaDxppr2e8', vertical: true },
    { name: 'Gunvansh Shivnani', youtube: 'https://youtube.com/shorts/jLtrPoopirA', vertical: true },
    { name: 'Purvi Devnani', quote: 'एग्जाम से पहले मैं उन्हें ही रिवाइज करती हूँ जहाँ मेरी मिस्टेक्स हुई होती है। अब मेरा रिवीजन काफी ज्यादा फोकस्ड हो गया है।' },
    { name: 'Rida Wasik', quote: 'पहले मेरे आंसर्स बहुत इनकंप्लीट और लॉन्ग होते थे। पर अब मुझे समझ आ रहा है कि मुझे कितना और कैसे लिखना है।' },
    { name: 'Jatin Garg', quote: 'जब आप हर वीक खुद को टेस्ट करते हो तो एग्जाम भी बस आपको एक छोटा टेस्ट जैसा ही लगता है।' }
  ]
};
