import { Injectable, signal } from '@angular/core';

export type Language = 'cz' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>('cz');

  private translations: Record<Language, Record<string, any>> = {
    cz: {
      title: 'Terka & Filip',
      date: '15. srpen 2026',
      nav: {
        program: 'Program',
        ubytovani: 'Ubytování',
        doprava: 'Doprava',
        map: 'Mapa',
        dresscode: 'Dresscode & Jídlo',
        dary: 'Dary & Pomoc'
      },
      back: '← Zpět',
      program_page: {
        title: 'Program',
        items: [
          {time: '12:00', event: 'Příjezd hostů'},
          {time: '13:00', event: 'Obřad ve Skanzenu'},
          {time: '14:00', event: 'Polévka a občerstvení'},
          {time: '', event: 'Ubytování'},
          {time: '17:00–19:00', event: 'Grilování a dort'},
          {time: 'Po 19:00', event: 'Volná zábava, tanec'}
        ]
      },
      ubytovani_page: {
        title: 'Ubytování',
        accommodation: {
          title: 'Ubytování',
          text: 'Rodina zajištěné ubytování po okolí. Všechny kamarády prosíme o zabalení karimatek a spacáku a všichni se nějak poskládáme do chalupy. Možné spaní na půdě a ve stodole a vytvoříme také stanové městečko. Věříme že lehké nepohodlí s námi zvládnete.'
        },
        shower: {
          title: 'Sprcha a WC',
          text: 'V chalupě máme dvě wc a jednu sprchu. Další jsou pak možné využít v šatnách na fotbalovém hřišti. U sprchování prosíme být ohleduplní ať se zvládnem všichni nějak vystřídat.'
        },
      },
      doprava_page: {
        title: 'Doprava',
        address: { title: 'Adresa', link: 'Otevřít na Mapy.cz' },
        mhd: {
          title: 'MHD',
          item1: 'Autobus 360 ze Smíchovského nádraží',
          item2: 'Autobus 450/549 ze Sedlčan',
          stop: 'Zastávka: <strong>Vysoký Chlumec</strong> nebo <strong>Vysoký Chlumec, pivovar</strong>'
        },
        parking: {
          title: 'Parking',
          item1: 'U pivovaru: ',
          item2: 'Na návsi: ',
          item3: 'U Skanzenu: ',
        },
        warning: {
          title: 'Upozornění',
          text: 'Kdo jste u nás nebyl, tak jen upozornění, že Vysoký Chlumec je doopravdy vysoký. Skanzen, kde se bude odehrávat obřad, je na jedné straně kopce, sál je na vršku a chalupa poté na druhé straně kopce.'
        },
        map: {
          title: 'Mapa',
          btn: 'Stáhnout mapu PDF'
        }
      },
      dresscode_page: {
        title: 'Dresscode & Jídlo',
        dresscode: {
          title: 'Dresscode',
          joke: 'Cottage core casual (jen vtip)',
          text: 'Budeme rádi za slavnostní oblečení, ale převážná část svatby bude zahradní slavnost. Je možné velké teplo i déšť. S oblekem se netrapte, oblečte se, ať je vám pohodlně. Prosíme jen se vyhýbat šíleným vzorům.'
        },
        food: {
          title: 'JÍDLO',
          text1: 'Na oběd budou dva druhy polévky – masitá a bezmasá a malé občerstvení. Před obřadem také budou nějaké drobnosti a koláčky. Večeře bude formou grilování.',
          text2: 'Dle počasí budeme uzpůsobovat podávání jídla, při vedrech možná budeme schovávat jídla do lednice, tak se nebojte jí prošacovat a nabídnout si dle libosti.',
          text3: 'Pokud by se vám chtělo něco donést, tak budeme rádi za doplnění sladkého či nějakých slaných pochutin ke grilu. Napište nám jen dopředu, co plánujete pro lepší koordinaci.'
        }
      },
      dary_page: {
        title: 'Dary & Pomoc',
        gifts: {
          title: 'Dary',
          text: 'Vše máme a nic nepotřebujeme. Pokud byste nám i tak chtěli něco podarovat, tak nejvíce oceníme finanční příspěvek.'
        },
        help: {
          title: 'Pomocná ruka',
          text1: 'Na chalupě budeme už v průběhu týdne a rádi užijeme společnost a pomocnou ruku. Dejte vědět, pokud budete chtít už s námi na Chlumci pobýt dřív, ať nakoupíme dostatečné množství sudů.',
          text2: 'Přijímáme návrhy na hry, drinky a jiné nápady na cokoliv.'
        }
      }
    },
    fr: {
      title: 'Terka & Filip',
      date: '15 août  2026',
      nav: {
        program: 'Programme',
        ubytovani: 'Passe-temps',
        doprava: 'Accès',
        map: 'Carte',
        dresscode: 'Dresscode & Repas',
        dary: 'Dons'
      },
      back: '← Retour',
      program_page: {
        title: 'Programme',
        items: [
          {time: '12:00', event: 'Arrivée des invités'},
          {time: '13:00', event: 'Cérémonie à l’Écomusée de Chlumec (en plein air)'},
          {time: '14:00', event: 'Soupe et rafraîchissements dans la salle U Kohoutů'},
          {time: '', event: 'Installation dans les hébergements'},
          {time: '17:00–19:00', event: 'Déplacement vers le jardin du chalet et découpe du gâteau'},
          {time: 'Po 19:00', event: 'La fête, les jeux, etc.'}
        ]
      },
      ubytovani_page: {
        title: 'Passe-temps',
        accommodation: {
          title: 'Passe-temps',
          text: 'De nombreux jeux de société seront à disposition pour les personnes intéressées. Vous pouvez également apporter les vôtres si vous le souhaitez. Un terrain de football est disponible pour les activités sportives. Juste derrière le chalet se trouve une forêt où vous pourrez vous promener et rammasser des champignons (ca c’est très tchèque).'
        },
      },
      doprava_page: {
        title: 'Accès',
        address: {title: 'Adresa', link: 'ouvrir Mapy.cz'},
        mhd: {},
        parking: {
          title: 'Parking',
          item1: 'à la brasserie : J9FP+46 (code pour les google maps) Vysoký Chlumec',
          item2: 'sur la place du village : J99Q+8Q Vysoký Chlumec',
          item3: 'à l\'écomusée (musée de plein air) : J98V+3F Vysoký Chlumec',
        },
          warning: {
            title: 'Warning',
            text: 'Pour ceux qui ne connaissent pas encore les lieux : sachez que Vysoký (=haut) Chlumec porte bien son nom, car le village est situé en hauteur (sur une colline). L\'écomusée, où se déroulera la cérémonie, se trouve sur un versant de la colline ; la salle de réception est située au sommet, et le chalet avec le jardin se trouve de l\'autre côté de la colline.\n'
          },
          map: {
            title: 'Carte',
            btn: 'Download PDF'
          }
        },
        dresscode_page: {
          title: 'Dresscode & Repas',
          dresscode: {
            title: 'Dresscode',
            text: 'Une tenue plus formelle serait appréciée, mais la majeure partie du jour se déroulera dans un jardin. Il peut faire très chaud et il peut pleuvoir. Nous ne demandons pas les  costumes ni les talons hauts (à cause de terrain), privilégiez le confort. La seule chose à évitez sont les motifs fous et trop colorés. Merci'
          },
          food: {
            title: 'Repas',
            text1: 'Deux soupes seront proposées après lá cérémonie (une avec et une sans viande) ainsi que des petits gâteaux de mariage (les pâtisseries traditionnelles tchèques). Des gâteaux et autres gourmandises seront également disponibles avant la cérémonie. Le dîner sera un barbecue. Le service sera adapté à la météo ; en cas de temps chaud, nous pourrions cacher des aliments au réfrigérateur, alors n\'hésitez pas à vous servir.'

          }
        },
        dary_page: {
          title: 'Dons',
          gifts: {
            title: 'Dons',
            text: 'Nous avons tout et nous n\'avons besoin de rien. Votre présence et le transport du vin est plus que suffisante.'
          }
        }
      },
  };

  translate(key: string): any {
    const keys = key.split('.');
    let result = this.translations[this.currentLang()];
    for (const k of keys) {
      if (result) {
        result = result[k];
      }
    }
    return result;
  }

  hasTranslation(key: string): boolean {
    const keys = key.split('.');
    let result = this.translations[this.currentLang()];
    for (const k of keys) {
      if (result && k in result) {
        result = result[k];
      } else {
        return false;
      }
    }
    return result !== undefined && result !== null && (typeof result !== 'object' || Object.keys(result).length > 0);
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }
}
