const originBody = JSON.parse($response.body);

const sponsorExpiresDate = new Date('2026-12-25');

if ($request.url.indexOf('/sponsor/getStatus') !== -1) {
  const oneDay = 1000 * 60 * 60 * 24; // 一天的毫秒数
  const date1 = sponsorExpiresDate;
  const date2 = new Date(); // 当前日期
  const diffTime = Math.abs(date1 - date2); // 时间差的毫秒数
  const diffDays = Math.ceil(diffTime / oneDay); // 时间差的天数

  const newSponsorStatus = {
    ...originBody,
    data: {
      ...originBody.data,
      user: {
        ...originBody.data.user,
        isSponsor: true,
        sponsorExpiresAt: sponsorExpiresDate.toISOString(),
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
      sponsorStatus: {
        ...originBody.data.sponsorStatus,
        isActive: true,
        paymentType: 'AIRDROP',
        status: '即刻续费',
        productId: 'com.ruguoapp.jike.once1month',
        platform: 'ios',
        sponsorId: 26945,
        days: diffDays,
        sponsorExpiresAt: sponsorExpiresDate.toISOString(),
      },
    },
  };

  $done({
    body: JSON.stringify(newSponsorStatus),
  });
} else {
  const newBody = {
    ...originBody,
    user: {
      ...originBody.user,
      isBanned: false,
      bio: originBody.user && originBody.user.bio ? originBody.user.bio + ' ;)' : '',
      briefIntro: originBody.user && originBody.user.briefIntro ? originBody.user.briefIntro + ' ;)' : '',
      isSponsor: true,
      sponsorExpiresAt: sponsorExpiresDate.toISOString(),
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
    sponsorExpiresAt: sponsorExpiresDate.toISOString(),
    isVerified: true,
    isBetaUser: false,
    showRespect: true,
  };

  $done({
    body: JSON.stringify(newBody),
  });
}
