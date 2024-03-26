// Type definitions for Chattriggers
// Definitions by: Maxssho13, also a lot of credit to Matt for inspiration and reference

/// <reference no-default-lib="true" />
/// <reference lib="es2015" />
export {}; // this line converts this into a module, allowing for importing and modifying global scope
// everything in global will be put into the global scope

declare global {
  const GuiHandler: GuiHandler;
  const Java: Java;
  /**
   * Helper method register a trigger.
   *
   * Called by taking the original name of the method, i.e. `registerChat`,
   * removing the word register, and comparing it case-insensitively with
   * the methods below.
   *
   * Can also be passed a class of type
   * {@link ForgeEvent net.minecraftforge.fml.common.eventhandler.Event} as the first parameter
   * to register functions for arbitrary forge events.
   *
   * @param triggerType the type of trigger
   * @param method The name of the method or the actual method to callback when the event is fired
   * @return The trigger for additional modification
   */
  const register: IRegister;
  const TriggerRegister: ITriggerRegister;
  const InteractAction: typeof ForgePlayerInteractEvent.Action;
  const Console: Console;
  const Client: Client;
  const NBT: NBT;
  const Config: Config;
  const ChatTriggers: Reference;
  const console: console;
  const GlStateManager: MCTGlStateManger;
  const GL11: JavaGL11;
  const GL12: JavaGL12;
  const GL13: JavaGL13;
  const GL14: JavaGL14;
  const GL15: JavaGL15;
  const GL20: JavaGL20;
  const GL21: JavaGL21;
  const GL30: JavaGL30;
  const GL31: JavaGL31;
  const GL32: JavaGL32;
  const GL33: JavaGL33;
  const GL40: JavaGL40;
  const GL41: JavaGL41;
  const GL42: JavaGL42;
  const GL43: JavaGL43;
  const GL44: JavaGL44;
  const GL45: JavaGL45;

  const OnChatTrigger: typeof ChatTrigger;
  const OnCommandTrigger: typeof CommandTrigger;
  const OnRegularTrigger: typeof RegularTrigger;
  const OnRenderTrigger: typeof EventTrigger;
  const OnSoundPlayTrigger: typeof SoundPlayTrigger;
  const OnStepTrigger: typeof StepTrigger;
  const OnTrigger: typeof Trigger;
  const Priority: typeof Trigger.Priority;

  // obfuscated type types
  type MCTScoreboard = MCScoreboard;
  type MCTScoreObjective = MCScoreObjective;
  type MCTScorePlayerTeam = MCScorePlayerTeam;
  type MCTTileEntity = MCTileEntity;
  type MCTGuiContainer = MCGuiContainer;
  type MCTSlot = MCSlot;
  type MCTGlStateManger = MCGlStateManager;
  type MCTBlock = MCBlock;
  type MCTBlockPos = MCBlockPos;
  type MCTItem = MCItem;
  type MCTItemStack = MCItemStack;
  type MCTEntityItem = MCEntityItem;
  type MCTIBlockState = MCIBlockState;
  type MCTIInventory = MCIInventory;
  type MCTContainer = MCContainer;
  type MCTEntity = MCEntity;
  type MCTIChatComponent = MCIChatComponent;
  type MCTNBTBase = MCNBTBase;
  type MCTNBTTagCompound = MCNBTTagCompound;
  type MCTChunk = MCChunk;
  type MCTEnumFacing = MCEnumFacing;
  type MCTNBTTagList = MCNBTTagList;
  type MCTMinecraft = MCMinecraft;
  type MCTNetHandlerPlayClient = MCNetHandlerPlayClient;
  type MCTGuiNewChat = MCGuiNewChat;
  type MCTGuiPlayerTabOverlay = MCGuiPlayerTabOverlay;
  type MCTINetHandler = MCINetHandler;
  type MCTPacket<T extends MCINetHandler> = MCPacket<T>;
  type MCTGuiScreen = MCGuiScreen;
  type MCTGameSettings = MCGameSettings;
  type MCTEntityPlayer = MCEntityPlayer;
  type MCTEntityPlayerSP = MCEntityPlayerSP;
  type MCTKeyBinding = MCKeyBinding;
  type MCTGuiButton = MCGuiButton;
  type MCTDynamicTexture = MCDynamicTexture;
  type MCTAbstractTexture = MCAbstractTexture;
  type MCTSoundCategory = MCSoundCategory;
  type MCTPotion = MCPotion;
  type MCTPotionEffect = MCPotionEffect;
  type MCTWorld = MCWorld;
  type MCTEntityFX = MCEntityFX;
  type MCTEnumParticleTypes = MCEnumParticleTypes;
  type MCTFontRenderer = MCFontRenderer;
  type MCTRenderManager = MCRenderManager;
  type MCTEntityLivingBase = MCEntityLivingBase;
  type MCTWorldClient = MCWorldClient;
  type MCTScore = MCScore;
  // forge paths
  type ForgeTClientChatReceivedEvent = ForgeClientChatReceivedEvent;
  type ForgeTRenderGameOverlayEvent = ForgeRenderGameOverlayEvent;
  type ForgeTMouseEvent = ForgeMouseEvent;
  type ForgeTPlaySoundEvent = ForgePlaySoundEvent;
  type ForgeTConfigChangedEvent = ForgeConfigChangedEvent;
  type ForgeTTickEvent = ForgeTickEvent;
  type ForgeTNoteBlockEvent = ForgeNoteBlockEvent;
  type ForgeTDrawBlockHighlightEvent = ForgeDrawBlockHighlightEvent;
  type ForgeTGuiOpenEvent = ForgeGuiOpenEvent;
  type ForgeTEntityItemPickupEvent = ForgeEntityItemPickupEvent;
  type ForgeTPlayerInteractEvent = ForgePlayerInteractEvent;
  type ForgeTGuiScreenEvent = ForgeGuiScreenEvent;
  type ForgeTBlockEvent = ForgeBlockEvent;
  // java paths
  type JavaTGL11 = JavaGL11;
  type JavaTGL12 = JavaGL12;
  type JavaTGL13 = JavaGL13;
  type JavaTGL14 = JavaGL14;
  type JavaTGL15 = JavaGL15;
  type JavaTGL20 = JavaGL20;
  type JavaTGL21 = JavaGL21;
  type JavaTGL30 = JavaGL30;
  type JavaTGL31 = JavaGL31;
  type JavaTGL32 = JavaGL32;
  type JavaTGL33 = JavaGL33;
  type JavaTGL40 = JavaGL40;
  type JavaTGL41 = JavaGL41;
  type JavaTGL42 = JavaGL42;
  type JavaTGL43 = JavaGL43;
  type JavaTGL44 = JavaGL44;
  type JavaTGL45 = JavaGL45;
  type JavaTThread = JavaThread;
  type JavaTUUID = JavaUUID;
  type JavaTFile = JavaFile;
  type JavaTPath = JavaPath;
  type JavaTFileNameFilter = JavaFileNameFilter;
  type JavaTClass<T> = JavaClass<T>;
  type JavaTURL = JavaURL;
  type JavaTURI = JavaURI;
  type JavaTURLStreamHandlerFactory = JavaURLStreamHandlerFactory;
  type JavaTInputStream = JavaInputStream;
  type JavaTURLConnection = JavaURLConnection;
  type JavaTProxy = JavaProxy;
  type JavaTSocketAddress = JavaSocketAddress;
  type JavaTURLStreamHandler = JavaURLStreamHandler;
  type JavaTField = JavaField;
  type JavaTMethod = JavaMethod;
  type JavaTBufferedImage = JavaBufferedImage;
  type JavaTColor = JavaColor;

  function cancel(
    event:
      | ForgePlaySoundEvent
      | CancellableEvent
      | ForgeEvent
      | (string | ForgeClientChatReceivedEvent),
  ): void;
  // extend prototype
  interface String {
    addFormatting(): string;

    addColor(): string;

    removeFormatting(): string;

    replaceFormatting(): string;
  }

  function easeOut(
    start: number,
    finish: number,
    speed: number,
    jump: number,
  ): number;

  function easeColor(
    start: number,
    finish: number,
    speed: number,
    jump: number,
  ): number;

  function sync(func: Function, lock: any): any;

  function print(toPrint: any, end?: string, color?: JavaColor): void;

  function setTimeout(func: () => void, delay: number): void;

  interface Number {
    easeOut(to: number, speed: number, jump: number): number;

    easeColor(to: number, speed: number, jump: number): number;
  }

  enum LogType {
    INFO,
    WARN,
    ERROR,
  }

  class Slot {
    constructor(mcSlot: MCSlot);

    readonly mcSlot: MCSlot;

    getMcSlot(): MCSlot;

    getIndex(): number;

    getDisplayX(): number;

    getDisplayY(): number;

    getInventory(): Inventory;

    getItem(): Item | null;

    toString(): string;
  }

  class Renderer {
    readonly colorized: number;

    BLACK: number;
    static BLACK: number;
    DARK_BLUE: number;
    static DARK_BLUE: number;
    DARK_GREEN: number;
    static DARK_GREEN: number;
    DARK_AQUA: number;
    static DARK_AQUA: number;
    DARK_RED: number;
    static DARK_RED: number;
    DARK_PURPLE: number;
    static DARK_PURPLE: number;
    GOLD: number;
    static GOLD: number;
    GRAY: number;
    static GRAY: number;
    DARK_GRAY: number;
    static DARK_GRAY: number;
    BLUE: number;
    static BLUE: number;
    GREEN: number;
    static GREEN: number;
    AQUA: number;
    static AQUA: number;
    RED: number;
    static RED: number;
    LIGHT_PURPLE: number;
    static LIGHT_PURPLE: number;
    YELLOW: number;
    static YELLOW: number;
    WHITE: number;
    static WHITE: number;

    getColor(color: number): number;
    static getColor(color: number): number;

    getFontRenderer(): MCFontRenderer;
    static getFontRenderer(): MCFontRenderer;

    getRenderManager(): MCRenderManager;
    static getRenderManager(): MCRenderManager;

    getStringWidth(text: string): number;
    static getStringWidth(text: string): number;

    color(red: number, green: number, blue: number, alpha?: number): number;
    static color(
      red: number,
      green: number,
      blue: number,
      alpha?: number,
    ): number;

    getRainbow(step: number, speed?: number): number;
    static getRainbow(step: number, speed?: number): number;

    getRainbowColors(step: number, speed?: number): number[];
    static getRainbowColors(step: number, speed?: number): number[];

    retainTransforms(retain: boolean): void;
    static retainTransforms(retain: boolean): void;

    translate(x: number, y: number, z?: number): void;
    static translate(x: number, y: number, z?: number): void;

    scale(scaleX: number, scaleY?: number): void;
    static scale(scaleX: number, scaleY?: number): void;

    rotate(angle: number): void;
    static rotate(angle: number): void;

    colorize(red: number, green: number, blue: number, alpha?: number): void;
    static colorize(
      red: number,
      green: number,
      blue: number,
      alpha?: number,
    ): void;

    setDrawMode(drawMode: number): Renderer;
    static setDrawMode(drawMode: number): Renderer;

    getDrawMode(): number;
    static getDrawMode(): number;

    fixAlpha(color: number): number;
    static fixAlpha(color: number): number;

    drawRect(
      color: number,
      x: number,
      y: number,
      width: number,
      height: number,
    ): void;
    static drawRect(
      color: number,
      x: number,
      y: number,
      width: number,
      height: number,
    ): void;

    drawShape(color: number, ...vertexes: number[][]): void;
    static drawShape(color: number, ...vertexes: number[][]): void;

    drawLine(
      color: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      thickness: number,
      drawMode?: number,
    ): void;
    static drawLine(
      color: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      thickness: number,
      drawMode?: number,
    ): void;

    drawCircle(
      color: number,
      x: number,
      y: number,
      radius: number,
      steps: number,
      drawMode?: number,
    ): void;
    static drawCircle(
      color: number,
      x: number,
      y: number,
      radius: number,
      steps: number,
      drawMode?: number,
    ): void;

    drawString(text: string, x: number, y: number, shadow?: boolean): void;
    static drawString(
      text: string,
      x: number,
      y: number,
      shadow?: boolean,
    ): void;

    drawStringWithShadow(text: string, x: number, y: number): void;
    static drawStringWithShadow(text: string, x: number, y: number): void;

    drawImage(
      image: Image,
      x: number,
      y: number,
      width: number,
      height: number,
    ): void;
    static drawImage(
      image: Image,
      x: number,
      y: number,
      width: number,
      height: number,
    ): void;

    drawPlayer(
      player: PlayerMP | MCEntityPlayer | MCEntityLivingBase,
      x: number,
      y: number,
      rotate?: boolean,
      showNametag?: boolean,
      showCape?: boolean,
      showHeldItem?: boolean,
      showArrows?: boolean,
    ): void;
    static drawPlayer(
      player: PlayerMP | MCEntityPlayer | MCEntityLivingBase,
      x: number,
      y: number,
      rotate?: boolean,
      showNametag?: boolean,
      showCape?: boolean,
      showHeldItem?: boolean,
      showArrows?: boolean,
    ): void;

    finishDraw(): void;
    static finishDraw(): void;
  }

  namespace Renderer {
    class screen {
      getWidth(): number;
      static getWidth(): number;

      getHeight(): number;
      static getHeight(): number;

      getScale(): number;
      static getScale(): number;
    }
  }

  class Shape {
    constructor(color: number);

    copy(): Shape;

    clone(): Shape;

    getColor(): number;
    setColor(color: number): Shape;

    getDrawMode(): number;

    /**
     * Sets the GL draw mode of the shape. Possible draw modes are:
     * 0 = points
     * 1 = lines
     * 2 = line loop
     * 3 = line strip
     * 5 = triangles
     * 5 = triangle strip
     * 6 = triangle fan
     * 7 = quads
     * 8 = quad strip
     * 9 = polygon
     */
    setDrawMode(drawMode: number): Shape;

    getVertexes(): Vector2f[];

    addVertex(x: number, y: number): Shape;

    insertVertex(index: number, x: number, y: number): Shape;

    removeVertex(index: number): Shape;

    /**
     * Sets the shape as a line pointing from [x1, y1] to [x2, y2] with a thickness
     */
    setLine(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      thickness: number,
    ): Shape;

    /**
     * Sets the shape as a circle with a center at [x, y]
     * with radius and number of steps around the circle
     */
    setCircle(x: number, y: number, radius: number, steps: number): Shape;

    draw(): Shape;
  }

  class Rectangle {
    constructor(
      color: number,
      x: number,
      y: number,
      width: number,
      height: number,
    );

    getColor(): number;
    setColor(color: number): Rectangle;

    getX(): number;
    setX(x: number): Rectangle;

    getY(): number;
    setY(y: number): Rectangle;

    getWidth(): number;
    setWidth(width: number): Rectangle;

    getHeight(): number;
    setHeight(height: number): Rectangle;

    isShadow(): boolean;
    setShadow(shadow: boolean): Rectangle;

    getShadowOffset(): Vector2f;

    getShadowOffsetX(): number;
    getShadowOffsetY(): number;

    setShadowOffset(x: number, y: number): Rectangle;

    setShadowOffsetX(x: number): Rectangle;
    setShadowOffsetY(y: number): Rectangle;

    getShadowColor(): number;
    setShadowColor(color: number): Rectangle;

    setShadow(color: number, x: number, y: number): Rectangle;

    getOutline(): boolean;
    setOutline(outline: boolean): Rectangle;

    getOutlineColor(): number;
    setOutlineColor(color: number): Rectangle;

    getThickness(): number;
    setThickness(thickness: number): Rectangle;

    setOutline(color: number, thickness: number): Rectangle;

    draw(): Rectangle;
  }

  class Tessellator {
    static readonly INSTANCE: Tessellator;

    disableAlpha(): Tessellator;
    static disableAlpha(): Tessellator;

    enableAlpha(): Tessellator;
    static enableAlpha(): Tessellator;

    alphaFunc(func: number, ref: number): Tessellator;
    static alphaFunc(func: number, ref: number): Tessellator;

    enableLighting(): Tessellator;
    static enableLighting(): Tessellator;

    disableLighting(): Tessellator;
    static disableLighting(): Tessellator;

    disableDepth(): Tessellator;
    static disableDepth(): Tessellator;

    enableDepth(): Tessellator;
    static enableDepth(): Tessellator;

    depthFunc(depthFunc: number): Tessellator;
    static depthFunc(depthFunc: number): Tessellator;

    depthMask(flagIn: boolean): Tessellator;
    static depthMask(flagIn: boolean): Tessellator;

    disableBlend(): Tessellator;
    static disableBlend(): Tessellator;

    enableBlend(): Tessellator;
    static enableBlend(): Tessellator;

    blendFunc(sourceFactor: number, destFactor: number): Tessellator;
    static blendFunc(sourceFactor: number, destFactor: number): Tessellator;

    tryBlendFuncSeparate(
      sourceFactor: number,
      destFactor: number,
      sourceFactorAlpha: number,
      destFactorAlpha: number,
    ): Tessellator;
    static tryBlendFuncSeparate(
      sourceFactor: number,
      destFactor: number,
      sourceFactorAlpha: number,
      destFactorAlpha: number,
    ): Tessellator;

    enableTexture2D(): Tessellator;
    static enableTexture2D(): Tessellator;

    disableTexture2D(): Tessellator;
    static disableTexture2D(): Tessellator;

    deleteTexture(texture: Image): Tessellator;
    static deleteTexture(texture: Image): Tessellator;

    pushMatrix(): Tessellator;
    static pushMatrix(): Tessellator;

    popMatrix(): Tessellator;
    static popMatrix(): Tessellator;

    static getPartialTicks(): number;
    getPartialTicks(): number;
    static setPartialTicks(p: number): void;
    setPartialTicks(p: number): void;

    /**
     * Binds a texture to the client for the Tessellator to use.
     *
     * @param texture the texture to bind
     * @return the Tessellator to allow for method chaining
     */
    bindTexture(texture: Image): Tessellator;
    /**
     * Binds a texture to the client for the Tessellator to use.
     *
     * @param texture the texture to bind
     * @return the Tessellator to allow for method chaining
     */
    static bindTexture(texture: Image): Tessellator;

    /**
     * Begin drawing with the Tessellator
     * with default draw mode of quads and textured
     *
     * @param drawMode the GL draw mode
     * @param textured if the Tessellator is textured
     * @return the Tessellator to allow for method chaining
     * @see com.chattriggers.ctjs.minecraft.libs.renderer.Shape.setDrawMode
     */
    begin(drawMode?: number, textured?: boolean): Tessellator;
    /**
     * Begin drawing with the Tessellator
     * with default draw mode of quads and textured
     *
     * @param drawMode the GL draw mode
     * @param textured if the Tessellator is textured
     * @return the Tessellator to allow for method chaining
     * @see com.chattriggers.ctjs.minecraft.libs.renderer.Shape.setDrawMode
     */
    static begin(drawMode?: number, textured?: boolean): Tessellator;

    /**
     * Colorize the Tessellator.
     *
     * @param red the red value between 0 and 1
     * @param green the green value between 0 and 1
     * @param blue the blue value between 0 and 1
     * @param alpha the alpha value between 0 and 1
     * @return the Tessellator to allow for method chaining
     */
    colorize(
      red: number,
      green: number,
      blue: number,
      alpha?: number,
    ): Tessellator;
    /**
     * Colorize the Tessellator.
     *
     * @param red the red value between 0 and 1
     * @param green the green value between 0 and 1
     * @param blue the blue value between 0 and 1
     * @param alpha the alpha value between 0 and 1
     * @return the Tessellator to allow for method chaining
     */
    static colorize(
      red: number,
      green: number,
      blue: number,
      alpha?: number,
    ): Tessellator;

    /**
     * Rotates the Tessellator in 3d space.
     * Similar to {@link Renderer.rotate com.chattriggers.ctjs.minecraft.libs.renderer.Renderer.rotate}
     *
     * @param angle the angle to rotate
     * @param x if the rotation is around the x axis
     * @param y if the rotation is around the y axis
     * @param z if the rotation is around the z axis
     * @return the Tessellator to allow for method chaining
     */
    rotate(angle: number, x: number, y: number, z: number): Tessellator;
    /**
     * Rotates the Tessellator in 3d space.
     * Similar to {@link Renderer.rotate com.chattriggers.ctjs.minecraft.libs.renderer.Renderer.rotate}
     *
     * @param angle the angle to rotate
     * @param x if the rotation is around the x axis
     * @param y if the rotation is around the y axis
     * @param z if the rotation is around the z axis
     * @return the Tessellator to allow for method chaining
     */
    static rotate(angle: number, x: number, y: number, z: number): Tessellator;

    /**
     * Translates the Tessellator in 3d space.
     * Similar to {@link Renderer.translate com.chattriggers.ctjs.minecraft.libs.renderer.Renderer.translate}
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the Tessellator to allow for method chaining
     */
    translate(x: number, y: number, z: number): Tessellator;
    /**
     * Translates the Tessellator in 3d space.
     * Similar to {@link Renderer.translate com.chattriggers.ctjs.minecraft.libs.renderer.Renderer.translate}
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the Tessellator to allow for method chaining
     */
    static translate(x: number, y: number, z: number): Tessellator;

    /**
     * Scales the Tessellator in 3d space.
     * Similar to {@link Renderer.scale com.chattriggers.ctjs.minecraft.libs.renderer.Renderer.scale}
     *
     * @param x scale in the x direction or all directions if y and z are not supplied
     * @param y scale in the y direction
     * @param z scale in the z direction
     * @return the Tessellator to allow for method chaining
     */
    scale(x: number, y?: number, z?: number): Tessellator;
    /**
     * Scales the Tessellator in 3d space.
     * Similar to {@link Renderer.scale com.chattriggers.ctjs.minecraft.libs.renderer.Renderer.scale}
     *
     * @param x scale in the x direction or all directions if y and z are not supplied
     * @param y scale in the y direction
     * @param z scale in the z direction
     * @return the Tessellator to allow for method chaining
     */
    static scale(x: number, y?: number, z?: number): Tessellator;

    /**
     * Sets a new vertex in the Tessellator.
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the Tessellator to allow for method chaining
     */
    pos(x: number, y: number, z: number): Tessellator;
    /**
     * Sets a new vertex in the Tessellator.
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the Tessellator to allow for method chaining
     */
    static pos(x: number, y: number, z: number): Tessellator;

    /**
     * Sets the texture location on the last defined vertex.
     * Use directly after using {@link Tessellator.pos}
     *
     * @param u the u position in the texture
     * @param v the v position in the texture
     * @return the Tessellator to allow for method chaining
     */
    tex(u: number, v: number): Tessellator;
    /**
     * Sets the texture location on the last defined vertex.
     * Use directly after using {@link Tessellator.pos}
     *
     * @param u the u position in the texture
     * @param v the v position in the texture
     * @return the Tessellator to allow for method chaining
     */
    static tex(u: number, v: number): Tessellator;

    /**
     * Finalizes and draws the Tessellator.
     */
    draw(): void;
    /**
     * Finalizes and draws the Tessellator.
     */
    static draw(): void;

    /**
     * Gets a fixed render position from x, y, and z inputs adjusted with partial ticks
     * @param x the X coordinate
     * @param y the Y coordinate
     * @param z the Z coordinate
     * @return the Vector3f position to render at
     */
    getRenderPos(x: number, y: number, z: number): Vector3f;
    /**
     * Gets a fixed render position from x, y, and z inputs adjusted with partial ticks
     * @param x the X coordinate
     * @param y the Y coordinate
     * @param z the Z coordinate
     * @return the Vector3f position to render at
     */
    static getRenderPos(x: number, y: number, z: number): Vector3f;

    /**
     * Renders floating lines of text in the 3D world at a specific position.
     *
     * @param text The string array of text to render
     * @param x X coordinate in the game world
     * @param y Y coordinate in the game world
     * @param z Z coordinate in the game world
     * @param color the color of the text
     * @param renderBlackBox render a pretty black border behind the text
     * @param scale the scale of the text
     * @param increase whether to scale the text up as the player moves away
     */
    drawString(
      text: string,
      x: number,
      y: number,
      z: number,
      color?: number,
      renderBlackBox?: boolean,
      scale?: number,
      increase?: boolean,
    ): void;
    /**
     * Renders floating lines of text in the 3D world at a specific position.
     *
     * @param text The string array of text to render
     * @param x X coordinate in the game world
     * @param y Y coordinate in the game world
     * @param z Z coordinate in the game world
     * @param color the color of the text
     * @param renderBlackBox render a pretty black border behind the text
     * @param scale the scale of the text
     * @param increase whether to scale the text up as the player moves away
     */
    static drawString(
      text: string,
      x: number,
      y: number,
      z: number,
      color?: number,
      renderBlackBox?: boolean,
      scale?: number,
      increase?: boolean,
    ): void;
  }

  class MathLib {
    /**
     * Maps a number from one range to another.
     *
     * @param number the number to map
     * @param in_min the original range min
     * @param in_max the original range max
     * @param out_min the final range min
     * @param out_max the final range max
     * @return the re-mapped number
     */
    map(
      number: number,
      in_min: number,
      in_max: number,
      out_min: number,
      out_max: number,
    ): number;
    /**
     * Maps a number from one range to another.
     *
     * @param number the number to map
     * @param in_min the original range min
     * @param in_max the original range max
     * @param out_min the final range min
     * @param out_max the final range max
     * @return the re-mapped number
     */
    static map(
      number: number,
      in_min: number,
      in_max: number,
      out_min: number,
      out_max: number,
    ): number;

    /**
     * Clamps a floating number between two values.
     *
     * @param number the number to clamp
     * @param min the minimum
     * @param max the maximum
     * @return the clamped number
     */
    clampFloat(number: number, min: number, max: number): number;
    /**
     * Clamps a floating number between two values.
     *
     * @param number the number to clamp
     * @param min the minimum
     * @param max the maximum
     * @return the clamped number
     */
    static clampFloat(number: number, min: number, max: number): number;

    /**
     * Clamps an integer number between two values.
     *
     * @param number the number to clamp
     * @param min the minimum
     * @param max the maximum
     * @return the clamped number
     */
    clamp(number: number, min: number, max: number): number;
    /**
     * Clamps an integer number between two values.
     *
     * @param number the number to clamp
     * @param min the minimum
     * @param max the maximum
     * @return the clamped number
     */
    static clamp(number: number, min: number, max: number): number;
  }
  /**
   * Instances a new Sound with certain properties. These properties
   * should be passed through as a normal JavaScript object.
   *
   * REQUIRED:
   * - source (String) - filename, relative to ChatTriggers assets directory
   *
   * OPTIONAL:
   * - priority (boolean) - whether or not this sound should be prioritized, defaults to false
   * - loop (boolean) - whether or not to loop this sound over and over, defaults to false
   * - stream (boolean) - whether or not to stream this sound rather than preload it (should be true for large files), defaults to false
   *
   * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
   * - category (String) - which category this sound should be a part of, see {@link setCategory}.
   * - volume (float) - volume of the sound, see {@link setVolume}
   * - pitch (float) - pitch of the sound, see {@link setPitch}
   * - x, y, z (float) - location of the sound, see {@link setPosition}. Defaults to the players position.
   * - attenuation (int) - fade out model of the sound, see {@link setAttenuation}
   *
   * @param config the JavaScript config object
   */
  class Sound {
    constructor(config: ISoundConfig);

    isListening: boolean;

    /**
     * Sets the category of this sound, making it respect the Player's sound volume sliders.
     * Options are: master, music, record, weather, block, hostile, neutral, player, and ambient
     *
     * @param category the category
     */
    setCategory(category: string): Sound;

    /**
     * Sets this sound's volume.
     * Will override the category if called after {@link setCategory}, but not if called before.
     *
     * @param volume New volume, float value ( 0.0f - 1.0f ).
     */
    setVolume(volume: number): Sound;

    getVolume(): number;

    /**
     * Updates the position of this sound
     *
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     */
    setPosition(x: number, y: number, z: number): Sound;

    /**
     * Sets this sound's pitch.
     *
     * @param pitch A float value ( 0.5f - 2.0f ).
     */
    setPitch(pitch: number): Sound;

    getPitch(): number;

    /**
     * Sets the attenuation (fade out over space) of the song.
     * Models are:
     *  NONE(0) - no fade
     *  ROLLOFF(1) - this is the default, meant to be somewhat realistic
     *  LINEAR(2) - fades out linearly, as the name implies
     *
     * @param model the model
     */
    setAttenuation(model: number): Sound;

    /**
     * Plays/resumes the sound
     */
    play(): void;

    /**
     * Pauses the sound, to be resumed later
     */
    pause(): void;

    /**
     * Completely stops the sound
     */
    stop(): void;

    /**
     * Immediately restarts the sound
     */
    rewind(): void;
  }

  interface ISoundConfig {
    /**filename, relative to ChatTriggers assets directory */
    source: string;
    /**whether or not this sound should be prioritized, defaults to false */
    priority?: boolean;
    /**whether or not to loop this sound over and over, defaults to false */
    loop?: boolean;
    /**whether or not to stream this sound rather than preload it (should be true for large files), defaults to false */
    stream?: boolean;
    /**
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
     * which category this sound should be a part of, see {@link #setCategory(String)}
     */
    category?:
      | "MASTER"
      | "MUSIC"
      | "RECORDS"
      | "WEATHER"
      | "BLOCKS"
      | "MOBS"
      | "ANIMALS"
      | "PLAYERS"
      | "AMBIENT";
    /**
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
     * volume of the sound, see {@link #setVolume(float)}
     **/
    volume?: number;
    /**
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
     * pitch of the sound, see {@link #setPitch(float)}
     */
    pitch?: number;
    /**
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
     * location of the sound, see {@link #setPosition(float, float, float)}. Defaults to the players position
     */
    x?: number;
    /**
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
     * location of the sound, see {@link #setPosition(float, float, float)}. Defaults to the players position
     */
    y?: number;
    /**
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
     * location of the sound, see {@link #setPosition(float, float, float)}. Defaults to the players position
     */
    z?: number;
    /**
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED)
     * fade out model of the sound, see {@link #setAttenuation(int)}
     */
    attenuation?: number;
  }

  class Chunk {
    constructor(chunk: MCChunk);
    readonly chunk: MCChunk;

    /**
     * Gets the x position of the chunk
     */
    getX(): number;
    /**
     * Gets the z position of the chunk
     */
    getZ(): number;

    /**
     * Gets the minimum x coordinate of a block in the chunk
     *
     * @return the minimum x coordinate
     */
    getMinBlockX(): number;

    /**
     * Gets the minimum z coordinate of a block in the chunk
     *
     * @return the minimum z coordinate
     */
    getMinBlockZ(): number;

    /**
     * Gets the skylight level at the given position. This is the value seen in the debug (F3) menu
     *
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     * @return the skylight level at the location
     */
    getSkyLightLevel(x: number, y: number, z: number): number;

    /**
     * Gets the block light level at the given position. This is the value seen in the debug (F3) menu
     *
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     * @return the block light level at the location
     */
    getBlockLightLevel(x: number, y: number, z: number): number;

    /**
     * Gets every entity in this chunk
     *
     * @return the entity list
     */
    getAllEntities(): Entity[];

    /**
     * Gets every entity in this chunk of a certain class
     *
     * @param clazz the class to filter for (Use `Java.type().class` to get this)
     * @return the entity list
     */
    getAllEntitiesOfType(clazz: JavaClass<Entity>): Entity[];

    /**
     * Gets every tile entity in this chunk
     *
     * @return the tile entity list
     */
    getAllTileEntities(): TileEntity[];

    /**
     * Gets every tile entity in this chunk of a certain class
     *
     * @param clazz the class to filter for (Use `Java.type().class` to get this)
     * @return the tile entity list
     */
    getAllTileEntitiesOfType(clazz: JavaClass<any>): TileEntity[];
  }

  class PotionEffect {
    readonly effect: MCPotionEffect;

    constructor(effect: MCPotionEffect);

    /**
     * Returns the translation key of the potion.
     * Ex: "potion.poison"
     */
    getName(): string;

    /**
     * Returns the localized name of the potion that
     * is displayed in the player's inventory.
     * Ex: "Poison"
     */
    getLocalizedName(): string;

    getAmplifier(): number;

    getDuration(): number;

    getID(): number;

    isAmbient(): boolean;

    isDurationMax(): boolean;

    showsParticles(): boolean;

    toString(): string;
  }

  class BlockFace {
    readonly oppositeIndex: number;
    readonly axisDirection: BlockFace$AxisDirection;
    readonly axis: BlockFace$Axis;
    readonly directionVec: Vec3i;

    constructor(
      oppositeIndex: number,
      axisDirection: BlockFace$AxisDirection,
      axis: BlockFace$Axis,
      directionVec: Vec3i,
    );

    static readonly DOWN: BlockFace;
    static readonly UP: BlockFace;
    static readonly NORTH: BlockFace;
    static readonly SOUTH: BlockFace;
    static readonly WEST: BlockFace;
    static readonly EAST: BlockFace;

    getOpposite(): BlockFace;

    getOffsetX(): number;
    getOffsetY(): number;
    getOffsetZ(): number;

    rotateAround(axis: BlockFace$Axis): BlockFace;

    rotateX(): BlockFace;
    rotateY(): BlockFace;
    rotateZ(): BlockFace;

    getName(): string;

    static readonly Plane: typeof BlockFace$Plane;
    static readonly AxisDirection: typeof BlockFace$AxisDirection;
    static readonly Axis: typeof BlockFace$Axis;

    static fromMCEnumFacing(facing: MCEnumFacing): BlockFace;
  }

  class BlockPos extends Vec3i {
    constructor(x: number, y: number, z: number);

    constructor(pos: Vec3i);
    constructor(pos: MCBlockPos);
    constructor(source: Entity);

    add(other: Vec3i): BlockPos;
    add(x: number, y: number, z: number): BlockPos;

    plus(other: Vec3i): BlockPos;

    subtract(other: Vec3i): BlockPos;
    subtract(x: number, y: number, z: number): BlockPos;

    minus(other: Vec3i): BlockPos;

    up(n?: number): BlockPos;
    down(n?: number): BlockPos;
    north(n?: number): BlockPos;
    south(n?: number): BlockPos;
    east(n?: number): BlockPos;
    west(n?: number): BlockPos;

    offset(facing: BlockFace, n?: number): BlockPos;

    toMCBlock(): MCBlockPos;
  }

  /**
   * An immutable wrapper around Minecraft's Block object. Note
   * that this references a block "type", and not an actual block
   * in the world. If a reference to a particular block is needed,
   * use {@link Block}
   */
  class BlockType {
    readonly mcBlock: MCBlock;

    constructor(block: BlockType);
    constructor(blockName: string);
    constructor(blockID: number);
    constructor(item: Item);

    /**
     * Returns a Block based on this block and the
     * provided BlockPos
     *
     * @param blockPos the block position
     * @return a Block object
     */
    withBlockPos(blockPos: BlockPos): Block;

    getID(): number;

    /**
     * Gets the block's registry name.
     * Example: minecraft:planks
     *
     * @return the block's registry name
     */
    getRegistryName(): string;

    /**
     * Gets the block's unlocalized name.
     * Example: tile.wood
     *
     * @return the block's unlocalized name
     */
    getUnlocalizedName(): string;

    /**
     * Gets the block's localized name.
     * Example: Wooden Planks
     *
     * @return the block's localized name
     */
    getName(): string;

    getLightValue(): number;

    getDefaultState(): MCIBlockState;

    getDefaultMetadata(): number;

    canProvidePower(): boolean;

    getHarvestLevel(): number;

    isTranslucent(): boolean;

    toString(): `BlockType{name=${string}}`;
  }

  class Vec3i {
    readonly x: number;
    readonly y: number;
    readonly z: number;

    constructor(x: number, y: number, z: number);

    crossProduct(other: Vec3i): Vec3i;

    distanceSq(other: Vec3i): number;

    distance(other: Vec3i): number;

    distanceSqToCenter(x: number, y: number, z: number): number;

    compareTo(other: Vec3i): number;

    equals(other: any): boolean;

    hashCode(): number;

    toString(): `Vec3i{x=${number},y=${number},z=${number}}`;
  }

  class NBTBase {
    constructor(rawNBT: MCNBTBase);
    readonly rawNBT: MCNBTBase;
    /**Gets the type byte for the tag. */
    getId(): number;
    /**Creates a clone of the tag. */
    copy(): MCNBTBase;
    /**Return whether this compound has no tags. */
    hasNoTags(): boolean;
    hasTags(): boolean;

    equals(other: any): boolean;

    hashCode(): number;

    toString(): string;
  }

  class NBTTagCompound extends NBTBase {
    constructor(rawNBT: MCNBTTagCompound);
    readonly rawNBT: MCNBTTagCompound;
    tagMap: Map<string, MCNBTBase>;

    getTagMap(): NBTTagCompound["tagMap"];

    keySet: Set<string>;

    getKeySet(): NBTTagCompound["keySet"];

    NBTDataType: typeof NBTDataType;

    getTag(key: string): NBTBase | NBTTagCompound | null;

    getTagId(key: string): number;

    getByte(key: string): number;
    getShort(key: string): number;
    getInteger(key: string): number;
    getLong(key: string): number;
    getFloat(key: string): number;
    getDouble(key: string): number;
    getString(key: string): string;
    getByteArray(key: string): number[];
    getIntArray(key: string): number[];
    getBoolean(key: string): boolean;
    getCompoundTag(key: string): NBTTagCompound;
    getTagList(key: string, type: number): NBTTagList;

    get(key: string, type: NBTDataType, tagType?: number): NBTDataType;

    get(key: string): NBTBase;

    setNBTBase(key: string, value: NBTBase): NBTTagCompound;

    setNBTBase(key: string, value: MCNBTBase): NBTTagCompound;

    setByte(key: string, value: number): NBTTagCompound;

    setShort(key: string, value: number): NBTTagCompound;

    setInteger(key: string, value: number): NBTTagCompound;

    setLong(key: string, value: number): NBTTagCompound;

    setFloat(key: string, value: number): NBTTagCompound;

    setDouble(key: string, value: number): NBTTagCompound;

    setString(key: string, value: string): NBTTagCompound;

    setByteArray(key: string, value: number[]): NBTTagCompound;

    setBoolean(key: string, value: boolean): NBTTagCompound;

    set(key: string, value: NBTDataType): NBTTagCompound;

    removeTag(key: string): NBTTagCompound;

    toObject(): NBTType;
  }

  class NBTTagList extends NBTBase {
    constructor(rawNBT: MCNBTTagList);
    readonly rawNBT: MCNBTTagList;

    tagCount: number;
    getTagCount(): number;

    appendTag(nbt: NBTBase): NBTTagList;

    appendTag(nbt: MCNBTBase): NBTTagList;

    set(id: number, nbt: NBTBase): void;

    set(id: number, nbt: MCNBTBase): void;

    insertTag(index: number, nbt: NBTBase): NBTTagList;

    insertTag(index: number, nbt: MCNBTBase): NBTTagList;

    removeTag(index: number): MCNBTBase;

    getCompoundTagAt(index: number): MCNBTTagCompound;

    getIntArrayAt(index: number): number[];

    getDoubleAt(index: number): number;

    getFloatAt(index: number): number;

    getStringTagAt(index: number): string;

    get(index: number): MCNBTBase;

    get(
      index: number,
      type: NBTTagCompound["NBTDataType"],
    ): number | string | number[] | MCNBTTagCompound | NBTBase;

    toArray(): NBTType[];
  }

  class Player {
    readonly INSTANCE: Player;

    asPlayerMP(): PlayerMP;
    static asPlayerMP(): PlayerMP;

    /**
     * Gets Minecraft's EntityPlayerSP object representing the user
     *
     * @return The Minecraft EntityPlayerSP object representing the user
     */
    getPlayer(): MCEntityPlayerSP;
    /**
     * Gets Minecraft's EntityPlayerSP object representing the user
     *
     * @return The Minecraft EntityPlayerSP object representing the user
     */
    static getPlayer(): MCEntityPlayerSP;

    getTeam(): Team | null;
    static getTeam(): Team | null;

    getX(): number;
    static getX(): number;

    getY(): number;
    static getY(): number;

    getZ(): number;
    static getZ(): number;

    /**
     * Gets the player's x motion.
     * This is the amount the player will move in the x direction next tick.
     *
     * @return the player's x motion
     */
    getMotionX(): number;
    /**
     * Gets the player's x motion.
     * This is the amount the player will move in the x direction next tick.
     *
     * @return the player's x motion
     */
    static getMotionX(): number;

    /**
     * Gets the player's y motion.
     * This is the amount the player will move in the y direction next tick.
     *
     * @return the player's y motion
     */
    getMotionY(): number;
    /**
     * Gets the player's y motion.
     * This is the amount the player will move in the y direction next tick.
     *
     * @return the player's y motion
     */
    static getMotionY(): number;

    /**
     * Gets the player's z motion.
     * This is the amount the player will move in the z direction next tick.
     *
     * @return the player's z motion
     */
    getMotionZ(): number;
    /**
     * Gets the player's z motion.
     * This is the amount the player will move in the z direction next tick.
     *
     * @return the player's z motion
     */
    static getMotionZ(): number;

    /**
     * Gets the player's camera pitch.
     *
     * @return the player's camera pitch
     */
    getPitch(): number;
    /**
     * Gets the player's camera pitch.
     *
     * @return the player's camera pitch
     */
    static getPitch(): number;

    /**
     * Gets the player's camera yaw.
     *
     * @return the player's camera yaw
     */
    getYaw(): number;
    /**
     * Gets the player's camera yaw.
     *
     * @return the player's camera yaw
     */
    static getYaw(): number;

    /**
     * Gets the player's yaw rotation without wrapping.
     *
     * @return the yaw
     */
    getRawYaw(): number;
    /**
     * Gets the player's yaw rotation without wrapping.
     *
     * @return the yaw
     */
    static getRawYaw(): number;

    /**
     * Gets the player's username.
     *
     * @return the player's username
     */
    getName(): string;
    /**
     * Gets the player's username.
     *
     * @return the player's username
     */
    static getName(): string;

    getUUID(): string;
    static getUUID(): string;

    getUUIDObj(): JavaUUID;
    static getUUIDObj(): JavaUUID;

    getHP(): number;
    static getHP(): number;

    getHunger(): number;
    static getHunger(): number;

    getSaturation(): number;
    static getSaturation(): number;

    getArmorPoints(): number;
    static getArmorPoints(): number;

    /**
     * Gets the player's air level.
     *
     * The returned value will be an integer. If the player is not taking damage, it
     * will be between 300 (not in water) and 0. If the player is taking damage, it
     * will be between -20 and 0, getting reset to 0 every time the player takes damage.
     *
     * @return the player's air level
     */
    getAirLevel(): number;
    /**
     * Gets the player's air level.
     *
     * The returned value will be an integer. If the player is not taking damage, it
     * will be between 300 (not in water) and 0. If the player is taking damage, it
     * will be between -20 and 0, getting reset to 0 every time the player takes damage.
     *
     * @return the player's air level
     */
    static getAirLevel(): number;

    getXPLevel(): number;
    static getXPLevel(): number;

    getXPProgress(): number;
    static getXPProgress(): number;

    getBiome():
      | "Ocean"
      | "Plains"
      | "Desert"
      | "Extreme Hills"
      | "Forest"
      | "Taiga"
      | "Swampland"
      | "River"
      | "Hell"
      | "The End"
      | "FrozenOcean"
      | "FrozenRiver"
      | "Ice Plains"
      | "Ice Mountains"
      | "MushroomIsland"
      | "MushroomIslandShore"
      | "Beach"
      | "DesertHills"
      | "ForestHills"
      | "TaigaHills"
      | "Extreme Hills Edge"
      | "Jungle"
      | "JungleHills"
      | "JungleEdge"
      | "Deep Ocean"
      | "Stone Beach"
      | "Cold Beach"
      | "Birch Forest"
      | "Birch Forest Hills"
      | "Roofed Forest"
      | "Cold Taiga"
      | "Cold Taiga Hills"
      | "Mega Taiga"
      | "Mega Taiga Hills"
      | "Extreme Hills+"
      | "Savanna"
      | "Savanna Plateau"
      | "Mesa"
      | "Mesa Plateau F"
      | "Mesa Plateau";
    static getBiome():
      | "Ocean"
      | "Plains"
      | "Desert"
      | "Extreme Hills"
      | "Forest"
      | "Taiga"
      | "Swampland"
      | "River"
      | "Hell"
      | "The End"
      | "FrozenOcean"
      | "FrozenRiver"
      | "Ice Plains"
      | "Ice Mountains"
      | "MushroomIsland"
      | "MushroomIslandShore"
      | "Beach"
      | "DesertHills"
      | "ForestHills"
      | "TaigaHills"
      | "Extreme Hills Edge"
      | "Jungle"
      | "JungleHills"
      | "JungleEdge"
      | "Deep Ocean"
      | "Stone Beach"
      | "Cold Beach"
      | "Birch Forest"
      | "Birch Forest Hills"
      | "Roofed Forest"
      | "Cold Taiga"
      | "Cold Taiga Hills"
      | "Mega Taiga"
      | "Mega Taiga Hills"
      | "Extreme Hills+"
      | "Savanna"
      | "Savanna Plateau"
      | "Mesa"
      | "Mesa Plateau F"
      | "Mesa Plateau";

    /**
     * Gets the light level at the player's current position.
     *
     * @return the light level at the player's current position
     */
    getLightLevel(): number;
    /**
     * Gets the light level at the player's current position.
     *
     * @return the light level at the player's current position
     */
    static getLightLevel(): number;

    isMoving(): boolean;
    static isMoving(): boolean;

    isSneaking(): boolean;
    static isSneaking(): boolean;

    isSprinting(): boolean;
    static isSprinting(): boolean;

    /**
     * Checks if player can be pushed by water.
     *
     * @return true if the player is flying, false otherwise
     */
    isFlying(): boolean;
    /**
     * Checks if player can be pushed by water.
     *
     * @return true if the player is flying, false otherwise
     */
    static isFlying(): boolean;

    isSleeping(): boolean;
    static isSleeping(): boolean;

    /**
     * Gets the direction the player is facing.
     * Example: "South West"
     *
     * @return The direction the player is facing, one of the four cardinal directions
     */
    facing():
      | "South"
      | "South West"
      | "West"
      | "North West"
      | "North"
      | "North East"
      | "East"
      | "South East"
      | "";
    /**
     * Gets the direction the player is facing.
     * Example: "South West"
     *
     * @return The direction the player is facing, one of the four cardinal directions
     */
    static facing():
      | "South"
      | "South West"
      | "West"
      | "North West"
      | "North"
      | "North East"
      | "East"
      | "South East"
      | "";

    getActivePotionEffects(): PotionEffect[];
    static getActivePotionEffects(): PotionEffect[];

    /**
     * Gets the current object that the player is looking at,
     * whether that be a block or an entity. Returns an air {@link BlockType} when not looking
     * at anything.
     *
     * @return the {@link Block}, {@link Entity}, {@link Sign}, or {@link BlockType} being looked at
     */
    lookingAt(): Block | Sign | Entity | BlockType;
    /**
     * Gets the current object that the player is looking at,
     * whether that be a block or an entity. Returns an air {@link BlockType} when not looking
     * at anything.
     *
     * @return the {@link Block}, {@link Entity}, {@link Sign}, or {@link BlockType} being looked at
     */
    static lookingAt(): Block | Sign | Entity | BlockType;

    getHeldItem(): Item | null;
    static getHeldItem(): Item | null;

    setHeldItemIndex(index: number): void;
    static setHeldItemIndex(index: number): void;

    getHeldItemIndex(): number;
    static getHeldItemIndex(): number;

    /**
     * Gets the inventory of the player, i.e. the inventory accessed by 'e'.
     *
     * @return the player's inventory
     */
    getInventory(): Inventory | null;
    /**
     * Gets the inventory of the player, i.e. the inventory accessed by 'e'.
     *
     * @return the player's inventory
     */
    static getInventory(): Inventory | null;

    /**
     * Gets the display name for the player,
     * i.e. the name shown in tab list and in the player's nametag.
     * @return the display name
     */
    getDisplayName(): TextComponent;
    /**
     * Gets the display name for the player,
     * i.e. the name shown in tab list and in the player's nametag.
     * @return the display name
     */
    static getDisplayName(): TextComponent;

    /**
     * Sets the name for this player shown in tab list
     *
     * @param textComponent the new name to display
     */
    setTabDisplayName(textComponent: TextComponent): void;
    /**
     * Sets the name for this player shown in tab list
     *
     * @param textComponent the new name to display
     */
    static setTabDisplayName(textComponent: TextComponent): void;

    /**
     * @deprecated Use the better named method getContainer
     */
    getOpenedInventory(): Inventory | undefined;
    /**
     * @deprecated Use the better named method getContainer
     */
    static getOpenedInventory(): Inventory | undefined;

    /**
     * Gets the container the user currently has open, i.e. a chest.
     *
     * @return the currently opened container
     */
    getContainer(): Inventory | undefined;
    /**
     * Gets the container the user currently has open, i.e. a chest.
     *
     * @return the currently opened container
     */
    static getContainer(): Inventory | undefined;

    /**
     * Draws the player in the GUI
     */
    draw(x: number, y: number, rotate?: boolean): Player;
    /**
     * Draws the player in the GUI
     */
    static draw(
      x: number,
      y: number,
      rotate?: boolean,
      showNametag?: boolean,
      showArmor?: boolean,
      showCape?: boolean,
      showHeldItem?: boolean,
      showArrow?: boolean,
    ): Player;

    getLastX(): number;
    static getLastX(): number;

    getLastY(): number;
    static getLastY(): number;

    getLastZ(): number;
    static getLastZ(): number;

    getRenderX(): number;
    static getRenderX(): number;

    getRenderY(): number;
    static getRenderY(): number;

    getRenderZ(): number;
    static getRenderZ(): number;
  }
  namespace Player {
    class armor {
      /**
       * @return the item in the player's helmet slot
       */
      getHelmet(): Item | null;
      /**
       * @return the item in the player's helmet slot
       */
      static getHelmet(): Item | null;

      /**
       * @return the item in the player's chestplate slot
       */
      getChestplate(): Item | null;
      /**
       * @return the item in the player's chestplate slot
       */
      static getChestplate(): Item | null;

      /**
       * @return the item in the player's leggings slot
       */
      getLeggings(): Item | null;
      /**
       * @return the item in the player's leggings slot
       */
      static getLeggings(): Item | null;

      /**
       * @return the item in the player's boots slot
       */
      getBoots(): Item;
      /**
       * @return the item in the player's boots slot
       */
      static getBoots(): Item;
    }
  }

  interface testSound {
    (name: "ambient.cave.cave", volume: number, pitch: number): void;
  }

  class World {
    readonly INSTANCE: World;
    /**
     * Gets Minecraft's WorldClient object
     *
     * @return The Minecraft WorldClient object
     */
    getWorld(): MCWorldClient;
    /**
     * Gets Minecraft's WorldClient object
     *
     * @return The Minecraft WorldClient object
     */
    static getWorld(): MCWorldClient;

    isLoaded(): boolean;
    static isLoaded(): boolean;
    /**
     * Play a sound at the player location.
     *
     * @param name the name of the sound
     * @param volume the volume of the sound
     * @param pitch the pitch of the sound
     */
    static playSound(name: string, volume: number, pitch: number): void;
    static playSound(
      name: "ambient.cave.cave",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "ambient.weather.rain",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "ambient.weather.thunder",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.player.hurt.fall.big",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.neutral.hurt.fall.big",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.hostile.hurt.fall.big",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.player.hurt.fall.small",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.neutral.hurt.fall.small",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.hostile.hurt.fall.small",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.player.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.neutral.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.hostile.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.player.die",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.neutral.die",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.hostile.die",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "dig.cloth", volume: number, pitch: number): void;
    static playSound(name: "dig.glass", volume: number, pitch: number): void;
    static playSound(
      name: "game.potion.smash",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "dig.grass", volume: number, pitch: number): void;
    static playSound(name: "dig.gravel", volume: number, pitch: number): void;
    static playSound(name: "dig.sand", volume: number, pitch: number): void;
    static playSound(name: "dig.snow", volume: number, pitch: number): void;
    static playSound(name: "dig.stone", volume: number, pitch: number): void;
    static playSound(name: "dig.wood", volume: number, pitch: number): void;
    static playSound(name: "fire.fire", volume: number, pitch: number): void;
    static playSound(name: "fire.ignite", volume: number, pitch: number): void;
    static playSound(
      name: "item.fireCharge.use",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "fireworks.blast",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "fireworks.blast_far",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "fireworks.largeBlast",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "fireworks.largeBlast_far",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "fireworks.launch",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "fireworks.twinkle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "fireworks.twinkle_far",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.player.swim.splash",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.neutral.swim.splash",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.hostile.swim.splash",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.player.swim",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.neutral.swim",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "game.hostile.swim",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "liquid.lava", volume: number, pitch: number): void;
    static playSound(
      name: "liquid.lavapop",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "liquid.water", volume: number, pitch: number): void;
    static playSound(
      name: "minecart.base",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "minecart.inside",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "note.bass", volume: number, pitch: number): void;
    static playSound(
      name: "note.bassattack",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "note.bd", volume: number, pitch: number): void;
    static playSound(name: "note.harp", volume: number, pitch: number): void;
    static playSound(name: "note.hat", volume: number, pitch: number): void;
    static playSound(name: "note.pling", volume: number, pitch: number): void;
    static playSound(name: "note.snare", volume: number, pitch: number): void;
    static playSound(
      name: "portal.portal",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "portal.travel",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "portal.trigger",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.anvil_break",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.anvil_land",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.anvil_use",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "random.bow", volume: number, pitch: number): void;
    static playSound(
      name: "random.bowhit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "random.break", volume: number, pitch: number): void;
    static playSound(name: "random.burp", volume: number, pitch: number): void;
    static playSound(
      name: "random.chestclosed",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.chestopen",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "gui.button.press",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "random.click", volume: number, pitch: number): void;
    static playSound(
      name: "random.door_open",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.door_close",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "random.drink", volume: number, pitch: number): void;
    static playSound(name: "random.eat", volume: number, pitch: number): void;
    static playSound(
      name: "random.explode",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "random.fizz", volume: number, pitch: number): void;
    static playSound(
      name: "game.tnt.primed",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "creeper.primed",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.levelup",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "random.orb", volume: number, pitch: number): void;
    static playSound(name: "random.pop", volume: number, pitch: number): void;
    static playSound(
      name: "random.splash",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.successful_hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "random.wood_click",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "step.cloth", volume: number, pitch: number): void;
    static playSound(name: "step.grass", volume: number, pitch: number): void;
    static playSound(name: "step.gravel", volume: number, pitch: number): void;
    static playSound(name: "step.ladder", volume: number, pitch: number): void;
    static playSound(name: "step.sand", volume: number, pitch: number): void;
    static playSound(name: "step.snow", volume: number, pitch: number): void;
    static playSound(name: "step.stone", volume: number, pitch: number): void;
    static playSound(name: "step.wood", volume: number, pitch: number): void;
    static playSound(
      name: "tile.piston.in",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "tile.piston.out",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.bat.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "mob.bat.hurt", volume: number, pitch: number): void;
    static playSound(name: "mob.bat.idle", volume: number, pitch: number): void;
    static playSound(name: "mob.bat.loop", volume: number, pitch: number): void;
    static playSound(
      name: "mob.bat.takeoff",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.blaze.breathe",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.blaze.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.blaze.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "mob.cat.hiss", volume: number, pitch: number): void;
    static playSound(name: "mob.cat.hitt", volume: number, pitch: number): void;
    static playSound(name: "mob.cat.meow", volume: number, pitch: number): void;
    static playSound(name: "mob.cat.purr", volume: number, pitch: number): void;
    static playSound(
      name: "mob.cat.purreow",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.chicken.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.chicken.plop",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.chicken.say",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.chicken.step",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "mob.cow.hurt", volume: number, pitch: number): void;
    static playSound(name: "mob.cow.say", volume: number, pitch: number): void;
    static playSound(name: "mob.cow.step", volume: number, pitch: number): void;
    static playSound(
      name: "mob.creeper.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.creeper.say",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.enderdragon.end",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.enderdragon.growl",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.enderdragon.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.enderdragon.wings",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.endermen.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.endermen.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.endermen.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.endermen.portal",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.endermen.scream",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.endermen.stare",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.ghast.affectionate_scream",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.ghast.charge",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.ghast.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.ghast.fireball",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.ghast.moan",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.ghast.scream",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.elder.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.elder.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.elder.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.land.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.land.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.land.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.curse",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.attack",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.guardian.flop",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.angry",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.armor",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.breathe",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.donkey.angry",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.donkey.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.donkey.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.donkey.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.gallop",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.jump",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.land",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.leather",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.skeleton.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.skeleton.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.skeleton.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.soft",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.wood",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.zombie.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.zombie.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.horse.zombie.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.irongolem.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.irongolem.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.irongolem.throw",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.irongolem.walk",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.magmacube.big",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.magmacube.jump",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.magmacube.small",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.pig.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "mob.pig.say", volume: number, pitch: number): void;
    static playSound(name: "mob.pig.step", volume: number, pitch: number): void;
    static playSound(
      name: "mob.rabbit.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.rabbit.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.rabbit.hop",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.rabbit.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.sheep.say",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.sheep.shear",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.sheep.step",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.silverfish.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.silverfish.kill",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.silverfish.say",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.silverfish.step",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.skeleton.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.skeleton.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.skeleton.say",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.skeleton.step",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.slime.attack",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.slime.big",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.slime.small",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.spider.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.spider.say",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.spider.step",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.villager.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.villager.haggle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.villager.hit",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.villager.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.villager.no",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.villager.yes",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wither.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wither.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wither.idle",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wither.shoot",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wither.spawn",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.bark",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.growl",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.howl",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.panting",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.shake",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.step",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.wolf.whine",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.death",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.hurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.infect",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.metal",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.remedy",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.say",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.step",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.unfect",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.wood",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombie.woodbreak",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombiepig.zpig",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombiepig.zpigangry",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombiepig.zpigdeath",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "mob.zombiepig.zpighurt",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "records.11", volume: number, pitch: number): void;
    static playSound(name: "records.13", volume: number, pitch: number): void;
    static playSound(
      name: "records.blocks",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "records.cat", volume: number, pitch: number): void;
    static playSound(
      name: "records.chirp",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "records.far", volume: number, pitch: number): void;
    static playSound(name: "records.mall", volume: number, pitch: number): void;
    static playSound(
      name: "records.mellohi",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "records.stal", volume: number, pitch: number): void;
    static playSound(
      name: "records.strad",
      volume: number,
      pitch: number,
    ): void;
    static playSound(name: "records.wait", volume: number, pitch: number): void;
    static playSound(name: "records.ward", volume: number, pitch: number): void;
    static playSound(name: "music.menu", volume: number, pitch: number): void;
    static playSound(name: "music.game", volume: number, pitch: number): void;
    static playSound(
      name: "music.game.creative",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "music.game.end",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "music.game.end.dragon",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "music.game.end.credits",
      volume: number,
      pitch: number,
    ): void;
    static playSound(
      name: "music.game.nether",
      volume: number,
      pitch: number,
    ): void;

    /**
     * Play a record at location x, y, and z.
     * Use null as name in the same location to stop record.
     *
     * @param name the name of the sound/record
     * @param x the x location
     * @param y the y location
     * @param z the z location
     */
    playRecord(name: string, x: number, y: number, z: number): void;
    /**
     * Play a record at location x, y, and z.
     * Use null as name in the same location to stop record.
     *
     * @param name the name of the sound/record
     * @param x the x location
     * @param y the y location
     * @param z the z location
     */
    static playRecord(name: string, x: number, y: number, z: number): void;

    stopAllSounds(): void;
    static stopAllSounds(): void;

    isRaining(): boolean;
    static isRaining(): boolean;

    getRainingStrength(): number;
    static getRainingStrength(): number;

    getTime(): number;
    static getTime(): number;

    getDifficulty(): "PEACEFUL" | "EASY" | "NORMAL" | "HARD";
    static getDifficulty(): "PEACEFUL" | "EASY" | "NORMAL" | "HARD";

    getMoonPhase(): number;
    static getMoonPhase(): number;

    getSeed(): number;
    static getSeed(): number;

    getType():
      | "default"
      | "flat"
      | "largeBiomes"
      | "amplified"
      | "customized"
      | "debug_all_block_states"
      | "default_1_1";
    static getType():
      | "default"
      | "flat"
      | "largeBiomes"
      | "amplified"
      | "customized"
      | "debug_all_block_states"
      | "default_1_1";

    /**
     * Gets the {@link Block} at a location in the world.
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the {@link Block} at the location
     */
    getBlockAt(x: number, y: number, z: number): Block;
    /**
     * Gets the {@link Block} at a location in the world.
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the {@link Block} at the location
     */
    static getBlockAt(x: number, y: number, z: number): Block;

    /**
     * Gets the {@link Block} at a location in the world.
     *
     * @param pos The block position
     * @return the {@link Block} at the location
     */
    getBlockAt(pos: BlockPos): Block;
    /**
     * Gets the {@link Block} at a location in the world.
     *
     * @param pos The block position
     * @return the {@link Block} at the location
     */
    static getBlockAt(pos: BlockPos): Block;

    /**
     * Gets the {@link MCIBlockState IBlockState} at a location in the world.
     *
     * @param pos The block position
     * @return the {@link MCIBlockState IBlockState} at the location
     */
    getBlockStateAt(pos: BlockPos): MCIBlockState;
    /**
     * Gets the {@link MCIBlockState IBlockState} at a location in the world.
     *
     * @param pos The block position
     * @return the {@link MCIBlockState IBlockState} at the location
     */
    static getBlockStateAt(pos: BlockPos): MCIBlockState;

    /**
     * Gets all of the players in the world, and returns their wrapped versions.
     *
     * @return the players
     */
    getAllPlayers(): PlayerMP[];
    /**
     * Gets all of the players in the world, and returns their wrapped versions.
     *
     * @return the players
     */
    static getAllPlayers(): PlayerMP[];

    /**
     * Gets a player by their username, must be in the currently loaded chunks!
     *
     * @param name the username
     * @return the player with said username, or null if they don't exist.
     */
    getPlayerByName(name: string): PlayerMP;
    /**
     * Gets a player by their username, must be in the currently loaded chunks!
     *
     * @param name the username
     * @return the player with said username, or null if they don't exist.
     */
    static getPlayerByName(name: string): PlayerMP;

    hasPlayer(name: string): boolean;
    static hasPlayer(name: string): boolean;

    getChunk(x: number, y: number, z: number): Chunk;
    static getChunk(x: number, y: number, z: number): Chunk;

    getAllEntities(): Entity[];
    static getAllEntities(): Entity[];

    /**
     * Gets every entity loaded in the world of a certain class
     *
     * @param clazz the class to filter for (Use `Java.type().class` to get this)
     * @return the entity list
     */
    getAllEntitiesOfType(clazz: JavaClass<any>): Entity[];
    /**
     * Gets every entity loaded in the world of a certain class
     *
     * @param clazz the class to filter for (Use `Java.type().class` to get this)
     * @return the entity list
     */
    static getAllEntitiesOfType(clazz: JavaClass<any>): Entity[];

    getAllTileEntities(): TileEntity[];
    static getAllTileEntities(): TileEntity[];

    getAllTileEntitiesOfType(clazz: JavaClass<any>): TileEntity[];
    static getAllTileEntitiesOfType(clazz: JavaClass<any>): TileEntity[];
  }
  namespace World {
    /**
     * World border object to get border parameters
     */
    class border {
      /**
       * Gets the border center x location.
       *
       * @return the border center x location
       */
      getCenterX(): number;
      /**
       * Gets the border center x location.
       *
       * @return the border center x location
       */
      static getCenterX(): number;

      /**
       * Gets the border center z location.
       *
       * @return the border center z location
       */
      getCenterZ(): number;
      /**
       * Gets the border center z location.
       *
       * @return the border center z location
       */
      static getCenterZ(): number;

      /**
       * Gets the border size.
       *
       * @return the border size
       */
      getSize(): number;
      /**
       * Gets the border size.
       *
       * @return the border size
       */
      static getSize(): number;

      /**
       * Gets the border target size.
       *
       * @return the border target size
       */
      getTargetSize(): number;
      /**
       * Gets the border target size.
       *
       * @return the border target size
       */
      static getTargetSize(): number;

      /**
       * Gets the border time until the target size is met.
       *
       * @return the border time until target
       */
      getTimeUntilTarget(): number;
      /**
       * Gets the border time until the target size is met.
       *
       * @return the border time until target
       */
      static getTimeUntilTarget(): number;
    }

    /**
     * World spawn object for getting spawn location.
     */
    class spawn {
      /**
       * Gets the spawn x location.
       *
       * @return the spawn x location.
       */
      getX(): number;
      /**
       * Gets the spawn x location.
       *
       * @return the spawn x location.
       */
      static getX(): number;

      /**
       * Gets the spawn y location.
       *
       * @return the spawn y location.
       */
      getY(): number;
      /**
       * Gets the spawn y location.
       *
       * @return the spawn y location.
       */
      static getY(): number;

      /**
       * Gets the spawn z location.
       *
       * @return the spawn z location.
       */
      getZ(): number;
      /**
       * Gets the spawn z location.
       *
       * @return the spawn z location.
       */
      static getZ(): number;
    }

    class particle {
      /**
       * Gets an array of all the different particle names you can pass
       * to {@link spawnParticle}
       *
       * @return the array of name strings
       */
      getParticleNames(): string[];
      /**
       * Gets an array of all the different particle names you can pass
       * to {@link spawnParticle}
       *
       * @return the array of name strings
       */
      static getParticleNames(): string[];

      /**
       * Spawns a particle into the world with the given attributes,
       * which can be configured further with the returned {@link Particle}
       *
       * @param particle the name of the particle to spawn, see {@link particle.getParticleNames}
       * @param x the x coordinate to spawn the particle at
       * @param y the y coordinate to spawn the particle at
       * @param z the z coordinate to spawn the particle at
       * @param xSpeed the motion the particle should have in the x direction
       * @param ySpeed the motion the particle should have in the y direction
       * @param zSpeed the motion the particle should have in the z direction
       * @return the newly spawned particle for further configuration
       */
      spawnParticle(
        particle: string,
        x: number,
        y: number,
        z: number,
        xSpeed: number,
        ySpeed: number,
        zSpeed: number,
      ): Particle;
      /**
       * Spawns a particle into the world with the given attributes,
       * which can be configured further with the returned {@link Particle}
       *
       * @param particle the name of the particle to spawn, see {@link particle.getParticleNames}
       * @param x the x coordinate to spawn the particle at
       * @param y the y coordinate to spawn the particle at
       * @param z the z coordinate to spawn the particle at
       * @param xSpeed the motion the particle should have in the x direction
       * @param ySpeed the motion the particle should have in the y direction
       * @param zSpeed the motion the particle should have in the z direction
       * @return the newly spawned particle for further configuration
       */
      static spawnParticle(
        particle: string,
        x: number,
        y: number,
        z: number,
        xSpeed: number,
        ySpeed: number,
        zSpeed: number,
      ): Particle;

      spawnParticle(particle: MCEntityFX): void;
      static spawnParticle(particle: MCEntityFX): void;
    }
  }

  class Server {
    readonly INSTANCE: Server;
    /**
     * Gets the current server's IP, or "localhost" if the player
     * is in a single-player world.
     *
     * @return The IP of the current server
     */
    getIP(): string;
    /**
     * Gets the current server's IP, or "localhost" if the player
     * is in a single-player world.
     *
     * @return The IP of the current server
     */
    static getIP(): string;

    /**
     * Gets the current server's name, or "SinglePlayer" if the player
     * is in a single-player world.
     *
     * @return The name of the current server
     */
    getName(): string;
    /**
     * Gets the current server's name, or "SinglePlayer" if the player
     * is in a single-player world.
     *
     * @return The name of the current server
     */
    static getName(): string;

    /**
     * Gets the current server's MOTD, or "SinglePlayer" if the player
     * is in a single-player world.
     *
     * @return The MOTD of the current server
     */
    getMOTD(): string;
    /**
     * Gets the current server's MOTD, or "SinglePlayer" if the player
     * is in a single-player world.
     *
     * @return The MOTD of the current server
     */
    static getMOTD(): string;

    /**
     * Gets the ping to the current server, or 5 if the player
     * is in a single-player world.
     *
     * @return The ping to the current server
     */
    getPing(): number;
    /**
     * Gets the ping to the current server, or 5 if the player
     * is in a single-player world.
     *
     * @return The ping to the current server
     */
    static getPing(): number;
  }

  class TabList {
    readonly INSTANCE: TabList;
    /**
     * Gets names set in scoreboard objectives
     *
     * @return The formatted names
     */
    getNamesByObjectives(): string[];
    /**
     * Gets names set in scoreboard objectives
     *
     * @return The formatted names
     */
    static getNamesByObjectives(): string[];

    getNames(): string[];
    static getNames(): string[];

    /**
     * Gets all names in tabs without formatting
     *
     * @return the unformatted names
     */
    getUnformattedNames(): string[];
    /**
     * Gets all names in tabs without formatting
     *
     * @return the unformatted names
     */
    static getUnformattedNames(): string[];

    getHeaderMessage(): Message;
    static getHeaderMessage(): Message;

    getHeader(): string;
    static getHeader(): string;

    /**
     * Sets the header text for the TabList.
     * If `header` is null, it will remove the header entirely
     *
     * @param header the header to set, or null to clear
     */
    setHeader(header: string | Message | MCIChatComponent | null): void;
    /**
     * Sets the header text for the TabList.
     * If `header` is null, it will remove the header entirely
     *
     * @param header the header to set, or null to clear
     */
    static setHeader(header: string | Message | MCIChatComponent | null): void;

    clearHeader(): void;
    static clearHeader(): void;

    getFooterMessage(): Message;
    static getFooterMessage(): Message;

    getFooter(): string;
    static getFooter(): string;

    /**
     * Sets the footer text for the TabList.
     * If `footer` is null, it will remove the footer entirely
     *
     * @param footer the footer to set, or null to clear
     */
    setFooter(footer: string | Message | MCIChatComponent | null): void;
    /**
     * Sets the footer text for the TabList.
     * If `footer` is null, it will remove the footer entirely
     *
     * @param footer the footer to set, or null to clear
     */
    static setFooter(footer: string | Message | MCIChatComponent | null): void;

    clearFooter(): void;
    static clearFooter(): void;
  }

  class Scoreboard {
    readonly INSTANCE: Scoreboard;

    getScoreboard(): MCScoreboard | null;
    static getScoreboard(): MCScoreboard | null;

    getSidebar(): MCScoreObjective | null;
    static getSidebar(): MCScoreObjective | null;

    /**
     * Alias for {@link Scoreboard.getTitle}.
     *
     * @return the scoreboard title
     */
    getScoreboardTitle(): string;
    /**
     * Alias for {@link Scoreboard.getTitle}.
     *
     * @return the scoreboard title
     */
    static getScoreboardTitle(): string;

    /**
     * Gets the top-most string which is displayed on the scoreboard. (doesn't have a score on the side).
     * Be aware that this can contain color codes.
     *
     * @return the scoreboard title
     */
    getTitle(): string;
    /**
     * Gets the top-most string which is displayed on the scoreboard. (doesn't have a score on the side).
     * Be aware that this can contain color codes.
     *
     * @return the scoreboard title
     */
    static getTitle(): string;

    /**
     * Sets the scoreboard title.
     *
     * @param title the new title
     * @return the scoreboard title
     */
    setTitle(title: string): void;
    /**
     * Sets the scoreboard title.
     *
     * @param title the new title
     * @return the scoreboard title
     */
    static setTitle(title: string): void;

    /**
     * Get all currently visible strings on the scoreboard. (excluding title)
     * Be aware that this can contain color codes.
     *
     * @return the list of lines
     */
    getLines(descending?: boolean): Scoreboard.Score[];
    /**
     * Get all currently visible strings on the scoreboard. (excluding title)
     * Be aware that this can contain color codes.
     *
     * @return the list of lines
     */
    static getLines(descending?: boolean): Scoreboard.Score[];

    /**
     * Gets the line at the specified index (0 based)
     * Equivalent to Scoreboard.getLines().get(index)
     *
     * @param index the line index
     * @return the score object at the index
     */
    getLineByIndex(index: number): Scoreboard.Score;
    /**
     * Gets the line at the specified index (0 based)
     * Equivalent to Scoreboard.getLines().get(index)
     *
     * @param index the line index
     * @return the score object at the index
     */
    static getLineByIndex(index: number): Scoreboard.Score;

    /**
     * Gets a list of lines that have a certain score,
     * i.e. the numbers shown on the right
     *
     * @param score the score to look for
     * @return a list of actual score objects
     */
    getLinesByScore(score: number): Scoreboard.Score[];
    /**
     * Gets a list of lines that have a certain score,
     * i.e. the numbers shown on the right
     *
     * @param score the score to look for
     * @return a list of actual score objects
     */
    static getLinesByScore(score: number): Scoreboard.Score[];

    /**
     * Sets a line in the scoreboard to the specified name and score.
     *
     * @param score the score value for this item
     * @param line the string to display on said line
     * @param override whether to remove old lines with the same score
     */
    setLine(score: number, line: string, override: boolean): void;
    /**
     * Sets a line in the scoreboard to the specified name and score.
     *
     * @param score the score value for this item
     * @param line the string to display on said line
     * @param override whether to remove old lines with the same score
     */
    static setLine(score: number, line: string, override: boolean): void;

    setShouldRender(shouldRender: boolean): void;
    static setShouldRender(shouldRender: boolean): void;

    getShouldRender(): boolean;
    static getShouldRender(): boolean;

    resetCache(): void;
    static resetCache(): void;
  }
  namespace Scoreboard {
    class Score {
      constructor(score: MCScore);

      score: MCScore;

      /**
       * Gets the score point value for this score,
       * i.e. the number on the right of the board
       *
       * @return the actual point value
       */
      getPoints(): number;
      /**
       * Gets the score point value for this score,
       * i.e. the number on the right of the board
       *
       * @return the actual point value
       */
      static getPoints(): number;

      /**
       * Gets the display string of this score
       *
       * @return the display name
       */
      getName(): string;
      /**
       * Gets the display string of this score
       *
       * @return the display name
       */
      static getName(): string;

      toString(): string;
    }
  }
  /**
   * Creates a new Sign object wrapper.
   * Returned with {@link Player.lookingAt com.chattriggers.ctjs.minecraft.wrappers.Player.lookingAt} when looking at a sign.
   * Extends {@link Block}.
   *
   * @param block the {@link Block} to convert to a Sign
   */
  class Sign extends Block {
    constructor(block: Block);

    getLines(): Message[];

    getFormattedLines(): string[];

    getUnformattedLines(): string[];

    toString(): string;
  }

  class ReflectionHelper {
    static findField(clazz: JavaClass<any>, ...fieldNames: string[]): JavaField;

    static getPrivateValue<T, E>(
      classToAccess: JavaClass<T>,
      instance: T,
      fieldIndex: number,
    ): E;

    static setPrivateValue<T, E>(
      classToAccess: JavaClass<T>,
      instance: T,
      value: E,
      fieldIndex: number,
    ): void;

    static setPrivateValue<T, E>(
      classToAccess: JavaClass<T>,
      instance: T,
      value: E,
      ...fieldNames: string[]
    ): void;

    static getClass(loader: any, ...classNames: string[]): JavaClass<any>;

    static findMethod<E>(
      clazz: JavaClass<E>,
      instance: E,
      methodNames: string[],
      ...methodTypes: JavaClass<any>[]
    ): JavaMethod;
  }

  class Thread {
    /**
     * Allocates a new Thread
     */
    constructor(method: () => void);

    /**
     * Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds plus the specified number of nanoseconds, subject to the precision and accuracy of system timers and schedulers.
     */
    static sleep(millis: number, nanos?: number): void;
    /**
     * Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds plus the specified number of nanoseconds, subject to the precision and accuracy of system timers and schedulers.
     */
    sleep(millis: number, nanos?: number): void;

    /**
     * Returns a reference to the currently executing thread object.
     */
    currentThread(): JavaThread;
    /**
     * Returns a reference to the currently executing thread object.
     */
    static currentThread(): JavaThread;

    /**
     * Causes this thread to begin execution; the Java Virtual Machine calls the run method of this thread.
     */
    start(): void;
  }

  class ArrayList<T> {
    /**Constructs an empty list with an initial capacity of ten. */
    constructor();
    /**Constructs an empty list with the specified initial capacity. */
    constructor(initialCapacity: number);

    /**
     * Appends the specified element to the end of this list
     */
    add(e: T): boolean;

    /**
     * Inserts the specified element at the specified position in this list.
     */
    add(index: number, element: T): boolean;

    /**
     * Removes all of the elements from this list.
     */
    clear(): void;

    /**
     * Returns a shallow copy of this ArrayList instance.
     */
    clone(): ArrayList<T>;

    /**
     * Returns true if this list contains the specified element.
     */
    contains(o: T): boolean;

    /**
     * Increases the capacity of this ArrayList instance, if necessary, to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
     */
    ensureCapacity(minCapacity: number): void;

    /**
     * Returns the element at the specified position in this list.
     */
    get(index: number): T;

    /**
     * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     */
    indexOf(o: T): number;

    /**
     * Returns true if this list contains no elements.
     */
    isEmpty(): boolean;

    /**
     * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
     */
    lastIndexOf(o: T): number;

    /**
     * Removes the element at the specified position in this list.
     */
    remove(index: number): T;

    /**
     * Removes the first occurrence of the specified element from this list, if it is present.
     */
    remove(o: T): boolean;

    /**
     * Replaces the element at the specified position in this list with the specified element.
     */
    set(index: number, element: T): T;

    /**
     * Returns the number of elements in this list.
     */
    size(): number;

    /**
     * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
     */
    subList(fromIndex: number, toIndex: number): T[];

    /**
     * Returns an array containing all of the elements in this list in proper sequence (from first to last element).
     */
    toArray(): T[];

    /**
     * Returns an array containing all of the elements in this list in proper sequence (from first to last element); the runtime type of the returned array is that of the specified array.
     */
    toArray(a: T[]): T[];

    /**
     * Trims the capacity of this ArrayList instance to be the list's current size.
     */
    trimToSize(): void;
  }

  class HashMap<K, V> {
    /**
     * Constructs an empty HashMap with the default initial capacity (16) and the default load factor (0.75).
     */
    constructor();

    /**
     * Constructs an empty HashMap with the specified initial capacity and the default load factor (0.75).
     */
    constructor(initialCapacity: number);

    /**
     * Constructs an empty HashMap with the specified initial capacity and load factor.
     */
    constructor(initialCapacity: number, loadFactor: number);

    /**
     * Constructs a new HashMap with the same mappings as the specified Map.
     */
    constructor(m: Map<K, V>);

    /**
     * Removes all of the mappings from this map.
     */
    clear(): void;

    /**
     * Returns a shallow copy of this HashMap instance: the keys and values themselves are not cloned.
     */
    clone(): HashMap<K, V>;

    /**
     * Attempts to compute a mapping for the specified key and its current mapped value (or null if there is no current mapping).
     */
    compute(key: any, remappingFunction: (arg1: any, arg2: any) => any): any;

    /**
     * If the specified key is not already associated with a value (or is mapped to null), attempts to compute its value using the given mapping function and enters it into this map unless null.
     */
    computeIfAbsent(key: any, mappingFunction: (arg1: any) => any): any;

    /**
     * If the value for the specified key is present and non-null, attempts to compute a new mapping given the key and its current mapped value.
     */
    computeIfPresent(
      key: any,
      remappingFunction: (arg1: any, arg2: any) => any,
    ): any;

    /**
     * Returns true if this map contains a mapping for the specified key.
     */
    containsKey(key: K): boolean;

    /**
     * Returns true if this map maps one or more keys to the specified value.
     */
    containsValue(value: V): boolean;

    /**
     * Returns a Set view of the mappings contained in this map.
     */
    entrySet(): Set<any>;

    /**
     * Performs the given action for each entry in this map until all entries have been processed or the action throws an exception.
     */
    forEach(action: (arg1: any, arg2: any) => void): void;

    /**
     * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
     */
    get(key: K): V;

    /**
     * Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key.
     */
    getOrDefault(key: K, defaultValue: V): V;

    /**
     * Returns true if this map contains no key-value mappings.
     */
    isEmpty(): boolean;

    /**
     * Returns a Set view of the keys contained in this map.
     */
    keySet(): Set<K>;

    /**
     * If the specified key is not already associated with a value or is associated with null, associates it with the given non-null value.
     */
    merge(key: K, value: V, remappingFunction: (arg1: V, arg2: V) => V): V;

    /**
     * Associates the specified value with the specified key in this map.
     */
    put(key: K, value: V): V;

    /**
     * Copies all of the mappings from the specified map to this map.
     */
    putAll(m: Map<K, V>): void;
    /**
     * If the specified key is not already associated with a value (or is mapped to null) associates it with the given value and returns null, else returns the current value.
     */
    putIfAbsent(key: K, value: V): V;

    /**
     * Removes the mapping for the specified key from this map if present.
     */
    remove(key: K): any;

    /**
     * Removes the entry for the specified key only if it is currently mapped to the specified value.
     */
    remove(key: K, value: V): boolean;

    /**
     * Replaces the entry for the specified key only if it is currently mapped to some value.
     */
    replace(key: K, value: V): any;

    /**
     * Replaces the entry for the specified key only if currently mapped to the specified value.
     */
    replace(key: K, oldValue: V, newValue: V): boolean;

    /**
     * Replaces each entry's value with the result of invoking the given function on that entry until all entries have been processed or the function throws an exception.
     */
    replaceAll(func: (arg1: K, arg2: V) => V): void;

    /**
     * Returns the number of key-value mappings in this map.
     */
    size(): number;
  }

  /**A raw Keyboard interface. This can be used to poll the current state of the keys, or read all the keyboard presses / releases since the last read. */
  class Keyboard {
    /**
     * The special character meaning that no character was translated for the event.
     */
    static readonly CHAR_NONE: number;
    /**
     * Internal use - event size in bytes
     */
    static readonly EVENT_SIZE: number;

    static KEY_0: number;
    static KEY_1: number;
    static KEY_2: number;
    static KEY_3: number;
    static KEY_4: number;
    static KEY_5: number;
    static KEY_6: number;
    static KEY_7: number;
    static KEY_8: number;
    static KEY_9: number;
    static KEY_A: number;
    static KEY_ADD: number;
    static KEY_APOSTROPHE: number;
    static KEY_APPS: number;
    static KEY_AT: number;
    static KEY_AX: number;
    static KEY_B: number;
    static KEY_BACK: number;
    static KEY_BACKSLASH: number;
    static KEY_C: number;
    static KEY_CAPITAL: number;
    static KEY_CIRCUMFLEX: number;
    static KEY_CLEAR: number;
    static KEY_COLON: number;
    static KEY_COMMA: number;
    static KEY_CONVERT: number;
    static KEY_D: number;
    static KEY_DECIMAL: number;
    static KEY_DELETE: number;
    static KEY_DIVIDE: number;
    static KEY_DOWN: number;
    static KEY_E: number;
    static KEY_END: number;
    static KEY_EQUALS: number;
    static KEY_ESCAPE: number;
    static KEY_F: number;
    static KEY_F1: number;
    static KEY_F10: number;
    static KEY_F11: number;
    static KEY_F12: number;
    static KEY_F13: number;
    static KEY_F14: number;
    static KEY_F15: number;
    static KEY_F16: number;
    static KEY_F17: number;
    static KEY_F18: number;
    static KEY_F19: number;
    static KEY_F2: number;
    static KEY_F3: number;
    static KEY_F4: number;
    static KEY_F5: number;
    static KEY_F6: number;
    static KEY_F7: number;
    static KEY_F8: number;
    static KEY_F9: number;
    static KEY_FUNCTION: number;
    static KEY_G: number;
    static KEY_GRAVE: number;
    static KEY_H: number;
    static KEY_HOME: number;
    static KEY_I: number;
    static KEY_INSERT: number;
    static KEY_J: number;
    static KEY_K: number;
    static KEY_KANA: number;
    static KEY_KANJI: number;
    static KEY_L: number;
    static KEY_LBRACKET: number;
    static KEY_LCONTROL: number;
    static KEY_LEFT: number;
    static KEY_LMENU: number;
    static KEY_LMETA: number;
    static KEY_LSHIFT: number;
    /**
     * Deprecated.
     * Use KEY_LMETA instead
     */
    static KEY_LWIN: number;
    static KEY_M: number;
    static KEY_MINUS: number;
    static KEY_MULTIPLY: number;
    static KEY_N: number;
    static KEY_NEXT: number;
    static KEY_NOCONVERT: number;
    /**
     * The special keycode meaning that only the translated character is valid.
     */
    static KEY_NONE: number;
    static KEY_NUMLOCK: number;
    static KEY_NUMPAD0: number;
    static KEY_NUMPAD1: number;
    static KEY_NUMPAD2: number;
    static KEY_NUMPAD3: number;
    static KEY_NUMPAD4: number;
    static KEY_NUMPAD5: number;
    static KEY_NUMPAD6: number;
    static KEY_NUMPAD7: number;
    static KEY_NUMPAD8: number;
    static KEY_NUMPAD9: number;
    static KEY_NUMPADCOMMA: number;
    static KEY_NUMPADENTER: number;
    static KEY_NUMPADEQUALS: number;
    static KEY_O: number;
    static KEY_P: number;
    static KEY_PAUSE: number;
    static KEY_PERIOD: number;
    static KEY_POWER: number;
    static KEY_PRIOR: number;
    static KEY_Q: number;
    static KEY_R: number;
    static KEY_RBRACKET: number;
    static KEY_RCONTROL: number;
    static KEY_RETURN: number;
    static KEY_RIGHT: number;
    static KEY_RMENU: number;
    static KEY_RMETA: number;
    static KEY_RSHIFT: number;
    /**
     * Deprecated.
     * Use KEY_RMETA instead
     */
    static KEY_RWIN: number;
    static KEY_S: number;
    static KEY_SCROLL: number;
    static KEY_SECTION: number;
    static KEY_SEMICOLON: number;
    static KEY_SLASH: number;
    static KEY_SLEEP: number;
    static KEY_SPACE: number;
    static KEY_STOP: number;
    static KEY_SUBTRACT: number;
    static KEY_SYSRQ: number;
    static KEY_T: number;
    static KEY_TAB: number;
    static KEY_U: number;
    static KEY_UNDERLINE: number;
    static KEY_UNLABELED: number;
    static KEY_UP: number;
    static KEY_V: number;
    static KEY_W: number;
    static KEY_X: number;
    static KEY_Y: number;
    static KEY_YEN: number;
    static KEY_Z: number;
    static KEYBOARD_SIZE: number;

    /**
     * Check whether repeat events are currently reported or not.
     */
    static areRepeatEventsEnabled(): boolean;

    /**
     * "Create" the keyboard.
     */
    static create(): void;

    /**
     * "Destroy" the keyboard.
     */
    static destroy(): void;

    /**
     * Controls whether repeat events are reported or not.
     */
    static enableRepeatEvents(enable: boolean): void;

    static getEventCharacter(): number;
    /**
     * Please not that the key code returned is NOT valid against the current keyboard layout.
     */
    static getEventKey(): number;

    /**
     * Gets the state of the key that generated the current event
     */
    static getEventKeyState(): boolean;

    /**
     * Gets the time in nanoseconds of the current event.
     */
    static getEventNanoseconds(): number;

    static getKeyCount(): number;

    /**
     * Get's a key's index.
     */
    static getKeyIndex(keyName: string): number;

    /**
     * Gets a key's name
     */
    static getKeyName(key: number): string;

    /**
     * Gets the number of keyboard events waiting after doing a buffer enabled poll().
     */
    static getNumKeyboardEvents(): number;

    static isCreated(): boolean;

    /**
     * Checks to see if a key is down.
     */
    static isKeyDown(key: number): boolean;

    static isRepeatEvent(): boolean;

    /**
     * Gets the next keyboard event.
     */
    static next(): boolean;

    /**
     * Polls the keyboard for its current state.
     */
    static poll(): void;
  }

  class Action {
    constructor(slot: number, windowId: number);

    setSlot(slot: number): Action;

    setWindowId(windowId: number): Action;

    complete(): void;

    doClick(button: number, mode: number): void;

    getSlot(): number;

    /**
     * Creates a new action.
     * The Inventory must be a container, see {@link Inventory.isContainer}.
     * The slot can be -999 for outside of the gui
     *
     * @param inventory the inventory to complete the action on
     * @param slot the slot to complete the action on
     * @param typeString the type of action to do (CLICK, DRAG, DROP, KEY)
     * @return the new action
     */
    static of(inventory: Inventory, slot: number, typeString: string): Action;
  }

  namespace Action {
    class Companion {
      /**
       * Creates a new action.
       * The Inventory must be a container, see {@link Inventory.isContainer}.
       * The slot can be -999 for outside of the gui
       *
       * @param inventory the inventory to complete the action on
       * @param slot the slot to complete the action on
       * @param typeString the type of action to do (CLICK, DRAG, DROP, KEY)
       * @return the new action
       */
      static of(inventory: Inventory, slot: number, typeString: string): Action;
    }

    enum type {
      CLICK,
      DRAG,
      KEY,
      DROP,
    }
  }

  /**
   * An immutable reference to a placed block in the world. It
   * has a block type, a position, and optionally a specific face.
   */
  class Block {
    readonly type: BlockType;
    readonly pos: BlockPos;
    readonly face?: BlockFace;

    constructor(type: BlockType, pos: BlockPos, face?: BlockFace);

    readonly x: number;
    readonly y: number;
    readonly z: number;
    getX(): number;
    getY(): number;
    getZ(): number;

    withType(type: BlockType): Block;
    withPos(pos: BlockPos): Block;

    /**
     * Narrows this block to reference a certain face. Used by
     * {@link Player.lookingAt} to specify the block face
     * being looked at.
     */
    withFace(face: BlockFace): Block;

    getState(): MCIBlockState;

    getMetadata(): number;

    isPowered(): boolean;

    getRedstoneStrength(): number;

    /**
     * Checks whether the block can be mined with the tool in the player's hand
     *
     * @return whether the block can be mined
     */
    canBeHarvested(): boolean;

    canBeHarvestedWith(item: Item): boolean;

    toString(): string;
  }

  class Inventory implements JSONImpl {
    readonly inventory: MCIInventory;
    readonly container: MCContainer;

    constructor(inventory: MCIInventory);
    constructor(container: MCContainer);

    toJSON(key: string): string;

    /**
     * Gets the total size of the Inventory.
     * The player's inventory size is 36, 27 for the main inventory, plus 9 for the hotbar.
     * A single chest's size would be 63, because it also counts the player's inventory.
     *
     * @return the size of the Inventory
     */
    getSize(): number;

    /**
     * Gets the item in any slot, starting from 0.
     *
     * @param slot the slot index
     * @return the {@link Item} in that slot
     */
    getStackInSlot(slot: number): Item | null;

    /**
     * Returns the window identifier number of this Inventory.
     * This Inventory must be backed by a Container {@link isContainer}
     *
     * @return the window id
     */
    getWindowId(): number;

    doAction(action: Action): void;

    /**
     * Checks if an item can be shift clicked into a certain slot, i.e. coal into the bottom of a furnace.
     *
     * @param slot the slot index
     * @param item the item for checking
     * @return whether it can be shift clicked in
     */
    isItemValidForSlot(slot: number, item: Item): boolean;

    /**
     * @return a list of the {@link Item}s in an inventory
     */
    getItems(): (Item | null)[];

    /**
     * Checks whether the inventory contains the given item.
     *
     * @param item the item to check for
     * @return whether the inventory contains the item
     */
    contains(item: Item): boolean;

    /**
     * Checks whether the inventory contains an item with ID.
     *
     * @param id the ID of the item to match
     * @return whether the inventory contains an item with ID
     */
    contains(id: number): boolean;

    /**
     * Gets the index of any item in the inventory, and returns the slot number.
     * Returns -1 if the inventory does not contain the item.
     *
     * @param item the item to check for
     * @return the index of the given item
     */
    indexOf(item: Item): number;

    /**
     * Gets the index of any item in the inventory with matching ID, and returns the slot number.
     * Returns -1 if the inventory does not contain the item.
     *
     * @param id the item ID to check for
     * @return the index of the given item with ID
     */
    indexOf(id: number): number;

    /**
     * Returns true if this Inventory wraps a {@link MCContainer Container} object
     * rather than an {@link MCIInventory IInventory} object
     *
     * @return if this is a container
     */
    isContainer(): boolean;

    /**
     * Shorthand for {@link ClickAction}
     *
     * @param slot the slot to click on
     * @param button the mouse button to use. "LEFT" by default.
     * @param shift whether shift is being held. False by default
     * @return this inventory for method chaining
     */
    click(slot: number, shift?: boolean, button?: string): Inventory;

    /**
     * Shorthand for {@link DropAction}
     *
     * @param slot the slot to drop
     * @param ctrl whether control should be held (drops whole stack)
     * @return this inventory for method chaining
     */
    drop(slot: number, ctrl: boolean): Inventory;

    /**
     * Shorthand for {@link DragAction}
     *
     * @param type what click type this should be: LEFT, MIDDLE, RIGHT
     * @param slots all of the slots to drag onto
     * @return this inventory for method chaining
     */
    drag(type: string, ...slot: number[]): Inventory;

    /**
     * Gets the name of the inventory, simply "container" for most chest-like blocks.
     *
     * @return the name of the inventory
     */
    getName(): string;

    getClassName(): string;

    toString(): string;
  }

  class Item {
    readonly item: MCItem;
    getItem(): MCItem;

    itemStack: MCItemStack;
    getItemStack(): MCItemStack;
    setItemStack(itemStack: MCItemStack): void;

    constructor(itemStack: MCItemStack);

    constructor(itemName: string);

    constructor(itemID: number);

    constructor(block: BlockType);

    constructor(entityItem: MCEntityItem);

    /**
     * Create an Item object from an Entity.
     * Has to be wrapping an EntityItem.
     *
     * @param entity the Entity
     */
    constructor(entity: Entity);

    getTextComponent(): TextComponent;

    getRawNBT(): string;

    getNBT(): NBTTagCompound;

    /**Deprecated Use the better-named method getNBT*/
    getItemNBT(): NBTTagCompound;

    getID(): number;

    setStackSize(stackSize: number): Item;

    getStackSize(): number;

    /**
     * Gets the item's unlocalized name.
     * Example: tile.wood
     *
     * @return the item's unlocalized name
     */
    getUnlocalizedName(): string;

    /**
     * Gets the item's registry name.
     * Example: minecraft:planks
     *
     * @return the item's registry name
     */
    getRegistryName(): string;

    /**
     * Gets the item's stack display name.
     * Example: Oak Wood Planks
     *
     * @return the item's stack display name
     */
    getName(): string;

    /**
     * Sets the item's name.
     * @param name the new name
     */
    setName(name: string): Item;

    getEnchantments(): Map<string, number>;

    isEnchantable(): boolean;

    isEnchanted(): boolean;

    getMetadata(): number;

    canPlaceOn(block: BlockType): boolean;

    canHarvest(block: BlockType): boolean;

    canDestroy(block: BlockType): boolean;

    /**
     * Gets the item's durability, i.e. the number of uses left
     *
     * @return the item's durability
     */
    getDurability(): number;

    getDamage(): number;

    setDamage(damage: number): Item;

    getMaxDamage(): number;

    isDamagable(): boolean;

    /**
     * Gets the item's name and lore lines.
     *
     * @return the item's name and lore lines
     */
    getLore(): string[];

    /**
     * Sets the item's lore. Does not set the item's name, use {@link setName} instead.
     * @param loreLines the new lore lines
     */
    setLore(...loreLines: string[]): Item;

    /**
     * Renders the item icon to the client's overlay, with customizable overlay information.
     *
     * @param x the x location
     * @param y the y location
     * @param scale the scale
     */
    draw(x?: number, y?: number, scale?: number, z?: number): void;

    /**
     * Checks whether another Item is the same as this one.
     * It compares id, stack size, and durability.
     *
     * @param other the object to compare to
     * @return whether the objects are equal
     */
    equals(other?: any): boolean;

    hashCode(): number;

    toString(): string;
  }

  class EntityLivingBase extends Entity {
    readonly entityLivingBase: MCEntityLivingBase;

    constructor(entityLivingBase: MCEntityLivingBase);

    addPotionEffect(effect: PotionEffect): void;

    clearPotionEffects(): void;

    getActivePotionEffects(): PotionEffect[];

    canSeeEntity(other: Entity): boolean;

    canSeeEntity(other: MCEntity): boolean;

    /**
     * Gets the item currently in the entity's specified inventory slot.
     * 0 for main hand, 1-4 for armor
     * (2 for offhand in 1.12.2, and everything else shifted over).
     *
     * @param slot the slot to access
     * @return the item in said slot
     */
    getItemInSlot(slot: number): Item | undefined;

    getHP(): number;

    setHP(health: number): EntityLivingBase;

    getMaxHP(): number;

    getAbsorption(): number;
    setAbsorption(absorption: number): EntityLivingBase;

    getAge(): number;

    getArmorValue(): number;

    isPotionActive(id: number): boolean;
    isPotionActive(potion: MCPotion): boolean;
    isPotionActive(potionEffect: PotionEffect): boolean;

    toString(): string;
  }

  class Entity {
    constructor(entity: MCEntity);

    readonly entity: MCEntity;

    distanceTo(other: Entity): number;
    distanceTo(other: MCEntity): number;
    distanceTo(blockPos: BlockPos): number;
    distanceTo(x: number, y: number, z: number): number;

    isOnGround(): boolean;

    isCollided(): boolean;

    getDistanceWalked(): number;

    getStepHeight(): number;

    hasNoClip(): boolean;

    getTicksExisted(): number;

    getFireResistance(): number;

    isImmuneToFire(): boolean;

    isInWater(): boolean;

    isWet(): boolean;

    isAirborne(): boolean;

    getDimension(): number;

    setPosition(x: number, y: number, z: number): Entity;

    setAngles(yaw: number, pitch: number): Entity;

    getMaxInPortalTime(): number;

    setOnFire(seconds: number): Entity;

    extinguish(): Entity;

    move(x: number, y: number, z: number): Entity;

    isSilent(): boolean;

    setIsSilent(silent: boolean): Entity;

    isInLava(): boolean;

    addVelocity(x: number, y: number, z: number): Entity;

    getLookVector(partialTicks: number): MCVec3;

    getEyePosition(partialTicks: number): MCVec3;

    canBeCollidedWith(): boolean;

    canBePushed(): boolean;

    dropItem(item: Item, size: number): MCEntityItem;

    isSneaking(): boolean;

    setIsSneaking(sneaking: boolean): Entity;

    isSprinting(): boolean;

    setIsSprinting(sprinting: boolean): Entity;

    isInvisible(): boolean;

    setIsInvisible(invisible: boolean): Entity;

    isEating(): boolean;

    setIsEating(eating: boolean): Entity;

    isOutsideBorder(): boolean;

    setIsOutsideBorder(outside: boolean): Entity;

    getWorld(): MCWorld;

    getChunk(): Chunk;

    isBurning(): boolean;

    getX(): number;
    getY(): number;
    getZ(): number;

    getPos(): Vec3i;

    getLastX(): number;
    getLastY(): number;
    getLastZ(): number;

    getRenderX(): number;
    getRenderY(): number;
    getRenderZ(): number;

    face: BlockFace;

    /**
     * Gets the pitch, the horizontal direction the entity is facing towards.
     * This has a range of -180 to 180.
     *
     * @return the entity's pitch
     */
    getPitch(): number;

    /**
     * Gets the yaw, the vertical direction the entity is facing towards.
     * This has a range of -180 to 180.
     *
     * @return the entity's yaw
     */
    getYaw(): number;

    /**
     * Gets the entity's x motion.
     * This is the amount the entity will move in the x direction next tick.
     *
     * @return the entitys's x motion
     */
    getMotionX(): number;

    /**
     * Gets the entity's y motion.
     * This is the amount the entity will move in the y direction next tick.
     *
     * @return the entity's y motion
     */
    getMotionY(): number;

    /**
     * Gets the entity's z motion.
     * This is the amount the entity will move in the z direction next tick.
     *
     * @return the entity's z motion
     */
    getMotionZ(): number;

    getRiding(): Entity | null;

    getRider(): Entity | null;

    getRiders(): Entity[];

    /**
     * Checks whether the entity is dead.
     * This is a fairly loose term, dead for a particle could mean it has faded,
     * while dead for an entity means it has no health.
     *
     * @return whether an entity is dead
     */
    isDead(): boolean;

    /**
     * Gets the entire width of the entity's hitbox
     *
     * @return the entity's width
     */
    getWidth(): number;

    /**
     * Gets the entire height of the entity's hitbox
     *
     * @return the entity's height
     */
    getHeight(): number;

    /**
     * Gets the height of the eyes on the entity,
     * can be added to its Y coordinate to get the actual Y location of the eyes.
     * This value defaults to 85% of an entity's height, however is different for some entities.
     *
     * @return the height of the entity's eyes
     */
    getEyeHeight(): number;

    /**
     * Gets the name of the entity, could be "Villager",
     * or, if the entity has a custom name, it returns that.
     *
     * @return the (custom) name of the entity
     */
    getName(): string;

    /**
     * Gets the Java class name of the entity, for example "EntityVillager"
     *
     * @return the entity's class name
     */
    getClassName(): string;

    /**
     * Gets the Java UUID object of this entity.
     * Use of {@link JavaUUID.toString UUID.toString} in conjunction is recommended.
     *
     * @return the entity's uuid
     */
    getUUID(): JavaUUID;

    toString(): string;

    getEntity(): MCEntity;

    /**
     * Gets the entity's air level.
     *
     * The returned value will be an integer. If the player is not taking damage, it
     * will be between 300 (not in water) and 0. If the player is taking damage, it
     * will be between -20 and 0, getting reset to 0 every time the player takes damage.
     *
     * @return the entity's air level
     */
    getAir(): number;
    setAir(air: number): Entity;
  }

  class TextComponent {
    chatComponentText: MCIChatComponent;

    /**
     * Creates a TextComponent from a string.
     * @param text the text string in the component.
     */
    constructor(text: string);

    /**
     * Creates a TextComponent from an existing ITextComponent.
     * @param chatComponent the ITextComponent to convert
     */
    constructor(chatComponent: MCIChatComponent);

    /**
     * @return the text in the component
     */
    getText(): string;

    /**
     * Sets the components text string.
     * @param text the text string in the component.
     */
    setText(text: string): TextComponent;

    /**
     * @return true if the component is formatted
     */
    isFormatted(): boolean;

    /**
     * Sets if the component is to be formatted
     * @param formatted true if formatted
     */
    setFormatted(formatted: boolean): TextComponent;

    /**
     * Sets the click action and value of the component.
     * See {@link TextComponent.setClickAction} for possible click actions.
     * @param action the click action
     * @param value the click value
     */
    setClick(action: string, value: string): TextComponent;

    /**
     * @return the current click action
     */
    getClickAction(): string | null;

    /**
     * Sets the action to be performed when the component is clicked on.
     * Possible actions include:
     * - open_url
     * - open_file
     * - run_command
     * - suggest_command
     * - change_page
     * @param action the click action
     */
    setClickAction(action: string): TextComponent;

    /**
     * @return the current click value
     */
    getClickValue(): string | null;

    /**
     * Sets the value to be used by the click action.
     * See {@link TextComponent.setClickAction} for possible click actions.
     * @param value the click value
     */
    setClickValue(value: string): TextComponent;

    /**
     * Sets the hover action and value of the component.
     * See {@link TextComponent.setHoverAction} for possible hover actions.
     * @param action the hover action
     * @param value the hover value
     */
    setHover(action: string, value: string): TextComponent;

    /**
     * @return the current hover action
     */
    getHoverAction(): string | null;

    /**
     * Sets the action to be performed when the component is hovered over.
     * Hover action is set to 'show_text' by default.
     * Possible actions include:
     * - show_text
     * - show_achievement
     * - show_item
     * - show_entity
     * @param action the hover action
     */
    setHoverAction(action: string): TextComponent;

    /**
     * @return the current hover value
     */
    getHoverValue(): string | null;

    /**
     * Sets the value to be used by the hover action.
     * See {@link TextComponent.setHoverAction} for possible hover actions.
     * @param value the hover value
     */
    setHoverValue(value: string): TextComponent;

    /**
     * Shows the component in chat as a new {@link Message}
     */
    chat(): void;

    /**
     * Shows the component on the actionbar as a new {@link Message}
     */
    actionBar(): void;

    toString(): string;
  }

  class Book {
    constructor(bookName: string);

    /**
     * Add a page to the book.
     *
     * @param message the entire message for what the page should be
     * @return the current book to allow method chaining
     */
    addPage(message: Message): Book;

    /**
     * Overloaded method for adding a simple page to the book.
     *
     * @param message a simple string to make the page
     * @return the current book to allow method chaining
     */
    addPage(message: string): Book;

    /**
     * Sets a page of the book to the specified message.
     *
     * @param pageIndex the index of the page to set
     * @param message the message to set the page to
     * @return the current book to allow method chaining
     */
    setPage(pageIndex: number, message: Message): Book;

    updateBookScreen(pages: NBTTagList): void;

    display(page?: number): void;

    isOpen(): boolean;

    getCurrentPage(): number;
  }

  class Message {
    /**
     * Creates a new Message object from a chat event.
     * @param event the chat event
     */
    constructor(event: ForgeClientChatReceivedEvent);

    /**
     * Creates a new Message object from an IChatComponent.
     * @param component the IChatComponent
     */
    constructor(component: MCIChatComponent);

    /**
     * Creates a new Message object in parts of TextComponents or Strings.
     * @param messageParts the list of TextComponents or Strings
     */
    constructor(messageParts: (string | TextComponent | Item)[]);

    /**
     * Creates a new Message object in parts of TextComponents or Strings.
     * @param components the TextComponents or Strings
     */
    constructor(...components: string[] | TextComponent[] | Item[]);
    /**
     * @return the parsed message as an ITextComponent
     */
    getChatMessage(): MCIChatComponent;

    /**
     * @return the formatted text of the parsed message
     */
    getFormattedText(): string;

    /**
     * @return the unformatted text of the parsed message
     */
    getUnformattedText(): string;

    /**
     * @return the message {@link TextComponent} parts as a list.
     */
    getMessageParts(): TextComponent[];

    /**
     * @return the chat line ID of the message
     */
    getChatLineId(): number;

    /**
     * Sets the chat line ID of the message. Useful for updating an already sent chat message.
     */
    setChatLineId(id: number): Message;

    /**
     * @return true if the message can trip other triggers.
     */
    isRecursive(): boolean;

    /**
     * Sets whether the message can trip other triggers.
     * @param recursive true if message can trip other triggers.
     */
    setRecursive(recursive: boolean): Message;

    /**
     * @return true if the message is formatted
     */
    isFormatted(): boolean;

    /**
     * Sets if the message is to be formatted
     * @param formatted true if formatted
     */
    setFormatted(formatted: boolean): Message;

    /**
     * Sets the TextComponent or String in the Message at index.
     * @param index the index of the TextComponent or String to change
     * @param component the new TextComponent or String to replace with
     * @return the Message for method chaining
     */
    setTextComponent(index: number, component: string | TextComponent): Message;

    /**
     * Adds a TextComponent or String to the end of the Message.
     * @param component the new TextComponent or String to add
     * @return the Message for method chaining
     */
    addTextComponent(component: string | TextComponent): Message;

    /**
     * Adds a TextComponent or String at index of the Message.
     * @param index the index to insert the new TextComponent or String
     * @param component the new TextComponent or String to insert
     * @return the Message for method chaining
     */
    addTextComponent(index: number, component: string | TextComponent): Message;

    clone(): Message;

    copy(): Message;

    /**
     * Edits this message (once it is already sent)
     * @param replacements the new message(s) to be put in place of the old one
     */
    edit(...replacements: Message[]): void;

    /**
     * Outputs the Message into the client's chat.
     */
    chat(): void;

    /**
     * Outputs the Message into the client's action bar.
     */
    actionBar(): void;

    toString(): string;
  }

  class ChatLib {
    static readonly INSTANCE: ChatLib;
    /**
     * Prints text in the chat.
     * The text can be a String, a {@link Message} or a {@link TextComponent}
     *
     * @param text the text to be printed
     */
    static chat(text: Message | string | TextComponent): void;
    /**
     * Prints text in the chat.
     * The text can be a String, a {@link Message} or a {@link TextComponent}
     *
     * @param text the text to be printed
     */
    chat(text: Message | string | TextComponent): void;

    /**logs */
    static test(e: any): void;
    /**logs */
    test(e: any): void;

    /**
     * Shows text in the action bar.
     * The text can be a String, a {@link Message} or a {@link TextComponent}
     *
     * @param text the text to show
     */
    static actionBar(text: string | Message | TextComponent): void;
    /**
     * Shows text in the action bar.
     * The text can be a String, a {@link Message} or a {@link TextComponent}
     *
     * @param text the text to show
     */
    actionBar(text: string | Message | TextComponent): void;

    /**
     * Simulates a chat message to be caught by other triggers for testing.
     * The text can be a String, a {@link Message} or a {@link TextComponent}
     *
     * @param text The message to simulate
     */
    static simulateChat(text: string | Message | TextComponent): void;
    /**
     * Simulates a chat message to be caught by other triggers for testing.
     * The text can be a String, a {@link Message} or a {@link TextComponent}
     *
     * @param text The message to simulate
     */
    simulateChat(text: string | Message | TextComponent): void;

    /**
     * Says chat message.
     * This message is actually sent to the server.
     *
     * @param text the message to be sent
     */
    static say(text: string): void;
    /**
     * Says chat message.
     * This message is actually sent to the server.
     *
     * @param text the message to be sent
     */
    say(text: string): void;

    /**
     * Runs a command.
     *
     * @param text the command to run, without the leading slash (Ex. "help")
     * @param clientSide should the command be ran as a client side command
     */
    static command(text: string, clientSide?: boolean): void;
    /**
     * Runs a command.
     *
     * @param text the command to run, without the leading slash (Ex. "help")
     * @param clientSide should the command be ran as a client side command
     */
    command(text: string, clientSide?: boolean): void;

    /**
     * Clear chat messages with the specified message ID, or all chat messages if no ID is specified
     *
     * @param chatLineIDs the id(s) to be cleared
     */
    static clearChat(...chatLineIDs: number[]): void;
    /**
     * Clear chat messages with the specified message ID, or all chat messages if no ID is specified
     *
     * @param chatLineIDs the id(s) to be cleared
     */
    clearChat(...chatLineIDs: number[]): void;

    /**
     * Get a message that will be perfectly one line of chat,
     * the separator repeated as many times as necessary.
     * The separator defaults to "-"
     *
     * @param separator the message to split chat with
     * @return the message that would split chat
     */
    static getChatBreak(separator?: string): string;
    /**
     * Get a message that will be perfectly one line of chat,
     * the separator repeated as many times as necessary.
     * The separator defaults to "-"
     *
     * @param separator the message to split chat with
     * @return the message that would split chat
     */
    getChatBreak(separator?: string): string;

    /**
     * Gets the width of Minecraft's chat
     *
     * @return the width of chat
     */
    static getChatWidth(): number;
    /**
     * Gets the width of Minecraft's chat
     *
     * @return the width of chat
     */
    getChatWidth(): number;

    /**
     * Remove all formatting
     *
     * @param text the string to un-format
     * @return the unformatted string
     */
    static removeFormatting(text: string): string;
    /**
     * Remove all formatting
     *
     * @param text the string to un-format
     * @return the unformatted string
     */
    removeFormatting(text: string): string;

    /**
     * Replaces Minecraft formatted text with normal formatted text
     *
     * @param text the formatted string
     * @return the unformatted string
     */
    static replaceFormatting(text: string): string;
    /**
     * Replaces Minecraft formatted text with normal formatted text
     *
     * @param text the formatted string
     * @return the unformatted string
     */
    replaceFormatting(text: string): string;

    /**
     * Get a message that will be perfectly centered in chat.
     *
     * @param text the text to be centered
     * @return the centered message
     */
    static getCenteredText(text: string): string;
    /**
     * Get a message that will be perfectly centered in chat.
     *
     * @param text the text to be centered
     * @return the centered message
     */
    getCenteredText(text: string): string;

    /**
     * Edits an already sent chat message matched by {@link regexp}.
     *
     * @param regexp the regex object to match to the message
     * @param replacements the new message(s) to be put in replace of the old one
     */
    editChat(regexp: RegExp, ...replacements: Message[]): void;
    /**
     * Edits an already sent chat message matched by {@link regexp}.
     *
     * @param regexp the regex object to match to the message
     * @param replacements the new message(s) to be put in replace of the old one
     */
    static editChat(regexp: RegExp, ...replacements: Message[]): void;

    /**
     * Edits an already sent chat message by the text of the chat
     *
     * @param toReplace the unformatted text of the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    editChat(toReplace: string, ...replacements: Message[]): void;
    /**
     * Edits an already sent chat message by the text of the chat
     *
     * @param toReplace the unformatted text of the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    static editChat(toReplace: string, ...replacements: Message[]): void;

    /**
     * Edits an already sent chat message by the {@link Message}
     *
     * @param toReplace the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    editChat(toReplace: Message, ...replacements: Message[]): void;
    /**
     * Edits an already sent chat message by the {@link Message}
     *
     * @param toReplace the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    static editChat(toReplace: Message, ...replacements: Message[]): void;

    /**
     * Edits an already sent chat message by its chat line id
     *
     * @param chatLineId the chat line id of the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    editChat(chatLineId: number, ...replacements: Message[]): void;
    /**
     * Edits an already sent chat message by its chat line id
     *
     * @param chatLineId the chat line id of the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    static editChat(chatLineId: number, ...replacements: Message[]): void;

    /**
     * Deletes an already sent chat message matching {@link regexp}.
     *
     * @param regexp the regex object to match to the message
     */
    deleteChat(regexp: RegExp): void;
    /**
     * Deletes an already sent chat message matching {@link regexp}.
     *
     * @param regexp the regex object to match to the message
     */
    static deleteChat(regexp: RegExp): void;

    /**
     * Deletes an already sent chat message by the text of the chat
     *
     * @param toDelete the unformatted text of the message to be deleted
     */
    deleteChat(toDelete: string): void;
    /**
     * Deletes an already sent chat message by the text of the chat
     *
     * @param toDelete the unformatted text of the message to be deleted
     */
    static deleteChat(toDelete: string): void;

    /**
     * Deletes an already sent chat message by the {@link Message}
     *
     * @param toDelete the message to be deleted
     */
    deleteChat(toDelete: Message): void;
    /**
     * Deletes an already sent chat message by the {@link Message}
     *
     * @param toDelete the message to be deleted
     */
    static deleteChat(toDelete: Message): void;

    /**
     * Deletes an already sent chat message by its chat line id
     *
     * @param chatLineId the chat line id of the message to be deleted
     */
    deleteChat(chatLineId: number): void;
    /**
     * Deletes an already sent chat message by its chat line id
     *
     * @param chatLineId the chat line id of the message to be deleted
     */
    static deleteChat(chatLineId: number): void;

    /**
     * Gets the previous 1000 lines of chat
     *
     * @return A list of the last 1000 chat lines
     */
    static getChatLines(): string[];
    /**
     * Gets the previous 1000 lines of chat
     *
     * @return A list of the last 1000 chat lines
     */
    getChatLines(): string[];

    /**
     * Adds a message to the player's chat history. This allows the message to
     * show up for the player when pressing the up/down keys while in the chat gui
     *
     * @param index the index to insert the message
     * @param message the message to add to chat history
     */
    addToSentMessageHistory(index: number, message: string): void;
    /**
     * Adds a message to the player's chat history. This allows the message to
     * show up for the player when pressing the up/down keys while in the chat gui
     *
     * @param index the index to insert the message
     * @param message the message to add to chat history
     */
    static addToSentMessageHistory(index: number, message: string): void;

    /**
     * Get the text of a chat event.
     * Defaults to the unformatted version.
     *
     * @param event The chat event passed in by a chat trigger
     * @param formatted If true, returns formatted text. Otherwise, returns
     * unformatted text
     * @return The text of the event
     */
    getChatMessage(
      event: ForgeClientChatReceivedEvent,
      formatted?: boolean,
    ): string;
    /**
     * Get the text of a chat event.
     * Defaults to the unformatted version.
     *
     * @param event The chat event passed in by a chat trigger
     * @param formatted If true, returns formatted text. Otherwise, returns
     * unformatted text
     * @return The text of the event
     */
    static getChatMessage(
      event: ForgeClientChatReceivedEvent,
      formatted?: boolean,
    ): string;

    /**
     * Replaces the easier to type '&' color codes with proper color codes in a string.
     *
     * @param message The string to add color codes to
     * @return the formatted message
     */
    addColor(message?: string): string;
    /**
     * Replaces the easier to type '&' color codes with proper color codes in a string.
     *
     * @param message The string to add color codes to
     * @return the formatted message
     */
    static addColor(message?: string): string;

    /**
     * helper method to make sure player exists before putting something in chat
     */
    isPlayer(out: string): boolean;
  }

  class ClickAction extends Action {
    constructor(slot: number, windowId: number);

    getClickType(): ClickAction.ClickType;

    /**
     * The type of click (REQUIRED)
     *
     * @param clickType the new click type
     */
    setClickType(clickType: ClickAction.ClickType): ClickAction;

    getHoldingShift(): Boolean;

    /**
     * Whether the click should act as if shift is being held (defaults to false)
     *
     * @param holdingShift to hold shift or not
     */
    setHoldingShift(holdingShift: Boolean): ClickAction;

    getItemInHand(): boolean;

    /**
     * Whether the click should act as if an item is being held
     * (defaults to whether there actually is an item in the hand)
     *
     * @param itemInHand to be holding an item or not
     */
    setItemInHand(itemInHand: Boolean): ClickAction;

    /**
     * Sets the type of click.
     * Possible values are: LEFT, RIGHT, MIDDLE
     *
     * @param clickType the click type
     * @return the current Action for method chaining
     */
    setClickString(clickType: String): ClickAction;

    complete(): void;
  }

  namespace ClickAction {
    enum ClickType {
      LEFT,
      RIGHT,
      MIDDLE,
    }
  }

  class KeyBind {
    /**
     * Creates a new keybind, editable in the user's controls.
     *
     * @param description what the keybind does
     * @param keyCode the keycode which the keybind will respond to, see Keyboard below. Ex. Keyboard.KEY_A
     * @param category the keybind category the keybind will be in
     * @see [org.lwjgl.input.Keyboard](http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html)
     */
    constructor(description: string, keyCode: number, category?: string);

    constructor(keyBinding: MCKeyBinding);

    registerKeyPress(method: Function): RegularTrigger;
    registerKeyRelease(method: Function): RegularTrigger;
    registerKeyDown(method: Function): RegularTrigger;

    unregisterKeyPress(): KeyBind;
    unregisterKeyRelease(): KeyBind;
    unregisterKeyDown(): KeyBind;

    /**
     * Returns true if the key is pressed (used for continuous querying).
     *
     * @return whether the key is pressed
     */
    isKeyDown(): boolean;

    /**
     * Returns true on the initial key press. For continuous querying use {@link isKeyDown}.
     *
     * @return whether the key has just been pressed
     */
    isPressed(): boolean;

    /**
     * Gets the description of the key.
     *
     * @return the description
     */
    getDescription(): string;

    /**
     * Gets the key code of the key.
     *
     * @return the integer key code
     */
    getKeyCode(): number;

    /**
     * Gets the category of the key.
     *
     * @return the category
     */
    getCategory(): string;

    /**
     * Sets the state of the key.
     *
     * @param pressed True to press, False to release
     */
    setState(pressed: boolean): void;

    removeKeyBind(keyBind: KeyBind): void;
    static removeKeyBind(keyBind: KeyBind): void;

    clearKeyBinds(): void;
    static clearKeyBinds(): void;
  }

  class CPS {
    static INSTANCE: CPS;

    static getLeftClicksMax(): number;

    static getRightClicksMax(): number;

    static getLeftClicks(): number;

    static getRightClicks(): number;

    static getLeftClicksAverage(): number;

    static getRightClicksAverage(): number;
  }

  class DisplayHandler {
    registerDisplay(display: Display): boolean;

    clearDisplays(): void;

    renderDisplayOverlay(event: ForgeRenderGameOverlayEvent): void;

    renderDisplayGui(event: ForgeGuiScreenEvent.DrawScreenEvent.Post): void;
  }
  namespace DisplayHandler {
    enum RegisterType {
      RENDER_OVERLAY,
      POST_GUI_RENDER,
    }

    enum Background {
      NONE,
      FULL,
      PER_LINE,
    }

    enum Align {
      NONE,
      LEFT,
      CENTER,
      RIGHT,
    }

    enum Order {
      UP,
      DOWN,
    }
  }

  class DisplayLine {
    constructor(text: string);

    constructor(text: string, config: DisplayLineConfig);

    getText(): Text;
    setText(text: string): DisplayLine;

    getTextColor(): number;
    setTextColor(color: number): DisplayLine;

    getTextWidth(): number;

    setShadow(shadow: boolean): DisplayLine;
    setScale(scale: number): DisplayLine;

    getAlign(): DisplayHandler.Align;
    setAlign(align: string | DisplayHandler.Align): DisplayLine;

    getBackground(): DisplayHandler.Background;
    setBackground(background: string | DisplayHandler.Background): DisplayLine;

    getBackgroundColor(): number;
    setBackgroundColor(color: number): DisplayLine;

    registerClicked(
      method: (
        mouseX: number,
        mouseY: number,
        button: number,
        pressed: boolean,
      ) => void,
    ): RegularTrigger;

    registerHovered(
      method: (mouseX: number, mouseY: number) => void,
    ): RegularTrigger;

    registerMouseLeave(
      method: (mouseX: number, mouseY: number) => void,
    ): RegularTrigger;

    registerDragged(
      method: (
        xDist: number,
        yDist: number,
        mouseX: number,
        mouseY: number,
        button: number,
      ) => void,
    ): RegularTrigger;

    unregisterClicked(): DisplayLine;
    unregisterHovered(): DisplayLine;
    unregisterMouseLeave(): DisplayLine;
    unregisterDragged(): DisplayLine;

    drawLeft(
      x: number,
      y: number,
      maxWidth: number,
      background: DisplayHandler.Background,
      backgroundColor: number,
      textColor: number,
    ): void;
    drawRight(
      x: number,
      y: number,
      maxWidth: number,
      background: DisplayHandler.Background,
      backgroundColor: number,
      textColor: number,
    ): void;
    drawCenter(
      x: number,
      y: number,
      maxWidth: number,
      background: DisplayHandler.Background,
      backgroundColor: number,
      textColor: number,
    ): void;

    toString(): string;
  }
  interface DisplayLineConfig {
    textColor?: number;
    backgroundColor?: number;

    align?: DisplayHandler.Align;
    background?: DisplayHandler.Background;
  }

  class Display {
    constructor();
    constructor(config: DisplayConfig);

    getBackgroundColor(): number;
    setBackgroundColor(backgroundColor: number): Display;

    getTextColor(): number;
    setTextColor(textColor: number): Display;

    getBackground(): DisplayHandler.Background;
    setBackground(background: string | DisplayHandler.Background): Display;

    getAlign(): DisplayHandler.Align;
    setAlign(align: string | DisplayHandler.Align): Display;

    getOrder(): DisplayHandler.Order;
    setOrder(order: string | DisplayHandler.Order): Display;

    getLine(index: number): DisplayLine;
    setLine(index: number, line: string | DisplayLine): Display;

    getLines(): DisplayLine[];
    setLines(lines: DisplayLine[]): Display;

    addLine(line: string | DisplayLine): Display;
    addLine(index: number, line: string | DisplayLine): Display;

    addLines(...lines: string[] | DisplayLine[]): void;

    removeLine(index: number): Display;

    clearLines(): Display;

    getRenderX(): number;
    setRenderX(renderX: number): Display;

    getRenderY(): number;
    setRenderY(renderY: number): Display;

    setRenderLoc(renderX: number, renderY: number): Display;

    getShouldRender(): boolean;
    setShouldRender(shouldRender: boolean): Display;

    show(): Display;

    hide(): Display;

    getWidth(): number;
    getHeight(): number;
    getMinWidth(): number;
    setMinWidth(minWidth: number): Display;

    /**
     * Gets the type of register the display will render under.
     *
     * The returned value will be a DisplayHandler.RegisterType
     *      renderOverlayEvent: render overlay
     *      postGuiRenderEvent: post gui render
     *
     * @return the register type
     */
    getRegisterType(): DisplayHandler.RegisterType;

    /**
     * Sets the type of register the display will render under.
     *
     * Possible input values are:.
     *      renderOverlayEvent: render overlay
     *      postGuiRenderEvent: post gui render
     */
    setRegisterType(
      registerType:
        | "RENDER_OVERLAY_EVENT"
        | "POST_GUI_RENDER_EVENT"
        | DisplayHandler.RegisterType
        | any,
    ): Display;

    render(): void;

    toString(): string;
  }

  interface DisplayConfig {
    shouldRender?: boolean;
    renderX?: number;
    renderY?: number;
    backgroundColor?: number;
    textColor?: number;
    background?: DisplayHandler.Background;
    align?: DisplayHandler.Align;
    order?: DisplayHandler.Order;
    minWidth?: number;
    registerType?: DisplayHandler.RegisterType;
  }

  interface TextConfig {
    color?: number;
    formatted?: boolean;
    shadow?: boolean;
    align?: DisplayHandler.Align;
    x?: number;
    y?: number;
    maxLines?: number;
    scale?: number;
    maxWidth?: number;
  }

  class Text {
    constructor(string: string, x?: number, y?: number);
    constructor(string: string, config: TextConfig);

    getString(): string;
    setString(string: string): Text;

    getColor(): number;
    setColor(color: number): Text;

    getFormatted(): boolean;
    setFormatted(formatted: boolean): Text;

    getShadow(): boolean;
    setShadow(shadow: boolean): Text;

    getAlign(): DisplayHandler.Align;
    setAlign(align: string | DisplayHandler.Align): Text;

    getX(): number;
    setX(x: number): Text;

    getY(): number;
    setY(y: number): Text;

    /**
     * Gets the width of the text
     * This is automatically updated when the text is drawn.
     *
     * @return the width of the text
     */
    getWidth(): number;

    getLines(): string[];

    getMaxLines(): number;
    setMaxLines(maxLines: number): Text;

    getScale(): number;
    setScale(scale: number): Text;

    /**
     * Sets the maximum width of the text, splitting it into multiple lines if necessary.
     *
     * @param maxWidth the maximum width of the text
     * @return the Text object for method chaining
     */
    setMaxWidth(maxWidth: number): Text;
    getMaxWidth(): number;

    getHeight(): number;

    exceedsMaxLines(): boolean;

    draw(x?: number, y?: number): Text;

    toString(): string;
  }

  class DragAction extends Action {
    constructor(slot: number, windowId: number);
    readonly slot: number;
    readonly windowId: number;

    /**
     * The type of click (REQUIRED)
     *
     * @param clickType the new click type
     */
    setClickType(clickType: DragAction.ClickType): DragAction;

    getStage(): DragAction.Stage;

    /**
     * The stage of this drag (REQUIRED)
     * BEGIN is when beginning the drag
     * SLOT is for each slot being dragged into
     * END is for ending the drag
     *
     * @param stage the stage
     */
    setStage(stage: DragAction.Stage): DragAction;

    /**
     * Sets the type of click.
     * Possible values are: LEFT, RIGHT, MIDDLE
     *
     * @param clickType the click type
     * @return the current Action for method chaining
     */
    setClickString(clickType: keyof typeof DragAction.ClickType): DragAction;

    /**
     * Sets the stage of this drag.
     * Possible values are: BEGIN, SLOT, END {@link stage}
     *
     * @param stage the stage
     * @return the current Action for method chaining
     */
    setStageString(stage: keyof typeof DragAction.Stage): DragAction;
  }

  namespace DragAction {
    enum ClickType {
      LEFT,
      RIGHT,
      MIDDLE,
    }
    enum Stage {
      BEGIN,
      SLOT,
      END,
    }
  }

  class DropAction extends Action {
    constructor(slot: number, windowId: number);
    readonly slot: number;
    readonly windowId: number;

    getHoldingCtrl(): boolean;

    /**
     * Whether the click should act as if control is being held (defaults to false)
     *
     * @param holdingCtrl to hold ctrl or not
     */
    setHoldingCtrl(holdingCtrl: boolean): DropAction;
  }

  class KeyAction extends Action {
    constructor(slot: number, windowId: number);

    getKey(): number;

    /**
     * Which key to act as if has been clicked (REQUIRED).
     * Options currently are 0-8, representing the hotbar keys
     *
     * @param key which key to "click"
     */
    setKey(key: number): KeyAction;

    complete(): void;
  }

  class EventLib {
    static readonly INSTANCE: EventLib;

    getType(event: ForgeClientChatReceivedEvent): number;
    static getType(event: ForgeClientChatReceivedEvent): number;

    getMessage(event: ForgeClientChatReceivedEvent): MCIChatComponent;
    static getMessage(event: ForgeClientChatReceivedEvent): MCIChatComponent;

    getName(event: ForgePlaySoundEvent): string;
    static getName(event: ForgePlaySoundEvent): string;

    /**
     * Cancel an event. Automatically used with `cancel(event)`.
     *
     * @param event the event to cancel
     * @throws IllegalArgumentException if event can be cancelled "normally"
     */
    cancel(event: ForgePlaySoundEvent | CancellableEvent | ForgeEvent): void;
    /**
     * Cancel an event. Automatically used with `cancel(event)`.
     *
     * @param event the event to cancel
     * @throws IllegalArgumentException if event can be cancelled "normally"
     */
    static cancel(
      event: ForgePlaySoundEvent | CancellableEvent | ForgeEvent,
    ): void;
  }

  class FileLib {
    static readonly INSTANCE: FileLib;

    /**
     * Writes a file to folder in modules.
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @param toWrite string to write in file
     * @param recursive whether to create folders to the file location if they don't exist
     */
    write(
      importName: string,
      fileName: string,
      toWrite: string,
      recursive?: boolean,
    ): void;
    /**
     * Writes a file to folder in modules.
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @param toWrite string to write in file
     * @param recursive whether to create folders to the file location if they don't exist
     */
    static write(
      importName: string,
      fileName: string,
      toWrite: string,
      recursive?: boolean,
    ): void;

    /**
     * Writes a file to anywhere on the system.
     * Use "./" for the ".minecraft" folder.
     *
     * @param fileLocation the location and file name
     * @param toWrite string to write in file
     * @param recursive whether to create folders to the file location if they don't exist
     */
    write(fileLocation: string, toWrite: string, recursive?: boolean): void;
    /**
     * Writes a file to anywhere on the system.
     * Use "./" for the ".minecraft" folder.
     *
     * @param fileLocation the location and file name
     * @param toWrite string to write in file
     * @param recursive whether to create folders to the file location if they don't exist
     */
    static write(
      fileLocation: string,
      toWrite: string,
      recursive?: boolean,
    ): void;

    /**
     * Writes a file to folder in modules.
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @param toAppend string to append in file
     */
    append(importName: string, fileName: string, toAppend: string): void;
    /**
     * Writes a file to folder in modules.
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @param toAppend string to append in file
     */
    static append(importName: string, fileName: string, toAppend: string): void;

    /**
     * Writes a file to anywhere on the system.
     * Use "./" for the ".minecraft" folder.
     *
     * @param fileLocation the location and file name
     * @param toAppend string to append in file
     */
    append(fileLocation: string, toAppend: string): void;
    /**
     * Writes a file to anywhere on the system.
     * Use "./" for the ".minecraft" folder.
     *
     * @param fileLocation the location and file name
     * @param toAppend string to append in file
     */
    static append(fileLocation: string, toAppend: string): void;

    /**
     * Encodes a string to a base64 string
     *
     * @param toEncode string to encode
     * @return base64 encoded string
     */
    encodeBase64(toEncode: string): string;
    /**
     * Encodes a string to a base64 string
     *
     * @param toEncode string to encode
     * @return base64 encoded string
     */
    static encodeBase64(toEncode: string): string;

    /**
     * Decodes a base64 string to a string
     *
     * @param toDecode base64 encoded string to decode
     * @return decoded string
     */
    decodeBase64(toDecode: string): string;
    /**
     * Decodes a base64 string to a string
     *
     * @param toDecode base64 encoded string to decode
     * @return decoded string
     */
    static decodeBase64(toDecode: string): string;

    /**
     * Reads a file from folder in modules.
     * Returns an empty string if file is not found.
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return the string in the file
     */
    read(importName: string, fileName: string): string;
    /**
     * Reads a file from folder in modules.
     * Returns an empty string if file is not found.
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return the string in the file
     */
    static read(importName: string, fileName: string): string;

    /**
     * Reads a file from anywhere on the system.
     * Use "./" for the ".minecraft" folder.
     * Returns an empty string if file is not found.
     *
     * @param fileLocation the location and file name
     * @return the string in the file
     */
    read(fileLocation: string): string;
    /**
     * Reads a file from anywhere on the system.
     * Use "./" for the ".minecraft" folder.
     * Returns an empty string if file is not found.
     *
     * @param fileLocation the location and file name
     * @return the string in the file
     */
    static read(fileLocation: string): string;

    /**
     * Reads a file from anywhere on the system using java.io.File.
     *
     * @param file the java.io.File to read
     * @return the string in the file
     */
    read(file: JavaFile): string;
    /**
     * Reads a file from anywhere on the system using java.io.File.
     *
     * @param file the java.io.File to read
     * @return the string in the file
     */
    static read(file: JavaFile): string;
    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param fileLocation the location and file name
     * @return if the file exists
     */
    exists(fileLocation: string): boolean;
    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param fileLocation the location and file name
     * @return if the file exists
     */
    static exists(fileLocation: string): boolean;
    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return if the file exists
     */
    exists(importName: string, fileName: string): boolean;
    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return if the file exists
     */
    static exists(importName: string, fileName: string): boolean;
    /**
     * Gets the contents of a url as a string.
     *
     * @param theUrl the url to get the data from
     * @param userAgent the user agent to use in the connection
     * @return the string stored in the url content
     */
    getUrlContent(theUrl: string, userAgent?: string): string;
    /**
     * Gets the contents of a url as a string.
     *
     * @param theUrl the url to get the data from
     * @param userAgent the user agent to use in the connection
     * @return the string stored in the url content
     */
    static getUrlContent(theUrl: string, userAgent?: string): string;

    /**
     * Deletes a file at the specified location
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return if the file was deleted
     */
    delete(importName: string, fileName: string): boolean;
    /**
     * Deletes a file at the specified location
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return if the file was deleted
     */
    static delete(importName: string, fileName: string): boolean;

    /**
     * Deletes a file at the specified location
     *
     * @param fileLocation the path of the file
     * @return if the file was deleted
     */
    delete(fileLocation: string): boolean;
    /**
     * Deletes a file at the specified location
     *
     * @param fileLocation the path of the file
     * @return if the file was deleted
     */
    static delete(fileLocation: string): boolean;

    /**
     * Deletes a directory at the specified location
     *
     * @param dir the directory to delete
     * @return if the directory was deleted
     */
    deleteDirectory(dir: string): boolean;
    /**
     * Deletes a directory at the specified location
     *
     * @param dir the directory to delete
     * @return if the directory was deleted
     */
    static deleteDirectory(dir: string): boolean;

    /**
     * Deletes a directory at the specified location
     *
     * @param dir the directory to delete
     * @return if the directory was deleted
     */
    deleteDirectory(dir: JavaFile): boolean;
    /**
     * Deletes a directory at the specified location
     *
     * @param dir the directory to delete
     * @return if the directory was deleted
     */
    static deleteDirectory(dir: JavaFile): boolean;

    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return if the location is a directory
     */
    isDirectory(importName: string, fileName: string): boolean;
    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param importName name of the import
     * @param fileName name of the file
     * @return if the location is a directory
     */
    static isDirectory(importName: string, fileName: string): boolean;
    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param fileLocation the location and file name
     * @return if the location is a directory
     */
    isDirectory(fileLocation: string): boolean;
    /**
     * Determines if a file or directory exists at the specified location
     *
     * @param fileLocation the location and file name
     * @return if the location is a directory
     */
    static isDirectory(fileLocation: string): boolean;

    /**
     * Extracts a zip file specified by the zipFilePath to a directory specified by
     * destDirectory (will be created if does not exist).
     * @param zipFilePath the zip file path
     * @param destDirectory the destination directory
     * @throws IOException IOException
     */
    unzip(zipFilePath: string, destDirectory: string): void;
    /**
     * Extracts a zip file specified by the zipFilePath to a directory specified by
     * destDirectory (will be created if does not exist).
     * @param zipFilePath the zip file path
     * @param destDirectory the destination directory
     * @throws IOException IOException
     */
    static unzip(zipFilePath: string, destDirectory: string): void;
  }

  class Gui extends MCGuiScreen {
    constructor();

    doesPauseGame: boolean;

    open(): void;

    close(): void;

    isOpen(): boolean;

    isControlDown(): boolean;
    isShiftDown(): boolean;
    isAltDown(): boolean;

    /**
     * Registers a method to be run while gui is open.
     * Registered method runs on draw.
     * Arguments passed through to method:
     * - int mouseX
     * - int mouseY
     * - float partialTicks
     *
     * @param method the method to run
     * @return the trigger
     */
    registerDraw(
      method: (mouseX: number, mouseY: number, partialTicks: number) => void,
    ): RegularTrigger;

    /**
     * Registers a method to be run while gui is open.
     * Registered method runs on mouse click.
     * Arguments passed through to method:
     * - int mouseX
     * - int mouseY
     * - int button
     *
     * @param method the method to run
     * @return the trigger
     */
    registerClicked(
      method: (mouseX: number, mouseY: number, button: number) => void,
    ): RegularTrigger;

    /**
     * Registers a method to be run while the gui is open.
     * Registered method runs on mouse scroll.
     * Arguments passed through to method:
     * - int mouseX
     * - int mouseY
     * - int scroll direction
     */
    registerScrolled(
      method: (mouseX: number, mouseY: number, scroll: number) => void,
    ): RegularTrigger;

    /**
     * Registers a method to be run while gui is open.
     * Registered method runs on key input.
     * Arguments passed through to method:
     * - char typed character
     * - int key code
     *
     * @param method the method to run
     * @return the trigger
     */
    registerKeyTyped(
      method: (typed: string, key: number) => void,
    ): RegularTrigger;

    /**
     * Registers a method to be run while gui is open.
     * Registered method runs on key input.
     * Arguments passed through to method:
     * - int mouseX
     * - int mouseY
     * - int clickedMouseButton
     * - long timeSinceLastClick
     *
     * @param method the method to run
     * @return the trigger
     */
    registerMouseDragged(
      method: (
        mouseX: number,
        mouseY: number,
        clickedMouseButton: number,
        timeSinceLastClick: number,
      ) => void,
    ): RegularTrigger;

    /**
     * Registers a method to be run while gui is open.
     * Registered method runs on mouse release.
     * Arguments passed through to method:
     * - int mouseX
     * - int mouseY
     * - int button
     *
     * @param method the method to run
     * @return the trigger
     */
    registerMouseReleased(
      method: (mouseX: number, mouseY: number, button: number) => void,
    ): RegularTrigger;

    /**
     * Registers a method to be run while gui is open.
     * Registered method runs when an action is performed (clicking a button)
     * Arguments passed through to method:
     * - the button that is clicked
     *
     * @param method the method to run
     * @return the trigger
     */
    registerActionPerformed(
      method: (button: MCGuiButton) => void,
    ): RegularTrigger;

    /**
     * Registers a method to be run when the gui is opened.
     * Arguments passed through to method:
     * - the guithat is opened
     *
     * @param method the method to run
     * @return the trigger
     */
    registerOpened(method: (gui: Gui) => void): RegularTrigger;

    /**
     * Registers a method to be run when the gui is closed.
     * Arguments passed through to method:
     * - the gui that is closed
     *
     * @param method the method to run
     * @return the trigger
     */
    registerClosed(method: (gui: Gui) => void): RegularTrigger;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    mouseClicked(mouseX: number, mouseY: number, button: number): void;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    mouseReleased(mouseX: number, mouseY: number, button: number): void;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    actionPerformed(button: MCGuiButton): void;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    mouseClickMove(
      mouseX: number,
      mouseY: number,
      clickedMouseButton: number,
      timeSinceLastClick: number,
    ): void;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    handleMouseInput(): void;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    drawScreen(mouseX: number, mouseY: number, partialTicks: number): void;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    keyTyped(typedChar: string, keyCode: number): void;

    /**
     * Internal method to run trigger. Not meant for public use
     */
    doesGuiPauseGame(): boolean;

    setDoesPauseGame(doesPauseGame: boolean): Gui;

    /**
     * Add a base Minecraft button to the gui
     *
     * @param button the button to add
     * @return the Gui for method chaining
     */
    addButton(button: MCGuiButton): Gui;

    /**
     * Add a base Minecraft button to the gui
     *
     * @param buttonId id for the button
     * @param x the x position of the button
     * @param y the y position of the button
     * @param width the width of the button
     * @param height the height of the button
     * @param buttonText the label of the button
     * @return the Gui for method chaining
     */
    addButton(
      buttonId: number,
      x: number,
      y: number,
      width: number,
      height: number,
      buttonText: string,
    ): Gui;

    /**
     * Removes a button from the gui with the given id
     *
     * @param buttonId the id of the button to remove
     * @return the Gui for method chaining
     */
    removeButton(buttonId: number): Gui;

    clearButtons(): Gui;

    getButton(buttonId: number): MCGuiButton | null;

    getButtonVisibility(buttonId: number): boolean;

    /**
     * Sets the visibility of a button
     *
     * @param buttonId the id of the button to change
     * @param visible the new visibility of the button
     * @return the Gui for method chaining
     */
    setButtonVisibility(buttonId: number, visible: boolean): Gui;

    getButtonEnabled(buttonId: number): boolean;

    /**
     * Sets the enabled state of a button
     *
     * @param buttonId the id of the button to set
     * @param enabled the enabled state of the button
     * @return the Gui for method chaining
     */
    setButtonEnabled(buttonId: number, enabled: boolean): Gui;

    getButtonWidth(buttonId: number): number;
    /**
     * Sets the button's width. Button textures break if the width is greater than 200
     *
     * @param buttonId id of the button
     * @param width the new width
     * @return the Gui for method chaining
     */
    setButtonWidth(buttonId: number, width: number): Gui;

    getButtonHeight(buttonId: number): number;
    /**
     * Sets the button's height. Button textures break if the height is not 20
     *
     * @param buttonId id of the button
     * @param height the new height
     * @return the Gui for method chaining
     */
    setButtonHeight(buttonId: number, height: number): Gui;

    getButtonX(buttonId: number): number;

    /**
     * Sets the button's x position
     *
     * @param buttonId id of the button
     * @param x the new x position
     * @return the Gui for method chaining
     */
    setButtonX(buttonId: number, x: number): Gui;

    getButtonY(buttonId: number): number;

    /**
     * Sets the button's y position
     *
     * @param buttonId id of the button
     * @param y the new y position
     * @return the Gui for method chaining
     */
    setButtonY(buttonId: number, y: number): Gui;

    /**
     * Sets the button's position
     *
     * @param buttonId id of the button
     * @param x the new x position
     * @param y the new y position
     * @return the Gui for method chaining
     */
    setButtonLoc(buttonId: number, x: number, y: number): Gui;

    /**
     * Draws text on screen
     *
     * @param text the text to draw
     * @param x X position of the text
     * @param y Y position of the text
     * @param color color of the text
     */
    drawString(text: string, x: number, y: number, color: number): void;

    /**
     * Draws hovering text that follows the mouse
     *
     * @param text the text to draw
     * @param mouseX X position of mouse
     * @param mouseY Y position of mouse
     */
    drawCreativeTabHoveringString(
      text: string,
      mouseX: number,
      mouseY: number,
    ): void;

    /**
     * Draws hovering text that doesn't follow the mouse
     *
     * @param text the text's to draw
     * @param x X position of the text
     * @param y Y position of the text
     */
    drawHoveringString(text: string[], x: number, y: number): void;
  }

  class Image {
    constructor(image: JavaBufferedImage);

    readonly image: JavaBufferedImage;

    /**
     * @deprecated API is ambiguous, especially when called from JavaScript, and is relative to the assets directory.
     * Instead use Image.fromFile() or Image.fromURL().
     */
    constructor(name: string, url?: string);

    /**
     * @deprecated Use static method for consistency: Image.fromFile().
     */
    constructor(file: JavaFile);

    getTextureWidth(): number;

    getTextureHeight(): number;

    getTexture(): MCDynamicTexture;

    /**
     * Clears the image from GPU memory and removes its references CT side
     * that way it can be garbage collected if not referenced in js code.
     */
    destroy(): void;

    onRender(event: ForgeRenderGameOverlayEvent): void;

    draw(x: number, y: number, width: number, height: number): Image;

    /**
     * Create an image object from a java.io.File object. Throws an exception
     * if the file cannot be found.
     */
    fromFile(file: JavaFile): Image;
    /**
     * Create an image object from a java.io.File object. Throws an exception
     * if the file cannot be found.
     */
    static fromFile(file: JavaFile): Image;

    /**
     * Create an image object from a file path. Throws an exception
     * if the file cannot be found.
     */
    fromFile(file: string): Image;
    /**
     * Create an image object from a file path. Throws an exception
     * if the file cannot be found.
     */
    static fromFile(file: string): Image;

    /**
     * Create an image object from a file path, relative to the assets directory.
     * Throws an exception if the file cannot be found.
     */
    fromAsset(name: string): Image;
    /**
     * Create an image object from a file path, relative to the assets directory.
     * Throws an exception if the file cannot be found.
     */
    static fromAsset(name: string): Image;

    /**
     * Creates an image object from a URL. Throws an exception if an image
     * cannot be created from the URL. Will cache the image in the assets
     */
    fromUrl(url: string): Image;
    /**
     * Creates an image object from a URL. Throws an exception if an image
     * cannot be created from the URL. Will cache the image in the assets
     */
    static fromUrl(url: string): Image;
  }

  class PlayerMP extends EntityLivingBase {
    constructor(player: MCEntityPlayer);

    readonly player: MCEntityPlayer;

    isSpectator(): boolean;

    getActivePotionEffects(): PotionEffect[];

    getPing(): number;

    /**
     * Gets the item currently in the player's specified inventory slot.
     * 0 for main hand, 1-4 for armor
     * (2 for offhand in 1.12.2, and everything else shifted over).
     *
     * @param slot the slot to access
     * @return the item in said slot
     */
    getItemInSlot(slot: number): Item;

    getTeam(): Team | null;

    /**
     * Gets the display name for this player,
     * i.e. the name shown in tab list and in the player's nametag.
     * @return the display name
     */
    getDisplayName(): TextComponent;

    setTabDisplayName(textComponent: TextComponent): void;

    /**
     * Sets the name for this player shown above their head,
     * in their name tag
     *
     * @param textComponent the new name to display
     */
    setNametagName(textComponent: TextComponent): void;

    /**
     * Draws the player in the GUI
     */
    draw(
      x: number,
      y: number,
      rotate?: boolean,
      showNametag?: boolean,
      showArmor?: boolean,
      showCape?: boolean,
      showHeldItem?: boolean,
      showArrows?: boolean,
    ): PlayerMP;

    toString(): string;

    getName(): string;
  }

  class Particle extends Entity {
    constructor(underlyingEntity: MCEntityFX);

    readonly underlyingEntity: MCEntityFX;
    getUnderlyingEntity(): MCEntityFX;

    setX(x: number): Particle;
    setY(y: number): Particle;
    setZ(z: number): Particle;

    scale(scale: number): Particle;

    multiplyVelocity(multiplier: number): Particle;

    /**
     * Sets the color of the particle.
     * @param red the red value between 0 and 1.
     * @param green the green value between 0 and 1.
     * @param blue the blue value between 0 and 1.
     */
    setColor(red: number, green: number, blue: number): Particle;

    /**
     * Sets the color of the particle.
     * @param red the red value between 0 and 1.
     * @param green the green value between 0 and 1.
     * @param blue the blue value between 0 and 1.
     * @param alpha the alpha value between 0 and 1.
     */
    setColor(red: number, green: number, blue: number, alpha: number): Particle;

    setColor(color: number): Particle;

    /**
     * Sets the alpha of the particle.
     * @param alpha the alpha value between 0 and 1.
     */
    setAlpha(alpha: number): Particle;

    /**
     * Returns the color of the Particle
     *
     * @return A {@link JavaColor java.awt.Color} with the R, G, B and A values
     */
    getColor(): JavaColor;

    /**
     * Sets the amount of ticks this particle will live for
     *
     * @param maxAge the particle's max age (in ticks)
     */
    setMaxAge(maxAge: number): Particle;

    remove(): Particle;

    toString(): string;
  }
}

declare interface JavaTypePath {
  // obfuscated paths
  (
    path: "net.minecraft.client.gui.inventory.GuiContainer",
  ): typeof MCGuiContainer;
  (path: "net.minecraft.inventory.Slot"): typeof MCSlot;
  (path: "net.minecraft.util.Vec3"): typeof MCVec3;
  (
    path: "net.minecraft.client.renderer.GlStateManager",
  ): typeof MCGlStateManager;
  (path: "net.minecraft.block.Block"): typeof MCBlock;
  (path: "net.minecraft.util.BlockPos"): typeof MCBlockPos;
  (path: "net.minecraft.item.Item"): typeof MCItem;
  (path: "net.minecraft.item.ItemStack"): typeof MCItemStack;
  (path: "net.minecraft.entity.item.EntityItem"): typeof MCEntityItem;
  (path: "net.minecraft.block.state.IBlockState"): typeof MCIBlockState;
  (path: "net.minecraft.inventory.IInventory"): typeof MCIInventory;
  (path: "net.minecraft.inventory.Container"): typeof MCContainer;
  (path: "net.minecraft.entity.Entity"): typeof MCEntity;
  (path: "net.minecraft.util.IChatComponent"): typeof MCIChatComponent;
  (path: "net.minecraft.nbt.NBTBase"): typeof MCNBTBase;
  (path: "net.minecraft.nbt.NBTTagCompound"): typeof MCNBTTagCompound;
  (path: "net.minecraft.world.chunk.Chunk"): typeof MCChunk;
  (path: "net.minecraft.util.EnumFacing"): typeof MCEnumFacing;
  (path: "net.minecraft.nbt.NBTTagList"): typeof MCNBTTagList;
  (path: "net.minecraft.client.Minecraft"): typeof MCMinecraft;
  (
    path: "net.minecraft.client.network.NetHandlerPlayClient",
  ): typeof MCNetHandlerPlayClient;
  (path: "net.minecraft.client.gui.GuiNewChat"): typeof MCGuiNewChat;
  (path: "net.minecraft.client.gui.GuiNewChat"): typeof MCGuiPlayerTabOverlay;
  (path: "net.minecraft.network.INetHandler"): typeof MCINetHandler;
  (path: "net.minecraft.network.Packet"): MCPacket<any>;
  (path: "net.minecraft.client.gui.GuiScreen"): typeof MCGuiScreen;
  (path: "net.minecraft.client.settings.GameSettings"): typeof MCGameSettings;
  (path: "net.minecraft.entity.player.EntityPlayer"): typeof MCEntityPlayer;
  (path: "net.minecraft.client.entity.EntityPlayerSP"): typeof MCEntityPlayerSP;
  (path: "net.minecraft.client.settings.KeyBinding"): typeof MCKeyBinding;
  (path: "net.minecraft.client.gui.GuiButton"): typeof MCGuiButton;
  (
    path: "net.minecraft.client.renderer.texture.DynamicTexture",
  ): typeof MCDynamicTexture;
  (
    path: "net.minecraft.client.renderer.texture.AbstractTexture",
  ): typeof MCAbstractTexture;
  (path: "net.minecraft.client.audio.SoundCategory"): typeof MCSoundCategory;
  (path: "net.minecraft.potion.Potion"): typeof MCPotion;
  (path: "net.minecraft.potion.PotionEffect"): typeof MCPotionEffect;
  (path: "net.minecraft.world.World"): typeof MCWorld;
  (path: "net.minecraft.client.particle.EntityFX"): typeof MCEntityFX;
  (path: "net.minecraft.util.EnumParticleTypes"): typeof MCEnumParticleTypes;
  (path: "net.minecraft.client.gui.FontRenderer"): typeof MCFontRenderer;
  (
    path: "net.minecraft.client.renderer.entity.RenderManager",
  ): typeof MCRenderManager;
  (path: "net.minecraft.entity.EntityLivingBase"): typeof MCEntityLivingBase;
  (path: "net.minecraft.client.multiplayer.WorldClient"): typeof MCWorldClient;
  (path: "net.minecraft.scoreboard.Score"): typeof MCScore;
  // forge paths
  (
    path: "net.minecraftforge.fml.common.network.FMLNetworkEvent",
  ): FMLNetworkEventStatic;
  (
    path: "net.minecraftforge.client.event.ClientChatReceivedEvent",
  ): typeof ForgeClientChatReceivedEvent;
  (
    path: "net.minecraftforge.client.event.RenderGameOverlayEvent",
  ): typeof ForgeRenderGameOverlayEvent;
  (path: "net.minecraftforge.client.event.MouseEvent"): typeof ForgeMouseEvent;
  (
    path: "net.minecraftforge.client.event.sound.PlaySoundEvent",
  ): typeof ForgePlaySoundEvent;
  (
    path: "net.minecraftforge.fml.client.event.ConfigChangedEvent",
  ): typeof ForgeConfigChangedEvent;
  (
    path: "net.minecraftforge.fml.common.gameevent.TickEvent",
  ): typeof ForgeTickEvent;
  (
    path: "net.minecraftforge.event.world.NoteBlockEvent",
  ): typeof ForgeNoteBlockEvent;
  (
    path: "net.minecraftforge.client.event.DrawBlockHighlightEvent",
  ): typeof ForgeDrawBlockHighlightEvent;
  (
    path: "net.minecraftforge.client.event.GuiOpenEvent",
  ): typeof ForgeGuiOpenEvent;
  (
    path: "net.minecraftforge.event.entity.player.EntityItemPickupEvent",
  ): typeof ForgeEntityItemPickupEvent;
  (
    path: "net.minecraftforge.event.entity.player.PlayerInteractEvent",
  ): typeof ForgePlayerInteractEvent;
  (
    path: "net.minecraftforge.client.event.GuiScreenEvent",
  ): typeof ForgeGuiScreenEvent;
  (path: "net.minecraftforge.event.world.BlockEvent"): typeof ForgeBlockEvent;
  // java paths
  (path: "org.lwjgl.opengl.GL11"): typeof JavaGL11;
  (path: "org.lwjgl.opengl.GL12"): typeof JavaGL12;
  (path: "org.lwjgl.opengl.GL13"): typeof JavaGL13;
  (path: "org.lwjgl.opengl.GL14"): typeof JavaGL14;
  (path: "org.lwjgl.opengl.GL15"): typeof JavaGL15;
  (path: "org.lwjgl.opengl.GL20"): typeof JavaGL20;
  (path: "org.lwjgl.opengl.GL21"): typeof JavaGL21;
  (path: "org.lwjgl.opengl.GL30"): typeof JavaGL30;
  (path: "org.lwjgl.opengl.GL31"): typeof JavaGL31;
  (path: "org.lwjgl.opengl.GL32"): typeof JavaGL32;
  (path: "org.lwjgl.opengl.GL33"): typeof JavaGL33;
  (path: "org.lwjgl.opengl.GL40"): typeof JavaGL40;
  (path: "org.lwjgl.opengl.GL41"): typeof JavaGL41;
  (path: "org.lwjgl.opengl.GL42"): typeof JavaGL42;
  (path: "org.lwjgl.opengl.GL43"): typeof JavaGL43;
  (path: "org.lwjgl.opengl.GL44"): typeof JavaGL44;
  (path: "org.lwjgl.opengl.GL45"): typeof JavaGL45;
  (path: "java.lang.Thread"): typeof JavaThread;
  (path: "java.util.UUID"): typeof JavaUUID;
  (path: "java.io.File"): typeof JavaFile;
  (path: "java.nio.file.Path"): JavaPath;
  (path: "java.io.FileNameFilter"): JavaFileNameFilter;
  (path: "java.lang.Class"): typeof JavaClass;
  (path: "java.net.URL"): typeof JavaURL;
  (path: "java.net.URI"): typeof JavaURI;
  (
    path: "java.net.URLStreamHandlerFactory",
  ): typeof JavaURLStreamHandlerFactory;
  (path: "java.io.InputStream"): typeof JavaInputStream;
  (path: "java.net.URLConnection"): typeof JavaURLConnection;
  (path: "java.net.Proxy"): typeof JavaProxy;
  (path: "java.net.SocketAddress"): typeof JavaSocketAddress;
  (path: "java.net.URLStreamHandler"): typeof JavaURLStreamHandler;
  (path: "java.lang.reflect.Field"): typeof JavaField;
  (path: "java.lang.reflect.Method"): typeof JavaMethod;
  (path: "java.awt.image.BufferedImage"): typeof JavaBufferedImage;
  (path: "java.awt.Color"): typeof JavaColor;

  (path: string): any;
}

declare interface Java {
  type: JavaTypePath;
}

declare class NotFullyTyped {
  [s: string]: any;
  static [s: string]: any;
}

type NBTType =
  | string
  | number
  | number[]
  | { [key: string]: NBTType }
  | NBTType[];

////////////////////////
// obfuscated classes //
////////////////////////
//#region
declare class MCScoreboard extends NotFullyTyped {
  class: JavaClass<MCScoreboard>;
  static class: JavaClass<typeof MCScoreboard>;
}

declare class MCScore extends NotFullyTyped {
  class: JavaClass<MCScore>;
  static class: JavaClass<typeof MCScore>;
}

declare class MCScoreObjective extends NotFullyTyped {
  class: JavaClass<MCScoreObjective>;
  static class: JavaClass<typeof MCScoreObjective>;
}

declare class MCScorePlayerTeam extends NotFullyTyped {
  class: JavaClass<MCScorePlayerTeam>;
  static class: JavaClass<typeof MCScorePlayerTeam>;
}

declare class MCTileEntity extends NotFullyTyped {
  class: JavaClass<MCTileEntity>;
  static class: JavaClass<typeof MCTileEntity>;
}

declare class MCSlot extends NotFullyTyped {
  class: JavaClass<MCSlot>;
  static class: JavaClass<typeof MCSlot>;
}

declare class MCGuiContainer extends NotFullyTyped {
  class: JavaClass<MCGuiContainer>;
  static class: JavaClass<typeof MCGuiContainer>;
}

// TODO probalby should be extending from base object, need to fix issue with static members
declare class MCVec3 extends NotFullyTyped {
  class: JavaClass<MCVec3>;
  static class: JavaClass<typeof MCVec3>;
}

declare class MCGlStateManager extends NotFullyTyped {
  class: JavaClass<MCGlStateManager>;
  static class: JavaClass<typeof MCGlStateManager>;
}

declare class MCBlock extends NotFullyTyped {
  class: JavaClass<MCBlock>;
  static class: JavaClass<typeof MCBlock>;
}
declare class MCBlockPos extends NotFullyTyped {
  class: JavaClass<MCBlockPos>;
  static class: JavaClass<typeof MCBlockPos>;
}
declare class MCItem extends NotFullyTyped {
  class: JavaClass<MCItem>;
  static class: JavaClass<typeof MCItem>;
}
declare class MCItemStack extends NotFullyTyped {
  class: JavaClass<MCItemStack>;
  static class: JavaClass<typeof MCItemStack>;
}
declare class MCEntityItem extends NotFullyTyped {
  class: JavaClass<MCEntityItem>;
  static class: JavaClass<typeof MCEntityItem>;
}
declare class MCIBlockState extends NotFullyTyped {
  class: JavaClass<MCIBlockState>;
  static class: JavaClass<typeof MCIBlockState>;
}
declare class MCIInventory extends NotFullyTyped {
  class: JavaClass<MCIInventory>;
  static class: JavaClass<typeof MCIInventory>;
}
declare class MCContainer extends NotFullyTyped {
  class: JavaClass<MCContainer>;
  static class: JavaClass<typeof MCContainer>;
}
declare class MCEntity extends NotFullyTyped {
  class: JavaClass<MCEntity>;
  static class: JavaClass<typeof MCEntity>;
}
declare class MCIChatComponent extends NotFullyTyped {
  class: JavaClass<MCIChatComponent>;
  static class: JavaClass<typeof MCIChatComponent>;
}
declare class MCNBTBase extends NotFullyTyped {
  class: JavaClass<MCNBTBase>;
  static class: JavaClass<typeof MCNBTBase>;
}
declare class MCNBTTagCompound extends NotFullyTyped {
  class: JavaClass<MCNBTTagCompound>;
  static class: JavaClass<typeof MCNBTTagCompound>;
}
declare class MCChunk extends NotFullyTyped {
  class: JavaClass<MCChunk>;
  static class: JavaClass<typeof MCChunk>;
}
// TODO
declare class MCEnumFacing extends NotFullyTyped {
  class: JavaClass<MCEnumFacing>;
  static class: JavaClass<typeof MCEnumFacing>;
  Axis: any;
}
declare class MCNBTTagList extends NotFullyTyped {
  class: JavaClass<MCNBTTagList>;
  static class: JavaClass<typeof MCNBTTagList>;
}
declare class MCMinecraft extends NotFullyTyped {
  class: JavaClass<MCMinecraft>;
  static class: JavaClass<typeof MCMinecraft>;
}
declare class MCNetHandlerPlayClient extends NotFullyTyped {
  class: JavaClass<MCNetHandlerPlayClient>;
  static class: JavaClass<typeof MCNetHandlerPlayClient>;
}
declare class MCGuiNewChat extends NotFullyTyped {
  class: JavaClass<MCGuiNewChat>;
  static class: JavaClass<typeof MCGuiNewChat>;
}
declare class MCGuiPlayerTabOverlay extends NotFullyTyped {
  class: JavaClass<MCGuiPlayerTabOverlay>;
  static class: JavaClass<typeof MCGuiPlayerTabOverlay>;
}
declare class MCINetHandler extends NotFullyTyped {
  class: JavaClass<MCINetHandler>;
  static class: JavaClass<typeof MCINetHandler>;
}
declare interface MCPacket<T extends MCINetHandler> extends NotFullyTyped {
  class: JavaClass<MCPacket<T>>;
}
declare class MCGuiScreen extends NotFullyTyped {
  class: JavaClass<MCGuiScreen>;
  static class: JavaClass<typeof MCGuiScreen>;
}
declare class MCGameSettings extends NotFullyTyped {
  class: JavaClass<MCGameSettings>;
  static class: JavaClass<typeof MCGameSettings>;
}
// enum for MCEntityPlayer
declare enum EnumChatVisibility {
  FULL,
  SYSTEM,
  HIDDEN,
}
declare class MCEntityPlayer extends NotFullyTyped {
  class: JavaClass<MCEntityPlayer>;
  static class: JavaClass<typeof MCEntityPlayer>;
  EnumChatVisibility: EnumChatVisibility;
}

declare class MCEntityPlayerSP extends NotFullyTyped {
  class: JavaClass<MCEntityPlayerSP>;
  static class: JavaClass<typeof MCEntityPlayerSP>;
}

declare class MCKeyBinding extends NotFullyTyped {
  class: JavaClass<MCKeyBinding>;
  static class: JavaClass<typeof MCKeyBinding>;
}

declare class MCGuiButton extends MCGuiScreen {
  class: JavaClass<MCGuiButton>;
  static class: JavaClass<typeof MCGuiButton>;
}
declare class MCAbstractTexture extends NotFullyTyped {
  class: JavaClass<MCAbstractTexture>;
  static class: JavaClass<typeof MCAbstractTexture>;
}

declare class MCDynamicTexture extends MCAbstractTexture {
  class: JavaClass<MCDynamicTexture>;
  static class: JavaClass<typeof MCDynamicTexture>;
}

declare class MCSoundCategory extends NotFullyTyped {
  class: JavaClass<MCSoundCategory>;
  static class: JavaClass<typeof MCSoundCategory>;

  static MASTER: MCSoundCategory;
  static MUSIC: MCSoundCategory;
  static RECORDS: MCSoundCategory;
  static WEATHER: MCSoundCategory;
  static BLOCKS: MCSoundCategory;
  static MOBS: MCSoundCategory;
  static ANIMALS: MCSoundCategory;
  static PLAYERS: MCSoundCategory;
  static AMBIENT: MCSoundCategory;
}

declare class MCPotion extends NotFullyTyped {
  class: JavaClass<MCPotion>;
  static class: JavaClass<typeof MCPotion>;
}

declare class MCPotionEffect extends NotFullyTyped {
  class: JavaClass<MCSoundCategory>;
  static class: JavaClass<typeof MCSoundCategory>;
}
declare class MCWorld extends NotFullyTyped {
  class: JavaClass<MCWorld>;
  static class: JavaClass<typeof MCWorld>;
}

declare class MCEntityFX extends NotFullyTyped {
  class: JavaClass<MCEntityFX>;
  static class: JavaClass<typeof MCEntityFX>;
}

declare class MCEnumParticleTypes extends NotFullyTyped {
  class: JavaClass<MCEnumParticleTypes>;
  static class: JavaClass<typeof MCEnumParticleTypes>;

  static EXPLOSION_NORMAL: MCEnumParticleTypes;
  static EXPLOSION_LARGE: MCEnumParticleTypes;
  static EXPLOSION_HUGE: MCEnumParticleTypes;
  static FIREWORKS_SPARK: MCEnumParticleTypes;
  static WATER_BUBBLE: MCEnumParticleTypes;
  static WATER_SPLASH: MCEnumParticleTypes;
  static WATER_WAKE: MCEnumParticleTypes;
  static SUSPENDED: MCEnumParticleTypes;
  static SUSPENDED_DEPTH: MCEnumParticleTypes;
  static CRIT: MCEnumParticleTypes;
  static CRIT_MAGIC: MCEnumParticleTypes;
  static SMOKE_NORMAL: MCEnumParticleTypes;
  static SMOKE_LARGE: MCEnumParticleTypes;
  static SPELL: MCEnumParticleTypes;
  static SPELL_INSTANT: MCEnumParticleTypes;
  static SPELL_MOB: MCEnumParticleTypes;
  static SPELL_MOB_AMBIENT: MCEnumParticleTypes;
  static SPELL_WITCH: MCEnumParticleTypes;
  static DRIP_WATER: MCEnumParticleTypes;
  static DRIP_LAVA: MCEnumParticleTypes;
  static VILLAGER_ANGRY: MCEnumParticleTypes;
  static TOWN_AURA: MCEnumParticleTypes;
  static NOTE: MCEnumParticleTypes;
  static PORTAL: MCEnumParticleTypes;
  static ENCHANTMENT_TABLE: MCEnumParticleTypes;
  static FLAME: MCEnumParticleTypes;
  static LAVA: MCEnumParticleTypes;
  static FOOTSTEP: MCEnumParticleTypes;
  static CLOUD: MCEnumParticleTypes;
  static REDSTONE: MCEnumParticleTypes;
  static SNOWBALL: MCEnumParticleTypes;
  static SNOW_SHOVEL: MCEnumParticleTypes;
  static SLIME: MCEnumParticleTypes;
  static HEART: MCEnumParticleTypes;
  static BARRIER: MCEnumParticleTypes;
  static ITEM_CRACK: MCEnumParticleTypes;
  static BLOCK_CRACK: MCEnumParticleTypes;
  static BLOCK_DUST: MCEnumParticleTypes;
  static WATER_DROP: MCEnumParticleTypes;
  static ITEM_TAKE: MCEnumParticleTypes;
  static MOB_APPEARANCE: MCEnumParticleTypes;
}

declare class MCFontRenderer extends NotFullyTyped {
  class: JavaClass<MCFontRenderer>;
  static class: JavaClass<typeof MCFontRenderer>;
}

declare class MCRenderManager extends NotFullyTyped {
  class: JavaClass<MCRenderManager>;
  static class: JavaClass<typeof MCRenderManager>;
}

declare class MCEntityLivingBase extends NotFullyTyped {
  class: JavaClass<MCEntityLivingBase>;
  static class: JavaClass<typeof MCEntityLivingBase>;
}

declare class MCWorldClient extends NotFullyTyped {
  class: JavaClass<MCWorldClient>;
  static class: JavaClass<typeof MCWorldClient>;
}

//#endregion
///////////////////
// Forge Classes //
///////////////////
//#region
declare class ForgeEvent {
  static readonly Result: typeof ForgeEvent$Result;

  constructor();

  /**
   * Determine if this function is cancelable at all.
   * @return If access to setCanceled should be allowed
   *
   * Note:
   * Events with the Cancelable annotation will have this method automatically added to return true.
   */
  isCancelable(): boolean;

  /**
   * Determine if this event is canceled and should stop executing.
   * @return The current canceled state
   */
  isCanceled(): boolean;

  /**
   * Sets the state of this event, not all events are cancelable, and any attempt to
   * cancel a event that can't be will result in a IllegalArgumentException.
   *
   * The functionality of setting the canceled state is defined on a per-event bases.
   *
   * @param cancel The new canceled value
   */
  setCanceled(cancel: boolean): void;

  /**
   * Determines if this event expects a significant result value.
   *
   * Note:
   * Events with the HasResult annotation will have this method automatically added to return true.
   */
  hasResult(): boolean;

  /**
   * Returns the value set as the result of this event
   */
  getResult(): ForgeEvent$Result;

  /**
   * Sets the result value for this event, not all events can have a result set, and any attempt to
   * set a result for a event that isn't expecting it will result in a IllegalArgumentException.
   *
   * The functionality of setting the result is defined on a per-event bases.
   *
   * @param value The new result
   */
  setResult(value: ForgeEvent$Result): void;

  /**
   * Called by the base constructor, this is used by ASM generated
   * event classes to setup various functionality such as the listenerlist.
   */
  protected setup(): void;

  /**
   * Returns a ListenerList object that contains all listeners
   * that are registered to this event.
   *
   * @return Listener List
   */
  getListenerList(): NotFullyTyped;

  getPhase(): NotFullyTyped;
}

declare enum ForgeEvent$Result {
  DENY,
  DEFAULT,
  ALLOW,
}

declare class FMLNetworkEvent$ClientConnectedToServerEvent extends ForgeEvent {
  readonly isLocal: boolean;
  readonly connectionType: string;

  constructor(manager: any, connectionType: string);
}

declare class FMLNetworkEvent$ServerConnectionFromClientEvent extends ForgeEvent {
  readonly isLocal: boolean;
  constructor(manager: any);
}

declare class FMLNetworkEvent$ServerDisconnectionFromClientEvent extends ForgeEvent {
  constructor(manager: any);
}

declare class FMLNetworkEvent$ClientDisconnectionFromServerEvent extends ForgeEvent {
  constructor(manager: any);
}

declare class FMLNetworkEvent$CustomPacketRegistrationEvent extends ForgeEvent {
  readonly registrations: string[];
  readonly operation: string;
  readonly side: any;

  new<T>(
    manager: any,
    registrations: string[],
    operation: string,
    side: any,
    type: JavaClass<T>,
  ): FMLNetworkEvent$CustomPacketRegistrationEvent;
}

declare abstract class FMLNetworkEvent$CustomPacketEvent extends ForgeEvent {
  /**
   * The packet that generated the event
   */
  readonly packet: any;

  /**
   * Set this packet to reply to the originator
   */
  readonly reply: any;

  new<T>(
    thing: T,
    type: JavaClass<T>,
    manager: any,
    packet: any,
  ): FMLNetworkEvent$CustomPacketEvent;

  abstract side(): any;
}

declare class FMLNetworkEvent$ClientCustomPacketEvent extends FMLNetworkEvent$CustomPacketEvent {
  constructor(manager: any, packet: any);

  side(): any;
}

declare class FMLNetworkEvent$ServerCustomPacketEvent extends FMLNetworkEvent$CustomPacketEvent {
  constructor(manager: any, packet: any);

  side(): any;
}

declare class FMLNetworkEvent$CustomNetworkEvent extends ForgeEvent {
  readonly wrappedEevent: any;

  constructor(wrappedEvent: any);
}

declare interface FMLNetworkEvent extends ForgeEvent, NotFullyTyped {
  readonly class: JavaClass<FMLNetworkEvent>;
}
declare interface FMLNetworkEventStatic extends NotFullyTyped {
  readonly class: JavaClass<FMLNetworkEventStatic>;

  new <T>(thing: T, type: JavaClass<T>, manager: any): FMLNetworkEvent;

  /**
   * Fired at the client when a client connects to a server
   */
  readonly ClientConnectedToServerEvent: typeof FMLNetworkEvent$ClientConnectedToServerEvent;
  /**
   * Fired at the server when a client connects to the server.
   *
   * @author cpw
   *
   */
  readonly ServerConnectionFromClientEvent: typeof FMLNetworkEvent$ServerConnectionFromClientEvent;
  /**
   * Fired at the server when a client disconnects.
   *
   * @author cpw
   *
   */
  readonly ServerDisconnectionFromClientEvent: typeof FMLNetworkEvent$ServerDisconnectionFromClientEvent;
  /**
   * Fired at the client when the client is disconnected from the server.
   *
   * @author cpw
   *
   */
  readonly ClientDisconnectionFromServerEvent: typeof FMLNetworkEvent$ClientDisconnectionFromServerEvent;
  /**
   * Fired when the REGISTER/UNREGISTER for custom channels is received.
   *
   * @author cpw
   *
   * @param <S> The side
   */
  readonly CustomPacketRegistrationEvent: typeof FMLNetworkEvent$CustomPacketRegistrationEvent;

  readonly CustomPacketEvent: typeof FMLNetworkEvent$CustomPacketEvent;

  /**
   * Fired when a custom packet is received on the client for the channel
   * @author cpw
   *
   */
  readonly ClientCustomPacketEvent: typeof FMLNetworkEvent$ClientCustomPacketEvent;

  /**
   * Fired when a custom packet is received at the server for the channel
   * @author cpw
   *
   */
  readonly ServerCustomPacketEvent: typeof FMLNetworkEvent$ServerCustomPacketEvent;
  /**
   * Fired when a custom event, such as {@link NetworkHandshakeEstablished} is fired for the channel
   *
   * @author cpw
   *
   */
  readonly CustomNetworkEvent: typeof FMLNetworkEvent$CustomNetworkEvent;
}

declare class ForgeClientChatReceivedEvent extends ForgeEvent {
  class: JavaClass<ForgeClientChatReceivedEvent>;
  static class: JavaClass<typeof ForgeClientChatReceivedEvent>;

  /**
   * Introduced in 1.8:
   * 0 : Standard Text Message
   * 1 : 'System' message, displayed as standard text.
   * 2 : 'Status' message, displayed above action bar, where song notifications are.
   */
  type: number;
  message: MCIChatComponent;

  constructor(type: number, message: MCIChatComponent);
}

declare class ForgeRenderGameOverlayEvent extends ForgeEvent {
  class: JavaClass<ForgeRenderGameOverlayEvent>;
  static class: JavaClass<typeof ForgeRenderGameOverlayEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;
}
declare class CancellableEventHelper {
  setCanceled: (cancelable: boolean) => void;
}

declare class ForgeMouseEvent extends ForgeEvent {
  class: JavaClass<ForgeMouseEvent>;
  static class: JavaClass<typeof ForgeMouseEvent>;

  readonly x: number;
  readonly y: number;
  readonly dx: number;
  readonly dy: number;
  readonly dwheel: number;
  readonly button: number;
  readonly buttonstate: boolean;
  readonly nanoseconds: number;

  constructor();
}

/***
 * Raised when the SoundManager tries to play a normal sound.
 *
 * If you return null from this function it will prevent the sound from being played,
 * you can return a different entry if you want to change the sound being played.
 */
declare class ForgePlaySoundEvent extends ForgeEvent {
  class: JavaClass<ForgePlaySoundEvent>;
  static class: JavaClass<typeof ForgePlaySoundEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;
}

declare class ForgeConfigChangedEvent extends ForgeEvent {
  class: JavaClass<ForgeConfigChangedEvent>;
  static class: JavaClass<typeof ForgeConfigChangedEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;
}

declare class ForgeTickEvent extends ForgeEvent {
  class: JavaClass<ForgeTickEvent>;
  static class: JavaClass<typeof ForgeTickEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;
}
declare namespace ForgeTickEvent {
  class ClientTickEvent extends ForgeTickEvent {
    class: JavaClass<ForgeTickEvent.ClientTickEvent>;
    static class: JavaClass<typeof ForgeTickEvent.ClientTickEvent>;

    // TODO
    [s: string]: any;
    static [s: string]: any;
  }
}

// TODO extend the right class
declare class ForgeNoteBlockEvent extends ForgeEvent {
  class: JavaClass<ForgeNoteBlockEvent>;
  static class: JavaClass<typeof ForgeNoteBlockEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;
}
declare namespace ForgeNoteBlockEvent {
  class Octave {
    // TODO
    [s: string]: any;
    static [s: string]: any;
    static LOW: ForgeNoteBlockEvent.Octave;
    static MID: ForgeNoteBlockEvent.Octave;
    static HIGH: ForgeNoteBlockEvent.Octave;

    static fromId(id: number): ForgeNoteBlockEvent.Octave;
    class: JavaClass<ForgeNoteBlockEvent.Octave>;
    static class: JavaClass<typeof ForgeNoteBlockEvent.Octave>;
  }
  class Note {
    // TODO
    [s: string]: any;
    static [s: string]: any;
    static F_SHARP: ForgeNoteBlockEvent.Note;
    static G: ForgeNoteBlockEvent.Note;
    static G_SHARP: ForgeNoteBlockEvent.Note;
    static A: ForgeNoteBlockEvent.Note;
    static A_SHARP: ForgeNoteBlockEvent.Note;
    static B: ForgeNoteBlockEvent.Note;
    static C: ForgeNoteBlockEvent.Note;
    static C_SHARP: ForgeNoteBlockEvent.Note;
    static D: ForgeNoteBlockEvent.Note;
    static D_SHARP: ForgeNoteBlockEvent.Note;
    static E: ForgeNoteBlockEvent.Note;
    static F: ForgeNoteBlockEvent.Note;

    static values: ForgeNoteBlockEvent.Note[];

    static fromId(id: number): ForgeNoteBlockEvent.Note;
  }
  class Play extends ForgeNoteBlockEvent {
    // TODO
    [s: string]: any;
    static [s: string]: any;
    setCanceled(canceled: boolean): void;
    class: JavaClass<ForgeNoteBlockEvent.Play>;
    static class: JavaClass<typeof ForgeNoteBlockEvent.Play>;
  }
  class Change extends ForgeNoteBlockEvent {
    // TODO
    [s: string]: any;
    static [s: string]: any;
    setCanceled(canceled: boolean): void;
    class: JavaClass<ForgeNoteBlockEvent.Change>;
    static class: JavaClass<typeof ForgeNoteBlockEvent.Change>;

    readonly oldNote: ForgeNoteBlockEvent.Note;
    readonly oldActive: ForgeNoteBlockEvent.Octave;
  }
}

declare class ForgeDrawBlockHighlightEvent extends ForgeEvent {
  class: JavaClass<ForgeDrawBlockHighlightEvent>;
  static class: JavaClass<typeof ForgeDrawBlockHighlightEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;
}

declare class ForgeGuiOpenEvent extends ForgeEvent {
  class: JavaClass<ForgeGuiOpenEvent>;
  static class: JavaClass<typeof ForgeGuiOpenEvent>;

  gui: MCGuiScreen;
  constructor(gui: MCGuiScreen);
}

// TODO: extend the right class
declare class ForgeEntityItemPickupEvent extends ForgeEvent {
  class: JavaClass<ForgeEntityItemPickupEvent>;
  static class: JavaClass<typeof ForgeEntityItemPickupEvent>;

  readonly item: MCEntityItem;

  constructor(player: MCEntityPlayer, item: MCEntityItem);

  // TODO
  [s: string]: any;
  static [s: string]: any;
}

// TODO extend the right class
declare class ForgePlayerInteractEvent extends ForgeEvent {
  class: JavaClass<ForgePlayerInteractEvent>;
  static class: JavaClass<typeof ForgePlayerInteractEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;

  readonly action: ForgePlayerInteractEvent.Action;
  readonly world: MCWorld;
  readonly pos: MCBlockPos;
  readonly face: MCEnumFacing;

  constructor(
    player: MCEntityPlayer,
    action: ForgePlayerInteractEvent.Action,
    pos: MCBlockPos,
    face: MCEnumFacing,
    world: MCWorld,
  );
}
declare namespace ForgePlayerInteractEvent {
  enum Action {
    RIGHT_CLICK_AIR,
    RIGHT_CLICK_BLOCK,
    LEFT_CLICK_BLOCK,
  }
}

declare class ForgeGuiScreenEvent extends ForgeEvent {
  class: JavaClass<ForgeGuiScreenEvent>;
  static class: JavaClass<typeof ForgeGuiScreenEvent>;

  readonly gui: MCGuiScreen;

  constructor(gui: MCGuiScreen);

  // TODO
  [s: string]: any;
  static [s: string]: any;
}

declare namespace ForgeGuiScreenEvent {
  class BackgroundDrawnEvent extends ForgeGuiScreenEvent {
    constructor(gui: MCGuiScreen);

    getMouseX(): number;
    getMouseY(): number;
  }
  class DrawScreenEvent extends ForgeGuiScreenEvent {
    readonly mouseX: number;
    readonly mouseY: number;
    readonly renderPartialTicks: number;
    constructor(
      gui: MCGuiScreen,
      mouseX: number,
      mouseY: number,
      renderPartialTicks: number,
    );
  }
}
declare namespace ForgeGuiScreenEvent.DrawScreenEvent {
  class Post extends ForgeGuiScreenEvent.DrawScreenEvent {
    constructor(
      gui: MCGuiScreen,
      mouseX: number,
      mouseY: number,
      renderPartialTicks: number,
    );
  }
  class Pre extends ForgeGuiScreenEvent.DrawScreenEvent {
    constructor(
      gui: MCGuiScreen,
      mouseX: number,
      mouseY: number,
      renderPartialTicks: number,
    );
  }
}

declare class ForgeBlockEvent extends ForgeEvent {
  class: JavaClass<ForgeBlockEvent>;
  static class: JavaClass<typeof ForgeBlockEvent>;

  // TODO
  [s: string]: any;
  static [s: string]: any;
}

declare namespace ForgeBlockEvent {
  class BreakEvent extends ForgeBlockEvent {
    constructor(
      world: MCWorld,
      pos: MCBlockPos,
      state: MCIBlockState,
      player: MCEntityPlayer,
    );

    getPlayer(): MCEntityPlayer;

    getExpToDrop(): number;

    setExpToDrop(exp: number): void;
  }
}

//#endregion

//////////////////
// Java Classes //
//////////////////
//#region

//TODO
declare class JavaColor extends NotFullyTyped {
  /**
   * The color black.
   */
  static black: JavaColor;
  /**
   * The color black.
   */
  static BLACK: JavaColor;
  /**
   * The color blue.
   */
  static blue: JavaColor;
  /**
   * The color blue.
   */
  static BLUE: JavaColor;
  /**
   * The color cyan.
   */
  static cyan: JavaColor;
  /**
   * The color cyan.
   */
  static CYAN: JavaColor;
  /**
   * The color dark gray.
   */
  static darkGray: JavaColor;
  /**
   * The color dark gray.
   */
  static DARK_GRAY: JavaColor;
  /**
   * The color gray.
   */
  static gray: JavaColor;
  /**
   * The color gray.
   */
  static GRAY: JavaColor;
  /**
   * The color green.
   */
  static green: JavaColor;
  /**
   * The color green.
   */
  static GREEN: JavaColor;
  /**
   * The color light gray.
   */
  static LIGHT_GRAY: JavaColor;
  /**
   * The color light gray.
   */
  static lightGray: JavaColor;
  /**
   * The color magenta.
   */
  static magenta: JavaColor;
  /**
   * The color magenta.
   */
  static MAGENTA: JavaColor;
  /**
   * The color orange.
   */
  static orange: JavaColor;
  /**
   * The color orange.
   */
  static ORANGE: JavaColor;
  /**
   * The color pink.
   */
  static pink: JavaColor;
  /**
   * The color pink.
   */
  static PINK: JavaColor;
  /**
   * The color red.
   */
  static red: JavaColor;
  /**
   * The color red.
   */
  static RED: JavaColor;
  /**
   * The color white.
   */
  static white: JavaColor;
  /**
   * The color white.
   */
  static WHITE: JavaColor;
  /**
   * The color yellow.
   */
  static yellow: JavaColor;
  /**
   * The color yellow.
   */
  static YELLOW: JavaColor;

  /**
   * Creates a color in the specified ColorSpace with the color components specified in the float array and the specified alpha.
   */
  constructor(cspace: any, components: number[], alpha: number);
  /**
   * Creates an opaque sRGB color with the specified red, green, and blue values in the range (0.0 - 1.0).
   */
  constructor(r: number, g: number, b: number);
  /**
   * Creates an opaque sRGB color with the specified combined RGB value consisting of the red component in bits 16-23, the green component in bits 8-15, and the blue component in bits 0-7.
   */
  constructor(rgb: number);
  /**
   * Creates an sRGB color with the specified combined RGBA value consisting of the alpha component in bits 24-31, the red component in bits 16-23, the green component in bits 8-15, and the blue component in bits 0-7.
   */
  constructor(rgb: number, hasalpha: boolean);
  /**
   * Creates an opaque sRGB color with the specified red, green, and blue values in the range (0 - 255).
   */
  constructor(r: number, g: number, b: number);
  /**
   * Creates an sRGB color with the specified red, green, blue, and alpha values in the range (0 - 255).
   */
  constructor(r: number, g: number, b: number, a: number);

  /**
   * Creates a new Color that is a brighter version of this Color.
   */
  brighter(): JavaColor;

  /**
   * Creates and returns a PaintContext used to generate a solid color field pattern.
   */
  createContext(cm: any, r: any, r2d: any, xform: any, hints: any): any;

  /**
   * Creates a new Color that is a darker version of this Color.
   */
  darker(): JavaColor;

  /**
   * Converts a String to an integer and returns the specified opaque Color.
   */
  static decode(nm: string): JavaColor;

  /**
   * Determines whether another object is equal to this Color.
   */
  equals(obj: any): boolean;

  /**
   * Returns the alpha component in the range 0-255.
   */
  getAlpha(): number;

  /**
   * Returns the blue component in the range 0-255 in the default sRGB space.
   */
  getBlue(): number;

  /**
   * Finds a color in the system properties.
   */
  static getColor(nm: string): JavaColor;

  /**
   * Finds a color in the system properties.
   */
  static getColor(nm: string, v: JavaColor): JavaColor;

  /**
   * Finds a color in the system properties.
   */
  static getColor(nm: string, v: number): JavaColor;

  /**
   * Returns a float array containing only the color components of the Color in the ColorSpace specified by the cspace parameter.
   */
  getColorComponents(cspace: any, compArray: number[]): number[];

  /**
   * Returns a float array containing only the color components of the Color, in the ColorSpace of the Color.
   */
  getColorComponents(compArray: number[]): number[];

  /**
   * Returns the ColorSpace of this Color.
   */
  getColorSpace(): any;

  /**
   * Returns a float array containing the color and alpha components of the Color, in the ColorSpace specified by the cspace parameter.
   */
  getComponents(cspace: any, compArray: number[]): number[];

  /**
   * Returns a float array containing the color and alpha components of the Color, in the ColorSpace of the Color.
   */
  getComponents(compArray: number[]): number[];

  /**
   * Returns the green component in the range 0-255 in the default sRGB space.
   */
  getGreen(): number;

  /**
   * Creates a Color object based on the specified values for the HSB color model.
   */
  static getHSBColor(h: number, s: number, b: number): JavaColor;

  /**
   * Returns the red component in the range 0-255 in the default sRGB space.
   */
  getRed(): number;

  /**
   * Returns the RGB value representing the color in the default sRGB ColorModel.
   */
  getRGB(): number;

  /**
   * Returns a float array containing only the color components of the Color, in the default sRGB color space.
   */
  getRGBColorComponents(compArray: number[]): number[];

  /**
   * Returns a float array containing the color and alpha components of the Color, as represented in the default sRGB color space.
   */
  getRGBComponents(compArray: number[]): number[];

  /**
   * Returns the transparency mode for this Color.
   */
  getTransparency(): number;

  /**
   * Computes the hash code for this Color.
   */
  hashCode(): number;

  /**
   * Converts the components of a color, as specified by the HSB model, to an equivalent set of values for the default RGB model.
   */
  static HSBtoRGB(hue: number, saturation: number, brightness: number): number;

  /**
   * Converts the components of a color, as specified by the default RGB model, to an equivalent set of values for hue, saturation, and brightness that are the three components of the HSB model.
   */
  static RGBtoHSB(r: number, g: number, b: number, hsbvals: number[]): number[];

  /**
   * Returns a string representation of this Color.
   */
  toString(): string;
}

declare class Vector3f {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number);

  set(x: number, y: number): void;

  set(x: number, y: number, z: number): void;
  /**
   * @return the length squared of the vector
   */
  lengthSquared(): number;

  /**
   * Translate a vector
   * @param x The translation in x
   * @param y the translation in y
   * @return this
   */
  translate(x: number, y: number, z: number): Vector3f;

  /**
   * Add a vector to another vector and place the result in a destination
   * vector.
   * @param left The LHS vector
   * @param right The RHS vector
   * @param dest The destination vector, or null if a new vector is to be created
   * @return the sum of left and right in dest
   */
  static add(left: Vector3f, right: Vector3f, dest: Vector3f): Vector3f;

  /**
   * Subtract a vector from another vector and place the result in a destination
   * vector.
   * @param left The LHS vector
   * @param right The RHS vector
   * @param dest The destination vector, or null if a new vector is to be created
   * @return left minus right in dest
   */
  static sub(left: Vector3f, right: Vector3f, dest: Vector3f): Vector3f;

  /**
   * The cross product of two vectors.
   *
   * @param left The LHS vector
   * @param right The RHS vector
   * @param dest The destination result, or null if a new vector is to be created
   * @return left cross right
   */
  static cross(left: Vector3f, right: Vector3f, dest: Vector3f): Vector3f;

  /**
   * Negate a vector and place the result in a destination vector.
   * @param dest The destination vector or null if a new vector is to be created
   * @return the negated vector
   */
  negate(dest: Vector3f): Vector3f;

  /**
   * Normalise this vector and place the result in another vector.
   * @param dest The destination vector, or null if a new vector is to be created
   * @return the normalised vector
   */
  normalise(dest: Vector3f): Vector3f;

  /**
   * The dot product of two vectors is calculated as
   * v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
   * @param left The LHS vector
   * @param right The RHS vector
   * @return left dot right
   */
  static dot(left: Vector3f, right: Vector3f): number;

  /**
   * Calculate the angle between two vectors, in radians
   * @param a A vector
   * @param b The other vector
   * @return the angle between the two vectors, in radians
   */
  static angle(a: Vector3f, b: Vector3f): number;

  toString(): string;

  getX(): number;
  getY(): number;
  setX(x: number): void;
  setY(y: number): void;
  setZ(z: number): void;
  getZ(): number;

  equals(obj: any): boolean;
}

declare class Vector2f {
  x: number;
  y: number;
  /**
   * Constructor for Vector3f.
   */
  constructor();

  constructor(src: Vector2f);

  constructor(x: number, y: number);

  set(x: number, y: number): void;

  /**
   * Load from another Vector2f
   * @param src The source vector
   * @return this
   */
  set(src: Vector2f): Vector2f;

  /**
   * @return the length squared of the vector
   */
  lengthSquared(): number;

  /**
   * Translate a vector
   * @param x The translation in x
   * @param y the translation in y
   * @return this
   */
  translate(x: number, y: number): Vector2f;

  /**
   * Negate a vector
   * @return this
   */
  negate(): Vector2f;

  /**
   * Negate a vector and place the result in a destination vector.
   * @param dest The destination vector or null if a new vector is to be created
   * @return the negated vector
   */
  negate(dest: Vector2f): Vector2f;

  /**
   * Normalise this vector and place the result in another vector.
   * @param dest The destination vector, or null if a new vector is to be created
   * @return the normalised vector
   */
  normalise(dest: Vector2f): Vector2f;

  /**
   * The dot product of two vectors is calculated as
   * v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
   * @param left The LHS vector
   * @param right The RHS vector
   * @return left dot right
   */
  static dot(left: Vector2f, right: Vector2f): number;

  /**
   * Calculate the angle between two vectors, in radians
   * @param a A vector
   * @param b The other vector
   * @return the angle between the two vectors, in radians
   */
  static angle(a: Vector2f, b: Vector2f): number;

  /**
   * Add a vector to another vector and place the result in a destination
   * vector.
   * @param left The LHS vector
   * @param right The RHS vector
   * @param dest The destination vector, or null if a new vector is to be created
   * @return the sum of left and right in dest
   */
  static add(left: Vector2f, right: Vector2f, dest: Vector2f): Vector2f;

  /**
   * Subtract a vector from another vector and place the result in a destination
   * vector.
   * @param left The LHS vector
   * @param right The RHS vector
   * @param dest The destination vector, or null if a new vector is to be created
   * @return left minus right in dest
   */
  static sub(left: Vector2f, right: Vector2f, dest: Vector2f): Vector2f;

  scale(scale: number): Vector2f;

  toString(): string;

  /**
   * @return x
   */
  getX(): number;

  /**
   * @return Y
   */
  getY(): number;

  /**
   * Set X
   * @param x
   */
  setX(x: number): void;

  /**
   * Set Y
   * @param y
   */
  setY(y: number): void;

  equals(obj: any): boolean;
}
declare class JavaBufferedImage extends NotFullyTyped {}

declare class JavaGL11 extends NotFullyTyped {}
declare class JavaGL12 extends NotFullyTyped {}
declare class JavaGL13 extends NotFullyTyped {}
declare class JavaGL14 extends NotFullyTyped {}
declare class JavaGL15 extends NotFullyTyped {}
declare class JavaGL20 extends NotFullyTyped {}
declare class JavaGL21 extends NotFullyTyped {}
declare class JavaGL30 extends NotFullyTyped {}
declare class JavaGL31 extends NotFullyTyped {}
declare class JavaGL32 extends NotFullyTyped {}
declare class JavaGL33 extends NotFullyTyped {}
declare class JavaGL40 extends NotFullyTyped {}
declare class JavaGL41 extends NotFullyTyped {}
declare class JavaGL42 extends NotFullyTyped {}
declare class JavaGL43 extends NotFullyTyped {}
declare class JavaGL44 extends NotFullyTyped {}
declare class JavaGL45 extends NotFullyTyped {}

declare class JavaThread {
  /**
   * Allocates a new Thread
   */
  constructor(method: () => void);

  /**
   * Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds plus the specified number of nanoseconds, subject to the precision and accuracy of system timers and schedulers.
   */
  static sleep(millis: number, nanos?: number): void;

  /**
   * Returns a reference to the currently executing thread object.
   */
  static currentThread(): JavaThread;

  /**
   * Causes this thread to begin execution; the Java Virtual Machine calls the run method of this thread.
   */
  start(): void;

  /**
   * Returns an estimate of the number of active threads in the current thread's thread group and its subgroups
   */
  static activeCount(): number;

  /**
   * Determines if the currently running thread has permission to modify this thread.
   */
  checkAccess(): void;

  /**
   * The definition of this call depends on suspend(), which is deprecated. Further, the results of this call were never well-defined.
   */
  countStackFrames(): number;

  /**
   * This method was originally designed to destroy this thread without any cleanup. Any monitors it held would have remained locked. However, the method was never implemented. If if were to be implemented, it would be deadlock-prone in much the manner of suspend(). If the target thread held a lock protecting a critical system resource when it was destroyed, no thread could ever access this resource again. If another thread ever attempted to lock this resource, deadlock would result. Such deadlocks typically manifest themselves as "frozen" processes. For more information, see Why are Thread.stop, Thread.suspend and Thread.resume Deprecated?.
   */
  destroy(): void;

  /**
   * Prints a stack trace of the current thread to the standard error stream.
   */
  static dumpStack(): void;

  /**
   * Copies into the specified array every active thread in the current thread's thread group and its subgroups.
   */
  static enumerate(tarray: Thread[]): number;

  /**
   * Returns the identifier of this Thread.
   */
  getId(): number;

  /**
   * Returns this thread's name.
   */
  getName(): string;

  /**
   * Returns this thread's priority.
   */
  getPriority(): number;

  /**
   * Returns true if and only if the current thread holds the monitor lock on the specified object.
   */
  static holdsLock(obj: any): boolean;

  /**
   * Interrupts this thread.
   */
  interrupt(): void;

  /**
   * Tests whether the current thread has been interrupted.
   */
  static interrupted(): boolean;

  /**
   * Tests if this thread is alive.
   */
  isAlive(): boolean;

  /**
   * Tests if this thread is a daemon thread.
   */
  isDaemon(): boolean;

  /**
   * Tests whether this thread has been interrupted.
   */
  isInterrupted(): boolean;

  /**
   * Waits for this thread to die.
   */
  join(): void;

  /**
   * Waits at most millis milliseconds for this thread to die.
   */
  join(millis: number): void;

  /**
   * Waits at most millis milliseconds plus nanos nanoseconds for this thread to die.
   */
  join(millis: number, nanos: number): void;

  /**
   * This method exists solely for use with suspend(), which has been deprecated because it is deadlock-prone. For more information, see Why are Thread.stop, Thread.suspend and Thread.resume Deprecated?.
   */
  resume(): void;

  /**
   * If this thread was constructed using a separate Runnable run object, then that Runnable object's run method is called; otherwise, this method does nothing and returns.
   */
  run(): void;

  /**
   * Marks this thread as either a daemon thread or a user thread.
   */
  setDaemon(on: boolean): void;

  /**
   * Changes the name of this thread to be equal to the argument name.
   */
  setName(name: string): void;

  /**
   * Changes the priority of this thread.
   */
  setPriority(newPriority: number): void;

  /**
   * Causes this thread to begin execution; the Java Virtual Machine calls the run method of this thread.
   */
  start(): void;

  /**
   * This method is inherently unsafe. Stopping a thread with Thread.stop causes it to unlock all of the monitors that it has locked (as a natural consequence of the unchecked ThreadDeath exception propagating up the stack). If any of the objects previously protected by these monitors were in an inconsistent state, the damaged objects become visible to other threads, potentially resulting in arbitrary behavior. Many uses of stop should be replaced by code that simply modifies some variable to indicate that the target thread should stop running. The target thread should check this variable regularly, and return from its run method in an orderly fashion if the variable indicates that it is to stop running. If the target thread waits for long periods (on a condition variable, for example), the interrupt method should be used to interrupt the wait. For more information, see Why are Thread.stop, Thread.suspend and Thread.resume Deprecated?.
   */
  stop(): void;

  /**
   * This method has been deprecated, as it is inherently deadlock-prone. If the target thread holds a lock on the monitor protecting a critical system resource when it is suspended, no thread can access this resource until the target thread is resumed. If the thread that would resume the target thread attempts to lock this monitor prior to calling resume, deadlock results. Such deadlocks typically manifest themselves as "frozen" processes. For more information, see Why are Thread.stop, Thread.suspend and Thread.resume Deprecated?.
   */
  suspend(): void;

  /**
   * Returns a string representation of this thread, including the thread's name, priority, and thread group.
   */
  toString(): string;

  /**
   * A hint to the scheduler that the current thread is willing to yield its current use of a processor.
   */
  yield(): void;
}

declare class JavaUUID {
  /**
   * Constructs a new UUID using the specified data.
   */
  constructor(mostSigBitswNBT: number, leastSigBits: number);

  /**
   * Creates a UUID from the string standard representation as described in the toString() method.
   */
  static fromString(name: string): JavaUUID;

  /**
   * Static factory to retrieve a type 3 (name based) UUID based on the specified byte array.
   */
  static nameUUIDFromBytes(name: number[]): JavaUUID;

  /**
   * Static factory to retrieve a type 4 (pseudo randomly generated) UUID.
   */
  static randomUUID(): JavaUUID;

  /**
   * The clock sequence value associated with this UUID.
   */
  clockSequence(): number;
  /**
   * Compares this UUID with the specified UUID.
   */
  compareTo(val: JavaUUID): number;

  /**
   * Compares this object to the specified object.
   */
  equals(obj: any): boolean;
  /**
   * Returns the least significant 64 bits of this UUID's 128 bit value.
   */
  getLeastSignificantBits(): number;

  /**
   * Returns the most significant 64 bits of this UUID's 128 bit value.
   */
  getMostSignificantBits(): number;

  /**
   * Returns a hash code for this UUID.
   */
  hashCode(): number;

  /**
   * The node value associated with this UUID.
   */
  node(): number;

  /**
   * The timestamp value associated with this UUID.
   */
  timestamp(): number;

  /**
   * Returns a String object representing this UUID.
   */
  toString(): string;

  /**
   * The variant number associated with this UUID.
   */
  variant(): number;

  /**
   * The version number associated with this UUID.
   */
  version(): number;
}
/**An abstract representation of file and directory pathnames. */
declare class JavaFile {
  /**
   * The system-dependent path-separator character, represented as a string for convenience.
   */
  static pathSeperator: string;
  /**
   * The system-dependent path-separator character.
   */
  static pathSeperatorChar: number;
  /**
   * The system-dependent default name-separator character, represented as a string for convenience.
   */
  static separator: string;
  /**
   * The system-dependent default name-separator character.
   */
  static separatorChar: number;

  /**
   * Creates a new File instance from a parent abstract pathname and a child pathname string.
   */
  constructor(parent: JavaFile, child: string);

  /**
   * Creates a new File instance by converting the given pathname string into an abstract pathname.
   */
  constructor(pathname: string);

  /**
   * Creates a new File instance from a parent pathname string and a child pathname string.
   */
  constructor(parent: string, child: string);

  /**
   * Creates a new File instance by converting the given file: URI into an abstract pathname.
   */
  constructor(uri: JavaURI);

  /**
   * Tests whether the application can execute the file denoted by this abstract pathname.
   */
  canExecute(): boolean;

  /**
   * Tests whether the application can read the file denoted by this abstract pathname.
   */
  canRead(): boolean;

  /**
   * Tests whether the application can modify the file denoted by this abstract pathname.
   */
  canWrite(): boolean;

  /**
   * Compares two abstract pathnames lexicographically.
   */
  compareTo(pathname: JavaFile): number;

  /**
   * Atomically creates a new, empty file named by this abstract pathname if and only if a file with this name does not yet exist.
   */
  createNewFile(): boolean;

  /**
   * Creates an empty file in the default temporary-file directory, using the given prefix and suffix to generate its name.
   */
  static createTempFile(prefix: string, suffix: string): JavaFile;

  /**
   * Creates a new empty file in the specified directory, using the given prefix and suffix strings to generate its name.
   */
  static createTempFile(
    prefix: string,
    suffix: string,
    directory: JavaFile,
  ): JavaFile;

  /**
   * Deletes the file or directory denoted by this abstract pathname.
   */
  delete(): boolean;

  /**
   * Requests that the file or directory denoted by this abstract pathname be deleted when the virtual machine terminates.
   */
  deleteOnExit(): void;

  /**
   * Tests this abstract pathname for equality with the given object.
   */
  equals(obj: any): boolean;

  /**
   * Tests whether the file or directory denoted by this abstract pathname exists.
   */
  exists(): boolean;

  /**
   * Returns the absolute form of this abstract pathname.
   */
  getAbsoluteFile(): JavaFile;

  /**
   * Returns the absolute pathname string of this abstract pathname.
   */
  getAbsolutePath(): string;

  /**
   * Returns the canonical form of this abstract pathname.
   */
  getCanonicalFile(): JavaFile;

  /**
   * Returns the canonical pathname string of this abstract pathname.
   */
  getCanonicalPath(): string;

  /**
   * Returns the number of unallocated bytes in the partition named by this abstract path name.
   */
  getFreeSpace(): number;

  /**
   * Returns the name of the file or directory denoted by this abstract pathname.
   */
  getName(): string;

  /**
   * Returns the pathname string of this abstract pathname's parent, or null if this pathname does not name a parent directory.
   */
  getParent(): string;

  /**
   * Returns the abstract pathname of this abstract pathname's parent, or null if this pathname does not name a parent directory.
   */
  getParentFile(): JavaFile;

  /**
   * Converts this abstract pathname into a pathname string.
   */
  getPath(): string;

  /**
   * Returns the size of the partition named by this abstract pathname.
   */
  getTotalSpace(): number;

  /**
   * Returns the number of bytes available to this virtual machine on the partition named by this abstract pathname.
   */
  getUsableSpace(): number;

  /**
   * Computes a hash code for this abstract pathname.
   */
  hashCode(): number;

  /**
   * Tests whether this abstract pathname is absolute.
   */
  isAbsolute(): boolean;

  /**
   * Tests whether the file denoted by this abstract pathname is a directory.
   */
  isDirectory(): boolean;

  /**
   * Tests whether the file denoted by this abstract pathname is a normal file.
   */
  isFile(): boolean;

  /**
   * Tests whether the file named by this abstract pathname is a hidden file.
   */
  isHidden(): boolean;

  /**
   * Returns the time that the file denoted by this abstract pathname was last modified.
   */
  lastModified(): number;

  /**
   * Returns the length of the file denoted by this abstract pathname.
   */
  length(): number;

  /**
   * Returns an array of strings naming the files and directories in the directory denoted by this abstract pathname.
   */
  list(): string[];

  /**
   * Returns an array of strings naming the files and directories in the directory denoted by this abstract pathname that satisfy the specified filter.
   */
  list(filter: JavaFileNameFilter): string[];

  /**
   * Returns an array of abstract pathnames denoting the files in the directory denoted by this abstract pathname.
   */
  listFiles(): JavaFile[];

  /**
   * Returns an array of abstract pathnames denoting the files and directories in the directory denoted by this abstract pathname that satisfy the specified filter.
   */
  listFiles(filter: JavaFileNameFilter): JavaFile[];

  /**
   * List the available filesystem roots.
   */
  static listRoots(): JavaFile[];

  /**
   * Creates the directory named by this abstract pathname.
   */
  mkdir(): boolean;

  /**
   * Creates the directory named by this abstract pathname, including any necessary but nonexistent parent directories.
   */
  mkdirs(): boolean;

  /**
   * Renames the file denoted by this abstract pathname.
   */
  renameTo(dest: JavaFile): boolean;

  /**
   * A convenience method to set the owner's execute permission for this abstract pathname.
   */
  setExecutable(executable: boolean): boolean;

  /**
   * Sets the owner's or everybody's execute permission for this abstract pathname.
   */
  setExecutable(executable: boolean, ownderOnly: boolean): boolean;

  /**
   * Sets the last-modified time of the file or directory named by this abstract pathname.
   */
  setLastModified(time: number): boolean;

  /**
   * A convenience method to set the owner's read permission for this abstract pathname.
   */
  setReadable(readable: boolean): boolean;

  /**
   * Sets the owner's or everybody's read permission for this abstract pathname.
   */
  setReadable(readable: boolean, ownerOnly: boolean): boolean;

  /**
   * Marks the file or directory named by this abstract pathname so that only read operations are allowed.
   */
  setReadOnly(): boolean;

  /**
   * A convenience method to set the owner's write permission for this abstract pathname.
   */
  setWritable(writable: boolean): boolean;

  /**
   * Sets the owner's or everybody's write permission for this abstract pathname.
   */
  setWritable(writable: boolean, ownerOnly: boolean): boolean;

  /**
   * Returns a java.nio.file.Path object constructed from the this abstract path.
   */
  toPath(): JavaPath;

  /**
   * Returns the pathname string of this abstract pathname.
   */
  toString(): string;

  /**
   * Constructs a file: URI that represents this abstract pathname.
   */
  toURI(): JavaURI;

  /**
   * DEPRECATEDThis method does not automatically escape characters that are illegal in URLs. It is recommended that new code convert an abstract pathname into a URL by first converting it into a URI, via the toURI method, and then converting the URI into a URL via the URI.toURL method.
   */
  toURL(): JavaURL;
}
//TODO
/**An object that may be used to locate a file in a file system. It will typically represent a system dependent file path. */
declare interface JavaPath extends NotFullyTyped {
  /**
   * Compares two abstract paths lexicographically.
   */
  compareTo(other: JavaPath): number;

  /**
   * Tests if this path ends with the given path.
   */
  endsWith(other: JavaPath): boolean;

  /**
   * Tests if this path ends with a Path, constructed by converting the given path string, in exactly the manner specified by the endsWith(Path) method.
   */
  endsWith(other: string): boolean;

  /**
   * Tests this path for equality with the given object.
   */
  equals(other: any): boolean;

  /**
   * Returns the name of the file or directory denoted by this path as a Path object.
   */
  getFileName(): JavaPath;
}

declare interface JavaFileNameFilter {
  /**
   * Tests if a specified file should be included in a file list.
   */
  accept(dir: JavaFile, name: string): boolean;
}

declare class JavaClass<T> {
  /**
   * casts this Class object to represent a subclass of the class represented by the specified class object.
   */
  asSubclass<U>(clazz: JavaClass<U>): JavaClass<U>;

  /**
   * Casts an object to the class or interface represented by this Class object.
   */
  cast(obj: any): T;

  /**
   * Returns the assertion status that would be assigned to this class if it were to be initialized at the time this method is invoked.
   */
  desiredAssertionStatus(): boolean;

  /**
   * Returns the Class object associated with the class or interface with the given string name.
   */
  static forName(className: string): JavaClass<any>;

  /**
   * Returns the canonical name of the underlying class as defined by the Java Language Specification.
   */
  getCanonicalName(): string;

  /**
   * Returns an array containing Class objects representing all the public classes and interfaces that are members of the class represented by this Class object.
   */
  getClasses(): JavaClass<any>[];

  /**
   * Returns the Class representing the component type of an array.
   */
  getComponentType(): JavaClass<any>;

  /**
   * Returns an array of Class objects reflecting all the classes and interfaces declared as members of the class represented by this Class object.
   */
  getDeclaredClasses(): JavaClass<any>[];

  /**
   * Returns a Field object that reflects the specified declared field of the class or interface represented by this Class object.
   */
  getDeclaredField(name: string): JavaField;

  /**
   * Returns an array of Field objects reflecting all the fields declared by the class or interface represented by this Class object.
   */
  getDeclaredFields(): JavaField[];

  /**
   * Returns a Method object that reflects the specified declared method of the class or interface represented by this Class object.
   */
  getDeclaredMethod(
    name: string,
    ...parameterTypes: JavaClass<any>[]
  ): JavaMethod;

  /**
   * Returns an array containing Method objects reflecting all the declared methods of the class or interface represented by this Class object, including public, protected, default (package) access, and private methods, but excluding inherited methods.
   */
  getDeclaredMethods(): JavaMethod[];

  /**
   * If the class or interface represented by this Class object is a member of another class, returns the Class object representing the class in which it was declared.
   */
  getDeclaringClass(): JavaClass<any>;

  /**
   * Returns the immediately enclosing class of the underlying class.
   */
  getEnclosingClass(): JavaClass<any>;

  /**
   * If this Class object represents a local or anonymous class within a method, returns a Method object representing the immediately enclosing method of the underlying class.
   */
  getEnclosingMethod(): JavaMethod;

  /**
   * Returns the elements of this enum class or null if this Class object does not represent an enum type.
   */
  getEnumConstants(): T[];

  /**
   * Returns a Field object that reflects the specified public member field of the class or interface represented by this Class object.
   */
  getField(name: string): JavaField;

  /**
   * Returns an array containing Field objects reflecting all the accessible public fields of the class or interface represented by this Class object.
   */
  getFields(): JavaField[];

  /**
   * Determines the interfaces implemented by the class or interface represented by this object.
   */
  getInterfaces(): JavaClass<any>[];

  /**
   * Returns a Method object that reflects the specified public member method of the class or interface represented by this Class object.
   */
  getMethod(name: string, ...parameterTypes: JavaClass<any>[]): JavaMethod;

  /**
   * Returns an array containing Method objects reflecting all the public methods of the class or interface represented by this Class object, including those declared by the class or interface and those inherited from superclasses and superinterfaces.
   */
  getMethods(): JavaMethod[];

  /**
   * Returns the Java language modifiers for this class or interface, encoded in an integer.
   */
  getModifiers(): number;

  /**
   * Returns the name of the entity (class, interface, array class, primitive type, or void) represented by this Class object, as a String.
   */
  getName(): string;

  /**
   * Finds a resource with a given name.
   */
  getResource(name: string): JavaURL;

  /**
   * Finds a resource with a given name.
   */
  getResourceAsStream(name: string): JavaInputStream;

  /**
   * Gets the signers of this class.
   */
  getSigners(): any[] | null;

  /**
   * Returns the simple name of the underlying class as given in the source code.
   */
  getSimpleName(): string;

  /**
   * Returns the Class representing the superclass of the entity (class, interface, primitive type or void) represented by this Class.
   */
  getSuperClass(): JavaClass<any>;

  /**
   * Return an informative string for the name of this type.
   */
  getTypeName(): string;

  /**
   * Returns true if this Class object represents an annotation type.
   */
  isAnnotation(): boolean;

  /**
   * Returns true if and only if the underlying class is an anonymous class.
   */
  isAnonymousClass(): boolean;

  /**
   * Determines if this Class object represents an array class.
   */
  isArray(): boolean;

  /**
   * Determines if the class or interface represented by this Class object is either the same as, or is a superclass or superinterface of, the class or interface represented by the specified Class parameter.
   */
  isAssignableFrom(cls: JavaClass<any>): boolean;

  /**
   * Returns true if and only if this class was declared as an enum in the source code.
   */
  isEnum(): boolean;

  /**
   * Determines if the specified Object is assignment-compatible with the object represented by this Class.
   */
  isInstance(obj: any): boolean;

  /**
   * Determines if the specified Class object represents an interface type.
   */
  isInterface(): boolean;

  /**
   * Returns true if and only if the underlying class is a local class.
   */
  isLocalClass(): boolean;

  /**
   * Returns true if and only if the underlying class is a member class.
   */
  isMemberClass(): boolean;

  /**
   * Determines if the specified Class object represents a primitive type.
   */
  isPrimitive(): boolean;

  /**
   * Returns true if this class is a synthetic class; returns false otherwise.
   */
  isSynthetic(): boolean;

  /**
   * Creates a new instance of the class represented by this Class object.
   */
  newInstance(): T;

  /**
   * Returns a string describing this Class, including information about modifiers and type parameters.
   */
  toGenericString(): string;

  /**
   * Converts the object to a string.
   */
  toString(): string;
}

declare class JavaURL {
  /**
   * Creates a URL object from the String representation.
   */
  constructor(spec: string);

  /**
   * Creates a URL object from the specified protocol, host, port number, and file.
   */
  constructor(protocol: string, host: string, port: number, file: string);

  /**
   * Creates a URL object from the specified protocol, host, port number, file, and handler.
   */
  constructor(
    protocol: string,
    host: string,
    port: number,
    file: string,
    handler: JavaURLStreamHandler,
  );

  /**
   * Creates a URL from the specified protocol name, host name, and file name.
   */
  constructor(protocol: string, host: string, file: string);

  /**
   * Creates a URL by parsing the given spec within a specified context.
   */
  constructor(context: JavaURL, spec: string);

  /**
   * Creates a URL by parsing the given spec with the specified handler within a specified context.
   */
  constructor(context: JavaURL, spec: string, handler: JavaURLStreamHandler);

  /**
   * Compares this URL for equality with another object.
   */
  equals(obj: any): boolean;

  /**
   * Gets the authority part of this URL.
   */
  getAuthority(): string;

  /**
   * Gets the contents of this URL.
   */
  getContent(): any;

  /**
   * Gets the contents of this URL.
   */
  getContent(classes: JavaClass<any>[]): any;

  /**
   * Gets the default port number of the protocol associated with this URL.
   */
  getDefaultPort(): number;

  /**
   * Gets the file name of this URL.
   */
  getFile(): string;

  /**
   * Gets the host name of this URL, if applicable.
   */
  getHost(): string;

  /**
   * Gets the path part of this URL.
   */
  getPath(): string;

  /**
   * Gets the port number of this URL.
   */
  getPort(): number;

  /**
   * Gets the protocol name of this URL.
   */
  getProtocol(): string;

  /**
   * Gets the query part of this URL.
   */
  getQuery(): string;

  /**
   * Gets the anchor (also known as the "reference") of this URL.
   */
  getRef(): string;

  /**
   * Gets the userInfo part of this URL.
   */
  getUserInfo(): string;

  /**
   * Returns a URLConnection instance that represents a connection to the remote object referred to by the URL.
   */
  openConnection(): JavaURLConnection;

  /**
   * Creates an integer suitable for hash table indexing.
   */
  hashCode(): number;

  /**
   * Same as openConnection(), except that the connection will be made through the specified proxy; Protocol handlers that do not support proxing will ignore the proxy parameter and make a normal connection.
   */
  openConnection(proxy: JavaProxy): JavaURLConnection;

  /**
   * Opens a connection to this URL and returns an InputStream for reading from that connection.
   */
  openStream(): JavaInputStream;

  /**
   * Compares two URLs, excluding the fragment component.
   */
  sameFile(other: JavaURL): boolean;

  /**
   * Sets an application's URLStreamHandlerFactory.
   */
  static setURLStreamHandlerFactory(fac: JavaURLStreamHandlerFactory): void;

  /**
   * Constructs a string representation of this URL.
   */
  toExternalForm(): string;

  /**
   * Constructs a string representation of this URL.
   */
  toString(): string;

  /**
   * Returns a URI equivalent to this URL.
   */
  toURI(): JavaURI;
}

declare class JavaURI {
  /**
   * Constructs a URI by parsing the given string.
   */
  constructor(str: string);

  /**
   * Constructs a URI from the given components.
   */
  constructor(scheme: string, ssp: string, fragment: string);

  /**
   * Constructs a hierarchical URI from the given components.
   */
  constructor(
    scheme: string,
    userInfo: string,
    host: string,
    port: number,
    path: string,
    query: string,
    fragment: string,
  );

  /**
   * Constructs a hierarchical URI from the given components.
   */
  constructor(scheme: string, host: string, path: string, fragment: string);

  /**
   * Constructs a hierarchical URI from the given components.
   */
  constructor(
    scheme: string,
    authority: string,
    path: string,
    query: string,
    fragment: string,
  );

  /**
   * Compares this URI to another object, which must be a URI.
   */
  compareTo(that: JavaURI): number;

  /**
   * Creates a URI by parsing the given string.
   */
  static create(str: string): JavaURI;

  /**
   * Tests this URI for equality with another object.
   */
  equals(obj: any): boolean;

  /**
   * Returns the decoded authority component of this URI.
   */
  getAuthority(): string;

  /**
   * Returns the decoded fragment component of this URI.
   */
  getFragment(): string;

  /**
   * Returns the host component of this URI.
   */
  getHost(): string;

  /**
   * Returns the decoded path component of this URI.
   */
  getPath(): string;

  /**
   * Returns the port number of this URI.
   */
  getPort(): number;

  /**
   * Returns the decoded query component of this URI.
   */
  getQuery(): string;

  /**
   * Returns the raw authority component of this URI.
   */
  getRawAuthority(): string;

  /**
   * Returns the raw fragment component of this URI.
   */
  getRawFragment(): string;

  /**
   * Returns the raw path component of this URI.
   */
  getRawPath(): string;

  /**
   * Returns the raw query component of this URI.
   */
  getRawQuery(): string;

  /**
   * Returns the raw scheme-specific part of this URI.
   */
  getRawSchemeSpecificPart(): string;

  /**
   * Returns the raw user-information component of this URI.
   */
  getRawUserInfo(): string;

  /**
   * Returns the scheme component of this URI.
   */
  getScheme(): string;

  /**
   * Returns the decoded scheme-specific part of this URI.
   */
  getSchemeSpecificPart(): string;

  /**
   * Returns the decoded user-information component of this URI.
   */
  getUserInfo(): string;

  /**
   * Returns a hash-code value for this URI.
   */
  hashCode(): number;

  /**
   * Tells whether or not this URI is absolute.
   */
  isAbsolute(): boolean;

  /**
   * Tells whether or not this URI is opaque.
   */
  isOpaque(): boolean;

  /**
   * Normalizes this URI's path.
   */
  normalize(): JavaURI;

  /**
   * Attempts to parse this URI's authority component, if defined, into user-information, host, and port components.
   */
  parseServerAuthority(): JavaURI;

  /**
   * Relativizes the given URI against this URI.
   */
  relativize(uri: JavaURI): JavaURI;

  /**
   * Constructs a new URI by parsing the given string and then resolving it against this URI.
   */
  resolve(str: string): JavaURI;

  /**
   * Resolves the given URI against this URI.
   */
  resolve(uri: JavaURI): JavaURI;

  /**
   * Returns the content of this URI as a US-ASCII string.
   */
  toASCIIString(): string;

  /**
   * Returns the content of this URI as a string.
   */
  toString(): string;

  /**
   * Constructs a URL from this URI.
   */
  toURL(): JavaURL;
}

declare class JavaURLStreamHandlerFactory {
  /**
   * Creates a new URLStreamHandler instance with the specified protocol.
   */
  createURLStreamHandler(protocol: string): JavaURLStreamHandlerFactory;
}

declare class JavaInputStream {
  constructor();

  /**
   * Returns an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking by the next invocation of a method for this input stream.
   */
  available(): number;

  /**
   * Closes this input stream and releases any system resources associated with the stream.
   */
  close(): void;

  /**
   * Marks the current position in this input stream.
   */
  mark(readLimit: number): void;

  /**
   * Tests if this input stream supports the mark and reset methods.
   */
  markSupported(): boolean;
  /**
   * Reads the next byte of data from the input stream.
   */
  read(): number;

  /**
   * Reads some number of bytes from the input stream and stores them into the buffer array b.
   */
  read(b: number[]): number;

  /**
   * Reads up to len bytes of data from the input stream into an array of bytes.
   */
  read(b: number[], off: number, len: number): number;

  /**
   * Repositions this stream to the position at the time the mark method was last called on this input stream.
   */
  reset(): void;

  /**
   * Skips over and discards n bytes of data from this input stream.
   */
  skip(n: number): number;
}

declare class JavaURLConnection extends NotFullyTyped {}
/**
 * This class represents a proxy setting, typically a type (http, socks) and a socket address. A Proxy is an immutable object.
 */
declare class JavaProxy {
  /**
   * A proxy setting that represents a DIRECT connection, basically telling the protocol handler not to use any proxying.
   */
  static NO_PROXY: JavaProxy;
  /**
   * Creates an entry representing a PROXY connection.
   */
  constructor(type: JavaProxy.Type, sa: JavaSocketAddress);

  /**
   * Returns the socket address of the proxy, or null if its a direct connection.
   */
  address(): JavaSocketAddress;

  /**
   * Compares this object against the specified object.
   */
  equals(obj: any): boolean;

  /**
   * Returns a hashcode for this Proxy.
   */
  hashCode(): number;

  /**
   * Constructs a string representation of this Proxy.
   */
  toString(): string;

  /**
   * Returns the proxy type.
   */
  type(): JavaProxy.Type;
}
declare namespace JavaProxy {
  class Type {
    /**Represents a direct connection, or the absence of a proxy. */
    static readonly DIRECT: JavaProxy.Type;
    /**Represents proxy for high level protocols such as HTTP or FTP. */
    static readonly HTTP: JavaProxy.Type;
    /**Represents a SOCKS (V4 or V5) proxy. */
    static readonly SOCKS: JavaProxy.Type;
    /**
     * Returns the enum constant of this type with the specified name.
     */
    static valueOf(name: string): JavaProxy.Type;

    /**
     * Returns an array containing the constants of this enum type, in the order they are declared.
     */
    static values(): JavaProxy.Type;
  }
}
/**
 * This class represents a Socket Address with no protocol attachment. As an abstract class, it is meant to be subclassed with a specific, protocol dependent, implementation.
 */
declare class JavaSocketAddress {
  constructor();
}

declare class JavaURLStreamHandler {
  constructor();
}

declare class JavaField {
  /**
   * Compares this Field against the specified object.
   */
  equals(obj: any): boolean;

  /**
   * Returns the value of the field represented by this Field, on the specified object.
   */
  get(obj: any): any;

  /**
   * Gets the value of a static or instance boolean field.
   */
  getBoolean(obj: any): boolean;

  /**
   * Gets the value of a static or instance byte field.
   */
  getByte(obj: any): number;

  /**
   * Gets the value of a static or instance field of type char or of another primitive type convertible to type char via a widening conversion.
   */
  getChar(obj: any): number;

  /**
   * Returns the Class object representing the class or interface that declares the field represented by this Field object.
   */
  getDeclaringClass(): JavaClass<any>;

  /**
   * Gets the value of a static or instance field of type double or of another primitive type convertible to type double via a widening conversion.
   */
  getDouble(obj: any): number;

  /**
   * Gets the value of a static or instance field of type float or of another primitive type convertible to type float via a widening conversion.
   */
  getFloat(obj: any): number;
  /**
   *Gets the value of a static or instance field of type int or of another primitive type convertible to type int via a widening conversion.
   */
  getInt(obj: any): number;

  /**
   * Gets the value of a static or instance field of type long or of another primitive type convertible to type long via a widening conversion.
   */
  getLong(obj: any): number;

  /**
   * Sets the field represented by this Field object on the specified object argument to the specified new value.
   */
  set(obj: any, value: any): void;
  /**
   * Sets the value of a field as a boolean on the specified object.
   */
  setBoolean(obj: any, z: boolean): void;

  /**
   * Sets the value of a field as a byte on the specified object.
   */
  setByte(obj: any, b: number): void;

  /**
   * Sets the value of a field as a char on the specified object.
   */
  setChar(obj: any, c: number): void;

  /**
   * Sets the value of a field as a double on the specified object.
   */
  setDouble(obj: any, d: number): void;

  /**
   * Sets the value of a field as a float on the specified object.
   */
  setFloat(obj: any, f: number): void;

  /**
   * Sets the value of a field as an int on the specified object.
   */
  setInt(obj: any, i: number): void;

  /**
   * Sets the value of a field as a long on the specified object.
   */
  setLong(obj: any, l: number): void;

  /**
   * Sets the value of a field as a short on the specified object.
   */
  setShort(obj: any, s: number): void;

  /**
   * Returns a string describing this Field, including its generic type.
   */
  toGenericString(): string;

  /**
   * Returns a string describing this Field.
   */
  toString(): string;
}
/**
 * A Method provides information about, and access to, a single method on a class or interface. The reflected method may be a class method or an instance method (including an abstract method).
 */
declare class JavaMethod {
  /**
   * Compares this Method against the specified object.
   */
  equals(obj: any): boolean;

  /**
   * Returns the Class object representing the class or interface that declares the executable represented by this object.
   */
  getDeclaringClass(): JavaClass<any>;

  /**
   * Returns the default value for the annotation member represented by this Method instance.
   */
  getDefaultValue(): any;

  /**
   * Returns an array of Class objects that represent the types of exceptions declared to be thrown by the underlying executable represented by this object.
   */
  getExceptionTypes(): JavaClass<any>[];

  /**
   * Returns the Java language modifiers for the executable represented by this object.
   */
  getModifiers(): number;

  /**
   * Returns the name of the method represented by this Method object, as a String.
   */
  getName(): string;

  /**
   * Returns the number of formal parameters (whether explicitly declared or implicitly declared or neither) for the executable represented by this object.
   */
  getParameterCount(): number;

  /**
   * Returns an array of Class objects that represent the formal parameter types, in declaration order, of the executable represented by this object.
   */
  getParameterTypes(): JavaClass<any>[];

  /**
   * Returns a Class object that represents the formal return type of the method represented by this Method object.
   */
  getReturnType(): JavaClass<any>;

  /**
   * Returns a hashcode for this Method.
   */
  hashCode(): number;

  /**
   * Invokes the underlying method represented by this Method object, on the specified object with the specified parameters.
   */
  invoke(obj: any, ...args: any[]): any;

  /**
   * Returns true if this method is a bridge method; returns false otherwise.
   */
  isBridge(): boolean;

  /**
   * Returns true if this method is a default method; returns false otherwise.
   */
  isDefault(): boolean;

  /**
   * Returns true if this executable is a synthetic construct; returns false otherwise.
   */
  isSynthetic(): boolean;

  /**
   * Returns true if this executable was declared to take a variable number of arguments; returns false otherwise.
   */
  isVarArgs(): boolean;

  /**
   * Returns a string describing this Method, including type parameters.
   */
  toGenericString(): string;

  /**
   * Returns a string describing this Method.
   */
  toString(): string;
}
//#endregion

/////////////////////
// CT non-included //
/////////////////////
//#region
declare class Trigger {
  /**
   * Sets a trigger's priority using {@link Priority}.
   * Highest runs first.
   * @param priority the priority of the trigger
   * @return the trigger for method chaining
   */
  setPriority(priority: Trigger.Priority): Trigger;

  /**
   * Registers a trigger based on its type.
   * This is done automatically with TriggerRegister.
   * @return the trigger for method chaining
   */
  register(): Trigger;

  /**
   * Unregisters a trigger.
   * @return the trigger for method chaining
   */
  unregister(): Trigger;

  compareTo(other: Trigger): number;
}
declare namespace Trigger {
  enum Priority {
    HIGHEST,
    HIGH,
    NORMAL,
    LOW,
    LOWEST,
  }
}

declare class ChatTrigger extends Trigger {
  constructor(method: Function, type: TriggerType, loader: ILoader);

  /**
   * Sets if the chat trigger should run if the chat event has already been canceled.
   * True by default.
   * @param bool Boolean to set
   * @return the trigger object for method chaining
   */
  triggerIfCanceled(bool: boolean): ChatTrigger;

  /**
   * Sets the chat criteria for `matchesChatCriteria`.
   * Arguments for the trigger's method can be passed in using ${variable}.
   * Example: `ChatTrigger.setChatCriteria("<${name}> ${message}");`
   * Use ${*} to match a chat message but ignore the pass through.
   * @param chatCriteria the chat criteria to set
   * @return the trigger object for method chaining
   */
  setChatCriteria(chatCriteria: string | RegExp): ChatTrigger;

  /**
   * Alias for {@link setChatCriteria}.
   * @param chatCriteria the chat criteria to set
   * @return the trigger object for method chaining
   */
  setCriteria(chatCriteria: string | RegExp): ChatTrigger;

  /**
   * Sets the chat parameter for `Parameter`.
   * Clears current parameter list.
   * @param parameter the chat parameter to set
   * @return the trigger object for method chaining
   */
  setParameter(parameter: "contains" | "start" | "end"): ChatTrigger;

  /**
   * Sets multiple chat parameters for `Parameter`.
   * Clears current parameter list.
   * @param parameters the chat parameters to set
   * @return the trigger object for method chaining
   */
  setParameters(...parameters: ("contains" | "start" | "end")[]): ChatTrigger;

  /**
   * Adds chat parameter for `Parameter`.
   * @param parameter the chat parameter to add
   * @return the trigger object for method chaining
   */
  addParameter(parameter: "contains" | "start" | "end"): ChatTrigger;

  /**
   * Adds multiple chat parameters for `Parameter`.
   * @param parameters the chat parameters to add
   * @return the trigger object for method chaining
   */
  addParameters(...parameters: ("contains" | "start" | "end")[]): ChatTrigger;

  /**
   * Adds the "start" parameter
   * @return the trigger object for method chaining
   */
  setStart(): ChatTrigger;

  /**
   * Adds the "contains" parameter
   * @return the trigger object for method chaining
   */
  setContains(): ChatTrigger;

  /**
   * Adds the "end" parameter
   * @return the trigger object for method chaining
   */
  setEnd(): ChatTrigger;

  /**
   * Makes the trigger match the entire chat message
   * @return the trigger object for method chaining
   */
  setExact(): ChatTrigger;

  /**
   * Makes the chat criteria case insensitive
   * @return the trigger object for method chaining
   */
  setCaseInsensitive(): ChatTrigger;

  /**
   * Argument 1 (String) The chat message received
   * Argument 2 (ClientChatReceivedEvent) the chat event fired
   * @param args list of arguments as described
   */
  trigger(args: any[]): void;
}

declare class CommandTrigger extends Trigger {
  constructor(method: Function, loader: ILoader);

  trigger(args: any[]): void;

  /**
   * Sets the tab completion options for the command.
   * This method must be used before setting the command name, otherwise, the tab completions will not be set.
   *
   * @param args all the tab completion options.
   */
  setTabCompletions(...args: string[]): CommandTrigger;

  /**
   * Sets the tab completion options for the command.
   * This method must be used before setting the command name, otherwise, the tab completions will not be set.
   *
   * @param args all the tab completion options.
   */
  setTabCompletions(args: string[]): CommandTrigger;

  /**
   * This sets the possible tab completions for the command.
   * This method must be used before setting the command name, otherwise, the tab completions will not be set.
   *
   * @param callback the callback that returns the tab completion options.
   *
   * For example:
   * ```js
   * register("command", () => {
   *
   * }).setTabCompletions((args) => {
   *      return ["option1", "option2"];
   * }).setName("test");
   *```
   * The `args` parameter of the callback are the arguments currently passed to the command.
   * For instance, if you want to not show the options after the user tabs the first time, just add a check
   * for the length of the arguments and return an empty array.
   *
   * The return value of the callback **must be an array of strings**, and in this case will always return the 2
   * options in the array.
   */
  setTabCompletions(callback: (args: string[]) => string[]): CommandTrigger;

  /**
   * Sets the aliases for the command.
   *
   * @param args all the aliases.
   */
  setAliases(...args: string[]): CommandTrigger;

  /**
   * Sets the command name.
   * Example:
   * CommandTrigger.setCommandName("test")
   * would result in the command being /test
   *
   * @param commandName The command name
   * @param overrideExisting Whether existing commands with the same name should be overridden
   * @return the trigger for additional modification
   */
  setCommandName(
    commandName: string,
    overrideExisting?: boolean,
  ): CommandTrigger;

  /**
   * Alias for {@link setCommandName}
   *
   * @param commandName The command name
   * * @param overrideExisting Whether existing commands with the same name should be overridden
   * @return the trigger for additional modification
   */
  setName(commandName: string, overrideExisting?: boolean): CommandTrigger;
}

declare class RegularTrigger extends Trigger {
  trigger(args: any[]): void;
}

declare abstract class ClassFilterTrigger extends Trigger {
  constructor(method: Function, triggerType: TriggerType, loader: ILoader);

  readonly triggerType: TriggerType;

  /**
   * @deprecated Prefer `setFilteredClass(MyClass.class)` instead
   */
  setPacketClass<T>(clazz: JavaClass<T>): this;

  /**
   * @deprecated Prefer `setFilteredClasses([A.class, B.class, C.class])` instead
   */
  setPacketClasses(classes: JavaClass<any>[]): this;

  /**
   * Alias for `setClasses([A.class, B.class])`
   *
   * @param clazz The class for which this trigger should run for
   */
  setFilteredClass<T>(clazz: JavaClass<T>): this;

  /**
   * Sets which classes this trigger should run for. If the list is empty, it runs
   * for every class.
   *
   * @param classes The classes for which this trigger should run for
   * @return This trigger object for chaining
   */
  setFilteredClasses(classes: JavaClass<any>[]): this;

  abstract evalTriggerType(args: any[]): any;
}

declare class RenderEntityTrigger extends ClassFilterTrigger {
  evalTriggerType(args: any[]): MCEntity;
}

declare class RenderTileEntityTrigger extends ClassFilterTrigger {
  evalTriggerType(args: any[]): MCTileEntity;
}

declare class PacketTrigger extends ClassFilterTrigger {
  evalTriggerType(args: any[]): MCPacket<any>;
}

declare class EventTrigger extends Trigger {
  constructor(method: Function, triggerType: TriggerType, loader: ILoader);

  /**
   * Sets if this trigger should run if the event has already been canceled.
   * True by default.
   *
   * @param bool Boolean to set
   * @return the trigger object for method chaining
   */
  triggerIfCanceled(bool: boolean): EventTrigger;

  trigger(args: any[]): void;
}

declare class SoundPlayTrigger extends Trigger {
  constructor(method: Function, loader: ILoader);

  soundNameCriteria: string;

  /**
   * Sets the sound name criteria.
   *
   * @param soundNameCriteria the sound name
   * @return the trigger for method chaining
   */
  setCriteria(soundNameCriteria: string): SoundPlayTrigger;

  trigger(args: any[]): void;
}

declare class StepTrigger extends Trigger {
  constructor(method: Function, loader: ILoader);

  /**
   * Sets the frames per second that the trigger activates.
   * This has a maximum one step per second.
   * @param fps the frames per second to set
   * @return the trigger for method chaining
   */
  setFps(fps: number): StepTrigger;

  /**
   * Sets the delay in seconds between the trigger activation.
   * This has a minimum of one step every second. This will override {@link setFps}.
   * @param delay The delay in seconds
   * @return the trigger for method chaining
   */
  setDelay(delay: number): StepTrigger;

  trigger(args: any[]): void;
}

declare class ForgeTrigger extends Trigger {
  constructor(method: Function, eventClass: JavaClass<any>, loader: ILoader);
}

declare class Team {
  constructor(team: MCScorePlayerTeam);

  readonly team: MCScorePlayerTeam;

  getTeam(): MCScorePlayerTeam;

  /**
   * Gets the registered name of the team
   */
  getRegisteredName(): string;

  /**
   * Gets the display name of the team
   */
  getName(): string;

  /**
   * Sets the display name of the team
   * @param name the new display name
   * @return the team for method chaining
   */
  setName(name: string): Team;

  /**
   * Gets the list of names on the team
   */
  getMembers(): String[];

  /**
   * Gets the team prefix
   */
  getPrefix(): string;

  /**
   * Sets the team prefix
   * @param prefix the prefix to set
   * @return the team for method chaining
   */
  setPrefix(prefix: string): Team;

  /**
   * Gets the team suffix
   */
  getSuffix(): string;

  /**
   * Sets the team suffix
   * @param suffix the suffix to set
   * @return the team for method chaining
   */
  setSuffix(suffix: string): Team;

  /**
   * Gets the team's friendly fire setting
   */
  getFriendlyFire(): boolean;

  /**
   * Gets whether the team can see invisible players on the same team
   */
  canSeeInvisibleTeammates(): boolean;

  /**
   * Gets the team's name tag visibility
   */
  getNameTagVisibility():
    | "always"
    | "never"
    | "hideForOtherTeams"
    | "hideForOwnTeam";

  /**
   * Gets the team's death message visibility
   */
  getDeathMessageVisibility():
    | "always"
    | "never"
    | "hideForOtherTeams"
    | "hideForOwnTeam";
}

declare interface NBT {
  /**
   * Creates a new {@link NBTBase} from the given {@link nbt}
   *
   * @param nbt the value to convert to NBT
   * @param options optional argument to allow refinement of the NBT data.
   * Possible options include:
   * - coerceNumericStrings: Boolean, default false.
   * E.g. "10b" as a byte, "20s" as a short, "30f" as a float, "40d" as a double,
   * "50l" as a long
   * - preferArraysOverLists: Boolean, default false
   * E.g. a list with all bytes or integers will be converted to an NBTTagByteArray or
   * NBTTagIntArray accordingly
   *
   * @throws `NBTException` if {@link nbt} can not be parsed as valid NBT
   *
   * @return {@link NBTTagCompound} if {@link nbt} is an object, {@link NBTTagList} if {@link nbt}
   * is an array and preferArraysOverLists is false, or {@link NBTBase} otherwise.
   */
  parse(
    nbt: any,
    options?: {
      /**
       * Default false.
       * E.g. "10b" as a byte, "20s" as a short, "30f" as a float, "40d" as a double,
       * "50l" as a long
       */
      coerceNumericStrings?: boolean;
      /**
       * Default false.
       * E.g. a list with all bytes or integers will be converted to an NBTTagByteArray or
       * NBTTagIntArray accordingly
       */
      preferArraysOverLists?: boolean;
    },
  ): NBTBase;

  toObject(nbt: NBTTagCompound): NBTType;

  toArray(nbt: NBTTagList): NBTType[];
}

declare class Client {
  /**
   * Get the {@link KeyBind} from an already existing Minecraft KeyBinding, otherwise, returns null.
   *
   * @param keyCode the keycode to search for, see Keyboard below. Ex. Keyboard.KEY_A
   * @return the {@link KeyBind} from a Minecraft KeyBinding, or null if one doesn't exist
   * @see [org.lwjgl.input.Keyboard](http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html)
   */
  getKeyBindFromKey(keyCode: number): KeyBind | null;

  /**
   * Get the {@link KeyBind} from an already existing Minecraft KeyBinding, else, return a new one.
   *
   * @param keyCode the keycode which the keybind will respond to, see Keyboard below. Ex. Keyboard.KEY_A
   * @param description the description of the keybind
   * @param category the keybind category the keybind will be in
   * @return the {@link KeyBind} from a Minecraft KeyBinding, or a new one if one doesn't exist
   * @see [org.lwjgl.input.Keyboard](http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html)
   */
  getKeyBindFromKey(
    keyCode: number,
    description: string,
    category: string,
  ): KeyBind;

  /**
   * Get the {@link KeyBind} from an already existing Minecraft KeyBinding, else, return a new one.
   * This will create the {@link KeyBind} with the default category "ChatTriggers".
   *
   * @param keyCode the keycode to search for, see Keyboard below. Ex. Keyboard.KEY_A
   * @param description the description of the keybind
   * @return the {@link KeyBind} from a Minecraft KeyBinding, or a new one if one doesn't exist
   * @see [org.lwjgl.input.Keyboard](http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html)
   */
  getKeyBindFromKey(keyCode: number, description: string): KeyBind;

  /**
   * Get the {@link KeyBind} from an already existing
   * Minecraft KeyBinding, otherwise, returns null.
   *
   * @param description the description of the keybind
   * @return the {@link KeyBind}, or null if one doesn't exist
   */
  getKeyBindFromDescription(description: string): Keyboard | null;

  static readonly INSTANCE: Client;
  static readonly settings: Settings;
  readonly INSTANCE: Client;
  readonly settings: Settings;

  getSettings(): Settings;
  static getSettings(): Settings;

  /**
   * Gets Minecraft's Minecraft object
   *
   * @return The Minecraft object
   */
  getMinecraft(): MCMinecraft;
  /**
   * Gets Minecraft's Minecraft object
   *
   * @return The Minecraft object
   */
  static getMinecraft(): MCMinecraft;

  /**
   * Gets Minecraft's NetHandlerPlayClient object
   *
   * @return The NetHandlerPlayClient object
   */
  getConnection(): MCNetHandlerPlayClient | null;
  /**
   * Gets Minecraft's NetHandlerPlayClient object
   *
   * @return The NetHandlerPlayClient object
   */
  static getConnection(): MCNetHandlerPlayClient | null;

  /**
   * Schedule's a task to run on Minecraft's main thread in {@link delay} ticks.
   * Defaults to the next tick.
   * @param delay The delay in ticks
   * @param callback The task to run on the main thread
   */
  scheduleTask(delay: number, callback: () => void): void;
  /**
   * Schedule's a task to run on Minecraft's main thread in {@link delay} ticks.
   * Defaults to the next tick.
   * @param delay The delay in ticks
   * @param callback The task to run on the main thread
   */
  static scheduleTask(delay: number, callback: () => void): void;

  /**
   * Schedule's a task to run on Minecraft's main thread in {@link delay} ticks.
   * Defaults to the next tick.
   * @param callback The task to run on the main thread
   */
  scheduleTask(callback: () => void): void;
  /**
   * Schedule's a task to run on Minecraft's main thread in {@link delay} ticks.
   * Defaults to the next tick.
   * @param callback The task to run on the main thread
   */
  static scheduleTask(callback: () => void): void;

  /**
   * Quits the client back to the main menu.
   * This acts just like clicking the "Disconnect" or "Save and quit to title" button.
   */
  disconnect(): void;
  /**
   * Quits the client back to the main menu.
   * This acts just like clicking the "Disconnect" or "Save and quit to title" button.
   */
  static disconnect(): void;

  /**
   * Connects to the server with the given ip.
   * @param ip The ip to connect to
   */
  connect(ip: string): void;
  /**
   * Connects to the server with the given ip.
   * @param ip The ip to connect to
   */
  static connect(ip: string): void;

  /**
   * Gets the Minecraft GuiNewChat object for the chat gui
   *
   * @return The GuiNewChat object for the chat gui
   */
  getChatGUI(): MCGuiNewChat;
  /**
   * Gets the Minecraft GuiNewChat object for the chat gui
   *
   * @return The GuiNewChat object for the chat gui
   */
  static getChatGUI(): MCGuiNewChat;

  isInChat(): boolean;
  static isInChat(): boolean;

  getTabGui(): MCGuiPlayerTabOverlay;
  static getTabGui(): MCGuiPlayerTabOverlay;

  isInTab(): boolean;
  static isInTab(): boolean;

  /**
   * Gets whether the Minecraft window is active
   * and in the foreground of the user's screen.
   *
   * @return true if the game is active, false otherwise
   */
  isTabbedIn(): boolean;
  /**
   * Gets whether the Minecraft window is active
   * and in the foreground of the user's screen.
   *
   * @return true if the game is active, false otherwise
   */
  static isTabbedIn(): boolean;

  isControlDown(): boolean;
  static isControlDown(): boolean;

  isShiftDown(): boolean;
  static isShiftDown(): boolean;

  isAltDown(): boolean;
  static isAltDown(): boolean;

  getFps(): number;
  static getFps(): number;

  getVersion(): string;
  static getVersion(): string;

  getMaxMemory(): number;
  static getMaxMemory(): number;

  getTotalMemory(): number;
  static getTotalMemory(): number;

  getFreeMemory(): number;
  static getFreeMemory(): number;

  getMemoryUsage(): number;
  static getMemoryUsage(): number;

  getSystemTIme(): number;
  static getSystemTIme(): number;

  getMouseX(): number;
  static getMouseX(): number;

  getMouseY(): number;
  static getMouseY(): number;

  isInGui(): boolean;
  static isInGui(): boolean;

  /**
   * Gets the chat message currently typed into the chat gui.
   *
   * @return A blank string if the gui isn't open, otherwise, the message
   */
  getCurrentChatMessage(): string;
  /**
   * Gets the chat message currently typed into the chat gui.
   *
   * @return A blank string if the gui isn't open, otherwise, the message
   */
  static getCurrentChatMessage(): string;

  /**
   * Sets the current chat message, if the chat gui is not open, one will be opened.
   *
   * @param message the message to put in the chat text box.
   */
  setCurrentChatMessage(message: string): void;
  /**
   * Sets the current chat message, if the chat gui is not open, one will be opened.
   *
   * @param message the message to put in the chat text box.
   */
  static setCurrentChatMessage(message: string): void;

  sendPacket<T extends MCINetHandler>(packet: MCPacket<T>): void;
  static sendPacket<T extends MCINetHandler>(packet: MCPacket<T>): void;

  /**
   * Display a title.
   *
   * @param title title text
   * @param subtitle subtitle text
   * @param fadeIn time to fade in
   * @param time time to stay on screen
   * @param fadeOut time to fade out
   */
  showTitle(
    title: string,
    subtitle: string,
    fadeIn: number,
    time: number,
    fadeOut: number,
  ): void;
  /**
   * Display a title.
   *
   * @param title title text
   * @param subtitle subtitle text
   * @param fadeIn time to fade in
   * @param time time to stay on screen
   * @param fadeOut time to fade out
   */
  static showTitle(
    title: string,
    subtitle: string,
    fadeIn: number,
    time: number,
    fadeOut: number,
  ): void;
}
declare namespace Client {
  class currentGui {
    /**
     * Gets the Java class name of the currently open gui, for example, "GuiChest"
     *
     * @return the class name of the current gui
     */
    static getClassName(): string;

    /**
     * Gets the Minecraft gui class that is currently open
     *
     * @return the Minecraft gui
     */
    static get(): MCGuiScreen;

    /**
     * Gets the slot under the mouse in the current gui, if one exists.
     *
     * @return the {@link Slot} under the mouse
     */
    getSlotUnderMouse(): Slot | null;
    /**
     * Gets the slot under the mouse in the current gui, if one exists.
     *
     * @return the {@link Slot}Slot] under the mouse
     */
    static getSlotUnderMouse(): Slot | null;

    /**
     * Closes the currently open gui
     */
    static close(): void;
  }
  class camera {
    static getX(): number;
    static getY(): number;
    static getZ(): number;
  }
}

declare class Console {
  clearConsole(): void;

  printStackTrace(error: Error): void;

  showConsole(): void;

  println(
    obj: any,
    logType?: LogType,
    end?: string,
    customColor?: JavaColor,
  ): void;
}

declare class console {
  config: IConsoleConfig;

  /**
   * Tests whether the given expression is true. If not, logs a message with the visual "error" representation.
   */
  assert(booleanValue: boolean, arg: string): void;
  /**
   * Clears the console.
   * Works by invoking `cmd /c cls` on Windows and `clear` on other OSes.
   */
  clear(): void;

  count(label: string): void;

  /**
   * Logs a message, with a visual "debug" representation.
   * @todo Optionally include some information for debugging, like the file path or line number where the call occurred from.
   */
  debug(args: any): void;

  /**
   * Logs a listing of the properties of the given object.
   * @todo Use the `options` argument.
   */
  dir(arg: any, options: any): void;

  /**
   * Logs a space-separated list of formatted representations of the given arguments,
   * using DOM tree representation whenever possible.
   */
  dirxml(args: any): void;

  /**
   * Logs a message with the visual "error" representation.
   * @todo Optionally include some information for debugging, like the file path or line number where the call occurred from.
   */
  error(args: any): void;

  /**
   * Logs a message as a label for and opens a nested block to indent future messages sent.
   * Call console.groupEnd() to close the block.
   * Representation of block is up to the platform,
   * it can be an interactive block or just a set of indented sub messages.
   */
  group(args: any): void;

  groupCollapsed(args: any): void;

  /**
   * Closes the most recently opened block created by a call
   * to 'console.group()' or 'console.groupCollapsed()'.
   */
  groupEnd(): void;

  /**
   * Logs a message with the visual "info" representation.
   */
  info(args: any): void;

  /**
   * Logs a message with the visual "log" representation.
   */
  log(args: any): void;

  time(label: any): void;
  /**
   * Stops a timer created by a call to `console.time(label)` and logs the elapsed time.
   */
  timeEnd(lable: any): void;

  /**
   * Logs a stack trace for where the call occurred from, using the given arguments as a label.
   */
  trace(args: any): void;

  /**
   * @todo Logs a tabular representation of the given data.
   * Fall back to just logging the argument if it can’t be parsed as tabular.
   */
  table(tabularData: any, properties: void): void;

  /**
   * Logs a message with the visual "warning" representation.
   */
  warn(args: void): console;
}

declare interface IConsoleConfig {
  indent: string;
  showMilliseconds: boolean;
  showMessageType: boolean;
  showTimeStamp: boolean;
  useColors: boolean;
  colorsByLogLevel: {
    error: string;
    log: string;
    info: string;
    warn: string;
  };
}

declare class Config {
  modulesFolder: string;

  printChatToConsole: boolean;

  showUpdatesInChat: boolean;

  updateModulesOnBoot: boolean;

  clearConsoleOnLoad: boolean;

  openConsoleOnError: boolean;

  consolePrettyFont: boolean;

  consoleFontSize: string;

  consoleTheme:
    | "default.dark"
    | "ashes.dark"
    | "atelierforest.dark"
    | "isotope.dark"
    | "codeschool.dark"
    | "gotham"
    | "hybrid"
    | "3024.light"
    | "chalk.light"
    | "blue"
    | "slate"
    | "red"
    | "green"
    | "aids";

  consoleForegroundColor: JavaColor;

  consoleBackgroundColor: JavaColor;

  threadedLoading: boolean;

  moduleImportHelp: boolean;
}

declare class Reference {
  readonly MODID: string;
  readonly MODNAME: string;
  readonly MODVERSION: string;

  isLoaded: boolean;

  // deprecated
  reloadCT(): void;

  unloadCT(asCommand?: boolean): void;
  static unloadCT(asCommand?: boolean): void;

  loadCT(): void;
  static loadCT(): void;

  conditionalThread(block: () => void): void;
  static conditionalThread(block: () => void): void;
}

declare interface JSONImpl {
  toJSON(key: string): string;
}

declare class BlockFace$Plane {
  static readonly Horizontal: BlockFace$Plane;
  static readonly Vertical: BlockFace$Plane;

  test(t: BlockFace): boolean;

  facings(): BlockFace[];

  iterator(): Iterator<BlockFace>;
}

declare class BlockFace$AxisDirection {
  readonly offset: number;
  constructor(offset: number);

  static readonly Positive: BlockFace$AxisDirection;
  static readonly Negative: BlockFace$AxisDirection;
}

declare class BlockFace$Axis {
  readonly plane: BlockFace$Plane;

  constructor(plane: BlockFace$Plane);

  static readonly X: BlockFace$Axis;
  static readonly Y: BlockFace$Axis;
  static readonly Z: BlockFace$Axis;

  isHorizontal(): boolean;
  isVertical(): boolean;

  test(t: BlockFace): boolean;

  getName(): string;
}

declare enum NBTDataType {
  BYTE = 0,
  SHORT = 1,
  INTEGER = 2,
  LONG = 3,
  FLOAT = 4,
  DOUBLE = 5,
  STRING = 6,
  BYTE_ARRAY = 7,
  INT_ARRAY = 8,
  BOOLEAN = 9,
  COMPOUND_TAG = 10,
  TAG_LIST = 11,
}

declare class CancellableEvent {
  setCanceled(newVal?: boolean): void;

  setCancelled(newVal?: boolean): void;

  isCancelable(): boolean;
  isCancellable(): boolean;

  isCanceled(): boolean;
  isCancelled(): boolean;
}

declare class TileEntity {
  constructor(tileEntity: MCTileEntity);

  readonly tileEntity: MCTileEntity;

  getX(): number;
  getY(): number;
  getZ(): number;

  getBlock(): Block;

  getBlockType(): BlockType;

  getBlockPos(): BlockPos;

  getMetadata(): number;

  toString(): string;
}

declare class Settings {
  static getSettings(): MCGameSettings;
  getSettings(): MCGameSettings;

  static getFOV(): number;
  getFOV(): number;

  static setFOV(fov: number): void;
  setFOV(fov: number): void;

  static getDifficulty(): number;
  getDifficulty(): number;

  static setDifficulty(difficulty: number): void;
  setDifficulty(difficulty: number): void;

  static skin: skin;
  static sound: sound;
  static video: video;
  static chat: chat;
}

declare class skin {
  getCape(): boolean;
  static getCape(): boolean;
  setCape(toggled: boolean): void;
  static setCape(toggled: boolean): void;

  getJacket(): boolean;
  static getJacket(): boolean;
  setJacket(toggled: boolean): void;
  static setJacket(toggled: boolean): void;

  getLeftSleeve(): boolean;
  static cgetLeftSleeve(): boolean;
  setLeftSleeve(toggled: boolean): void;
  static setLeftSleeve(toggled: boolean): void;

  getRightSleeve(): boolean;
  static getRightSleeve(): boolean;
  setRightSleeve(toggled: boolean): void;
  static setRightSleeve(toggled: boolean): void;

  getLeftPantsLeg(): boolean;
  static getLeftPantsLeg(): boolean;
  setLeftPantsLeg(toggled: boolean): void;
  static setLeftPantsLeg(toggled: boolean): void;

  getRightPantsLeg(): boolean;
  static getRightPantsLeg(): boolean;
  setRightPantsLeg(toggled: boolean): void;
  static setRightPantsLeg(toggled: boolean): void;

  getHat(): boolean;
  static getHat(): boolean;
  setHat(toggled: boolean): void;
  static setHat(toggled: boolean): void;
}

declare class sound {
  getMasterVolume(): number;
  static getMasterVolume(): number;
  setMasterVolume(level: number): void;
  static setMasterVolume(level: number): void;

  getMusicVolume(): number;
  static getMusicVolume(): number;
  setMusicVolume(level: number): void;
  static setMusicVolume(level: number): void;

  getNoteblockVolume(): number;
  static getNoteblockVolume(): number;
  setNoteblockVolume(level: number): void;
  static setNoteblockVolume(level: number): void;

  getWeather(): number;
  static getWeather(): number;
  setWeather(level: number): void;
  static setWeather(level: number): void;

  getBlocks(): number;
  static getBlocks(): number;
  setBlocks(level: number): void;
  static setBlocks(level: number): void;

  getHostileCreatures(): number;
  static getHostileCreatures(): number;
  setHostileCreatures(level: number): void;
  static setHostileCreatures(level: number): void;

  getFriendlyCreatures(): number;
  static getFriendlyCreatures(): number;
  setFriendlyCreatures(level: number): void;
  static setFriendlyCreatures(level: number): void;

  getPlayers(): number;
  static getPlayers(): number;
  setPlayers(level: number): void;
  static setPlayers(level: number): void;

  getAmbient(): number;
  static getAmbient(): number;
  setAmbient(level: number): void;
  static setAmbient(level: number): void;
}

declare class video {
  getGraphics(): boolean;
  static getGraphics(): boolean;
  setGraphics(fancy: boolean): void;
  static setGraphics(fancy: boolean): void;

  getRenderDistance(): number;
  static getRenderDistance(): number;
  setRenderDistance(distance: number): void;
  static setRenderDistance(distance: number): void;

  getSmoothLighting(): number;
  static getSmoothLighting(): number;
  setSmoothLighting(level: number): void;
  static setSmoothLighting(level: number): void;

  getMaxFrameRate(): number;
  static getMaxFrameRate(): number;
  setMaxFrameRate(frameRate: number): void;
  static setMaxFrameRate(frameRate: number): void;

  get3dAnaglyph(): boolean;
  static get3dAnaglyph(): boolean;
  set3dAnaglyph(toggled: boolean): void;
  static set3dAnaglyph(toggled: boolean): void;

  getBobbing(): boolean;
  static getBobbing(): boolean;
  setBobbing(toggled: boolean): void;
  static setBobbing(toggled: boolean): void;

  getGuiScale(): number;
  static getGuiScale(): number;
  setGuiScale(scale: number): void;
  static setGuiScale(scale: number): void;

  getBrightness(): number;
  static getBrightness(): number;
  setBrightness(brightness: number): void;
  static setBrightness(brightness: number): void;

  getClouds(): number;
  static getClouds(): number;
  setClouds(clouds: number): void;
  static setClouds(clouds: number): void;

  getParticles(): number;
  static getParticles(): number;
  setParticles(particles: number): void;
  static setParticles(particles: number): void;

  getFullscreen(): boolean;
  static getFullscreen(): boolean;
  setFullscreen(toggled: boolean): void;
  static setFullscreen(toggled: boolean): void;

  getVsync(): boolean;
  static getVsync(): boolean;
  setVsync(toggled: boolean): void;
  static setVsync(toggled: boolean): void;

  getMipmapLevels(): number;
  static getMipmapLevels(): number;
  setMipmapLevels(mipmapLevels: number): void;
  static setMipmapLevels(mipmapLevels: number): void;

  getAlternateBlocks(): boolean;
  static getAlternateBlocks(): boolean;
  setAlternateBlocks(toggled: boolean): void;
  static setAlternateBlocks(toggled: boolean): void;

  getVBOs(): boolean;
  static getVBOs(): boolean;
  setVBOs(toggled: boolean): void;
  static setVBOs(toggled: boolean): void;

  getEntityShadows(): boolean;
  static getEntityShadows(): boolean;
  setEntityShadows(toggled: boolean): void;
  static setEntityShadows(toggled: boolean): void;
}

declare class chat {
  getVisibility(): MCEntityPlayer["EnumChatVisibility"];
  static getVisibility(): MCEntityPlayer["EnumChatVisibility"];
  setVisibility(visibility: "hidden" | "commands" | "system" | "full"): void;
  static setVisibility(
    visibility: "hidden" | "commands" | "system" | "full",
  ): void;

  getCcolors(): boolean;
  static getCcolors(): boolean;
  setColors(toggled: boolean): void;
  static setColors(toggled: boolean): void;

  getWebLinks(): boolean;
  static getWebLinks(): boolean;
  setWebLinks(toggled: boolean): void;
  static setWebLinks(toggled: boolean): void;

  getOpacity(): number;
  static getOpacity(): number;
  setOpacity(opacity: number): void;
  static setOpacity(opacity: number): void;

  getPromptOnWebLinks(): boolean;
  static getPromptOnWebLinks(): boolean;
  setPromptOnWebLinks(toggled: boolean): void;
  static setPromptOnWebLinks(toggled: boolean): void;
}

// "enum class"
declare class TriggerType {
  // client
  static ActionBar: TriggerType;
  static AttackEntity: TriggerType;
  static Chat: TriggerType;
  static ChatComponentClicked: TriggerType;
  static ChatComponentHovered: TriggerType;
  static Clicked: TriggerType;
  static Dragged: TriggerType;
  static DropItem: TriggerType;
  static GameLoad: TriggerType;
  static GameUnload: TriggerType;
  static GuiClosed: TriggerType;
  static GuiDrawBackground: TriggerType;
  static GuiKey: TriggerType;
  static GuiMouseClick: TriggerType;
  static GuiMouseDrag: TriggerType;
  static GuiMouseRelease: TriggerType;
  static GuiOpened: TriggerType;
  static GuiRender: TriggerType;
  static HitBlock: TriggerType;
  static MessageSent: TriggerType;
  static PacketReceived: TriggerType;
  static PacketSent: TriggerType;
  static PickupItem: TriggerType;
  static PlayerInteract: TriggerType;
  static RenderSlot: TriggerType;
  static ScreenshotTaken: TriggerType;
  static Scrolled: TriggerType;
  static ServerConnect: TriggerType;
  static ServerDisconnect: TriggerType;
  static Step: TriggerType;
  static Tick: TriggerType;
  static Tooltip: TriggerType;

  // rendering
  static BlockHighlight: TriggerType;
  static PostGuiRender: TriggerType;
  static PostRenderEntity: TriggerType;
  static PostRenderTileEntity: TriggerType;
  static PreItemRender: TriggerType;
  static RenderAir: TriggerType;
  static RenderArmor: TriggerType;
  static RenderBossHealth: TriggerType;
  static RenderChat: TriggerType;
  static RenderCrosshair: TriggerType;
  static RenderDebug: TriggerType;
  static RenderEntity: TriggerType;
  static RenderExperience: TriggerType;
  static RenderFood: TriggerType;
  static RenderHand: TriggerType;
  static RenderHealth: TriggerType;
  static RenderHelmet: TriggerType;
  static RenderHotbar: TriggerType;
  static RenderItemIntoGui: TriggerType;
  static RenderItemOverlayIntoGui: TriggerType;
  static RenderJumpBar: TriggerType;
  static RenderMountHealth: TriggerType;
  static RenderOverlay: TriggerType;
  static RenderPlayerList: TriggerType;
  static RenderPortal: TriggerType;
  static RenderScoreboard: TriggerType;
  static RenderSlotHighlight: TriggerType;
  static RenderTileEntity: TriggerType;
  static RenderTitle: TriggerType;
  static RenderWorld: TriggerType;

  // world
  static BlockBreak: TriggerType;
  static EntityDamage: TriggerType;
  static EntityDeath: TriggerType;
  static NoteBlockChange: TriggerType;
  static NoteBlockPlay: TriggerType;
  static PlayerJoin: TriggerType;
  static PlayerLeave: TriggerType;
  static SoundPlay: TriggerType;
  static SpawnParticle: TriggerType;
  static WorldLoad: TriggerType;
  static WorldUnload: TriggerType;

  // misc
  static Forge: TriggerType;
  static Command: TriggerType;
  static Other: TriggerType;

  triggerAll(...args: any[]): void;
}

declare class GuiHandler {
  static readonly INSTANCE: GuiHandler;

  openGui(gui: MCGuiScreen): void;

  clearGuis(): void;

  onTick(event: ForgeTickEvent.ClientTickEvent): void;
}

declare class ClientListener {
  static readonly INSTANCE: ClientListener;

  addTask(delay: number, callback: () => void): void;

  onReceiveChat(event: ForgeClientChatReceivedEvent): void;

  onTick(event: ForgeTickEvent.ClientTickEvent): void;

  onDrawScreenEvent(event: ForgeGuiScreenEvent.DrawScreenEvent.Post): void;

  onRenderGameOverlay(event: ForgeRenderGameOverlayEvent): void;

  onGuiOpened(event: ForgeGuiOpenEvent): void;

  onBlockHighlight(event: ForgeDrawBlockHighlightEvent): void;

  onPickupItem(event: ForgeEntityItemPickupEvent): void;

  onHitBlock(pos: MCBlockPos, facing: MCEnumFacing): boolean;

  onDropItem(player: MCEntityPlayer, item: MCItemStack): boolean;

  onGuiRender(e: ForgeGuiScreenEvent.BackgroundDrawnEvent): void;

  onInteract(e: ForgePlayerInteractEvent): void;
}
declare namespace ClientListener {
  class State {
    constructor(x: number, y: number);

    getX(): number;
    getY(): number;
  }
  class PlayerInteractAction {
    static RIGHT_CLICK_BLOCK: ClientListener.PlayerInteractAction;
    static RIGHT_CLICK_EMPTY: ClientListener.PlayerInteractAction;
    static UNKNOWN: ClientListener.PlayerInteractAction;
  }
}

declare class Module {
  constructor(name: string, metadata: any, folder: JavaFile);

  readonly name: string;
  readonly metadata: any;

  draw(x: number, y: number, width: number): number;

  click(x: number, y: number, width: number): void;

  toString(): string;
}

declare interface ILoader {
  triggers: Trigger[];

  /**
   * Performs initial engine setup given a list of jars. Note that
   * these are all jars from all modules.
   */
  setup(jars: JavaURL[]): void;

  asmSetup(): void;

  asmPass(module: Module, asmURI: JavaURI): void;

  entrySetup(): void;

  /**
   * Loads a list of modules into the loader. This method will only
   * ever be called with modules that have an entry point corresponding
   * to this loader's language's extension
   */
  entryPass(module: Module, entryURI: JavaURI): void;

  /**
   * If we inject bytecode through ASM that wishes to callback to the user's script,
   * we need to link it to code that will actually make that call.
   *
   * This method lets each specific engine handle function invocation specifics themselves.
   *
   * @return a `MethodHandle` with type (Object[])Object
   */
  asmInvokeLookup(module: Module, functionURI: JavaURI): any;

  /**
   * Tells the loader that it should activate all triggers
   * of a certain type with the specified arguments.
   */
  exec(type: TriggerType, args: any[]): void;

  /**
   * Gets the result from evaluating a certain line of code in this loader
   */
  eval(code: string): string | null;

  /**
   * Adds a trigger to this loader to be activated during the game
   */
  addTrigger(trigger: Trigger): void;

  /**
   * Removes all triggers
   */
  clearTriggers(): void;

  /**
   * Returns the names of this specific loader's implemented languages
   */
  getLanguage(): any;

  /**
   * Actually calls the method for this trigger in this loader
   */
  trigger(trigger: Trigger, method: Function, args: any[]): void;

  /**
   * Removes a trigger from the current pool
   */
  removeTrigger(trigger: Trigger): void;

  /**
   * Save a resource to the OS's filesystem from inside the jar
   * @param resourceName name of the file inside the jar
   * @param outputFile file to save to
   * @param replace whether to replace the file being saved to
   */
  saveResource(
    resourceName: string,
    outputFile: JavaFile,
    replace: boolean,
  ): string;
}

//#endregion

// TODO: Look at this because its awful and there has to be a way to not have to have so much duplicate code
declare interface ITriggerRegister {
  /**
   * Registers a new trigger that runs before an action bar message is received.
   *
   * Passes through multiple arguments:
   * - Any number of chat criteria variables
   * - The chat event, which can be cancelled
   *
   * Available modifications:
   * - {@link ChatTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link ChatTrigger.setChatCriteria} Sets the chat criteria
   * - {@link ChatTrigger.setParameter} Sets the chat parameter
   * - {@link Trigger.setPriority} Sets the priority
   *
   * A NOTE ON AUTOCOMPLETE: DUE TO LIMITATIONS WITH REST PARAMETERS, TYPINGS FOR THE PARAMETERS OF THE FUNCTION ARE SLIGHTLY OFF
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerActionBar(
    method: (...params: (string | ForgeClientChatReceivedEvent)[]) => void,
  ): ChatTrigger;

  /**
   * Registers a new trigger that runs whenever the player has left clicked on an entity
   *
   * Passes through three arguments:
   * - The {@link Entity com.chattriggers.ctjs.minecraft.wrappers.objects.entity.Entity} that is being hit
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerAttackEntity(
    method: (entity: Entity, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before a chat message is received.
   *
   * Passes through multiple arguments:
   * - Any number of chat criteria variables
   * - The chat event, which can be cancelled
   *
   * Available modifications:
   * - {@link ChatTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link ChatTrigger.setChatCriteria} Sets the chat criteria
   * - {@link ChatTrigger.setParameter} Sets the chat parameter
   * - {@link Trigger.setPriority} Sets the priority
   *
   * A NOTE ON AUTOCOMPLETE: DUE TO LIMITATIONS WITH REST PARAMETERS, TYPINGS FOR THE PARAMETERS OF THE FUNCTION ARE SLIGHTLY OFF
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerChat(
    method: (...args: (string | ForgeClientChatReceivedEvent)[]) => void,
  ): ChatTrigger;

  /**
   * Registers a new trigger that runs whenever the user clicks on a clickable
   * chat component
   *
   * Passes through two arguments:
   * - The {@link TextComponent com.chattriggers.ctjs.minecraft.objects.message.TextComponent}
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerChatComponentClicked(
    method: (component: TextComponent, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever the user hovers over a
   * hoverable chat component
   *
   * Passes through two arguments:
   * - The {@link TextComponent com.chattriggers.ctjs.minecraft.objects.message.TextComponent}
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerChatComponentHovered(
    method: (component: TextComponent, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before a mouse button is being pressed or released.
   *
   * Passes through four arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The mouse button state (true if button is pressed, false otherwise)
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerClicked(
    method: (
      mouseX: number,
      mouseY: number,
      button: number,
      isButtonDown: boolean,
    ) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs while a mouse button is being held down.
   *
   * Passes through five arguments:
   * - The mouse delta x position (relative to last frame)
   * - The mouse delta y position (relative to last frame)
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerDragged(
    method: (
      mouseDeltaX: number,
      mouseDeltaY: number,
      mouseX: number,
      mouseY: number,
      button: number,
    ) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs before an item is dropped.
   *
   * Passes through five arguments:
   * - The {@link Item} that is dropped up
   * - The {@link PlayerMP com.chattriggers.ctjs.minecraft.wrappers.objects.PlayerMP} that dropped the item
   * - The item's position vector
   * - The item's motion vector
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerDropItem(
    method: (item: Item, player: PlayerMP, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs after the game loads.
   *
   * This runs after the initial loading of the game directly after scripts are
   * loaded and after "/ct load" happens.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGameLoad(method: () => void): RegularTrigger;

  /**
   * Registers a new trigger that runs before the game unloads.
   *
   * This runs before shutdown of the JVM and before "/ct load" happens.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGameUnload(method: () => void): RegularTrigger;

  /**
   * Registers a new trigger that runs when a gui is closed.
   *
   * Passes through one argument:
   * - The gui that was closed
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGuiClosed(method: (event: MCGuiScreen) => void): RegularTrigger;

  /**
   * Registers a new trigger that runs before the gui background is drawn
   * This is useful for drawing custom backgrounds.
   *
   * Passes through one argument:
   * - The {@link MCGuiScreen GuiScreen} that is being drawn
   *
   */
  registerGuiDrawBackground(
    method: (gui: MCGuiScreen, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever a key is typed with a gui open
   *
   * Passes through four arguments:
   * - The character pressed (eg. 'd')
   * - The key code pressed (eg. 41)
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGuiKey(
    method: (
      char: string,
      keyCode: number,
      gui: MCGuiScreen,
      event: CancellableEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever the mouse is clicked with a
   * gui open
   *
   * Passes through five arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGuiMouseClick(
    method: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      gui: MCGuiScreen,
      event: CancellableEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever a mouse button held and dragged
   * with a gui open
   *
   * Passes through five arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGuiMouseDrag(
    method: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      gui: MCGuiScreen,
      event: CancellableEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever a mouse button is released
   * with a gui open
   *
   * Passes through five arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGuiMouseRelease(
    method: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      gui: MCGuiScreen,
      event: CancellableEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs when a new gui is first opened.
   *
   * Passes through one argument:
   * - The gui opened event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGuiOpened(method: (event: ForgeGuiOpenEvent) => void): EventTrigger;

  /**
   * Registers a new trigger that runs as a gui is rendered
   *
   * Passes through three arguments:
   * - The mouse x position
   * - The mouse y position
   * - The gui
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerGuiRender(
    method: (mouseX: number, mouseY: number, gui: MCGuiScreen) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs whenever a block is left clicked
   *
   * Note: this is not continuously called while the block is being broken, only once
   * when first left clicked.
   *
   * Passes through two arguments:
   * - The {@link Block com.chattriggers.ctjs.minecraft.wrappers.objects.block.Block} being hit
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerHitBlock(
    method: (block: Block, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before a message is sent in chat.
   *
   * Passes through two arguments:
   * - The message
   * - The message event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerMessageSent(
    method: (message: string, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever a packet is sent to the client from the server
   *
   * Passes through two arguments:
   * - The packet
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the packet classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPacketReceived(
    method: (packet: MCPacket<MCINetHandler>, event: CancellableEvent) => void,
  ): PacketTrigger;

  /**
   * Registers a new trigger that runs whenever a packet is sent from the client to the server
   *
   * Passes through two arguments:
   * - The packet
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the packet classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPacketSent(
    method: (packet: MCPacket<MCINetHandler>, event: CancellableEvent) => void,
  ): PacketTrigger;

  /**
   * Registers a new trigger that runs before an item is picked up.
   *
   * Passes through five arguments:
   * - The {@link Item} that is picked up
   * - The {@link PlayerMP com.chattriggers.ctjs.minecraft.wrappers.objects.PlayerMP} that picked up the item
   * - The item's position vector
   * - The item's motion vector
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPickupItem(
    method: (
      item: Item,
      player: PlayerMP,
      position: Vector3f,
      motion: Vector3f,
      event: ForgeEntityItemPickupEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player interacts.
   *
   * In 1.8.9, the following events will activate this trigger:
   * - Right clicking a block
   * - Right clicking the air
   *
   * In 1.12.2, the following events will activate this trigger:
   * - Left clicking a block
   * - Left clicking air
   * - Right clicking an entity
   * - Right clicking a block
   * - Right clicking an item
   * - Right clicking air
   *
   * Passes through three arguments:
   * - The {@link ClientListener.PlayerInteractAction}
   * - The position of the target as a Vector3f
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPlayerInteract(
    method: (
      action: ClientListener.PlayerInteractAction,
      position: Vector3f,
      event: ForgePlayerInteractEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before a slot is drawn in a container
   * This is useful for hiding "background" items in containers used as GUIs.
   *
   * Passes through three arguments:
   * - The {@link Slot} being drawn
   * - The MC GUIScreen that is being drawn
   * - The event, which can be cancelled
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderSlot(
    method: (slot: Slot, gui: MCGuiContainer, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before a screenshot is taken.
   *
   * Passes through two arguments:
   * - The name of the screenshot
   * - The screenshot event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerScreenshotTaken(
    method: (name: string, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the mouse is scrolled.
   *
   * Passes through three arguments:
   * - The mouse x position
   * - The mouse y position
   * - The scroll direction: 1, -1
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerScrolled(
    method: (mouseX: number, mouseY: number, direction: number) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs whenever the player connects to a server
   *
   * Passes through one argument:
   * - The event, which cannot be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerServerConnect(
    method: (event: FMLNetworkEvent$ClientConnectedToServerEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever the player disconnects from a server
   *
   * Passes through two arguments:
   * - The event, which cannot be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerServerDisconnect(
    method: (event: FMLNetworkEvent$ClientDisconnectionFromServerEvent) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs in predictable intervals. (60 per second by default)
   *
   * Passes through one argument:
   * - Steps elapsed
   *
   * Available modifications:
   * - {@link StepTrigger.setFps} Sets the fps, i.e. how many times this trigger will fire
   *      per second
   * - {@link StepTrigger.setDelay} Sets the delay in seconds, i.e. how many seconds it takes
   *      to fire. Overrides {@link StepTrigger.setFps}.
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerStep(method: (elapsed: number) => void): StepTrigger;

  /**
   * Registers a new trigger that runs before every game tick.
   *
   * Passes through one argument:
   * - Ticks elapsed
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerTick(method: (elapsed: number) => void): RegularTrigger;

  /**
   * Registers a new trigger that runs when a tooltip is being rendered.
   * This allows for the user to modify what text is in the tooltip, and even the
   * ability to cancel rendering completely.
   *
   * Passes through three arguments:
   * - The list of lore to modify.
   * - The {@link Item} that this lore is attached to.
   * - The cancellable event.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerItemTooltip(
    method: (lore: string[], item: Item, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the block highlight box is drawn.
   *
   * Passes through two arguments:
   * - The draw block highlight event's position
   * - The draw block highlight event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerDrawBlockHighlight(
    method: (position: Vector3f, event: ForgeDrawBlockHighlightEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs after the current screen is rendered
   *
   * Passes through three arguments:
   * - The mouseX
   * - The mouseY
   * - The GuiScreen
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPostGuiRender(
    method: (mouseX: number, mouseY: number, gui: MCGuiScreen) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs after an entity is rendered
   *
   * Passes through three arguments:
   * - The {@link Entity com.chattriggers.ctjs.minecraft.wrappers.objects.entity.Entity}
   * - The position as a Vector3f
   * - The partial ticks
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the entity classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPostRenderEntity(
    method: (entity: Entity, pos: Vector3f, partialTicks: number) => void,
  ): RenderEntityTrigger;

  /**
   * Registers a new trigger that runs after a tile entity is rendered
   *
   * Passes through three arguments:
   * - The TileEntity
   * - The position as a Vector3f
   * - The partial ticks
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the tile entity classes which this trigger gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPostRenderTileEntity(
    method: (entity: MCTileEntity, pos: Vector3f, partialTicks: number) => void,
  ): RenderTileEntityTrigger;

  /**
   * Registers a new trigger that runs before the items in the gui are drawn
   *
   * Passes through five arguments:
   * - The mouseX position
   * - The mouseY position
   * - The MC Slot
   * - The GuiContainer
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPreItemRender(
    method: (
      mouseX: number,
      mouseY: number,
      slot: MCSlot,
      gui: MCGuiContainer,
    ) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs before the player's air level is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderAir(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player's armor bar is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderArmor(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the boss health bar is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderBossHealth(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the chat is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderChat(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the crosshair is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderCrosshair(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a trigger that runs before the debug screen is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderDebug(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever an entity is rendered
   *
   * Passes through four arguments:
   * - The {@link Entity com.chattriggers.ctjs.minecraft.wrappers.objects.entity.Entity}
   * - The position as a Vector3f
   * - The partial ticks
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the entity classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderEntity(
    method: (
      entity: MCEntity,
      position: Vector3f,
      partialTicks: number,
      event: CancellableEvent,
    ) => void,
  ): RenderEntityTrigger;

  /**
   * Registers a new trigger that runs before the player's experience is being drawn.
   *
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderExperience(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player's food is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderFood(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player's hand is drawn.
   *
   * Passes through one argument:
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderHand(method: (event: CancellableEvent) => void): EventTrigger;

  /**
   * Registers a new trigger that runs before the player's health is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderHealth(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player's helmet overlay is drawn.
   * This triggers when a pumpkin is on the player's head
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderHelmet(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player's hotbar is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderHotbar(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before each item is drawn into a GUI.
   *
   * Passes through four arguments:
   * - The {@link Item}
   * - The x position
   * - The y position
   * - The event, which can be cancelled.
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderItemIntoGui(
    method: (item: Item, x: number, y: number, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before each item overlay (stack size and damage bar) is drawn.
   *
   * Passes through four arguments:
   * - The {@link Item}
   * - The x position
   * - The y position
   * - The event, which can be cancelled.
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderItemOverlayIntoGui(
    method: (item: Item, x: number, y: number, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the jump bar is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderJumpBar(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player's mount's health is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderMountHealth(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the overlay is drawn.
   *
   * Passes through one argument:
   * - The render event, which cannot be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderOverlay(
    method: (event: ForgeRenderGameOverlayEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the player list is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderPlayerList(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the portal effect is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderPortal(
    method: (
      event: ForgeRenderGameOverlayEvent & CancellableEventHelper,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the scoreboard is drawn.
   *
   * Passes through one argument:
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderScoreboard(
    method: (event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the hovered slot square is drawn.
   *
   * Passes through six arguments:
   * - The mouseX position
   * - The mouseY position
   * - The Slot
   * - The GuiContainer
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderSlotHighlight(
    method: (
      mouseX: number,
      mouseY: number,
      slot: MCSlot,
      gui: MCGuiContainer,
      event: CancellableEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs whenever a tile entity is rendered
   *
   * Passes through four arguments:
   * - The TileEntity
   * - The position as a Vector3f
   * - The partial ticks
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the tile entity classes which this trigger gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderTileEntity(
    method: (
      entity: MCTileEntity,
      pos: Vector3f,
      partialTicks: number,
      event: CancellableEvent,
    ) => void,
  ): RenderTileEntityTrigger;

  /**
   * Registers a new trigger that runs before the title and subtitle are drawn.
   *
   * Passes through three arguments:
   * - The title
   * - The subtitle
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderTitle(
    method: (title: string, subtitle: string, event: CancellableEvent) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before the world is drawn.
   *
   * Passes through one argument:
   * - Partial ticks elapsed
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerRenderWorld(method: (partialTicks: number) => void): RegularTrigger;

  /**
   * Registers a new trigger that runs before the player breaks a block
   *
   * Passes through one argument:
   * - The block
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerBlockBreak(method: (block: Block) => void): RegularTrigger;

  /**
   * Registers a new trigger that runs before an entity is damaged
   *
   * Passes through two arguments:
   * - The target Entity that is damaged
   * - The PlayerMP attacker
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerEntityDamage(
    method: (target: Entity, attacker: PlayerMP) => void,
  ): RegularTrigger;

  /**
   * Registers a new trigger that runs before an entity dies
   *
   * Passes through one argument:
   * - The Entity that died
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerEntityDeath(method: (entity: Entity) => void): RegularTrigger;

  /**
   * Registers a new trigger that runs before a noteblock is changed.
   *
   * Passes through four arguments:
   * - The note block change event's Vector3f position
   * - The note block change event's note's name
   * - The note block change event's octave
   * - The note block change event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerNoteBlockChange(
    method: (
      position: Vector3f,
      name: string,
      octave: ForgeNoteBlockEvent.Octave,
      event: ForgeNoteBlockEvent.Change,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs before a noteblock is played.
   *
   * Passes through four arguments:
   * - The note block play event's Vector3f position
   * - The note block play event's note's name
   * - The note block play event's octave
   * - The note block play event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerNoteBlockPlay(
    method: (
      position: Vector3f,
      name: string,
      octave: ForgeNoteBlockEvent.Octave,
      event: ForgeNoteBlockEvent.Play,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a new trigger that runs when a player joins the world.
   *
   * Maximum is one per tick. Any extras will queue and run in later ticks.
   * This trigger is asynchronous.
   *
   * Passes through one argument:
   * - The {@link PlayerMP com.chattriggers.ctjs.minecraft.wrappers.objects.PlayerMP} object
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPlayerJoined(method: (player: PlayerMP) => void): RegularTrigger;

  /**
   * Registers a new trigger that runs when a player leaves the world.
   *
   * Maximum is one per tick. Any extras will queue and run in later ticks.
   * This trigger is asynchronous.
   *
   * Passes through one argument:
   * - The name of the player that left
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerPlayerLeft(method: (name: string) => void): RegularTrigger;

  /**
   * Registers a new trigger that runs before a sound is played.
   *
   * Passes through six arguments:
   * - The sound event's position
   * - The sound event's name
   * - The sound event's volume
   * - The sound event's pitch
   * - The sound event's category's name
   * - The sound event, which can be cancelled
   *
   * Available modifications:
   * - {@link SoundPlayTrigger.setCriteria} Sets the sound name criteria
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerSoundPlay(
    method: (
      position: Vector3f,
      name: string,
      vol: number,
      pitch: number,
      category: MCSoundCategory,
      event: ForgePlaySoundEvent,
    ) => void,
  ): SoundPlayTrigger;

  /**
   * Registers a new trigger that runs whenever a particle is spawned
   *
   * Passes through three arguments:
   * - The {@link Particle com.chattriggers.ctjs.minecraft.wrappers.objects.Particle}
   * - The {@link MCEnumParticleTypes net.minecraft.util.EnumParticleTypes}
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerSpawnParticle(
    method: (
      particle: Particle,
      type: MCEnumParticleTypes,
      event: CancellableEvent,
    ) => void,
  ): EventTrigger;

  /**
   * Registers a trigger that runs before the world loads.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerWorldLoad(method: () => void): RegularTrigger;

  /**
   * Registers a new trigger that runs before the world unloads.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerWorldUnload(method: () => void): RegularTrigger;

  /**
   * Registers a new command that will run the method provided.
   *
   * Passes through multiple arguments:
   * - The arguments supplied to the command by the user
   *
   * Available modifications:
   * - {@link CommandTrigger.setCommandName} Sets the command name
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  registerCommand(method: (...args: string[]) => void): CommandTrigger;

  register: IRegister;
}

declare interface IRegister {
  /**
   * Registers a new trigger that runs before an action bar message is received.
   *
   * Passes through multiple arguments:
   * - Any number of chat criteria variables
   * - The chat event, which can be cancelled
   *
   * Available modifications:
   * - {@link ChatTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link ChatTrigger.setChatCriteria} Sets the chat criteria
   * - {@link ChatTrigger.setParameter} Sets the chat parameter
   * - {@link Trigger.setPriority} Sets the priority
   *
   * A NOTE ON AUTOCOMPLETE: DUE TO LIMITATIONS WITH REST PARAMETERS, TYPINGS FOR THE PARAMETERS OF THE FUNCTION ARE SLIGHTLY OFF
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "actionBar",
    method: Parameters<ITriggerRegister["registerActionBar"]>[0],
  ): ReturnType<ITriggerRegister["registerActionBar"]>;

  /**
   * Registers a new trigger that runs whenever the player has left clicked on an entity
   *
   * Passes through three arguments:
   * - The {@link Entity com.chattriggers.ctjs.minecraft.wrappers.objects.entity.Entity} that is being hit
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "attackEntity",
    method: Parameters<ITriggerRegister["registerAttackEntity"]>[0],
  ): ReturnType<ITriggerRegister["registerAttackEntity"]>;

  /**
   * Registers a new trigger that runs before a chat message is received.
   *
   * Passes through multiple arguments:
   * - Any number of chat criteria variables
   * - The chat event, which can be cancelled
   *
   * Available modifications:
   * - {@link ChatTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link ChatTrigger.setChatCriteria} Sets the chat criteria
   * - {@link ChatTrigger.setParameter} Sets the chat parameter
   * - {@link Trigger.setPriority} Sets the priority
   *
   * A NOTE ON AUTOCOMPLETE: DUE TO LIMITATIONS WITH REST PARAMETERS, TYPINGS FOR THE PARAMETERS OF THE FUNCTION ARE SLIGHTLY OFF
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "chat",
    method: Parameters<ITriggerRegister["registerChat"]>[0],
  ): ReturnType<ITriggerRegister["registerChat"]>;
  /**
   * Registers a new trigger that runs whenever the user clicks on a clickable
   * chat component
   *
   * Passes through two arguments:
   * - The {@link TextComponent com.chattriggers.ctjs.minecraft.objects.message.TextComponent}
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "chatComponentClicked",
    method: Parameters<ITriggerRegister["registerChatComponentClicked"]>[0],
  ): ReturnType<ITriggerRegister["registerChatComponentClicked"]>;

  /**
   * Registers a new trigger that runs whenever the user hovers over a
   * hoverable chat component
   *
   * Passes through two arguments:
   * - The {@link TextComponent com.chattriggers.ctjs.minecraft.objects.message.TextComponent}
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "chatComponentHovered",
    method: Parameters<ITriggerRegister["registerChatComponentHovered"]>[0],
  ): ReturnType<ITriggerRegister["registerChatComponentHovered"]>;

  /**
   * Registers a new trigger that runs before a mouse button is being pressed or released.
   *
   * Passes through four arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The mouse button state (true if button is pressed, false otherwise)
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "clicked",
    method: Parameters<ITriggerRegister["registerClicked"]>[0],
  ): ReturnType<ITriggerRegister["registerClicked"]>;

  /**
   * Registers a new trigger that runs while a mouse button is being held down.
   *
   * Passes through five arguments:
   * - The mouse delta x position (relative to last frame)
   * - The mouse delta y position (relative to last frame)
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "dragged",
    method: Parameters<ITriggerRegister["registerDragged"]>[0],
  ): ReturnType<ITriggerRegister["registerDragged"]>;

  /**
   * Registers a new trigger that runs before an item is dropped.
   *
   * Passes through five arguments:
   * - The {@link Item} that is dropped up
   * - The {@link PlayerMP com.chattriggers.ctjs.minecraft.wrappers.objects.PlayerMP} that dropped the item
   * - The item's position vector
   * - The item's motion vector
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "dropItem",
    method: Parameters<ITriggerRegister["registerDropItem"]>[0],
  ): ReturnType<ITriggerRegister["registerDropItem"]>;

  /**
   * Registers a new trigger that runs after the game loads.
   *
   * This runs after the initial loading of the game directly after scripts are
   * loaded and after "/ct load" happens.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "gameLoad",
    method: Parameters<ITriggerRegister["registerGameLoad"]>[0],
  ): ReturnType<ITriggerRegister["registerGameLoad"]>;

  /**
   * Registers a new trigger that runs before the game unloads.
   *
   * This runs before shutdown of the JVM and before "/ct load" happens.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "gameUnload",
    method: Parameters<ITriggerRegister["registerGameUnload"]>[0],
  ): ReturnType<ITriggerRegister["registerGameUnload"]>;

  /**
   * Registers a new trigger that runs when a gui is closed.
   *
   * Passes through one argument:
   * - The gui that was closed
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "guiClosed",
    method: Parameters<ITriggerRegister["registerGuiClosed"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiClosed"]>;

  /**
   * Registers a new trigger that runs before the gui background is drawn
   * This is useful for drawing custom backgrounds.
   *
   * Passes through one argument:
   * - The {@link MCGuiScreen GuiScreen} that is being drawn
   *
   */
  (
    triggerType: "guiDrawBackground",
    method: Parameters<ITriggerRegister["registerGuiDrawBackground"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiDrawBackground"]>;

  /**
   * Registers a new trigger that runs whenever a key is typed with a gui open
   *
   * Passes through four arguments:
   * - The character pressed (e.g. 'd')
   * - The key code pressed (e.g. 41)
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "guiKey",
    method: Parameters<ITriggerRegister["registerGuiKey"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiKey"]>;

  /**
   * Registers a new trigger that runs whenever the mouse is clicked with a
   * gui open
   *
   * Passes through five arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "guiMouseClick",
    method: Parameters<ITriggerRegister["registerGuiMouseClick"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiMouseClick"]>;

  /**
   * Registers a new trigger that runs whenever a mouse button held and dragged
   * with a gui open
   *
   * Passes through five arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "guiMouseDrag",
    method: Parameters<ITriggerRegister["registerGuiMouseDrag"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiMouseDrag"]>;

  /**
   * Registers a new trigger that runs whenever a mouse button is released
   * with a gui open
   *
   * Passes through five arguments:
   * - The mouse x position
   * - The mouse y position
   * - The mouse button
   * - The gui
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "guiMouseRelease",
    method: Parameters<ITriggerRegister["registerGuiMouseRelease"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiMouseRelease"]>;

  /**
   * Registers a new trigger that runs when a new gui is first opened.
   *
   * Passes through one argument:
   * - The gui opened event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "guiOpened",
    method: Parameters<ITriggerRegister["registerGuiOpened"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiOpened"]>;

  /**
   * Registers a new trigger that runs as a gui is rendered
   *
   * Passes through three arguments:
   * - The mouse x position
   * - The mouse y position
   * - The gui
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "guiRender",
    method: Parameters<ITriggerRegister["registerGuiRender"]>[0],
  ): ReturnType<ITriggerRegister["registerGuiRender"]>;

  /**
   * Registers a new trigger that runs whenever a block is left clicked
   *
   * Note: this is not continuously called while the block is being broken, only once
   * when first left clicked.
   *
   * Passes through two arguments:
   * - The {@link Block com.chattriggers.ctjs.minecraft.wrappers.objects.block.Block} being hit
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "hitBlock",
    method: Parameters<ITriggerRegister["registerHitBlock"]>[0],
  ): ReturnType<ITriggerRegister["registerHitBlock"]>;

  /**
   * Registers a new trigger that runs before a message is sent in chat.
   *
   * Passes through two arguments:
   * - The message
   * - The message event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "messageSent",
    method: Parameters<ITriggerRegister["registerMessageSent"]>[0],
  ): ReturnType<ITriggerRegister["registerMessageSent"]>;

  /**
   * Registers a new trigger that runs whenever a packet is sent to the client from the server
   *
   * Passes through two arguments:
   * - The packet
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the packet classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "packetReceived",
    method: Parameters<ITriggerRegister["registerPacketReceived"]>[0],
  ): ReturnType<ITriggerRegister["registerPacketReceived"]>;

  /**
   * Registers a new trigger that runs whenever a packet is sent from the client to the server
   *
   * Passes through two arguments:
   * - The packet
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the packet classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "packetSent",
    method: Parameters<ITriggerRegister["registerPacketSent"]>[0],
  ): ReturnType<ITriggerRegister["registerPacketSent"]>;

  /**
   * Registers a new trigger that runs before an item is picked up.
   *
   * Passes through five arguments:
   * - The {@link Item} that is picked up
   * - The {@link PlayerMP com.chattriggers.ctjs.minecraft.wrappers.objects.PlayerMP} that picked up the item
   * - The item's position vector
   * - The item's motion vector
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "pickupItem",
    method: Parameters<ITriggerRegister["registerPickupItem"]>[0],
  ): ReturnType<ITriggerRegister["registerPickupItem"]>;

  /**
   * Registers a new trigger that runs before the player interacts.
   *
   * In 1.8.9, the following events will activate this trigger:
   * - Left clicking a block
   * - Right clicking a block
   * - Right clicking the air
   *
   * In 1.12.2, the following events will activate this trigger:
   * - Left clicking a block
   * - Left clicking air
   * - Right clicking an entity
   * - Right clicking a block
   * - Right clicking an item
   * - Right clicking air
   *
   * Passes through three arguments:
   * - The {@link ClientListener.PlayerInteractAction}
   * - The position of the target as a Vector3f
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "playerInteract",
    method: Parameters<ITriggerRegister["registerPlayerInteract"]>[0],
  ): ReturnType<ITriggerRegister["registerPlayerInteract"]>;
  /**
   * Registers a new trigger that runs before a slot is drawn in a container
   * This is useful for hiding "background" items in containers used as GUIs.
   *
   * Passes through three arguments:
   * - The Slot] being drawn
   * - The MC GUIScreen that is being drawn
   * - The event, which can be cancelled
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderSlot",
    method: Parameters<ITriggerRegister["registerRenderSlot"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderSlot"]>;

  /**
   * Registers a new trigger that runs before a screenshot is taken.
   *
   * Passes through two arguments:
   * - The name of the screenshot
   * - The screenshot event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "screenshotTaken",
    method: Parameters<ITriggerRegister["registerScreenshotTaken"]>[0],
  ): ReturnType<ITriggerRegister["registerScreenshotTaken"]>;

  /**
   * Registers a new trigger that runs before the mouse is scrolled.
   *
   * Passes through three arguments:
   * - The mouse x position
   * - The mouse y position
   * - The scroll direction: 1, -1
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "scrolled",
    method: Parameters<ITriggerRegister["registerScrolled"]>[0],
  ): ReturnType<ITriggerRegister["registerScrolled"]>;

  /**
   * Registers a new trigger that runs whenever the player connects to a server
   *
   * Passes through one argument:
   * - The event, which cannot be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "serverConnect",
    method: Parameters<ITriggerRegister["registerServerConnect"]>[0],
  ): ReturnType<ITriggerRegister["registerServerConnect"]>;

  /**
   * Registers a new trigger that runs whenever the player disconnects from a server
   *
   * Passes through two arguments:
   * - The event, which cannot be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "serverDisconnect",
    method: Parameters<ITriggerRegister["registerServerDisconnect"]>[0],
  ): ReturnType<ITriggerRegister["registerServerDisconnect"]>;

  /**
   * Registers a new trigger that runs in predictable intervals. (60 per second by default)
   *
   * Passes through one argument:
   * - Steps elapsed
   *
   * Available modifications:
   * - {@link StepTrigger.setFps} Sets the fps, i.e. how many times this trigger will fire
   *      per second
   * - {@link StepTrigger.setDelay} Sets the delay in seconds, i.e how many seconds it takes
   *      to fire. Overrides {@link StepTrigger.setFps}.
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "step",
    method: Parameters<ITriggerRegister["registerStep"]>[0],
  ): ReturnType<ITriggerRegister["registerStep"]>;

  /**
   * Registers a new trigger that runs before every game tick.
   *
   * Passes through one argument:
   * - Ticks elapsed
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "tick",
    method: Parameters<ITriggerRegister["registerTick"]>[0],
  ): ReturnType<ITriggerRegister["registerTick"]>;

  /**
   * Registers a new trigger that runs when a tooltip is being rendered.
   * This allows for the user to modify what text is in the tooltip, and even the
   * ability to cancel rendering completely.
   *
   * Passes through three arguments:
   * - The list of lore to modify.
   * - The {@link Item} that this lore is attached to.
   * - The cancellable event.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "itemTooltip",
    method: Parameters<ITriggerRegister["registerItemTooltip"]>[0],
  ): ReturnType<ITriggerRegister["registerItemTooltip"]>;

  /**
   * Registers a new trigger that runs before the block highlight box is drawn.
   *
   * Passes through two arguments:
   * - The draw block highlight event's position
   * - The draw block highlight event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "drawBlockHighlight",
    method: Parameters<ITriggerRegister["registerDrawBlockHighlight"]>[0],
  ): ReturnType<ITriggerRegister["registerDrawBlockHighlight"]>;

  /**
   * Registers a new trigger that runs after the current screen is rendered
   *
   * Passes through three arguments:
   * - The mouseX
   * - The mouseY
   * - The GuiScreen
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "postGuiRender",
    method: Parameters<ITriggerRegister["registerPostGuiRender"]>[0],
  ): ReturnType<ITriggerRegister["registerPostGuiRender"]>;

  /**
   * Registers a new trigger that runs after an entity is rendered
   *
   * Passes through three arguments:
   * - The {@link Entity com.chattriggers.ctjs.minecraft.wrappers.objects.entity.Entity}
   * - The position as a Vector3f
   * - The partial ticks
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the entity classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "postRenderEntity",
    method: Parameters<ITriggerRegister["registerPostRenderEntity"]>[0],
  ): ReturnType<ITriggerRegister["registerPostRenderEntity"]>;

  /**
   * Registers a new trigger that runs after a tile entity is rendered
   *
   * Passes through three arguments:
   * - The TileEntity
   * - The position as a Vector3f
   * - The partial ticks
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the tile entity classes which this trigger gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "postRenderTileEntity",
    method: Parameters<ITriggerRegister["registerPostRenderTileEntity"]>[0],
  ): ReturnType<ITriggerRegister["registerPostRenderTileEntity"]>;

  /**
   * Registers a new trigger that runs before the items in the gui are drawn
   *
   * Passes through five arguments:
   * - The mouseX position
   * - The mouseY position
   * - The MC Slot
   * - The GuiContainer
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "preItemRender",
    method: Parameters<ITriggerRegister["registerPreItemRender"]>[0],
  ): ReturnType<ITriggerRegister["registerPreItemRender"]>;
  /**
   * Registers a new trigger that runs before the player's air level is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderAir",
    method: Parameters<ITriggerRegister["registerRenderAir"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderAir"]>;

  /**
   * Registers a new trigger that runs before the player's armor bar is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderArmor",
    method: Parameters<ITriggerRegister["registerRenderArmor"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderArmor"]>;

  /**
   * Registers a new trigger that runs before the boss health bar is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderBossHealth",
    method: Parameters<ITriggerRegister["registerRenderBossHealth"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderBossHealth"]>;

  /**
   * Registers a new trigger that runs before the chat is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderChat",
    method: Parameters<ITriggerRegister["registerRenderChat"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderChat"]>;

  /**
   * Registers a new trigger that runs before the crosshair is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderCrosshair",
    method: Parameters<ITriggerRegister["registerRenderCrosshair"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderCrosshair"]>;

  /**
   * Registers a trigger that runs before the debug screen is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderDebug",
    method: Parameters<ITriggerRegister["registerRenderDebug"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderDebug"]>;

  /**
   * Registers a new trigger that runs whenever an entity is rendered
   *
   * Passes through four arguments:
   * - The {@link Entity com.chattriggers.ctjs.minecraft.wrappers.objects.entity.Entity}
   * - The position as a Vector3f
   * - The partial ticks
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the entity classes which this trigger
   *   gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderEntity",
    method: Parameters<ITriggerRegister["registerRenderEntity"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderEntity"]>;

  /**
   * Registers a new trigger that runs before the player's experience is being drawn.
   *
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderExperience",
    method: Parameters<ITriggerRegister["registerRenderExperience"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderExperience"]>;

  /**
   * Registers a new trigger that runs before the player's food is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderFood",
    method: Parameters<ITriggerRegister["registerRenderFood"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderFood"]>;

  /**
   * Registers a new trigger that runs before the player's hand is drawn.
   *
   * Passes through one argument:
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderHand",
    method: Parameters<ITriggerRegister["registerRenderHand"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderHand"]>;

  /**
   * Registers a new trigger that runs before the player's health is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderHealth",
    method: Parameters<ITriggerRegister["registerRenderHealth"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderHealth"]>;

  /**
   * Registers a new trigger that runs before the player's helmet overlay is drawn.
   * This triggers when a pumpkin is on the player's head
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderHelmet",
    method: Parameters<ITriggerRegister["registerRenderHelmet"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderHelmet"]>;

  /**
   * Registers a new trigger that runs before the player's hotbar is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderHotbar",
    method: Parameters<ITriggerRegister["registerRenderHotbar"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderHotbar"]>;

  /**
   * Registers a new trigger that runs before each item is drawn into a GUI.
   *
   * Passes through four arguments:
   * - The {@link Item}
   * - The x position
   * - The y position
   * - The event, which can be cancelled.
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderItemIntoGui",
    method: Parameters<ITriggerRegister["registerRenderItemIntoGui"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderItemIntoGui"]>;

  /**
   * Registers a new trigger that runs before each item overlay (stack size and damage bar) is drawn.
   *
   * Passes through four arguments:
   * - The {@link Item}
   * - The x position
   * - The y position
   * - The event, which can be cancelled.
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderItemOverlayIntoGui",
    method: Parameters<ITriggerRegister["registerRenderItemOverlayIntoGui"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderItemOverlayIntoGui"]>;

  /**
   * Registers a new trigger that runs before the jump bar is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderJumpBar",
    method: Parameters<ITriggerRegister["registerRenderJumpBar"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderJumpBar"]>;

  /**
   * Registers a new trigger that runs before the player's mount's health is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderMountHealth",
    method: Parameters<ITriggerRegister["registerRenderMountHealth"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderMountHealth"]>;

  /**
   * Registers a new trigger that runs before the overlay is drawn.
   *
   * Passes through one argument:
   * - The render event, which cannot be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderOverlay",
    method: Parameters<ITriggerRegister["registerRenderOverlay"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderOverlay"]>;

  /**
   * Registers a new trigger that runs before the player list is being drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderPlayerList",
    method: Parameters<ITriggerRegister["registerRenderPlayerList"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderPlayerList"]>;

  /**
   * Registers a new trigger that runs before the portal effect is drawn.
   *
   * Passes through one argument:
   * - The render event, which can be cancelled
   *
   * Available modifications:
   * - {@link EventTrigger.triggerIfCanceled} Sets if triggered if event is already cancelled
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderPortal",
    method: Parameters<ITriggerRegister["registerRenderPortal"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderPortal"]>;

  /**
   * Registers a new trigger that runs before the scoreboard is drawn.
   *
   * Passes through one argument:
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderScoreboard",
    method: Parameters<ITriggerRegister["registerRenderScoreboard"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderScoreboard"]>;

  /**
   * Registers a new trigger that runs before the hovered slot square is drawn.
   *
   * Passes through six arguments:
   * - The mouseX position
   * - The mouseY position
   * - The Slot
   * - The GuiContainer
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderSlotHighlight",
    method: Parameters<ITriggerRegister["registerRenderSlotHighlight"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderSlotHighlight"]>;

  /**
   * Registers a new trigger that runs whenever a tile entity is rendered
   *
   * Passes through four arguments:
   * - The TileEntity
   * - The position as a Vector3f
   * - The partial ticks
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   * - {@link ClassFilterTrigger.setFilteredClasses} Sets the tile entity classes which this trigger gets fired for
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderTileEntity",
    method: Parameters<ITriggerRegister["registerRenderTileEntity"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderTileEntity"]>;

  /**
   * Registers a new trigger that runs before the title and subtitle are drawn.
   *
   * Passes through three arguments:
   * - The title
   * - The subtitle
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderTitle",
    method: Parameters<ITriggerRegister["registerRenderTitle"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderTitle"]>;

  /**
   * Registers a new trigger that runs before the world is drawn.
   *
   * Passes through one argument:
   * - Partial ticks elapsed
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "renderWorld",
    method: Parameters<ITriggerRegister["registerRenderWorld"]>[0],
  ): ReturnType<ITriggerRegister["registerRenderWorld"]>;

  /**
   * Registers a new trigger that runs before the player breaks a block
   *
   * Passes through one argument:
   * - The block
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "blockBreak",
    method: Parameters<ITriggerRegister["registerBlockBreak"]>[0],
  ): ReturnType<ITriggerRegister["registerBlockBreak"]>;

  /**
   * Registers a new trigger that runs before an entity is damaged
   *
   * Passes through two arguments:
   * - The target Entity that is damaged
   * - The PlayerMP attacker
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "entityDamage",
    method: Parameters<ITriggerRegister["registerEntityDamage"]>[0],
  ): ReturnType<ITriggerRegister["registerEntityDamage"]>;

  /**
   * Registers a new trigger that runs before an entity dies
   *
   * Passes through one argument:
   * - The Entity that died
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "entityDeath",
    method: Parameters<ITriggerRegister["registerEntityDeath"]>[0],
  ): ReturnType<ITriggerRegister["registerEntityDeath"]>;

  /**
   * Registers a new trigger that runs before a noteblock is changed.
   *
   * Passes through four arguments:
   * - The note block change event's Vector3f position
   * - The note block change event's note's name
   * - The note block change event's octave
   * - The note block change event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "noteBlockChange",
    method: Parameters<ITriggerRegister["registerNoteBlockChange"]>[0],
  ): ReturnType<ITriggerRegister["registerNoteBlockChange"]>;

  /**
   * Registers a new trigger that runs before a noteblock is played.
   *
   * Passes through four arguments:
   * - The note block play event's Vector3f position
   * - The note block play event's note's name
   * - The note block play event's octave
   * - The note block play event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "noteBlockPlay",
    method: Parameters<ITriggerRegister["registerNoteBlockPlay"]>[0],
  ): ReturnType<ITriggerRegister["registerNoteBlockPlay"]>;

  /**
   * Registers a new trigger that runs when a player joins the world.
   *
   * Maximum is one per tick. Any extras will queue and run in later ticks.
   * This trigger is asynchronous.
   *
   * Passes through one argument:
   * - The {@link PlayerMP com.chattriggers.ctjs.minecraft.wrappers.objects.PlayerMP} object
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "playerJoined",
    method: Parameters<ITriggerRegister["registerPlayerJoined"]>[0],
  ): ReturnType<ITriggerRegister["registerPlayerJoined"]>;

  /**
   * Registers a new trigger that runs when a player leaves the world.
   *
   * Maximum is one per tick. Any extras will queue and run in later ticks.
   * This trigger is asynchronous.
   *
   * Passes through one argument:
   * - The name of the player that left
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "playerLeft",
    method: Parameters<ITriggerRegister["registerPlayerLeft"]>[0],
  ): ReturnType<ITriggerRegister["registerPlayerLeft"]>;

  /**
   * Registers a new trigger that runs before a sound is played.
   *
   * Passes through six arguments:
   * - The sound event's position
   * - The sound event's name
   * - The sound event's volume
   * - The sound event's pitch
   * - The sound event's category's name
   * - The sound event, which can be cancelled
   *
   * Available modifications:
   * - {@link SoundPlayTrigger.setCriteria} Sets the sound name criteria
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "soundPlay",
    method: Parameters<ITriggerRegister["registerSoundPlay"]>[0],
  ): ReturnType<ITriggerRegister["registerSoundPlay"]>;

  /**
   * Registers a new trigger that runs whenever a particle is spawned
   *
   * Passes through three arguments:
   * - The {@link Particle com.chattriggers.ctjs.minecraft.wrappers.objects.Particle}
   * - The {@link MCEnumParticleTypes net.minecraft.util.EnumParticleTypes}
   * - The event, which can be cancelled
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "spawnParticle",
    method: Parameters<ITriggerRegister["registerSpawnParticle"]>[0],
  ): ReturnType<ITriggerRegister["registerSpawnParticle"]>;

  /**
   * Registers a trigger that runs before the world loads.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "worldLoad",
    method: Parameters<ITriggerRegister["registerWorldLoad"]>[0],
  ): ReturnType<ITriggerRegister["registerWorldLoad"]>;

  /**
   * Registers a new trigger that runs before the world unloads.
   *
   * Available modifications:
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "worldUnload",
    method: Parameters<ITriggerRegister["registerWorldUnload"]>[0],
  ): ReturnType<ITriggerRegister["registerWorldUnload"]>;

  /**
   * Registers a new command that will run the method provided.
   *
   * Passes through multiple arguments:
   * - The arguments supplied to the command by the user
   *
   * Available modifications:
   * - {@link CommandTrigger.setCommandName} Sets the command name
   * - {@link Trigger.setPriority} Sets the priority
   *
   * @param method The method to call when the event is fired
   * @return The trigger for additional modification
   */
  (
    triggerType: "command",
    method: Parameters<ITriggerRegister["registerCommand"]>[0],
  ): ReturnType<ITriggerRegister["registerCommand"]>;

  <T>(triggerType: JavaClass<T>, method: Function): ForgeTrigger;
}
