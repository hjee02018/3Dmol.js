import type { Material } from './../materials/Material';
import { EventDispatcher } from "./EventDispatcher";
import { Vector3 } from "../math";
import { Color } from "../../colors";
export declare class GeometryGroup {
    id: number;
    vertexArray: Float32Array | null;
    colorArray: Float32Array | null;
    normalArray: Float32Array | null;
    radiusArray: Float32Array | null;
    faceArray: Uint16Array | null;
    lineArray: Uint16Array | null;
    vertices: number;
    faceidx: number;
    lineidx: number;
    __inittedArrays: boolean;
    useOffset: unknown;
    constructor(id?: number);
    setColors(setcolor: (r: number, g: number, b: number) => Color | number): void;
    getNumVertices(): number;
    getVertices(): Float32Array;
    getCentroid(): Vector3;
    setNormals(): void;
    setLineIndices(): void;
    vrml(indent: string, material?: Material): string;
    truncateArrayBuffers(mesh?: boolean, reallocatemem?: boolean): void;
}
export declare class Geometry extends EventDispatcher {
    id: number;
    name: string;
    hasTangents: boolean;
    dynamic: boolean;
    radii: boolean;
    mesh: boolean;
    offset: boolean;
    verticesNeedUpdate: boolean;
    elementsNeedUpdate: boolean;
    normalsNeedUpdate: boolean;
    colorsNeedUpdate: boolean;
    buffersNeedUpdate: boolean;
    imposter: boolean;
    instanced: boolean;
    geometryGroups: GeometryGroup[];
    groups: number;
    sphereGeometry?: Geometry;
    drawnCaps?: any;
    constructor(mesh?: boolean, radii?: boolean, offset?: boolean);
    updateGeoGroup(addVertices?: number): GeometryGroup;
    vrml(indent: string, material?: Material): string;
    addGeoGroup(): GeometryGroup;
    setUpNormals(...args: Parameters<GeometryGroup["setNormals"]>): void;
    setColors(...setcolor: Parameters<GeometryGroup["setColors"]>): void;
    setUpWireframe(...lineIndexArgs: Parameters<GeometryGroup["setLineIndices"]>): void;
    initTypedArrays(): void;
    dispose(): void;
    get vertices(): number;
}
export declare let GeometryIDCount: number;
