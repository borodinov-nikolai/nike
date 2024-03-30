PGDMP         2                |            nike    15.3    15.3 T    h           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            i           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            j           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            k           1262    266007    nike    DATABASE     x   CREATE DATABASE nike WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE nike;
                postgres    false                        2615    324256    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            l           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            m           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            V           1247    324258    Role    TYPE     ^   CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'MODERATOR',
    'AUTHOR',
    'USER'
);
    DROP TYPE public."Role";
       public          postgres    false    5            �            1259    324301    Category    TABLE     �   CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text NOT NULL,
    value text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."Category";
       public         heap    postgres    false    5            �            1259    324300    Category_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Category_id_seq";
       public          postgres    false    5    221            n           0    0    Category_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;
          public          postgres    false    220            �            1259    324311    Color    TABLE     j   CREATE TABLE public."Color" (
    id integer NOT NULL,
    name text NOT NULL,
    value text NOT NULL
);
    DROP TABLE public."Color";
       public         heap    postgres    false    5            �            1259    324310    Color_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Color_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Color_id_seq";
       public          postgres    false    5    223            o           0    0    Color_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Color_id_seq" OWNED BY public."Color".id;
          public          postgres    false    222            �            1259    324320    Material    TABLE     m   CREATE TABLE public."Material" (
    id integer NOT NULL,
    name text NOT NULL,
    value text NOT NULL
);
    DROP TABLE public."Material";
       public         heap    postgres    false    5            �            1259    324319    Material_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Material_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Material_id_seq";
       public          postgres    false    225    5            p           0    0    Material_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Material_id_seq" OWNED BY public."Material".id;
          public          postgres    false    224            �            1259    324291    Product    TABLE     d  CREATE TABLE public."Product" (
    id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    "oldPrice" integer,
    image text NOT NULL,
    new boolean,
    hit boolean,
    discount boolean,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."Product";
       public         heap    postgres    false    5            �            1259    324290    Product_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Product_id_seq";
       public          postgres    false    5    219            q           0    0    Product_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;
          public          postgres    false    218            �            1259    324281    RefreshToken    TABLE       CREATE TABLE public."RefreshToken" (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
 "   DROP TABLE public."RefreshToken";
       public         heap    postgres    false    5            �            1259    324280    RefreshToken_id_seq    SEQUENCE     �   CREATE SEQUENCE public."RefreshToken_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."RefreshToken_id_seq";
       public          postgres    false    217    5            r           0    0    RefreshToken_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."RefreshToken_id_seq" OWNED BY public."RefreshToken".id;
          public          postgres    false    216            �            1259    324382    Size    TABLE     �   CREATE TABLE public."Size" (
    id integer NOT NULL,
    value text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."Size";
       public         heap    postgres    false    5            �            1259    324381    Size_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Size_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Size_id_seq";
       public          postgres    false    230    5            s           0    0    Size_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Size_id_seq" OWNED BY public."Size".id;
          public          postgres    false    229            �            1259    324268    User    TABLE     �  CREATE TABLE public."User" (
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
       public         heap    postgres    false    854    5    854            �            1259    324267    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public          postgres    false    5    215            t           0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
          public          postgres    false    214            �            1259    324328    _CategoryToProduct    TABLE     a   CREATE TABLE public."_CategoryToProduct" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 (   DROP TABLE public."_CategoryToProduct";
       public         heap    postgres    false    5            �            1259    324331    _ColorToProduct    TABLE     ^   CREATE TABLE public."_ColorToProduct" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 %   DROP TABLE public."_ColorToProduct";
       public         heap    postgres    false    5            �            1259    324334    _MaterialToProduct    TABLE     a   CREATE TABLE public."_MaterialToProduct" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 (   DROP TABLE public."_MaterialToProduct";
       public         heap    postgres    false    5            �            1259    324391    _ProductToSize    TABLE     ]   CREATE TABLE public."_ProductToSize" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 $   DROP TABLE public."_ProductToSize";
       public         heap    postgres    false    5            �           2604    324304    Category id    DEFAULT     n   ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);
 <   ALTER TABLE public."Category" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    324314    Color id    DEFAULT     h   ALTER TABLE ONLY public."Color" ALTER COLUMN id SET DEFAULT nextval('public."Color_id_seq"'::regclass);
 9   ALTER TABLE public."Color" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    324323    Material id    DEFAULT     n   ALTER TABLE ONLY public."Material" ALTER COLUMN id SET DEFAULT nextval('public."Material_id_seq"'::regclass);
 <   ALTER TABLE public."Material" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    324294 
   Product id    DEFAULT     l   ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);
 ;   ALTER TABLE public."Product" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    324284    RefreshToken id    DEFAULT     v   ALTER TABLE ONLY public."RefreshToken" ALTER COLUMN id SET DEFAULT nextval('public."RefreshToken_id_seq"'::regclass);
 @   ALTER TABLE public."RefreshToken" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    324385    Size id    DEFAULT     f   ALTER TABLE ONLY public."Size" ALTER COLUMN id SET DEFAULT nextval('public."Size_id_seq"'::regclass);
 8   ALTER TABLE public."Size" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    230    230            �           2604    324271    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            [          0    324301    Category 
   TABLE DATA           O   COPY public."Category" (id, name, value, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   7a       ]          0    324311    Color 
   TABLE DATA           2   COPY public."Color" (id, name, value) FROM stdin;
    public          postgres    false    223   �a       _          0    324320    Material 
   TABLE DATA           5   COPY public."Material" (id, name, value) FROM stdin;
    public          postgres    false    225   �a       Y          0    324291    Product 
   TABLE DATA           u   COPY public."Product" (id, name, price, "oldPrice", image, new, hit, discount, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �a       W          0    324281    RefreshToken 
   TABLE DATA           W   COPY public."RefreshToken" (id, token, "userId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   �b       d          0    324382    Size 
   TABLE DATA           E   COPY public."Size" (id, value, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    230   �c       U          0    324268    User 
   TABLE DATA           �   COPY public."User" (id, email, password, login, role, "phoneNumber", name, surname, "isActivate", banned, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   Xd       `          0    324328    _CategoryToProduct 
   TABLE DATA           8   COPY public."_CategoryToProduct" ("A", "B") FROM stdin;
    public          postgres    false    226   Ce       a          0    324331    _ColorToProduct 
   TABLE DATA           5   COPY public."_ColorToProduct" ("A", "B") FROM stdin;
    public          postgres    false    227   xe       b          0    324334    _MaterialToProduct 
   TABLE DATA           8   COPY public."_MaterialToProduct" ("A", "B") FROM stdin;
    public          postgres    false    228   �e       e          0    324391    _ProductToSize 
   TABLE DATA           4   COPY public."_ProductToSize" ("A", "B") FROM stdin;
    public          postgres    false    231   �e       u           0    0    Category_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Category_id_seq"', 8, true);
          public          postgres    false    220            v           0    0    Color_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Color_id_seq"', 1, false);
          public          postgres    false    222            w           0    0    Material_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Material_id_seq"', 1, false);
          public          postgres    false    224            x           0    0    Product_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Product_id_seq"', 26, true);
          public          postgres    false    218            y           0    0    RefreshToken_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."RefreshToken_id_seq"', 2, true);
          public          postgres    false    216            z           0    0    Size_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Size_id_seq"', 5, true);
          public          postgres    false    229            {           0    0    User_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."User_id_seq"', 2, true);
          public          postgres    false    214            �           2606    324309    Category Category_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Category" DROP CONSTRAINT "Category_pkey";
       public            postgres    false    221            �           2606    324318    Color Color_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Color" DROP CONSTRAINT "Color_pkey";
       public            postgres    false    223            �           2606    324327    Material Material_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Material"
    ADD CONSTRAINT "Material_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Material" DROP CONSTRAINT "Material_pkey";
       public            postgres    false    225            �           2606    324299    Product Product_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_pkey";
       public            postgres    false    219            �           2606    324289    RefreshToken RefreshToken_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."RefreshToken"
    ADD CONSTRAINT "RefreshToken_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."RefreshToken" DROP CONSTRAINT "RefreshToken_pkey";
       public            postgres    false    217            �           2606    324390    Size Size_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Size"
    ADD CONSTRAINT "Size_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Size" DROP CONSTRAINT "Size_pkey";
       public            postgres    false    230            �           2606    324279    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    215            �           1259    324338    RefreshToken_userId_key    INDEX     _   CREATE UNIQUE INDEX "RefreshToken_userId_key" ON public."RefreshToken" USING btree ("userId");
 -   DROP INDEX public."RefreshToken_userId_key";
       public            postgres    false    217            �           1259    324337    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    215            �           1259    324339    _CategoryToProduct_AB_unique    INDEX     j   CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON public."_CategoryToProduct" USING btree ("A", "B");
 2   DROP INDEX public."_CategoryToProduct_AB_unique";
       public            postgres    false    226    226            �           1259    324340    _CategoryToProduct_B_index    INDEX     \   CREATE INDEX "_CategoryToProduct_B_index" ON public."_CategoryToProduct" USING btree ("B");
 0   DROP INDEX public."_CategoryToProduct_B_index";
       public            postgres    false    226            �           1259    324341    _ColorToProduct_AB_unique    INDEX     d   CREATE UNIQUE INDEX "_ColorToProduct_AB_unique" ON public."_ColorToProduct" USING btree ("A", "B");
 /   DROP INDEX public."_ColorToProduct_AB_unique";
       public            postgres    false    227    227            �           1259    324342    _ColorToProduct_B_index    INDEX     V   CREATE INDEX "_ColorToProduct_B_index" ON public."_ColorToProduct" USING btree ("B");
 -   DROP INDEX public."_ColorToProduct_B_index";
       public            postgres    false    227            �           1259    324343    _MaterialToProduct_AB_unique    INDEX     j   CREATE UNIQUE INDEX "_MaterialToProduct_AB_unique" ON public."_MaterialToProduct" USING btree ("A", "B");
 2   DROP INDEX public."_MaterialToProduct_AB_unique";
       public            postgres    false    228    228            �           1259    324344    _MaterialToProduct_B_index    INDEX     \   CREATE INDEX "_MaterialToProduct_B_index" ON public."_MaterialToProduct" USING btree ("B");
 0   DROP INDEX public."_MaterialToProduct_B_index";
       public            postgres    false    228            �           1259    324394    _ProductToSize_AB_unique    INDEX     b   CREATE UNIQUE INDEX "_ProductToSize_AB_unique" ON public."_ProductToSize" USING btree ("A", "B");
 .   DROP INDEX public."_ProductToSize_AB_unique";
       public            postgres    false    231    231            �           1259    324395    _ProductToSize_B_index    INDEX     T   CREATE INDEX "_ProductToSize_B_index" ON public."_ProductToSize" USING btree ("B");
 ,   DROP INDEX public."_ProductToSize_B_index";
       public            postgres    false    231            �           2606    324345 %   RefreshToken RefreshToken_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."RefreshToken"
    ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public."RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";
       public          postgres    false    217    215    3239            �           2606    324350 ,   _CategoryToProduct _CategoryToProduct_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_CategoryToProduct"
    ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_CategoryToProduct" DROP CONSTRAINT "_CategoryToProduct_A_fkey";
       public          postgres    false    3246    226    221            �           2606    324355 ,   _CategoryToProduct _CategoryToProduct_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_CategoryToProduct"
    ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_CategoryToProduct" DROP CONSTRAINT "_CategoryToProduct_B_fkey";
       public          postgres    false    219    3244    226            �           2606    324360 &   _ColorToProduct _ColorToProduct_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ColorToProduct"
    ADD CONSTRAINT "_ColorToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Color"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_ColorToProduct" DROP CONSTRAINT "_ColorToProduct_A_fkey";
       public          postgres    false    3248    227    223            �           2606    324365 &   _ColorToProduct _ColorToProduct_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ColorToProduct"
    ADD CONSTRAINT "_ColorToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_ColorToProduct" DROP CONSTRAINT "_ColorToProduct_B_fkey";
       public          postgres    false    227    219    3244            �           2606    324370 ,   _MaterialToProduct _MaterialToProduct_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_MaterialToProduct"
    ADD CONSTRAINT "_MaterialToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Material"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_MaterialToProduct" DROP CONSTRAINT "_MaterialToProduct_A_fkey";
       public          postgres    false    225    3250    228            �           2606    324375 ,   _MaterialToProduct _MaterialToProduct_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_MaterialToProduct"
    ADD CONSTRAINT "_MaterialToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."_MaterialToProduct" DROP CONSTRAINT "_MaterialToProduct_B_fkey";
       public          postgres    false    3244    219    228            �           2606    324396 $   _ProductToSize _ProductToSize_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ProductToSize"
    ADD CONSTRAINT "_ProductToSize_A_fkey" FOREIGN KEY ("A") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."_ProductToSize" DROP CONSTRAINT "_ProductToSize_A_fkey";
       public          postgres    false    3244    231    219            �           2606    324401 $   _ProductToSize _ProductToSize_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_ProductToSize"
    ADD CONSTRAINT "_ProductToSize_B_fkey" FOREIGN KEY ("B") REFERENCES public."Size"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."_ProductToSize" DROP CONSTRAINT "_ProductToSize_B_fkey";
       public          postgres    false    231    230    3258            [   t   x�3㼰�b�m/캰��V���<N##]c]C3#c+c#+c=sc\�\��]�za/ܐ�|�����༰��֋Mpc�32sR�R��dd�gh��Aq�=... ZBj      ]      x������ � �      _      x������ � �      Y   �   x���Kj1еt���Dw�O�!|oBb�v����6��f&�*U�4�|�}�NH
�t<����|*�`eUp/lt����|zZH
d�lC���g��IRY�.R,��6�=��[y�/�&�5/:[/���`��Wv��3d�8)�yhB(��E�Ξ�����&�!<�W��c�9���c�      W   %  x����n�@@��� d�*�&:ԁ��4M�R�|$�T��N�����.��ܛ�{�v��qY�P�<9$��5��ç����[�:���]���mԲ˒8�r���mɰq�H
6���痌|JDR>����p�}��8�.���u�1k�PM����M�)kBC� p63��MD��:�g��WN�Iڅ\%r���FWM4I;���b_��(�����K�<�C�<�B,?[�ܣU���H�(����4��8� lCjlB��9�&�в)2�ꯦ����z�      d   Z   x�uα�0D���F�a{��?G"�nߗNg�A�M���X�~����Eb�O� T�Sҏ�A���]f��s��"��{��f~>_1�      U   �   x�u�Ko�@ �ϻ��7��l��������x�Jх���Û:3��w�ѲX��E�ޢ�,�Ec�`k��5�v�j�%Y+M1�tjV�g�<��m��%�g�M��K��X�����o�O�c�)`6 �G�C��"L�␂C��.?e���c��Y���Qh���>�����Q+L��A]�n���h����-0}Wo�/�Y������C��[.��_�R      `   %   x�3�42��42�2�42�2 �5����� Y�      a      x������ � �      b      x������ � �      e   .   x�%��  �wo$��4�?D|,�K��h�D����a!g~;�Ӥj     