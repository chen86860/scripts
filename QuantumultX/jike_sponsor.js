const originBody = $response.body;

console.log('🚀 ~ response:', JSON.stringify($response));
console.log('🚀 ~ response:', String($response));
console.log('🚀 ~ originBody:', JSON.stringify(originBody));

// const newBody = {
//   ...originBody,
//   user: {
//     ...originBody.user,
//     isBanned: false,
//     bio: '你为什么不问问神奇海螺呢？（滑稽）',
//     briefIntro: '你为什么不问问神奇海螺呢？（滑稽）',
//     isSponsor: false,
//     sponsorIcon: {
//       type: 'COLORFUL',
//       picture: {
//         picUrl: 'https://cdnv2.ruguoapp.com/resources/userProfile/COLORFUL_SPONSOR_ICON_KEY.png',
//       },
//     },
//     decorations: {
//       sponsor: {
//         picUrl: 'https://cdnv2.ruguoapp.com/resources/userProfile/COLORFUL_STROKED_SPONSOR_ICON_LIGHT.png',
//         themes: {
//           dark: {
//             picUrl: 'https://cdnv2.ruguoapp.com/resources/userProfile/COLORFUL_STROKED_SPONSOR_ICON_DARK.png',
//           },
//         },
//       },
//     },
//   },
//   preferences: {
//     ...originBody.preferences,
//     debugLogOn: false,
//     enablePictureWatermark: false,
//   },
//   sponsorExpiresAt: new Date('2026-01-06').toISOString(),
//   isVerified: true,
//   isBetaUser: true,
//   showRespect: true,
// };

$done({ body: originBody });
