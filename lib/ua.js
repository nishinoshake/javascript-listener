const ua = navigator.userAgent.toLowerCase()

export const isMobile = !!(ua.indexOf('iphone') !== -1 || ua.indexOf('android') !== -1)

export const isMicrosoft = !!(ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1 || ua.indexOf('edge') !== -1)
