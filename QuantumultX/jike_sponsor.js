const originBody = JSON.parse($response.body);

const newBody = {
  ...originBody,
  user: {
    ...originBody.user,
    isBanned: false,
    bio: originBody.user.bio + ' ;)',
    briefIntro: originBody.user.bio + ' ;)',
    isSponsor: true,
    sponsorExpiresAt: new Date('2026-12-25').toISOString(),
    sponsorIcon: {
      type: 'COLORFUL',
      picture: {
        picUrl: 'https://cdnv2.ruguoapp.com/resources/userProfile/COLORFUL_SPONSOR_ICON_KEY.png',
      },
    },
    decorations: {
      sponsor: {
        picUrl: 'https://cdnv2.ruguoapp.com/resources/userProfile/COLORFUL_STROKED_SPONSOR_ICON_LIGHT.png',
        themes: {
          dark: {
            picUrl: 'https://cdnv2.ruguoapp.com/resources/userProfile/COLORFUL_STROKED_SPONSOR_ICON_DARK.png',
          },
        },
      },
    },
  },
  preferences: {
    ...originBody.preferences,
    debugLogOn: false,
    enablePictureWatermark: false,
  },

  isVerified: true,
  isBetaUser: false,
  showRespect: true,
};

$done({
  body: JSON.stringify(newBody),
});
