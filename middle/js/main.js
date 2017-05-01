var camera, scene, renderer;
var geometry, material, mesh;
var moon, moonGeometry;
var earth, earthHeometry;
var initial = 0;

function init() {
    scene = new THREE.Scene();
    var width = window.innerWidth;
    var height = window.innerHeight;

    // (60, width / height, 1, 2000)
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 25000);
    camera.position.set(80, 100, 1000); //x y z
    scene.add(camera);

    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    var spotLight = new THREE.SpotLight(0xffffff, 0.5);
    spotLight.position.set(500, 500, 500);
    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 2000;
    spotLight.shadow.mapSize.height = 2000;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 2000;
    spotLight.shadow.camera.fov = 60;

    scene.add(spotLight);

    // var helper = new THREE.CameraHelper(spotLight.shadow.camera);
    // scene.add(helper);

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/planet.jpg', function(texture) {
        material = new THREE.MeshStandardMaterial({
            map: texture,
            // wireframe: true
        });
        earthHeometry = new THREE.SphereGeometry(200, 20, 20);
        earth = new THREE.Mesh(earthHeometry, material);
        earth.position.y = 10;
        earth.castShadow = true;
        scene.add(earth);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/moon.jpg', function(texture) {
        material = new THREE.MeshStandardMaterial({
            map: texture,
            // wireframe: true
        });
        moonGeometry = new THREE.SphereGeometry(50, 50, 50);
        moon = new THREE.Mesh(moonGeometry, material);
        moon.position.y = 80;
        moon.position.x = 600;
        moon.castShadow = true;
        scene.add(moon);
    });

    var path = 'images/';
    var format = '.jpg';
    var urls = [
        path + 'pos-x' + format, path + 'neg-x' + format,
        path + 'pos-y' + format, path + 'neg-y' + format,
        path + 'pos-z' + format, path + 'neg-z' + format
    ];

    var skybox = new THREE.CubeTextureLoader().load(urls);
    skybox.format = THREE.RGBFormat;

    // skybox rendering
    var shader = THREE.ShaderLib["cube"];
    shader.uniforms["tCube"].value = skybox;

    var material = new THREE.ShaderMaterial({
        fragmentShader: shader.fragmentShader,
        vertexShader: shader.vertexShader,
        uniforms: shader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
    });

    // skybox
    var geometry = new THREE.BoxGeometry(4000, 4000, 4000);
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ alpha: 1, antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;

    document.body.appendChild(renderer.domElement);
};

function animate() {
    requestAnimationFrame(animate);
    render();
    if (earth) {
        earth.rotation.y += .007;
    }

    if (moon) {
        moon.rotation.y += .002;
    }

    renderer.render(scene, camera);
}

function render() {
    initial += 1;
    var rotating = (initial) * Math.PI / 360; //around a sphere 

    if (moon) {
        moon.position.x = Math.cos(rotating) * 700;
        moon.position.z = Math.sin(rotating) * 700;
    }

    // render
    renderer.render(scene, camera);
}

init();
animate();
