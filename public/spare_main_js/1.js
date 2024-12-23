window.onload = function() {
    var camera, scene, cssScene, renderer, cssRenderer;
    var geometry, material, mesh;
    var clock, controls;
    
    init();
    animate();
    
    function init() {
    
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 1000 );
        camera.position.z = 70;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        
        clock = new THREE.Clock();
        controls = new THREE.OrbitControls(camera);
    
        scene = new THREE.Scene();
        
        var axesHelper = new THREE.AxesHelper(10, 10, 10);
        scene.add(axesHelper);
    
        geometry = new THREE.BoxGeometry( 1, 1, 1 );
        material = new THREE.MeshNormalMaterial();
    
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
    
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        
        cssRenderer = new THREE.CSS3DRenderer();
        cssRenderer.setSize(window.innerWidth, window.innerHeight);
        cssRenderer.domElement.style.position = 'absolute';
        cssRenderer.domElement.style.top = 0;
        document.body.appendChild(cssRenderer.domElement);
        
        cssScene = new THREE.Scene();
        var element = document.createElement('div');
        element.innerHTML = 'text';
        element.style.background = "#0094ff";
        element.style.color = "white";
        element.style.padding = "2px";
        element.style.border = "0px";
        element.style.margin = "0px";
        var div = new THREE.CSS3DObject(element);
        div.position.x = 0;
        div.position.y = 25;
        div.position.z = 0;
        cssScene.add(div);
        
    }
    
    function animate() {
      
        var elapsed = clock.getElapsedTime();
        var delta = clock.getDelta();
    
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
    
        controls.update(delta);
    
        renderer.render( scene, camera );
        cssRenderer.render( cssScene, camera );
        
        requestAnimationFrame( animate );
    }
  }