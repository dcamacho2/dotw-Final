var camera, scene, renderer, controls;
var geometry, material, mesh;
var sun, sunHeometry;
var mercury, mercuryGeometry;
var venus, venusGeometry;
var earth, earthGeometry;
var mars, marsGeometry;
var jupiter, jupiterGeometry;
var saturn, saturnGeometry;
var uranus, uranusGeometry;
var neptune, neptuneGeometry;
var pluto, plutoGeometry;

var initial = 0;

function init() {
    scene = new THREE.Scene();
    var width = window.innerWidth;
    var height = window.innerHeight;

    // (60, width / height, 1, 2000)
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 25000);
    camera.position.set(0, 4000, 1000); //x y z
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
    textureLoader.load('images/sun.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        sunHeometry = new THREE.SphereGeometry(200, 50, 50);
        sun = new THREE.Mesh(sunHeometry, material);
        sun.position.y = 10;
        sun.castShadow = true;
        scene.add(sun);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/mercury.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        mercuryGeometry = new THREE.SphereGeometry(10, 50, 50);
        mercury = new THREE.Mesh(mercuryGeometry, material);
        mercury.position.y = 80;
        mercury.position.x = 600;
        mercury.castShadow = true;
        scene.add(mercury);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/venus.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        venusGeometry = new THREE.SphereGeometry(20, 50, 50);
        venus = new THREE.Mesh(venusGeometry, material);
        venus.position.y = 80;
        venus.position.x = 600;
        venus.castShadow = true;
        scene.add(venus);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/earth.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        earthGeometry = new THREE.SphereGeometry(25, 50, 50);
        earth = new THREE.Mesh(earthGeometry, material);
        earth.position.y = 80;
        earth.position.x = 600;
        earth.castShadow = true;
        scene.add(earth);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/mars.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        marsGeometry = new THREE.SphereGeometry(17, 50, 50);
        mars = new THREE.Mesh(marsGeometry, material);
        mars.position.y = 80;
        mars.position.x = 600;
        mars.castShadow = true;
        scene.add(mars);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/jupiter.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        jupiterGeometry = new THREE.SphereGeometry(100, 50, 50);
        jupiter = new THREE.Mesh(jupiterGeometry, material);
        jupiter.position.y = 80;
        jupiter.position.x = 600;
        jupiter.castShadow = true;
        scene.add(jupiter);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/saturn.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        saturnGeometry = new THREE.SphereGeometry(85, 50, 50);
        saturn = new THREE.Mesh(saturnGeometry, material);
        saturn.position.y = 80;
        saturn.position.x = 600;
        saturn.castShadow = true;
        scene.add(saturn);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/uranus.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        uranusGeometry = new THREE.SphereGeometry(35, 50, 50);
        uranus = new THREE.Mesh(uranusGeometry, material);
        uranus.position.y = 80;
        uranus.position.x = 600;
        uranus.castShadow = true;
        scene.add(uranus);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/neptune.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        neptuneGeometry = new THREE.SphereGeometry(30, 50, 50);
        neptune = new THREE.Mesh(neptuneGeometry, material);
        neptune.position.y = 80;
        neptune.position.x = 600;
        neptune.castShadow = true;
        scene.add(neptune);
    });

    var textureLoader = new THREE.TextureLoader();
    textureLoader.load('images/pluto.jpg', function(texture) {
        material = new THREE.MeshLambertMaterial({
            map: texture,
            // wireframe: true
        });
        plutoGeometry = new THREE.SphereGeometry(5, 50, 50);
        pluto = new THREE.Mesh(plutoGeometry, material);
        pluto.position.y = 80;
        pluto.position.x = 600;
        pluto.castShadow = true;
        scene.add(pluto);
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
    var geometry = new THREE.BoxGeometry(15000, 15000, 15000);
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ alpha: 1, antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    document.body.appendChild(renderer.domElement);
};

function animate() {
    requestAnimationFrame(animate);
    render();
    if (sun) {
        sun.rotation.y += .007;
    }

    if (mercury) {
        mercury.rotation.y += .002;
    }

    if (venus) {
        venus.rotation.y += .002;
    }

    if (earth) {
        earth.rotation.y += .002;
    }

    if (mars) {
        mars.rotation.y += .002;
    }

    if (jupiter) {
        jupiter.rotation.y += .002;
    }

    if (saturn) {
        saturn.rotation.y += .002;
    }

    if (uranus) {
        uranus.rotation.y += .002;
    }

    if (neptune) {
        neptune.rotation.y += .002;
    }

    if (pluto) {
        pluto.rotation.y += .002;
    }

    renderer.render(scene, camera);
    controls.update();
}

function render() {
    initial += 1;
    var rotating = (initial) * Math.PI / 360; //around a sphere 

    if (mercury) {
        mercury.position.x = Math.cos(rotating + 5) * 400;
        mercury.position.z = Math.sin(rotating + 5) * 400;
    }

    if (venus) {
        venus.position.x = Math.cos(rotating + 3) * 500;
        venus.position.z = Math.sin(rotating + 3) * 500;
    }

    if (earth) {
        earth.position.x = Math.cos(rotating + 1) * 680;
        earth.position.z = Math.sin(rotating + 1) * 680;
    }

    if (mars) {
        mars.position.x = Math.cos(rotating + -3) * 850;
        mars.position.z = Math.sin(rotating + -3) * 850;
    }

    if (jupiter) {
        jupiter.position.x = Math.cos(rotating + -5) * 1300;
        jupiter.position.z = Math.sin(rotating + -5) * 1300;
    }

    if (saturn) {
        saturn.position.x = Math.cos(rotating + -7) * 1700;
        saturn.position.z = Math.sin(rotating + -7) * 1700;
    }

    if (uranus) {
        uranus.position.x = Math.cos(rotating + -9) * 2200;
        uranus.position.z = Math.sin(rotating + -9) * 2200;
    }

    if (neptune) {
        neptune.position.x = Math.cos(rotating + -11) * 2700;
        neptune.position.z = Math.sin(rotating + -11) * 2700;
    }

    if (pluto) {
        pluto.position.x = Math.cos(rotating + -13) * 3200;
        pluto.position.z = Math.sin(rotating + -13) * 3200;
    }

    // render
    renderer.render(scene, camera);
}

init();
animate();
