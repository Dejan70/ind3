window.onload = function() {
      var camera, scene, cssScene, renderer, cssRenderer;
      var geometry, material, mesh;
      var clock, controls;
      
      init();
      animate();
      
      function init() {
      
          camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
          camera.position.z = 70;
          camera.lookAt(new THREE.Vector3(0, 0, 0));
          
          clock = new THREE.Clock();
          controls = new THREE.OrbitControls(camera);
        //  controls = new THREE.OrbitControls( camera, cssRendererrenderer.domElement );
     
          scene = new THREE.Scene();
          
        //  var axesHelper = new THREE.AxesHelper(10, 10, 10);
         // scene.add(axesHelper);
      
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
          //var windowResize = new THREE.WindowResize(renderer, camera, {  maxWidth  : 1024,  maxHeight : 756});windowResize.trigger(); 
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
    //new css 3d object
          var elemente11 = document.createElement("iframe");
    elemente11.src = "https://www.kurir.rs"; 
    var object11 = new THREE.CSS3DObject(elemente11);
    object11.position.x = 10;
    object11.position.y = 25;
    object11.position.z = 10;
    object11.scale.x = 0.05;
    object11.scale.y = 0.05;
    //object11.style.display="none";
    elemente11.id="test";
   // document.getElementById("test").style.visibility = "hidden";
   //elemente11.style.visibility = "hidden";
   elemente11.style.pointerEvents= "none";
      cssScene.add(object11);
    //new css 3d object
    
    
          
      }
      
      function animate() {
        
          var elapsed = clock.getElapsedTime();
          var delta = clock.getDelta();
      
       //   mesh.rotation.x += 0.01;
       //   mesh.rotation.y += 0.02;
   //    controls.mouseButtons = { LEFT: THREE.MOUSE.RIGHT, MIDDLE: THREE.MOUSE.MIDDLE, RIGHT: THREE.MOUSE.LEFT };
 //  controls.mouseButtons = { LEFT: THREE.MOUSE.LEFT , MIDDLE: THREE.MOUSE.MIDDLE, RIGHT: THREE.MOUSE.RIGHT};
// controls.enablePan = (action === THREE.MOUSE.PAN);
  //  controls.enableZoom = (action === THREE.MOUSE.DOLLY);
  //  controls.enableRotate = (action === THREE.MOUSE.ROTATE);
      //    controls.update(delta);
     
          renderer.render( scene, camera );
          cssRenderer.render( cssScene, camera );
          
          requestAnimationFrame( animate );
      }
    }