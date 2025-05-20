type NutritionalItem = {
    alimento: string;
    porcao: string;
    calorias_kcal: number;
    carboidratos_g: number;
    proteinas_g: number;
    gorduras_g: number;
    fibras_g: number;
    calcio_mg: number;
    ferro_mg: number;
    sodio_mg: number;
    vitamina_c_mg: number;
    fonte: string;
};

export type NutritionalResponse = {
    itens?: NutritionalItem[];
    total?: Omit<NutritionalItem, 'alimento' | 'fonte'> & { porcao: string };
    Other?: string;
};