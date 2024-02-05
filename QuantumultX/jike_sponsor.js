const originBody = JSON.parse($response.body);

const newBody = {
  ...originBody,
  user: {
    ...originBody.user,
    isBanned: false,
    bio: originBody.user.bio + ' ;)',
    briefIntro: originBody.user.bio + ' ;)',
    isSponsor: false,
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
  sponsorExpiresAt: new Date('2026-01-06').toISOString(),
  isVerified: true,
  isBetaUser: true,
  showRespect: true,
};

$done({ body: JSON.stringify(originBody) });
