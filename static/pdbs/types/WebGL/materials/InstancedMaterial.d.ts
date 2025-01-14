import { Coloring } from "../constants/Coloring";
import { Shading } from "../constants/Shading";
import { Color } from "../../colors";
import { Vector3 } from "../math";
import { Material } from "./Material";
export declare class InstancedMaterial extends Material {
    combine: any;
    morphTargets: any;
    morphNormals: any;
    color: Color;
    ambient: Color;
    emissive: Color;
    wrapAround: boolean;
    wrapRGB: Vector3;
    map: any;
    lightMap: any;
    specularMap: any;
    envMap: any;
    reflectivity: number;
    refractionRatio: number;
    fog: boolean;
    wireframe: boolean;
    wireframeLinewidth: number;
    wireframeLinecap: string;
    wireframeLinejoin: string;
    shading: Shading;
    shaderID: string;
    vertexColors: Coloring;
    skinning: boolean;
    sphere: any;
    constructor(parameters?: any);
    clone<T extends this>(material?: T): T;
}
