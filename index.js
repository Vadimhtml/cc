$(window).load(function(){function e(e){r=parseInt(e.substr(0,2),16),g=parseInt(e.substr(2,2),16),b=parseInt(e.substr(4,2),16),resDistance=999999,resAltrence=0,resultName="";for(var a in colors)rc=parseInt(colors[a].substr(0,2),16),gc=parseInt(colors[a].substr(2,2),16),bc=parseInt(colors[a].substr(4,2),16),distance=(r-rc)*(r-rc)+(g-gc)*(g-gc)+(b-bc)*(b-bc),distance<resDistance?(resDistance=distance,resultName=a):distance==resDistance&&(resultName=resultName+" или "+a);return distanceBlack=(r-0)*(r-0)+(g-0)*(g-0)+(b-0)*(b-0),distanceWhite=(r-255)*(r-255)+(g-255)*(g-255)+(b-255)*(b-255),distanceBlack>distanceWhite?altrenceCode="000000":altrenceCode="FFFFFF",{name:resultName,contr:altrenceCode}}function a(){var e=/^(#?)([A-Fa-f0-9]{6})$/.exec(window.location.hash);return null!=e&&(e=e[2].toUpperCase()),e}function n(a){jsonData=e(a),o.css("color","#"+jsonData.contr),B.text("—"+jsonData.name+"!"),C.val(a),D=a,o.css("background-color","#"+a),window.location.hash=a,0==u?(u=!0,document.body.className="bodyMain",B.addClass("bounceInUp"),C.addClass("slideInDown"),C[0].focus()):B.addClass("flip"),A=!1}function F(){C.val(null),B.text(t),o.css({backgroundColor:"#ffffff",color:"#000000"}),B.addClass("bounceInUp"),window.location.hash="",A=!0}function i(){var e=C[0].value;if(e!=D){var a=/^(#?)([A-F0-9]{0,6})(;?)$/.exec(e.toUpperCase());null!=a?(C.val(a[2]),D=a[2],6==a[2].length?n(a[2]):0==a[2].length&&1!=A&&F()):(C.val(D),C.addClass("shake"))}}colors={"Absolute Zero":"0048BA","Acid Green":"B0BF1A",Aero:"7CB9E8","Aero Blue":"C9FFE5","African Violet":"B284BE","Air Force Blue (RAF)":"5D8AA8","Air Force Blue (USAF)":"00308F","Air Superiority Blue":"72A0C1","Alabama Crimson":"AF002A","Alice Blue":"F0F8FF","Alien Armpit":"84DE02","Alizarin Crimson":"E32636","Alloy Orange":"C46210",Almond:"EFDECD",Amaranth:"E52B50","Amaranth Deep Purple":"AB274F","Amaranth Pink":"F19CBB","Amaranth Purple":"AB274F","Amaranth Red":"D3212D",Amazon:"3B7A57",Amber:"FFBF00","Amber (SAE/ECE)":"FF7E00","American Rose":"FF033E",Amethyst:"9966CC","Android Green":"A4C639","Anti-Flash White":"F2F3F4","Antique Brass":"CD9575","Antique Bronze":"665D1E","Antique Fuchsia":"915C83","Antique Ruby":"841B2D","Antique White":"FAEBD7","Ao (English)":"008000","Apple Green":"8DB600",Apricot:"FBCEB1",Aqua:"00FFFF",Aquamarine:"7FFFD4","Arctic Lime":"D0FF14","Army Green":"4B5320",Arsenic:"3B444B",Artichoke:"8F9779","Arylide Yellow":"E9D66B","Ash Grey":"B2BEB5",Asparagus:"87A96B","Atomic Tangerine":"FF9966",Auburn:"A52A2A",Aureolin:"FDEE00",AuroMetalSaurus:"6E7F80",Avocado:"568203","Aztec Gold":"C39953",Azure:"007FFF","Azure (Web Color)":"F0FFFF","Azure Mist":"F0FFFF","Azureish White":"DBE9F4","B'dazzled Blue":"2E5894","Baby Blue":"89CFF0","Baby Blue Eyes":"A1CAF1","Baby Pink":"F4C2C2","Baby Powder":"FEFEFA","Baker-Miller Pink":"FF91AF","Ball Blue":"21ABCD","Banana Mania":"FAE7B5","Banana Yellow":"FFE135","Bangladesh Green":"006A4E","Barbie Pink":"E0218A","Barn Red":"7C0A02","Battleship Grey":"848482",Bazaar:"98777B","Beau Blue":"BCD4E6",Beaver:"9F8170",Beige:"F5F5DC",Belgion:"ADD8FF","Big Dip O'ruby":"9C2542","Big Foot Feet":"E88E5A",Bisque:"FFE4C4",Bistre:"3D2B1F","Bistre Brown":"967117","Bitter Lemon":"CAE00D","Bitter Lime":"BFFF00",Bittersweet:"FE6F5E","Bittersweet Shimmer":"BF4F51",Black:"000000","Black Bean":"3D0C02","Black Coral":"54626F","Black Leather Jacket":"253529","Black Olive":"3B3C36","Black Shadows":"BFAFB2","Blanched Almond":"FFEBCD","Blast-Off Bronze":"A57164","Bleu De France":"318CE7","Blizzard Blue":"ACE5EE",Blond:"FAF0BE",Blue:"0000FF","Blue (Crayola)":"1F75FE","Blue (Munsell)":"0093AF","Blue (NCS)":"0087BD","Blue (Pantone)":"0018A8","Blue (Pigment)":"333399","Blue (RYB)":"0247FE","Blue Bell":"A2A2D0","Blue Jeans":"5DADEC","Blue Lagoon":"ACE5EE","Blue Sapphire":"126180","Blue Yonder":"5072A7","Blue-Gray":"6699CC","Blue-Green":"0D98BA","Blue-Magenta Violet":"553592","Blue-Violet":"8A2BE2",Blueberry:"4F86F7",Bluebonnet:"1C1CF0",Blush:"DE5D83",Bole:"79443B","Bondi Blue":"0095B6",Bone:"E3DAC9","Booger Buster":"DDE26A","Boston University Red":"CC0000","Bottle Green":"006A4E",Boysenberry:"873260","Brandeis Blue":"0070FF",Brass:"B5A642","Brick Red":"CB4154","Bright Cerulean":"1DACD6","Bright Green":"66FF00","Bright Lavender":"BF94E4","Bright Lilac":"D891EF","Bright Maroon":"C32148","Bright Navy Blue":"1974D2","Bright Pink":"FF007F","Bright Turquoise":"08E8DE","Bright Ube":"D19FE8","Bright Yellow (Crayola)":"FFAA1D","Brilliant Azure":"3399FF","Brilliant Lavender":"F4BBFF","Brilliant Rose":"FF55A3","Brink Pink":"FB607F","British Racing Green":"004225",Bronze:"CD7F32","Bronze Yellow":"737000","Brown (Traditional)":"964B00","Brown (Web)":"A52A2A","Brown Sugar":"AF6E4D","Brown Yellow":"cc9966","Brown-Nose":"6B4423","Brunswick Green":"1B4D3E","Bubble Gum":"FFC1CC",Bubbles:"E7FEFF","Bud Green":"7BB661",Buff:"F0DC82","Bulgarian Rose":"480607",Burgundy:"800020",Burlywood:"DEB887","Burnished Brown":"A17A74","Burnt Orange":"CC5500","Burnt Sienna":"E97451","Burnt Umber":"8A3324",Byzantine:"BD33A4",Byzantium:"702963",Cadet:"536872","Cadet Blue":"5F9EA0","Cadet Grey":"91A3B0","Cadmium Green":"006B3C","Cadmium Orange":"ED872D","Cadmium Red":"E30022","Cadmium Yellow":"FFF600","Café Au Lait":"A67B5B","Café Noir":"4B3621","Cal Poly Green":"1E4D2B","Cambridge Blue":"A3C1AD",Camel:"C19A6B","Cameo Pink":"EFBBCC","Camouflage Green":"78866B","Canary Yellow":"FFEF00","Candy Apple Red":"FF0800","Candy Pink":"E4717A",Capri:"00BFFF","Caput Mortuum":"592720",Cardinal:"C41E3A","Caribbean Green":"00CC99",Carmine:"960018","Carmine (M&P)":"D70040","Carmine Pink":"EB4C42","Carmine Red":"FF0038","Carnation Pink":"FFA6C9",Carnelian:"B31B1B","Carolina Blue":"56A0D3","Carrot Orange":"ED9121","Castleton Green":"00563F","Catalina Blue":"062A78",Catawba:"703642","Cedar Chest":"C95A49",Ceil:"92A1CF",Celadon:"ACE1AF","Celadon Blue":"007BA7","Celadon Green":"2F847C",Celeste:"B2FFFF","Celestial Blue":"4997D0",Cerise:"DE3163","Cerise Pink":"EC3B83",Cerulean:"007BA7","Cerulean Blue":"2A52BE","Cerulean Frost":"6D9BC3","CG Blue":"007AA5","CG Red":"E03C31",Chamoisee:"A0785A",Champagne:"F7E7CE",Charcoal:"36454F","Charleston Green":"232B2B","Charm Pink":"E68FAC","Chartreuse (Traditional)":"DFFF00","Chartreuse (Web)":"7FFF00",Cherry:"DE3163","Cherry Blossom Pink":"FFB7C5",Chestnut:"954535","China Pink":"DE6FA1","China Rose":"A8516E","Chinese Red":"AA381E","Chinese Violet":"856088","Chlorophyll Green":"4AFF00","Chocolate (Traditional)":"7B3F00","Chocolate (Web)":"D2691E","Chrome Yellow":"FFA700",Cinereous:"98817B",Cinnabar:"E34234","Cinnamon Satin":"CD607E","Cinnamon[Citation Needed]":"D2691E",Citrine:"E4D00A",Citron:"9FA91F",Claret:"7F1734","Classic Rose":"FBCCE7","Cobalt Blue":"0047AB","Cocoa Brown":"D2691E",Coconut:"965A3E",Coffee:"6F4E37","Columbia Blue":"C4D8E2","Congo Pink":"F88379","Cool Black":"002E63","Cool Grey":"8C92AC",Copper:"B87333","Copper (Crayola)":"DA8A67","Copper Penny":"AD6F69","Copper Red":"CB6D51","Copper Rose":"996666",Coquelicot:"FF3800",Coral:"FF7F50","Coral Pink":"F88379","Coral Red":"FF4040",Cordovan:"893F45",Corn:"FBEC5D","Cornell Red":"B31B1B","Cornflower Blue":"6495ED",Cornsilk:"FFF8DC","Cosmic Cobalt":"2E2D88","Cosmic Latte":"FFF8E7","Cotton Candy":"FFBCD9","Coyote Brown":"81613e",Cream:"FFFDD0",Crimson:"DC143C","Crimson Glory":"BE0032","Crimson Red":"990000",Cultured:"F5F5F5",Cyan:"00FFFF","Cyan (Process)":"00B7EB","Cyan Azure":"4E82b4","Cyan Cobalt Blue":"28589C","Cyan Cornflower Blue":"188BC2","Cyan-Blue Azure":"4682BF","Cyber Grape":"58427C","Cyber Yellow":"FFD300",Cyclamen:"F56FA1",Daffodil:"FFFF31",Dandelion:"F0E130","Dark Blue":"00008B","Dark Blue-Gray":"666699","Dark Brown":"654321","Dark Brown-Tangelo":"88654E","Dark Byzantium":"5D3954","Dark Candy Apple Red":"A40000","Dark Cerulean":"08457E","Dark Chestnut":"986960","Dark Coral":"CD5B45","Dark Cyan":"008B8B","Dark Electric Blue":"536878","Dark Goldenrod":"B8860B","Dark Gray (X11)":"A9A9A9","Dark Green":"013220","Dark Green (X11)":"006400","Dark Gunmetal":"1F262A","Light Imperial Blue":"00416A","Dark Imperial Blue":"6E6EF9","Dark Jungle Green":"1A2421","Dark Khaki":"BDB76B","Dark Lava":"483C32","Dark Lavender":"734F96","Dark Liver":"534B4F","Dark Liver (Horses)":"543D37","Dark Magenta":"8B008B","Dark Medium Gray":"A9A9A9","Dark Midnight Blue":"003366","Dark Moss Green":"4A5D23","Dark Olive Green":"556B2F","Dark Orange":"FF8C00","Dark Orchid":"9932CC","Dark Pastel Blue":"779ECB","Dark Pastel Green":"03C03C","Dark Pastel Purple":"966FD6","Dark Pastel Red":"C23B22","Dark Pink":"E75480","Dark Powder Blue":"003399","Dark Puce":"4F3A3C","Dark Purple":"301934","Dark Raspberry":"872657","Dark Red":"8B0000","Dark Salmon":"E9967A","Dark Scarlet":"560319","Dark Sea Green":"8FBC8F","Dark Sienna":"3C1414","Dark Sky Blue":"8CBED6","Dark Slate Blue":"483D8B","Dark Slate Gray":"2F4F4F","Dark Spring Green":"177245","Dark Tan":"918151","Dark Tangerine":"FFA812","Dark Taupe":"483C32","Dark Terra Cotta":"CC4E5C","Dark Turquoise":"00CED1","Dark Vanilla":"D1BEA8","Dark Violet":"9400D3","Dark Yellow":"9B870C","Dartmouth Green":"00703C","Davy's Grey":"555555","Debian Red":"D70A53","Deep Aquamarine":"40826D","Deep Carmine":"A9203E","Deep Carmine Pink":"EF3038","Deep Carrot Orange":"E9692C","Deep Cerise":"DA3287","Deep Champagne":"FAD6A5","Deep Chestnut":"B94E48","Deep Coffee":"704241","Deep Fuchsia":"C154C1","Deep Green":"056608","Deep Green-Cyan Turquoise":"0E7C61","Deep Jungle Green":"004B49","Deep Koamaru":"333366","Deep Lemon":"F5C71A","Deep Lilac":"9955BB","Deep Magenta":"CC00CC","Deep Maroon":"820000","Deep Mauve":"D473D4","Deep Moss Green":"355E3B","Deep Peach":"FFCBA4","Deep Pink":"FF1493","Deep Puce":"A95C68","Deep Red":"850101","Deep Ruby":"843F5B","Deep Saffron":"FF9933","Deep Sky Blue":"00BFFF","Deep Space Sparkle":"4A646C","Deep Spring Bud":"556B2F","Deep Taupe":"7E5E60","Deep Tuscan Red":"66424D","Deep Violet":"330066",Deer:"BA8759",Denim:"1560BD","Denim Blue":"2243B6","Desaturated Cyan":"669999",Desert:"C19A6B","Desert Sand":"EDC9AF",Desire:"EA3C53",Diamond:"B9F2FF","Dim Gray":"696969","Dingy Dungeon":"C53151",Dirt:"9B7653","Dodger Blue":"1E90FF","Dogwood Rose":"D71868","Dollar Bill":"85BB65","Donkey Brown":"664C28",Drab:"967117","Duke Blue":"00009C","Dust Storm":"E5CCC9","Dutch White":"EFDFBB","Earth Yellow":"E1A95F",Ebony:"555D50",Ecru:"C2B280","Eerie Black":"1B1B1B",Eggplant:"614051",Eggshell:"F0EAD6","Egyptian Blue":"1034A6","Electric Blue":"7DF9FF","Electric Crimson":"FF003F","Electric Cyan":"00FFFF","Electric Green":"00FF00","Electric Indigo":"6F00FF","Electric Lavender":"F4BBFF","Electric Lime":"CCFF00","Electric Purple":"BF00FF","Electric Ultramarine":"3F00FF","Electric Violet":"8F00FF","Electric Yellow":"FFFF33",Emerald:"50C878",Eminence:"6C3082","English Green":"1B4D3E","English Lavender":"B48395","English Red":"AB4B52","English Vermillion":"CC474B","English Violet":"563C5C","Eton Blue":"96C8A2",Eucalyptus:"44D7A8",Fallow:"C19A6B","Falu Red":"801818",Fandango:"B53389","Fandango Pink":"DE5285","Fashion Fuchsia":"F400A1",Fawn:"E5AA70",Feldgrau:"4D5D53",Feldspar:"FDD5B1","Fern Green":"4F7942","Ferrari Red":"FF2800","Field Drab":"6C541E","Fiery Rose":"FF5470","Fire Engine Red":"CE2029",Firebrick:"B22222",Flame:"E25822","Flamingo Pink":"FC8EAC",Flattery:"6B4423",Flavescent:"F7E98E",Flax:"EEDC82",Flirt:"A2006D","Floral White":"FFFAF0","Fluorescent Orange":"FFBF00","Fluorescent Pink":"FF1493","Fluorescent Yellow":"CCFF00",Folly:"FF004F","Forest Green (Traditional)":"014421","Forest Green (Web)":"228B22","French Beige":"A67B5B","French Bistre":"856D4D","French Blue":"0072BB","French Fuchsia":"FD3F92","French Lilac":"86608E","French Lime":"9EFD38","French Mauve":"D473D4","French Pink":"FD6C9E","French Plum":"811453","French Puce":"4E1609","French Raspberry":"C72C48","French Rose":"F64A8A","French Sky Blue":"77B5FE","French Violet":"8806CE","French Wine":"AC1E44","Fresh Air":"A6E7FF",Frostbite:"E936A7",Fuchsia:"FF00FF","Fuchsia (Crayola)":"C154C1","Fuchsia Pink":"FF77FF","Fuchsia Purple":"CC397B","Fuchsia Rose":"C74375",Fulvous:"E48400","Fuzzy Wuzzy":"CC6666",Gainsboro:"DCDCDC",Gamboge:"E49B0F","Gamboge Orange (Brown)":"996600","Gargoyle Gas":"FFDF46","Generic Viridian":"007F66","Ghost White":"F8F8FF","Giant's Club":"B05C52","Giants Orange":"FE5A1D",Ginger:"B06500",Glaucous:"6082B6",Glitter:"E6E8FA","Glossy Grape":"AB92B3","GO Green":"00AB66","Gold (Metallic)":"D4AF37","Gold (Web) (Golden)":"FFD700","Gold Fusion":"85754E","Golden Brown":"996515","Golden Poppy":"FCC200","Golden Yellow":"FFDF00",Goldenrod:"DAA520","Granite Gray":"676767","Granny Smith Apple":"A8E4A0",Grape:"6F2DA8",Gray:"808080","Gray (HTML/CSS Gray)":"808080","Gray (X11 Gray)":"BEBEBE","Gray-Asparagus":"465945","Gray-Blue":"8C92AC","Green (Color Wheel) (X11 Green)":"00FF00","Green (Crayola)":"1CAC78","Green (HTML/CSS Color)":"008000","Green (Munsell)":"00A877","Green (NCS)":"009F6B","Green (Pantone)":"00AD43","Green (Pigment)":"00A550","Green (RYB)":"66B032","Green-Blue":"1164B4","Green-Cyan":"009966","Green Lizard":"A7F432","Green Sheen":"6EAEA1","Green-Yellow":"ADFF2F",Grizzly:"885818",Grullo:"A99A86","Guppie Green":"00FF7F",Gunmetal:"2a3439","Halayà Úbe":"663854","Han Blue":"446CCF","Han Purple":"5218FA","Hansa Yellow":"E9D66B",Harlequin:"3FFF00","Harlequin Green":"46CB18","Harvard Crimson":"C90016","Harvest Gold":"DA9100","Heart Gold":"808000","Heat Wave":"FF7A00",Heliotrope:"DF73FF","Heliotrope Gray":"AA98A9","Heliotrope Magenta":"AA00BB","Hollywood Cerise":"F400A1",Honeydew:"F0FFF0","Honolulu Blue":"006DB0","Hooker's Green":"49796B","Hot Magenta":"FF1DCE","Hot Pink":"FF69B4","Hunter Green":"355E3B",Iceberg:"71A6D2",Icterine:"FCF75E","Illuminating Emerald":"319177",Imperial:"602F6B","Imperial Blue":"002395","Imperial Purple":"66023C","Imperial Red":"ED2939",Inchworm:"B2EC5D",Independence:"4C516D","India Green":"138808","Indian Red":"CD5C5C","Indian Yellow":"E3A857",Indigo:"4B0082","Indigo Dye":"091F92","Indigo (Web)":"4B0082","International Klein Blue":"002FA7","International Orange (Aerospace)":"FF4F00","International Orange (Engineering)":"BA160C","International Orange (Golden Gate Bridge)":"C0362C",Iris:"5A4FCF",Irresistible:"B3446C",Isabelline:"F4F0EC","Islamic Green":"009000","Italian Sky Blue":"B2FFFF",Ivory:"FFFFF0",Jade:"00A86B","Japanese Carmine":"9D2933","Japanese Indigo":"264348","Japanese Violet":"5B3256",Jasmine:"F8DE7E",Jasper:"D73B3E","Jazzberry Jam":"A50B5E","Jelly Bean":"DA614E",Jet:"343434",Jonquil:"F4CA16","Jordy Blue":"8AB9F1","June Bud":"BDDA57","Jungle Green":"29AB87","Kelly Green":"4CBB17","Kenyan Copper":"7C1C05",Keppel:"3AB09E","Key Lime":"E8F48C","Khaki (HTML/CSS) (Khaki)":"C3B091","Khaki (X11) (Light Khaki)":"F0E68C",Kobe:"882D17",Kobi:"E79FC4",Kobicha:"6B4423","Kombu Green":"354230","KU Crimson":"E8000D","La Salle Green":"087830","Languid Lavender":"D6CADD","Lapis Lazuli":"26619C","Laser Lemon":"FFFF66","Laurel Green":"A9BA9D",Lava:"CF1020","Lavender (Floral)":"B57EDC","Lavender (Web)":"E6E6FA","Lavender Blue":"CCCCFF","Lavender Blush":"FFF0F5","Lavender Gray":"C4C3D0","Lavender Indigo":"9457EB","Lavender Magenta":"EE82EE","Lavender Mist":"E6E6FA","Lavender Pink":"FBAED2","Lavender Purple":"967BB6","Lavender Rose":"FBA0E3","Lawn Green":"7CFC00",Lemon:"FFF700","Lemon Chiffon":"FFFACD","Lemon Curry":"CCA01D","Lemon Glacier":"FDFF00","Lemon Lime":"E3FF00","Lemon Meringue":"F6EABE","Lemon Yellow":"FFF44F",Lenurple:"BA93D8",Licorice:"1A1110",Liberty:"545AA7","Light Apricot":"FDD5B1","Light Blue":"ADD8E6","Light Brilliant Red":"FE2E2E","Light Brown":"B5651D","Light Carmine Pink":"E66771","Light Cobalt Blue":"88ACE0","Light Coral":"F08080","Light Cornflower Blue":"93CCEA","Light Crimson":"F56991","Light Cyan":"E0FFFF","Light Deep Pink":"FF5CCD","Light French Beige":"C8AD7F","Light Fuchsia Pink":"F984EF","Light Goldenrod Yellow":"FAFAD2","Light Gray":"D3D3D3","Light Grayish Magenta":"CC99CC","Light Green":"90EE90","Light Hot Pink":"FFB3DE","Light Khaki":"F0E68C","Light Medium Orchid":"D39BCB","Light Moss Green":"ADDFAD","Light Orchid":"E6A8D7","Light Pastel Purple":"B19CD9","Light Pink":"FFB6C1","Light Red Ochre":"E97451","Light Salmon":"FFA07A","Light Salmon Pink":"FF9999","Light Sea Green":"20B2AA","Light Sky Blue":"87CEFA","Light Slate Gray":"778899","Light Steel Blue":"B0C4DE","Light Taupe":"B38B6D","Light Thulian Pink":"E68FAC","Light Yellow":"FFFFE0",Lilac:"C8A2C8","Lilac Luster":"AE98AA","Lime (Color Wheel)":"BFFF00","Lime (Web) (X11 Green)":"00FF00","Lime Green":"32CD32",Limerick:"9DC209","Lincoln Green":"195905",Linen:"FAF0E6",Lion:"C19A6B","Liseran Purple":"DE6FA1","Little Boy Blue":"6CA0DC",Liver:"674C47","Liver (Dogs)":"B86D29","Liver (Organ)":"6C2E1F","Liver Chestnut":"987456",Livid:"6699CC",Lumber:"FFE4CD",Lust:"E62020","Macaroni And Cheese":"FFBD88",Magenta:"FF00FF","Magenta (Crayola)":"FF55A3","Magenta (Dye)":"CA1F7B","Magenta (Pantone)":"D0417E","Magenta (Process)":"FF0090","Magenta Haze":"9F4576","Magenta-Pink":"CC338B","Magic Mint":"AAF0D1","Magic Potion":"FF4466",Magnolia:"F8F4FF",Mahogany:"C04000",Maize:"FBEC5D","Majorelle Blue":"6050DC",Malachite:"0BDA51",Manatee:"979AAA",Mandarin:"F37A48","Mango Tango":"FF8243",Mantis:"74C365","Mardi Gras":"880085",Marigold:"EAA221","Maroon (Crayola)":"C32148","Maroon (HTML/CSS)":"800000","Maroon (X11)":"B03060",Mauve:"E0B0FF","Mauve Taupe":"915F6D",Mauvelous:"EF98AA","Maximum Blue":"47ABCC","Maximum Yellow":"FAFA37","May Green":"4C9141","Maya Blue":"73C2FB","Meat Brown":"E5B73B","Medium Aquamarine":"66DDAA","Medium Blue":"0000CD","Medium Candy Apple Red":"E2062C","Medium Carmine":"AF4035","Medium Champagne":"F3E5AB","Medium Electric Blue":"035096","Medium Jungle Green":"1C352D","Medium Lavender Magenta":"DDA0DD","Medium Orchid":"BA55D3","Medium Persian Blue":"0067A5","Medium Purple":"9370DB","Medium Red-Violet":"BB3385","Medium Ruby":"AA4069","Medium Sea Green":"3CB371","Medium Sky Blue":"80DAEB","Medium Slate Blue":"7B68EE","Medium Spring Bud":"C9DC87","Medium Spring Green":"00FA9A","Medium Taupe":"674C47","Medium Turquoise":"48D1CC","Medium Tuscan Red":"79443B","Medium Vermilion":"D9603B","Medium Violet-Red":"C71585","Mellow Apricot":"F8B878","Mellow Yellow":"F8DE7E",Melon:"FDBCB4","Metallic Seaweed":"0A7E8C","Metallic Sunburst":"9C7C38","Metal Pink":"FF00FD","Mexican Pink":"E4007C",Midnight:"702670","Midnight Blue":"191970","Midnight Green (Eagle Green)":"004953","Mikado Yellow":"FFC40C",Mindaro:"E3F988",Ming:"36747D","Minion Yellow":"F5E050",Mint:"3EB489","Mint Cream":"F5FFFA","Mint Green":"98FF98","Misty Moss":"BBB477","Misty Rose":"FFE4E1",Moccasin:"FAEBD7","Mode Beige":"967117","Moonstone Blue":"73A9C2","Mordant Red 19":"AE0C00","Moss Green":"8A9A5B","Mountain Meadow":"30BA8F","Mountbatten Pink":"997A8D","MSU Green":"18453B","Mughal Green":"306030",Mulberry:"C54B8C","Mummy's Tomb":"828E84",Mustard:"FFDB58","Myrtle Green":"317873",Mystic:"D65282","Mystic Maroon":"AD4379","Nadeshiko Pink":"F6ADC6","Napier Green":"2A8000","Naples Yellow":"FADA5E","Navajo White":"FFDEAD",Navy:"000080","Navy Purple":"9457EB","Neon Carrot":"FFA343","Neon Fuchsia":"FE4164","Neon Green":"39FF14","New Car":"214FC6","New York Pink":"D7837F",Nickel:"727472","Non-Photo Blue":"A4DDED","North Texas Green":"059033",Nyanza:"E9FFDB","Ocean Blue":"4F42B5","Ocean Boat Blue":"0077BE","Ocean Green":"48BF91",Ochre:"CC7722","Office Green":"008000","Ogre Odor":"FD5240","Old Burgundy":"43302E","Old Gold":"CFB53B","Old Heliotrope":"563C5C","Old Lace":"FDF5E6","Old Lavender":"796878","Old Mauve":"673147","Old Moss Green":"867E36","Old Rose":"C08081","Old Silver":"848482",Olive:"808000","Olive Drab (#3)":"6B8E23","Olive Drab #7":"3C341F",Olivine:"9AB973",Onyx:"353839","Opera Mauve":"B784A7","Orange (Color Wheel)":"FF7F00","Orange (Crayola)":"FF7538","Orange (Pantone)":"FF5800","Orange (RYB)":"FB9902","Orange (Web)":"FFA500","Orange Peel":"FF9F00","Orange-Red":"FF4500","Orange Soda":"FA5B3D","Orange-Yellow":"F8D568",Orchid:"DA70D6","Orchid Pink":"F2BDCD","Orioles Orange":"FB4F14","Otter Brown":"654321","Outer Space":"414A4C","Outrageous Orange":"FF6E4A","Oxford Blue":"002147","OU Crimson Red":"990000","Pacific Blue":"1CA9C9","Pakistan Green":"006600","Palatinate Blue":"273BE2","Palatinate Purple":"682860","Pale Aqua":"BCD4E6","Pale Blue":"AFEEEE","Pale Brown":"987654","Pale Carmine":"AF4035","Pale Cerulean":"9BC4E2","Pale Chestnut":"DDADAF","Pale Copper":"DA8A67","Pale Cornflower Blue":"ABCDEF","Pale Cyan":"87D3F8","Pale Gold":"E6BE8A","Pale Goldenrod":"EEE8AA","Pale Green":"98FB98","Pale Lavender":"DCD0FF","Pale Magenta":"F984E5","Pale Magenta-Pink":"FF99CC","Pale Pink":"FADADD","Pale Plum":"DDA0DD","Pale Red-Violet":"DB7093","Pale Robin Egg Blue":"96DED1","Pale Silver":"C9C0BB","Pale Spring Bud":"ECEBBD","Pale Taupe":"BC987E","Pale Turquoise":"AFEEEE","Pale Violet":"CC99FF","Pale Violet-Red":"DB7093","Pansy Purple":"78184A","Paolo Veronese Green":"009B7D","Papaya Whip":"FFEFD5","Paradise Pink":"E63E62","Paris Green":"50C878","Pastel Blue":"AEC6CF","Pastel Brown":"836953","Pastel Gray":"CFCFC4","Pastel Green":"77DD77","Pastel Magenta":"F49AC2","Pastel Orange":"FFB347","Pastel Pink":"DEA5A4","Pastel Purple":"B39EB5","Pastel Red":"FF6961","Pastel Violet":"CB99C9","Pastel Yellow":"FDFD96",Patriarch:"800080","Payne's Grey":"536878","Peach Light":"FFE5B4",Peach:"FFCBA4","Peach-Orange":"FFCC99","Peach Puff":"FFDAB9","Peach-Yellow":"FADFAD",Pear:"D1E231",Pearl:"EAE0C8","Pearl Aqua":"88D8C0","Pearly Purple":"B768A2",Peridot:"E6E200",Periwinkle:"CCCCFF","Permanent Geranium Lake":"E12C2C","Persian Blue":"1C39BB","Persian Green":"00A693","Persian Indigo":"32127A","Persian Orange":"D99058","Persian Pink":"F77FBE","Persian Plum":"701C1C","Persian Red":"CC3333","Persian Rose":"FE28A2",Persimmon:"EC5800",Peru:"CD853F","Pewter Blue":"8BA8B7",Phlox:"DF00FF","Phthalo Blue":"000F89","Phthalo Green":"123524","Picton Blue":"45B1E8","Pictorial Carmine":"C30B4E","Piggy Pink":"FDDDE6","Pine Green":"01796F",Pineapple:"563C5C",Pink:"FFC0CB","Pink (Pantone)":"D74894","Pink Flamingo":"FC74FD","Pink Lace":"FFDDF4","Pink Lavender":"D8B2D1","Pink-Orange":"FF9966","Pink Pearl":"E7ACCF","Pink Raspberry":"980036","Pink Sherbet":"F78FA7",Pistachio:"93C572","Pixie Powder":"391285",Platinum:"E5E4E2",Plum:"8E4585","Plum (Web)":"DDA0DD","Plump Purple":"5946B2","Polished Pine":"5DA493","Pomp And Power":"86608E",Popstar:"BE4F62","Portland Orange":"FF5A36","Powder Blue":"B0E0E6","Princess Perfume":"FF85CF","Princeton Orange":"F58025",Prune:"701C1C","Prussian Blue":"003153","Psychedelic Purple":"DF00FF",Puce:"CC8899","Puce Red":"722F37","Pullman Brown (UPS Brown)":"644117","Pullman Green":"3B331C",Pumpkin:"FF7518","Purple (HTML)":"800080","Purple (Munsell)":"9F00C5","Purple (X11)":"A020F0","Purple Heart":"69359C","Purple Mountain Majesty":"9678B6","Purple Navy":"4E5180","Purple Pizzazz":"FE4EDA","Purple Plum":"9C51B6","Purple Taupe":"50404D",Purpureus:"9A4EAE",Quartz:"51484F","Queen Blue":"436B95","Queen Pink":"E8CCD7","Quick Silver":"A6A6A6","Quinacridone Magenta":"8E3A59",Rackley:"5D8AA8","Radical Red":"FF355E","Raisin Black":"242124",Rajah:"FBAB60",Raspberry:"E30B5D","Raspberry Glace":"915F6D","Raspberry Pink":"E25098","Raspberry Rose":"B3446C","Raw Sienna":"D68A59","Raw Umber":"826644","Razzle Dazzle Rose":"FF33CC",Razzmatazz:"E3256B","Razzmic Berry":"8D4E85","Rebecca Purple":"663399",Red:"FF0000","Red (Crayola)":"EE204D","Red (Munsell)":"F2003C","Red (NCS)":"C40233","Red (Pantone)":"ED2939","Red (Pigment)":"ED1C24","Red (RYB)":"FE2712","Red-Brown":"A52A2A","Red Devil":"860111","Red-Orange":"FF5349","Red-Purple":"E40078","Red Salsa":"FD3A4A","Red-Violet":"C71585",Redwood:"A45A52",Regalia:"522D80","Registration Black":"000000","Resolution Blue":"002387",Rhythm:"777696","Rich Black":"004040","Rich Black (FOGRA29)":"010B13","Rich Black (FOGRA39)":"010203","Rich Brilliant Lavender":"F1A7FE","Rich Carmine":"D70040","Rich Electric Blue":"0892D0","Rich Lavender":"A76BCF","Rich Lilac":"B666D2","Rich Maroon":"B03060","Rifle Green":"444C38","Roast Coffee":"704241","Robin Egg Blue":"00CCCC","Rocket Metallic":"8A7F80","Roman Silver":"838996",Rose:"FF007F","Rose Bonbon":"F9429E","Rose Dust":"9E5E6F","Rose Ebony":"674846","Rose Gold":"B76E79","Rose Madder":"E32636","Rose Pink":"FF66CC","Rose Quartz":"AA98A9","Rose Red":"C21E56","Rose Taupe":"905D5D","Rose Vale":"AB4E52",Rosewood:"65000B","Rosso Corsa":"D40000","Rosy Brown":"BC8F8F","Royal Azure":"0038A8","Royal Blue":"002366","Royal Blue Light":"4169E1","Royal Fuchsia":"CA2C92","Royal Purple":"7851A9","Royal Yellow":"FADA5E",Ruber:"CE4676","Rubine Red":"D10056",Ruby:"E0115F","Ruby Red":"9B111E",Ruddy:"FF0028","Ruddy Brown":"BB6528","Ruddy Pink":"E18E96",Rufous:"A81C07",Russet:"80461B","Russian Green":"679267","Russian Violet":"32174D",Rust:"B7410E","Rusty Red":"DA2C43","Sacramento State Green":"00563F","Saddle Brown":"8B4513","Safety Orange":"FF7800","Safety Orange (Blaze Orange)":"FF6700","Safety Yellow":"EED202",Saffron:"F4C430",Sage:"BCB88A","St. Patrick's Blue":"23297A",Salmon:"FA8072","Salmon Pink":"FF91A4",Sand:"C2B280","Sand Dune":"967117",Sandstorm:"ECD540","Sandy Brown":"F4A460","Sandy Taupe":"967117",Sangria:"92000A","Sap Green":"507D2A",Sapphire:"0F52BA","Sapphire Blue":"0067A5","Sasquatch Socks":"FF4681","Satin Sheen Gold":"CBA135","Scarlet Light":"FF2400",Scarlet:"FD0E35","Schauss Pink":"FF91AF","School Bus Yellow":"FFD800","Screamin' Green":"66FF66","Sea Blue":"006994","Sea Green":"2E8B57","Sea Serpent":"4BC7CF","Seal Brown":"59260B",Seashell:"FFF5EE","Selective Yellow":"FFBA00",Sepia:"704214",Shadow:"8A795D","Shadow Blue":"778BA5",Shampoo:"FFCFF1","Shamrock Green":"009E60","Sheen Green":"8FD400","Shimmering Blush":"D98695","Shiny Shamrock":"5FA778","Shocking Pink":"FC0FC0","Shocking Pink (Crayola)":"FF6FFF",Sienna:"882D17",Silver:"C0C0C0","Silver Chalice":"ACACAC","Silver Lake Blue":"5D89BA","Silver Pink":"C4AEAD","Silver Sand":"BFC1C2",Sinopia:"CB410B","Sizzling Red":"FF3855","Sizzling Sunrise":"FFDB00",Skobeloff:"007474","Sky Blue":"87CEEB","Sky Magenta":"CF71AF","Slate Blue":"6A5ACD","Slate Gray":"708090","Smalt (Dark Powder Blue)":"003399","Slimy Green":"299617","Smashed Pumpkin":"FF6D3A",Smitten:"C84186",Smoke:"738276","Smokey Topaz":"832A0D","Smoky Black":"100C08","Smoky Topaz":"933D41",Snow:"FFFAFA",Soap:"CEC8EF","Solid Pink":"893843","Sonic Silver":"757575","Spartan Crimson":"9E1316","Space Cadet":"1D2951","Spanish Bistre":"807532","Spanish Blue":"0070B8","Spanish Carmine":"D10047","Spanish Crimson":"E51A4C","Spanish Gray":"989898","Spanish Green":"009150","Spanish Orange":"E86100","Spanish Pink":"F7BFBE","Spanish Red":"E60026","Spanish Sky Blue":"00FFFF","Spanish Violet":"4C2882","Spanish Viridian":"007F5C","Spicy Mix":"8B5f4D","Spiro Disco Ball":"0FC0FC","Spring Bud":"A7FC00","Spring Frost":"87FF2A","Spring Green":"00FF7F","Star Command Blue":"007BB8","Steel Blue":"4682B4","Steel Pink":"CC33CC","Steel Teal":"5F8A8B","Stil De Grain Yellow":"FADA5E",Stizza:"990000",Stormcloud:"4F666A",Straw:"E4D96F",Strawberry:"FC5A8D","Sugar Plum":"914E75","Sunburnt Cyclops":"FF404C",Sunglow:"FFCC33",Sunny:"F2F27A",Sunray:"E3AB57",Sunset:"FAD6A5","Sunset Orange":"FD5E53","Super Pink":"CF6BA9","Sweet Brown":"A83731",Tan:"D2B48C",Tangelo:"F94D00",Tangerine:"F28500","Tangerine Yellow":"FFCC00","Tango Pink":"E4717A","Tart Orange":"FB4D46",Taupe:"483C32","Taupe Gray":"8B8589","Tea Green":"D0F0C0","Tea Rose":"F88379","Tea Rose Light":"F4C2C2",Teal:"008080","Teal Blue":"367588","Teal Deer":"99E6B3","Teal Green":"00827F",Telemagenta:"CF3476","Tenné":"CD5700","Terra Cotta":"E2725B",Thistle:"D8BFD8","Thulian Pink":"DE6FA1","Tickle Me Pink":"FC89AC","Tiffany Blue":"0ABAB5","Tiger's Eye":"E08D3C",Timberwolf:"DBD7D2","Titanium Yellow":"EEE600",Tomato:"FF6347",Toolbox:"746CC0",Topaz:"FFC87C","Tractor Red":"FD0E35","Trolley Grey":"808080","Tropical Rain Forest":"00755E","Tropical Violet":"CDA4DE","True Blue":"0073CF","Tufts Blue":"417DC1",Tulip:"FF878D",Tumbleweed:"DEAA88","Turkish Rose":"B57281",Turquoise:"40E0D0","Turquoise Blue":"00FFEF","Turquoise Green":"A0D6B4","Turtle Green":"8A9A5B",Tuscan:"FAD6A5","Tuscan Brown":"6F4E37","Tuscan Red":"7C4848","Tuscan Tan":"A67B5B",Tuscany:"C09999","Twilight Lavender":"8A496B","Tyrian Purple":"66023C","UA Blue":"0033AA","UA Red":"D9004C",Ube:"8878C3","UCLA Blue":"536895","UCLA Gold":"FFB300","UFO Green":"3CD070",Ultramarine:"3F00FF","Ultramarine Blue":"4166F5","Ultra Pink":"FF6FFF","Ultra Red":"FC6C85",Umber:"635147","Unbleached Silk":"FFDDCA","United Nations Blue":"5B92E5","University Of California Gold":"B78727","Unmellow Yellow":"FFFF66","UP Forest Green":"014421","UP Maroon":"7B1113","Upsdell Red":"AE2029",Urobilin:"E1AD21","USAFA Blue":"004F98","USC Cardinal":"990000","USC Gold":"FFCC00","University Of Tennessee Orange":"F77F00","Utah Crimson":"D3003F","Van Dyke Brown":"664228",Vanilla:"F3E5AB","Vanilla Ice":"F38FA9","Vegas Gold":"C5B358","Venetian Red":"C80815",Verdigris:"43B3AE","Vermilion Light":"E34234",Vermilion:"D9381E",Veronica:"A020F0","Very Light Azure":"74BBFB","Very Light Blue":"6666FF","Very Light Malachite Green":"64E986","Very Light Tangelo":"FFB077","Very Pale Orange":"FFDFBF","Very Pale Yellow":"FFFFBF",Violet:"8F00FF","Violet (Color Wheel)":"7F00FF","Violet (RYB)":"8601AF","Violet (Web)":"EE82EE","Violet-Blue":"324AB2","Violet-Red":"F75394",Viridian:"40826D","Viridian Green":"009698","Vista Blue":"7C9ED9","Vivid Amber":"CC9900","Vivid Auburn":"922724","Vivid Burgundy":"9F1D35","Vivid Cerise":"DA1D81","Vivid Cerulean":"00AAEE","Vivid Crimson":"CC0033","Vivid Gamboge":"FF9900","Vivid Lime Green":"A6D608","Vivid Malachite":"00CC33","Vivid Mulberry":"B80CE3","Vivid Orange":"FF5F00","Vivid Orange Peel":"FFA000","Vivid Orchid":"CC00FF","Vivid Raspberry":"FF006C","Vivid Red":"F70D1A","Vivid Red-Tangelo":"DF6124","Vivid Sky Blue":"00CCFF","Vivid Tangelo":"F07427","Vivid Tangerine":"FFA089","Vivid Vermilion":"E56024","Vivid Violet":"9F00FF","Vivid Yellow":"FFE302",Volt:"CEFF00","Warm Black":"004242",Waterspout:"A4F4F9","Weldon Blue":"7C98AB",Wenge:"645452",Wheat:"F5DEB3",White:"FFFFFF","White Smoke":"F5F5F5","Wild Blue Yonder":"A2ADD0","Wild Orchid":"D470A2","Wild Strawberry":"FF43A4","Wild Watermelon":"FC6C85","Willpower Orange":"FD5800","Windsor Tan":"A75502",Wine:"722F37","Wine Dregs":"673147","Winter Sky":"FF007C","Winter Wizard":"A0E6FF","Wintergreen Dream":"56887D",Wisteria:"C9A0DC","Wood Brown":"C19A6B",Xanadu:"738678","Yale Blue":"0F4D92","Yankees Blue":"1C2841",Yellow:"FFFF00","Yellow (Crayola)":"FCE883","Yellow (Munsell)":"EFCC00","Yellow (NCS)":"FFD300","Yellow (Pantone)":"FEDF00","Yellow (Process)":"FFEF00","Yellow (RYB)":"FEFE33","Yellow-Green":"9ACD32","Yellow Orange":"FFAE42","Yellow Rose":"FFF000","Yellow Sunshine":"FFF700",Zaffre:"0014A8","Zinnwaldite Brown":"2C1608",Zomp:"39A78E"};var l=a(),o=$(".bodyMain"),C=$(".bodyMain__input"),B=$(".bodyMain__tagLine"),t=B.text(),u=!1,A=!0;B.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("bounceInUp").removeClass("flip")}),C.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("slideInDown").removeClass("shake")}),null==l?(C.val(null),document.body.className="bodyMain",B.addClass("bounceInUp"),C.addClass("slideInDown"),C[0].focus(),u=!0):n(l),$(window).on("hashchange",function(){var e=a();null==e?F():D!=e&&n(e)});var D="";setInterval(i,1)});