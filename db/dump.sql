PGDMP  /                    |            nike    16.2    16.2 c    j           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            k           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            l           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            m           1262    16394    nike    DATABASE     x   CREATE DATABASE nike WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE nike;
                postgres    false                        2615    24751    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            n           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            o           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            \           1247    24753    Role    TYPE     ^   CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'MODERATOR',
    'AUTHOR',
    'USER'
);
    DROP TYPE public."Role";
       public          postgres    false    5            �            1259    24805    Category    TABLE     �   CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text NOT NULL,
    value text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."Category";
       public         heap    postgres    false    5            �            1259    24804    Category_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Category_id_seq";
       public          postgres    false    5    224            p           0    0    Category_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;
          public          postgres    false    223            �            1259    24825    Color    TABLE     j   CREATE TABLE public."Color" (
    id integer NOT NULL,
    name text NOT NULL,
    value text NOT NULL
);
    DROP TABLE public."Color";
       public         heap    postgres    false    5            �            1259    24824    Color_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Color_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Color_id_seq";
       public          postgres    false    5    228            q           0    0    Color_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Color_id_seq" OWNED BY public."Color".id;
          public          postgres    false    227            �            1259    24795    Image    TABLE     �   CREATE TABLE public."Image" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    name text NOT NULL
);
    DROP TABLE public."Image";
       public         heap    postgres    false    5            �            1259    24794    Image_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Image_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Image_id_seq";
       public          postgres    false    5    222            r           0    0    Image_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Image_id_seq" OWNED BY public."Image".id;
          public          postgres    false    221            �            1259    24834    Material    TABLE     m   CREATE TABLE public."Material" (
    id integer NOT NULL,
    name text NOT NULL,
    value text NOT NULL
);
    DROP TABLE public."Material";
       public         heap    postgres    false    5            �            1259    24833    Material_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Material_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Material_id_seq";
       public          postgres    false    230    5            s           0    0    Material_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Material_id_seq" OWNED BY public."Material".id;
          public          postgres    false    229            �            1259    24785    Product    TABLE     �  CREATE TABLE public."Product" (
    id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    gender text NOT NULL,
    "oldPrice" integer,
    new boolean,
    hit boolean,
    discount boolean,
    description text,
    characteristics jsonb[],
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "previewId" integer
);
    DROP TABLE public."Product";
       public         heap    postgres    false    5            �            1259    24784    Product_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Product_id_seq";
       public          postgres    false    5    220            t           0    0    Product_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;
          public          postgres    false    219            �            1259    24775    RefreshToken    TABLE       CREATE TABLE public."RefreshToken" (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
 "   DROP TABLE public."RefreshToken";
       public         heap    postgres    false    5            �            1259    24774    RefreshToken_id_seq    SEQUENCE     �   CREATE SEQUENCE public."RefreshToken_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."RefreshToken_id_seq";
       public          postgres    false    218    5            u           0    0    RefreshToken_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."RefreshToken_id_seq" OWNED BY public."RefreshToken".id;
          public          postgres    false    217            �            1259    24815    Size    TABLE     �   CREATE TABLE public."Size" (
    id integer NOT NULL,
    value text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."Size";
       public         heap    postgres    false    5            �            1259    24814    Size_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Size_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Size_id_seq";
       public          postgres    false    5    226            v           0    0    Size_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Size_id_seq" OWNED BY public."Size".id;
          public          postgres    false    225            �            1259    24762    User    TABLE     �  CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    login text,
    role public."Role" DEFAULT 'USER'::public."Role" NOT NULL,
    "phoneNumber" text,
    name text,
    surname text,
    "isActivate" boolean DEFAULT false,
    banned boolean DEFAULT false,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."User";
       public         heap    postgres    false    860    5    860            �            1259    24761    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public          postgres    false    216    5            w           0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
          public          postgres    false    215            �            1259    24848    _CategoryToProduct    TABLE     a   CREATE TABLE public."_CategoryToProduct" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 (   DROP TABLE public."_CategoryToProduct";
       public         heap    postgres    false    5            �            1259    24851    _ColorToProduct    TABLE     ^   CREATE TABLE public."_ColorToProduct" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 %   DROP TABLE public."_ColorToProduct";
       public         heap    postgres    false    5            �            1259    24845    _ImageToProduct    TABLE     ^   CREATE TABLE public."_ImageToProduct" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 %   DROP TABLE public."_ImageToProduct";
       public         heap    postgres    false    5            �            1259    24854    _MaterialToProduct    TABLE     a   CREATE TABLE public."_MaterialToProduct" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 (   DROP TABLE public."_MaterialToProduct";
       public         heap    postgres    false    5            �            1259    24842    _ProductToSize    TABLE     ]   CREATE TABLE public."_ProductToSize" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 $   DROP TABLE public."_ProductToSize";
       public         heap    postgres    false    5            �           2604    24808    Category id    DEFAULT     n   ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);
 <   ALTER TABLE public."Category" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    24828    Color id    DEFAULT     h   ALTER TABLE ONLY public."Color" ALTER COLUMN id SET DEFAULT nextval('public."Color_id_seq"'::regclass);
 9   ALTER TABLE public."Color" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    24798    Image id    DEFAULT     h   ALTER TABLE ONLY public."Image" ALTER COLUMN id SET DEFAULT nextval('public."Image_id_seq"'::regclass);
 9   ALTER TABLE public."Image" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    24837    Material id    DEFAULT     n   ALTER TABLE ONLY public."Material" ALTER COLUMN id SET DEFAULT nextval('public."Material_id_seq"'::regclass);
 <   ALTER TABLE public."Material" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    230    230            �           2604    24788 
   Product id    DEFAULT     l   ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);
 ;   ALTER TABLE public."Product" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    24778    RefreshToken id    DEFAULT     v   ALTER TABLE ONLY public."RefreshToken" ALTER COLUMN id SET DEFAULT nextval('public."RefreshToken_id_seq"'::regclass);
 @   ALTER TABLE public."RefreshToken" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    24818    Size id    DEFAULT     f   ALTER TABLE ONLY public."Size" ALTER COLUMN id SET DEFAULT nextval('public."Size_id_seq"'::regclass);
 8   ALTER TABLE public."Size" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    24765    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            \          0    24805    Category 
   TABLE DATA           O   COPY public."Category" (id, name, value, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   ~s       `          0    24825    Color 
   TABLE DATA           2   COPY public."Color" (id, name, value) FROM stdin;
    public          postgres    false    228   6t       Z          0    24795    Image 
   TABLE DATA           E   COPY public."Image" (id, "createdAt", "updatedAt", name) FROM stdin;
    public          postgres    false    222   �t       b          0    24834    Material 
   TABLE DATA           5   COPY public."Material" (id, name, value) FROM stdin;
    public          postgres    false    230   �v       X          0    24785    Product 
   TABLE DATA           �   COPY public."Product" (id, name, price, gender, "oldPrice", new, hit, discount, description, characteristics, "createdAt", "updatedAt", "previewId") FROM stdin;
    public          postgres    false    220   #w       V          0    24775    RefreshToken 
   TABLE DATA           W   COPY public."RefreshToken" (id, token, "userId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �x       ^          0    24815    Size 
   TABLE DATA           E   COPY public."Size" (id, value, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �z       T          0    24762    User 
   TABLE DATA           �   COPY public."User" (id, email, password, login, role, "phoneNumber", name, surname, "isActivate", banned, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   T{       e          0    24848    _CategoryToProduct 
   TABLE DATA           8   COPY public."_CategoryToProduct" ("A", "B") FROM stdin;
    public          postgres    false    233   C}       f          0    24851    _ColorToProduct 
   TABLE DATA           5   COPY public."_ColorToProduct" ("A", "B") FROM stdin;
    public          postgres    false    234   �}       d          0    24845    _ImageToProduct 
   TABLE DATA           5   COPY public."_ImageToProduct" ("A", "B") FROM stdin;
    public          postgres    false    232   �}       g          0    24854    _MaterialToProduct 
   TABLE DATA           8   COPY public."_MaterialToProduct" ("A", "B") FROM stdin;
    public          postgres    false    235   �~       c          0    24842    _ProductToSize 
   TABLE DATA           4   COPY public."_ProductToSize" ("A", "B") FROM stdin;
    public          postgres    false    231   �~       x           0    0    Category_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Category_id_seq"', 4, true);
          public          postgres    false    223            y           0    0    Color_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Color_id_seq"', 8, true);
          public          postgres    false    227            z           0    0    Image_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Image_id_seq"', 33, true);
          public          postgres    false    221            {           0    0    Material_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Material_id_seq"', 5, true);
          public          postgres    false    229            |           0    0    Product_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Product_id_seq"', 14, true);
          public          postgres    false    219            }           0    0    RefreshToken_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."RefreshToken_id_seq"', 6, true);
          public          postgres    false    217            ~           0    0    Size_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Size_id_seq"', 24, true);
          public          postgres    false    225                       0    0    User_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."User_id_seq"', 6, true);
          public          postgres    false    215            �           2606    24813    Category Category_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Category" DROP CONSTRAINT "Category_pkey";
       public            postgres    false    224            �           2606    24832    Color Color_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Color" DROP CONSTRAINT "Color_pkey";
       public            postgres    false    228            �           2606    24803    Image Image_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Image" DROP CONSTRAINT "Image_pkey";
       public            postgres    false    222            �           2606    24841    Material Material_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Material"
    ADD CONSTRAINT "Material_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Material" DROP CONSTRAINT "Material_pkey";
       public            postgres    false    230            �           2606    24793    Product Product_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_pkey";
       public            postgres    false    220            �           2606    24783    RefreshToken RefreshToken_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."RefreshToken"
    ADD CONSTRAINT "RefreshToken_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."RefreshToken" DROP CONSTRAINT "RefreshToken_pkey";
       public            postgres    false    218            �           2606    24823    Size Size_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Size"
    ADD CONSTRAINT "Size_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Size" DROP CONSTRAINT "Size_pkey";
       public            postgres    false    226            �           2606    24773    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    216            �           1259    32768    Product_previewId_key    INDEX     [   CREATE UNIQUE INDEX "Product_previewId_key" ON public."Product" USING btree ("previewId");
 +   DROP INDEX public."Product_previewId_key";
       public            postgres    false    220            �           1259    24858    RefreshToken_userId_key    INDEX     _   CREATE UNIQUE INDEX "RefreshToken_userId_key" ON public."RefreshToken" USING btree ("userId");
 -   DROP INDEX public."RefreshToken_userId_key";
       public            postgres    false    218            �           1259    24857    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    216            �           1259    24863    _CategoryToProduct_AB_unique    INDEX     j   CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON public."_CategoryToProduct" USING btree ("A", "B");
 2   DROP INDEX public."_CategoryToProduct_AB_unique";
       public            postgres    false    233    233            �           1259    24864    _CategoryToProduct_B_index    INDEX     \   CREATE INDEX "_CategoryToProduct_B_index" ON public."_CategoryToProduct" USING btree ("B");
 0   DROP INDEX public."_CategoryToProduct_B_index";
       public            postgres    false    233            �           1259    24865    _ColorToProduct_AB_unique    INDEX     d   CREATE UNIQUE INDEX "_ColorToProduct_AB_unique" ON public."_ColorToProduct" USING btree ("A", "B");
 /   DROP INDEX public."_ColorToProduct_AB_unique";
       public            postgres    false    234    234            �           1259    24866    _ColorToProduct_B_index    INDEX     V   CREATE INDEX "_ColorToProduct_B_index" ON public."_ColorToProduct" USING btree ("B");
 -   DROP INDEX public."_ColorToProduct_B_index";
       public            postgres    false    234            �           1259    24861    _ImageToProduct_AB_unique    INDEX     d   CREATE UNIQUE INDEX "_ImageToProduct_AB_unique" ON public."_ImageToProduct" USING btree ("A", "B");
 /   DROP INDEX public."_ImageToProduct_AB_unique";
       public            postgres    false    232    232            �           1259    24862    _ImageToProduct_B_index    INDEX     V   CREATE INDEX "_ImageToProduct_B_index" ON public."_ImageToProduct" USING btree ("B");
 -   DROP INDEX public."_ImageToProduct_B_index";
       public            postgres    false    232            �           1259    24867    _MaterialToProduct_AB_unique    INDEX     j   CREATE UNIQUE INDEX "_MaterialToProduct_AB_unique" ON public."_MaterialToProduct" USING btree ("A", "B");
 2   DROP INDEX public."_MaterialToProduct_AB_unique";
       public            postgres    false    235    235            �           1259    24868    _MaterialToProduct_B_index    INDEX     \   CREATE INDEX "_MaterialToProduct_B_index" ON public."_MaterialToProduct" USING btree ("B");
 0   DROP INDEX public."_MaterialToProduct_B_index";
       public            postgres    false    235            �           1259    24859    _ProductToSize_AB_unique    INDEX     b   CREATE UNIQUE INDEX "_ProductToSize_AB_unique" ON public."_ProductToSize" USING btree ("A", "B");
 .   DROP INDEX public."_ProductToSize_AB_unique";
       public            postgres    false    231    231            �           1259    24860    _ProductToSize_B_index    INDEX     T   CREATE INDEX "_ProductToSize_B_index" ON public."_ProductToSize" USING btree ("B");
 ,   DROP INDEX public."_ProductToSize_B_index";
       public            postgres    false    231            �           2606    32769    Product Product_previewId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_previewId_fkey" FOREIGN KEY ("previewId") REFERENCES public."Image"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_previewId_fkey";
       public          postgres    false    220    4773    222            �           2606    24869 %   RefreshToken RefreshToken_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."RefreshToken"
    ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";
       public          postgres    false    4765    218    216            �           2606    24894 ,   _CategoryToProduct _CategoryToProduct_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_CategoryToProduct"
    ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_CategoryToProduct" DROP CONSTRAINT "_CategoryToProduct_A_fkey";
       public          postgres    false    224    233    4775            �           2606    24899 ,   _CategoryToProduct _CategoryToProduct_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_CategoryToProduct"
    ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_CategoryToProduct" DROP CONSTRAINT "_CategoryToProduct_B_fkey";
       public          postgres    false    4770    220    233            �           2606    24904 &   _ColorToProduct _ColorToProduct_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ColorToProduct"
    ADD CONSTRAINT "_ColorToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Color"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_ColorToProduct" DROP CONSTRAINT "_ColorToProduct_A_fkey";
       public          postgres    false    234    4779    228            �           2606    24909 &   _ColorToProduct _ColorToProduct_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ColorToProduct"
    ADD CONSTRAINT "_ColorToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_ColorToProduct" DROP CONSTRAINT "_ColorToProduct_B_fkey";
       public          postgres    false    220    234    4770            �           2606    24884 &   _ImageToProduct _ImageToProduct_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ImageToProduct"
    ADD CONSTRAINT "_ImageToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Image"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_ImageToProduct" DROP CONSTRAINT "_ImageToProduct_A_fkey";
       public          postgres    false    232    4773    222            �           2606    24889 &   _ImageToProduct _ImageToProduct_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ImageToProduct"
    ADD CONSTRAINT "_ImageToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_ImageToProduct" DROP CONSTRAINT "_ImageToProduct_B_fkey";
       public          postgres    false    4770    220    232            �           2606    24914 ,   _MaterialToProduct _MaterialToProduct_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_MaterialToProduct"
    ADD CONSTRAINT "_MaterialToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Material"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_MaterialToProduct" DROP CONSTRAINT "_MaterialToProduct_A_fkey";
       public          postgres    false    4781    235    230            �           2606    24919 ,   _MaterialToProduct _MaterialToProduct_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_MaterialToProduct"
    ADD CONSTRAINT "_MaterialToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_MaterialToProduct" DROP CONSTRAINT "_MaterialToProduct_B_fkey";
       public          postgres    false    235    220    4770            �           2606    24874 $   _ProductToSize _ProductToSize_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ProductToSize"
    ADD CONSTRAINT "_ProductToSize_A_fkey" FOREIGN KEY ("A") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."_ProductToSize" DROP CONSTRAINT "_ProductToSize_A_fkey";
       public          postgres    false    220    4770    231            �           2606    24879 $   _ProductToSize _ProductToSize_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ProductToSize"
    ADD CONSTRAINT "_ProductToSize_B_fkey" FOREIGN KEY ("B") REFERENCES public."Size"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."_ProductToSize" DROP CONSTRAINT "_ProductToSize_B_fkey";
       public          postgres    false    4777    226    231            \   �   x�u�=
�0��99E/А�M�i��R��P-�������#t�E�
Ond]*R����=$p	G4a���2[	�lcmc∬�c���Ψ��mY�9&"���DY���SE�J#pB�3�/��:�I���d<;�ui��Z�vx�
*�Ɋ��1���.'JJ���\(      `   �   x�E�1�0Eg��(ii��B��F&��k�TAU�3����/�����5�[tq�91�"%��fi�Z+�	�͛k��+�=�_��W�L�&�ጷ�z�bg�wlSr�I>ً��W�u�eG�
|��+c�,���^[�      Z   �  x�u�K�1D��)�4��H�,و�d���ȱZ�~@�.�JM�P���A�`���#�}.4(�TS��V�::�B�}����uc�v����/�`�ԭ�sc�b+Gj��t�3B�xͺݽ��XL$��ւ/7g�YK���	�aФ14��ܓ���rp��<��zwP�*9!'p��B^�}�C��H�������*D��0݇K�����:���~����+�M�;�����[ۭ��>�C��?96mh�����El�DF�IS�3�];���歔�����̝�C	dT��C;Η�ˎ���Q�A�T�|�ԭЬ�}w��c:��=���L��_����G^FX��Н�Xv���`h��y��-x��K֒9dm�䝗��b�1�ĥ��夫��v�G�-�3R�5����cΆ�������������s�<�:��jШ ����ٔW?���/��w      b   T   x�3�0��֋�\�pa�Ŧ;.��LI-�M�+��K�2�0�¾�.l��IM,�H-�2�0�x���`qijJ*W� %@      X   Q  x���AJC1���)�:df2�$;7���U7](��JyE\�wp�5*"x��F�
-��Z�!d�	|��L�t��hN��|~{�:��5䈛ӫ����5QS2�u�\�6O壼���T��\�2�����'D�,�]��q�s���2' 	U��7�KY��v6��v�PC�|�>U(��dӿS5#����	�E7&�Xr������zk�"���ֶ:��)�`8��E���b��|Ȱ�.�#� ��1�EGF�k�f���J�	RR�d�F?�}�}�u�= kG'̤�H;��7�z�=ck�����6B���d��&��؟�C<�t�F�N��1������[x      V   M  x���[o�@ş�S�$sE��(E�F6i� ��bA>�N�Ͷ�M�>M��dr~s����6q��9�L���٬f4��YW���J��1��6y�Wϡ��E0[��=��땗�;��a7�vΎ�����=��{�&1����Kx��gf�~;���R4���N�la�#w��cp�� "}@�� Ѩ�(?�T\ǒ��H�r�?Bn0�hM����>�.����tE���/K�8C��ᶀ��N�� �1��D�7:�*�B��	�����+�q简���v�U=�q��U�$��MӬ?@��<�V�d�1�Z�7Ƒ�QU"�6�����@�T�k�M-���Z��;w��u�8h�ÿ�k�G;A�J���!;9t�]YY[6���<��e��u��)��,ޝCЃ�Fd$��˪eI�D��L(�oB��C�$�5N7$�'�T]�5�hw)q����I�X�~8&a�z8��ةq�����qU#��E�H���B"�3� 9���C�"o��]9,��&�q���a\"����t�\���GƵ��n�� -�� �{k�I���KE�YMqL      ^   c   x�uι�0�X������������J�&�N�M��.�εґ����C�+��|~Zlխ�5�r����Y:'�����{��)p�S&ۯ�-�� �p:y      T   �  x���˒�0@���p7Ր��aDyIWo�A��@�����T�dq�,N����b�o���|��1�>�z(�A��җ����Õ\��F�'�[�z3}?241=m�T_��4�s�sB)��1�;<��~@��wޠ(c"s�a��iD����n��	�a[��K����֖�����?��) #3�l���V�W}��.���]uF���C�o�@�yt���8�=��]g��؀AEY���<���S��;N���VF�(ۙ��I���{}������A,�D��tq?��]%Mt�+>�g�Gl�"3�NӢrZ���Ayo2O����ZՃ�y��W�w��ee ��.N�#��#�j��/{v�����W�T�Z�j���,f\)x:�N�)7l*�і,��ז������Ib��C(��[�M�-��-=k��:�R-V�?f1�2�9��^9I��
MgP�-�kk�d�e@�P�?���S6��      e   ?   x����@�P�#I��z��:�;K��8N�e;��~(�ɓ1A���9u��1Ƕ�]$�#      f   ]   x�%���0��0L/��]���ۇu|���%,!-�tJ'���,�~�$E�"Y��ǡ{��&e�7�x�9�z�M�)(�-�_�jq/.wVp      d   s   x�%��!�⣘v�z�����.q ����h9�e�����p�*L!� � ������iz*����o�]t�EwѵaN;�δ3�|<�!��El���o�l�l�V{��?��'�      g   @   x��� 1�RL^\����@�8�Ȏ�`d����V��գ�4t؂�^�>��Gi/��$��      c   P   x�%��� ��0}���K���I�9�|X�ͅ	_�u-��]B ���yB
�
}/6es�b]l�Y3k>�����     