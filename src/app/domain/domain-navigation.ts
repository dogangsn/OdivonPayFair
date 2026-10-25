export interface DomainNavigationItem {
  readonly key: string;
  readonly path: string;
  readonly icon: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
}

export const PRODUCT_NAVIGATION: readonly DomainNavigationItem[] = [
  {
    key: 'roles',
    path: 'roles',
    icon: 'account_tree',
    label: 'Rol Mimarisi',
    title: 'Rol ve İş Ailesi Mimarisi',
    description: 'Rolleri, seviyeleri ve karşılaştırılabilir iş gruplarını yönetin.',
  },
  {
    key: 'pay-bands',
    path: 'pay-bands',
    icon: 'payments',
    label: 'Ücret Bantları',
    title: 'Ücret Bantları',
    description: 'Rol ve seviye bazlı ücret aralıklarını ve piyasa referanslarını yönetin.',
  },
  {
    key: 'gap-analysis',
    path: 'gap-analysis',
    icon: 'balance',
    label: 'Fark Analizi',
    title: 'Ücret Farkı Analizi',
    description: 'Cinsiyet ve çalışan grupları arasındaki açıklanabilir farkları analiz edin.',
  },
  {
    key: 'action-plans',
    path: 'action-plans',
    icon: 'task_alt',
    label: 'Aksiyon Planları',
    title: 'Düzeltici Aksiyon Planları',
    description: 'Sorumlu, bütçe ve tarihlerle eşit ücret aksiyonlarını takip edin.',
  },
  {
    key: 'disclosures',
    path: 'disclosures',
    icon: 'description',
    label: 'Rapor ve Beyanlar',
    title: 'Şeffaflık Raporları',
    description: 'Yönetim ve mevzuat raporlarını kontrollü biçimde hazırlayın.',
  },
];
