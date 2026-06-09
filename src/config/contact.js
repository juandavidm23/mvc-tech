// Reemplaza con el número real de WhatsApp (sin + ni espacios, incluir código de país)
// Ejemplo Colombia: 573001234567
export const WHATSAPP_NUMBER = '573XXXXXXXXX';

const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, vi el sitio de MVC Tech y quiero más información sobre sus servicios.'
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const EMAIL = 'hola@mvctech.co';

export const INSTAGRAM = '@mvctech.co';
export const LOCATION = 'Popayán, Colombia';
