//only absolute path works: /src/assets not ./assets
const imageModules = import.meta.glob('/src/assets/img/thumb/*.jpg', {
  eager: true,
})
  const thumbImg: Record<string, string> = {};
  
  for (const path in imageModules) {
    const fileName = path.split('/').pop() || '';
    console.log( fileName);
    thumbImg[fileName] = (imageModules[path] as { default: string }).default;
  }

  console.log("keys of Modules fromm thumbImg", Object.keys(imageModules));
  console.log("imageModules in thumbImg.ts", imageModules);

  export default thumbImg;
