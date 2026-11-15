/**
 * Photography registry. All images are free-to-use photos from Unsplash
 * (Unsplash License: commercial use allowed, no attribution required — credits
 * kept here as a courtesy). Served directly from Unsplash's image CDN via
 * <Photo>, which requests the exact width/format each device needs.
 *
 * To swap in your own photography: put the file in /public/images and set
 * `src` to its path (e.g. "/images/office.jpg"). <Photo> handles both.
 */
export type PhotoAsset = {
  src: string;
  alt: string;
  /** Intrinsic aspect, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
  /** CSS object-position for art-directed crops. */
  position?: string;
  credit: string;
};

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  accra: {
    src: u("1718766304636-cb9309953a55"),
    alt: "Accra's skyline rising above rooftops on a clear day",
    width: 1600,
    height: 2133,
    position: "50% 70%",
    credit: "Barnabas Lartey-Odoi Tetteh",
  },
  accraStreet: {
    src: u("1669418989936-fae7f3cebd56"),
    alt: "A busy commercial street in Accra, full of traffic and traders",
    width: 2000,
    height: 1333,
    credit: "Kofi Bhavnani",
  },
  teamMeeting: {
    src: u("1573164574397-dd250bc8a598"),
    alt: "Three professionals in discussion around a meeting table with laptops",
    width: 2000,
    height: 1333,
    credit: "Christina @ wocintechchat.com",
  },
  boardroom: {
    src: u("1573164574572-cb89e39749b4"),
    alt: "A full boardroom of colleagues working on laptops during a meeting",
    width: 2000,
    height: 1333,
    credit: "Christina @ wocintechchat.com",
  },
  collaboration: {
    src: u("1655720357872-ce227e4164ba"),
    alt: "Three colleagues reviewing work together on a laptop in a bright studio",
    width: 2000,
    height: 1333,
    credit: "Iwaria Inc.",
  },
  doctorPhone: {
    src: u("1576091160399-112ba8d25d1d"),
    alt: "A doctor in a white coat with a stethoscope using a smartphone",
    width: 2000,
    height: 1333,
    position: "50% 40%",
    credit: "National Cancer Institute",
  },
  mobileUser: {
    src: u("1622556498246-755f44ca76f3"),
    alt: "A young man smiling as he uses his smartphone",
    width: 1600,
    height: 2000,
    position: "50% 30%",
    credit: "Emmanuel Ikwuegbu",
  },
  financeLaptop: {
    src: u("1604933762021-54a5858c9832"),
    alt: "A professional focused on work at her laptop by a window",
    width: 2000,
    height: 1333,
    credit: "Daniel Thomas",
  },
  smilingLaptop: {
    src: u("1615891081220-9116de3e1afd"),
    alt: "A smiling professional working on a laptop in a modern office",
    width: 1600,
    height: 2400,
    position: "50% 35%",
    credit: "Joyce Busola",
  },
  laptopPortrait: {
    src: u("1573495612522-d994e72e5f56"),
    alt: "A professional seated with a laptop in a calm, plant-filled office",
    width: 1600,
    height: 2400,
    position: "50% 30%",
    credit: "Christina @ wocintechchat.com",
  },
  phoneDesk: {
    src: u("1758876202167-f81c995c3fdc"),
    alt: "A professional on a phone call at her desk, gesturing as she talks",
    width: 2000,
    height: 1125,
    credit: "Vitaly Gariev",
  },
} satisfies Record<string, PhotoAsset>;

export type PhotoKey = keyof typeof photos;
