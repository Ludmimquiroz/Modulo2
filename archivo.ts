interface iFamilia{
    nombre: string;
    edad: number;
    rol: string;
    direccion: IDireccion
}

interface IDireccion{
ciudad: string;
provincia:string;
pais: string;
}