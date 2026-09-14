/**
 * The slice of three.js this site uses.
 *
 * Both features that need three — the work barrel and the page transition —
 * import this module dynamically, so nothing three-related is fetched on
 * first paint.
 *
 * They deliberately share one chunk. three ships as a single bundled ES
 * module, so the moment anything reaches `WebGLRenderer` the renderer and its
 * shader library are in the graph; splitting the barrel's CSS3D path into its
 * own entry just produced a 2 KB file that imported the 124 KB one. Loading it
 * once, lazily, and sharing it between both features is the honest shape.
 *
 * Re-exporting by name (rather than letting callers `import('three')`) still
 * matters: it keeps the namespace out of the graph so the loaders, audio,
 * animation system and the wider geometry and material sets are dropped.
 */

// Work barrel — a CSS3D scene, so the cards stay real DOM.
export { Scene, PerspectiveCamera } from 'three';
export {
  CSS3DRenderer,
  CSS3DObject,
} from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// Page transition — a full-screen shader triangle.
export {
  WebGLRenderer,
  OrthographicCamera,
  ShaderMaterial,
  BufferGeometry,
  BufferAttribute,
  Mesh,
} from 'three';
