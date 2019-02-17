export class ProductTemplate {
    id: number;
    sectionId: number;
    type: string;
    model: string;
    h1: string;
    price: number;
    sex: string;
    img1: string;
    img2?: string;
    img3?: string;
    seoText?: string;
    features?: string;
}

export class ProductTechTemplate {
    'Возраст ребёнка'?: string;
    'Вес ребёнка'?: string;
    'Тип складывания'?: string;
    'Регулировка спинки'?: string;
    'Внутренние ремни'?: string;
    'Съёмные мягкие части'?: string;
    'Корзина для вещей'?: string;
}
