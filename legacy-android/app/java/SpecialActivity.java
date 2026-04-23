package com.pine.creaturematsudex;

import android.animation.*;
import android.app.*;
import android.content.*;
import android.content.res.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.media.*;
import android.net.*;
import android.os.*;
import android.text.*;
import android.text.style.*;
import android.util.*;
import android.view.*;
import android.view.View;
import android.view.View.*;
import android.view.animation.*;
import android.webkit.*;
import android.widget.*;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import androidx.annotation.*;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import com.github.chrisbanes.photoview.*;
import com.google.android.material.appbar.AppBarLayout;
import java.io.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;
import org.json.*;

public class SpecialActivity extends AppCompatActivity {
	
	private Toolbar _toolbar;
	private AppBarLayout _app_bar;
	private CoordinatorLayout _coordinator;
	private DrawerLayout _drawer;
	
	private LinearLayout title;
	private LinearLayout backg;
	private TextView stitletext;
	private LinearLayout linearback;
	private ImageView spebutton;
	private ImageView bar_l;
	private LinearLayout linear183;
	private ImageView bar_r;
	private ScrollView scr;
	private LinearLayout linear184;
	private LinearLayout linear1;
	private LinearLayout linear178;
	private LinearLayout s_list1;
	private LinearLayout s_list2;
	private LinearLayout s_list3;
	private LinearLayout s01;
	private LinearLayout s02;
	private LinearLayout s03;
	private LinearLayout s04;
	private LinearLayout s05;
	private LinearLayout s06;
	private ImageView i001;
	private TextView t001;
	private ImageView imageview6;
	private TextView t002;
	private ImageView imageview7;
	private TextView t003;
	private ImageView imageview8;
	private TextView t004;
	private ImageView imageview9;
	private TextView t005;
	private ImageView imageview10;
	private TextView t006;
	private LinearLayout s07;
	private LinearLayout s08;
	private LinearLayout s09;
	private LinearLayout s10;
	private LinearLayout s11;
	private LinearLayout s12;
	private ImageView imageview17;
	private TextView t007;
	private ImageView imageview18;
	private TextView t008;
	private ImageView imageview19;
	private TextView t009;
	private ImageView imageview20;
	private TextView t010;
	private ImageView imageview21;
	private TextView t011;
	private ImageView imageview22;
	private TextView t012;
	private LinearLayout s13;
	private LinearLayout s14;
	private LinearLayout s15;
	private LinearLayout s16;
	private LinearLayout s17;
	private LinearLayout s18;
	private ImageView imageview23;
	private TextView textview17;
	private ImageView imageview24;
	private TextView textview18;
	private ImageView imageview25;
	private TextView textview19;
	private ImageView imageview26;
	private TextView textview20;
	private ImageView imageview27;
	private TextView textview21;
	private ImageView imageview28;
	private TextView textview22;
	private ScrollView _drawer_vscroll3;
	private LinearLayout _drawer_droplist;
	private LinearLayout _drawer_menulist;
	private TextView _drawer_textview172;
	private ScrollView _drawer_vscroll2;
	private LinearLayout _drawer_linear460;
	private LinearLayout _drawer_so1;
	private LinearLayout _drawer_so2;
	private LinearLayout _drawer_so3;
	private ImageView _drawer_imageview1;
	private LinearLayout _drawer_linear456;
	private TextView _drawer_textview173;
	private TextView _drawer_textview429;
	private ImageView _drawer_imageview3;
	private LinearLayout _drawer_linear458;
	private TextView _drawer_textview433;
	private TextView _drawer_textview434;
	private ImageView _drawer_imageview4;
	private LinearLayout _drawer_linear1126;
	private TextView _drawer_textview435;
	private TextView _drawer_textview436;
	
	@Override
	protected void onCreate(Bundle _savedInstanceState) {
		super.onCreate(_savedInstanceState);
		setContentView(R.layout.special);
		initialize(_savedInstanceState);
		initializeLogic();
	}
	
	private void initialize(Bundle _savedInstanceState) {
		_app_bar = findViewById(R.id._app_bar);
		_coordinator = findViewById(R.id._coordinator);
		_toolbar = findViewById(R.id._toolbar);
		setSupportActionBar(_toolbar);
		getSupportActionBar().setDisplayHomeAsUpEnabled(true);
		getSupportActionBar().setHomeButtonEnabled(true);
		_toolbar.setNavigationOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _v) {
				onBackPressed();
			}
		});
		_drawer = findViewById(R.id._drawer);
		ActionBarDrawerToggle _toggle = new ActionBarDrawerToggle(SpecialActivity.this, _drawer, _toolbar, R.string.app_name, R.string.app_name);
		_drawer.addDrawerListener(_toggle);
		_toggle.syncState();
		
		LinearLayout _nav_view = findViewById(R.id._nav_view);
		
		title = findViewById(R.id.title);
		backg = findViewById(R.id.backg);
		stitletext = findViewById(R.id.stitletext);
		linearback = findViewById(R.id.linearback);
		spebutton = findViewById(R.id.spebutton);
		bar_l = findViewById(R.id.bar_l);
		linear183 = findViewById(R.id.linear183);
		bar_r = findViewById(R.id.bar_r);
		scr = findViewById(R.id.scr);
		linear184 = findViewById(R.id.linear184);
		linear1 = findViewById(R.id.linear1);
		linear178 = findViewById(R.id.linear178);
		s_list1 = findViewById(R.id.s_list1);
		s_list2 = findViewById(R.id.s_list2);
		s_list3 = findViewById(R.id.s_list3);
		s01 = findViewById(R.id.s01);
		s02 = findViewById(R.id.s02);
		s03 = findViewById(R.id.s03);
		s04 = findViewById(R.id.s04);
		s05 = findViewById(R.id.s05);
		s06 = findViewById(R.id.s06);
		i001 = findViewById(R.id.i001);
		t001 = findViewById(R.id.t001);
		imageview6 = findViewById(R.id.imageview6);
		t002 = findViewById(R.id.t002);
		imageview7 = findViewById(R.id.imageview7);
		t003 = findViewById(R.id.t003);
		imageview8 = findViewById(R.id.imageview8);
		t004 = findViewById(R.id.t004);
		imageview9 = findViewById(R.id.imageview9);
		t005 = findViewById(R.id.t005);
		imageview10 = findViewById(R.id.imageview10);
		t006 = findViewById(R.id.t006);
		s07 = findViewById(R.id.s07);
		s08 = findViewById(R.id.s08);
		s09 = findViewById(R.id.s09);
		s10 = findViewById(R.id.s10);
		s11 = findViewById(R.id.s11);
		s12 = findViewById(R.id.s12);
		imageview17 = findViewById(R.id.imageview17);
		t007 = findViewById(R.id.t007);
		imageview18 = findViewById(R.id.imageview18);
		t008 = findViewById(R.id.t008);
		imageview19 = findViewById(R.id.imageview19);
		t009 = findViewById(R.id.t009);
		imageview20 = findViewById(R.id.imageview20);
		t010 = findViewById(R.id.t010);
		imageview21 = findViewById(R.id.imageview21);
		t011 = findViewById(R.id.t011);
		imageview22 = findViewById(R.id.imageview22);
		t012 = findViewById(R.id.t012);
		s13 = findViewById(R.id.s13);
		s14 = findViewById(R.id.s14);
		s15 = findViewById(R.id.s15);
		s16 = findViewById(R.id.s16);
		s17 = findViewById(R.id.s17);
		s18 = findViewById(R.id.s18);
		imageview23 = findViewById(R.id.imageview23);
		textview17 = findViewById(R.id.textview17);
		imageview24 = findViewById(R.id.imageview24);
		textview18 = findViewById(R.id.textview18);
		imageview25 = findViewById(R.id.imageview25);
		textview19 = findViewById(R.id.textview19);
		imageview26 = findViewById(R.id.imageview26);
		textview20 = findViewById(R.id.textview20);
		imageview27 = findViewById(R.id.imageview27);
		textview21 = findViewById(R.id.textview21);
		imageview28 = findViewById(R.id.imageview28);
		textview22 = findViewById(R.id.textview22);
		_drawer_vscroll3 = _nav_view.findViewById(R.id.vscroll3);
		_drawer_droplist = _nav_view.findViewById(R.id.droplist);
		_drawer_menulist = _nav_view.findViewById(R.id.menulist);
		_drawer_textview172 = _nav_view.findViewById(R.id.textview172);
		_drawer_vscroll2 = _nav_view.findViewById(R.id.vscroll2);
		_drawer_linear460 = _nav_view.findViewById(R.id.linear460);
		_drawer_so1 = _nav_view.findViewById(R.id.so1);
		_drawer_so2 = _nav_view.findViewById(R.id.so2);
		_drawer_so3 = _nav_view.findViewById(R.id.so3);
		_drawer_imageview1 = _nav_view.findViewById(R.id.imageview1);
		_drawer_linear456 = _nav_view.findViewById(R.id.linear456);
		_drawer_textview173 = _nav_view.findViewById(R.id.textview173);
		_drawer_textview429 = _nav_view.findViewById(R.id.textview429);
		_drawer_imageview3 = _nav_view.findViewById(R.id.imageview3);
		_drawer_linear458 = _nav_view.findViewById(R.id.linear458);
		_drawer_textview433 = _nav_view.findViewById(R.id.textview433);
		_drawer_textview434 = _nav_view.findViewById(R.id.textview434);
		_drawer_imageview4 = _nav_view.findViewById(R.id.imageview4);
		_drawer_linear1126 = _nav_view.findViewById(R.id.linear1126);
		_drawer_textview435 = _nav_view.findViewById(R.id.textview435);
		_drawer_textview436 = _nav_view.findViewById(R.id.textview436);
		
		spebutton.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.openDrawer(Gravity.RIGHT);
			}
		});
		
		s01.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pro_1);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S01 - PROTOTYPE-1 / BLOBBY OSO");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pro_1);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("He was the first failed creature that was a prototype of the creation of the sextuplets, he is lack of intelligence, his body is boneless that looks like a blob and is resistant to pain, cold and heat. No action that represents his personality.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s01);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("PROTOTYPE");
			}
		});
		
		s02.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pro_2);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S02 - PROTOTYPE-2 / BLOBBY KARA");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pro_2);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("He was the first failed creature that was a prototype of the creation of the sextuplets, he is lack of intelligence, his body is boneless that looks like a blob and is resistant to pain, cold and heat. No action that represents his personality.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s02);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("PROTOTYPE");
			}
		});
		
		s03.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pro_3);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S03 - PROTOTYPE-3 / BLOBBY CHORO");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pro_3);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("He was the first failed creature that was a prototype of the creation of the sextuplets, he is lack of intelligence, his body is boneless that looks like a blob and is resistant to pain, cold and heat. No action that represents his personality.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s03);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("PROTOTYPE");
			}
		});
		
		s04.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pro_4);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S04 - PROTOTYPE-4 / BLOBBY ICHI");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pro_4);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("He was the first failed creature that was a prototype of the creation of the sextuplets, he is lack of intelligence, his body is boneless that looks like a blob and is resistant to pain, cold and heat. No action that represents his personality.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s04);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("PROTOTYPE");
			}
		});
		
		s05.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pro_5);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S05 - PROTOTYPE-5 / BLOBBY JYUSHI");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pro_5);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("He was the first failed creature that was a prototype of the creation of the sextuplets, he is lack of intelligence, his body is boneless that looks like a blob and is resistant to pain, cold and heat. No action that represents his personality.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s05);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("PROTOTYPE");
			}
		});
		
		s06.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pro_6);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S06 - PROTOTYPE-6 / BLOBBY TODO");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pro_6);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("He was the first failed creature that was a prototype of the creation of the sextuplets, he is lack of intelligence, his body is boneless that looks like a blob and is resistant to pain, cold and heat. No action that represents his personality.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s06);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("PROTOTYPE");
			}
		});
		
		s07.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.spe_07);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S07 - BASIOSO");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.spe_07);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("TBA");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s07);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("JUNIOR");
			}
		});
		
		s08.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.spe_08);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S08 - KARIMIDE");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.spe_08);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("TBA");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s08);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("JUNIOR");
			}
		});
		
		s09.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.spe_09);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S09 - STICHORO");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.spe_09);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("TBA");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s09);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("JUNIOR");
			}
		});
		
		s10.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.spe_10);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S10 - SIGNORICHI");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.spe_10);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("TBA");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s10);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("JUNIOR");
			}
		});
		
		s11.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.spe_11);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S11 - MATONSHI");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.spe_11);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("TBA");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s11);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("JUNIOR");
			}
		});
		
		s12.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog spe_dia = new AlertDialog.Builder(SpecialActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des_special, null);
				spe_dia.setView(convertView);
				
				spe_dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				spe_dia.dismiss();
				
				spe_dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.spe_12);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#S12 - ROUNTOTTY");
				name.setTypeface(Typeface.createFromAsset(getAssets(),"fonts/hp_simplified_rg.ttf"));
				
				/// Rounds ///
				
				LinearLayout titleround = (LinearLayout)
				convertView.findViewById(R.id.titleround);
				
				titleround.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) { this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFFEFB775));
				
				LinearLayout dialogdesc = (LinearLayout)
				convertView.findViewById(R.id.dialogdesc);
				
				dialogdesc.setBackground(new GradientDrawable() { public GradientDrawable getIns(int a, int b) {
						this.setCornerRadius(a); this.setColor(b); return this; } }.getIns((int)20, 0xFF282828));
				
				/// Rounds 2 ///
				
				LinearLayout linear46 = (LinearLayout)
				convertView.findViewById(R.id.linear46);
				
				LinearLayout linear34 = (LinearLayout)
				convertView.findViewById(R.id.linear34);
				
				LinearLayout linear33 = (LinearLayout)
				convertView.findViewById(R.id.linear33);
				
				LinearLayout linear43 = (LinearLayout)
				convertView.findViewById(R.id.linear43);
				
				/// Top
				
				android.graphics.drawable.GradientDrawable top = new android.graphics.drawable.GradientDrawable();
				
				top.setCornerRadii(new float[]{
					///
					20.0f,20.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f,
					///
					0.0f,0.0f
					
				});
				top.setColor(Color.parseColor("#FFA36042"));
				
				linear46.setBackgroundDrawable(top); 
				
				/// Bottom
				
				android.graphics.drawable.GradientDrawable bottom = new android.graphics.drawable.GradientDrawable();
				
				bottom.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					20.0f,20.0f
					
				});
				bottom.setColor(Color.parseColor("#FFA36042"));
				
				linear33.setBackgroundDrawable(bottom);
				
				/// Size
				
				android.graphics.drawable.GradientDrawable siz = new android.graphics.drawable.GradientDrawable();
				
				siz.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,00.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f
					
				});
				siz.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear34.setBackgroundDrawable(siz);
				
				/// Category
				
				android.graphics.drawable.GradientDrawable cat = new android.graphics.drawable.GradientDrawable();
				
				cat.setCornerRadii(new float[]{
					///
					0.0f,0.0f,
					///
					0.0f,0.0f,
					///
					20.0f,20.0f,
					///
					0.0f,0.0f
					
				});
				cat.setColor(Color.parseColor("#FFFFE2C1"));
				
				linear43.setBackgroundDrawable(cat);
				
				/// Icon Clicker ///
				
				ImageView imageicon = spe_dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(SpecialActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.spe_12);
						
						iconclicker.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
						iconclicker.show();
					}
				});
				
				/// INFORMATION ///
				
				// DESCRIPTION
				
				LinearLayout navi_1 = (LinearLayout)
				convertView.findViewById(R.id.navi_1);
				
				final LinearLayout desc_navi = (LinearLayout)
				convertView.findViewById(R.id.desc_navi);
				
				// ORIGIN
				
				LinearLayout navi_2 = (LinearLayout)
				convertView.findViewById(R.id.navi_2);
				
				final LinearLayout origin_navi = (LinearLayout)
				convertView.findViewById(R.id.origin_navi);
				
				TextView text_o = (TextView)
				convertView.findViewById(R.id.text_o); 
				
				// REFERENCE
				
				LinearLayout navi_3 = (LinearLayout)
				convertView.findViewById(R.id.navi_3);
				
				final LinearLayout ref_navi = (LinearLayout)
				convertView.findViewById(R.id.ref_navi);
				
				TextView text_r = (TextView)
				convertView.findViewById(R.id.text_r); 
				
				// ORI REF GONE
				
				origin_navi.setVisibility(View.GONE);
				ref_navi.setVisibility(View.GONE);
				
				// NEXT
				
				navi_1.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next1) {
						desc_navi.setVisibility(View.GONE);
						origin_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_2.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next2) {
						origin_navi.setVisibility(View.GONE);
						ref_navi.setVisibility(View.VISIBLE);
					}
				});
				
				navi_3.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View next3) {
						ref_navi.setVisibility(View.GONE);
						desc_navi.setVisibility(View.VISIBLE);
					}
				});	
				
				/// End ///
				TextView text = (TextView)
				convertView.findViewById(R.id.text);
				text.setText("TBA");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.s12);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("JUNIOR");
			}
		});
		
		s13.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				
			}
		});
		
		s14.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				
			}
		});
		
		s15.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				
			}
		});
		
		s16.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				
			}
		});
		
		s17.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				
			}
		});
		
		s18.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				
			}
		});
		
		_drawer_so1.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,0);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFC107),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				s_list1.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_so2.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,294);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFC107),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				s_list2.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_so3.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,539);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFC107),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				s_list3.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
	}
	
	private void initializeLogic() {
		_toolbar.setVisibility(View.GONE);
		_toolbar.setNavigationOnClickListener(new View.OnClickListener(){ 			@Override 			public void onClick(View _sp) { 			 _drawer.openDrawer(Gravity.RIGHT); 			} 		}); LinearLayout _nav_view = (LinearLayout) findViewById(R.id._nav_view); androidx.drawerlayout.widget.DrawerLayout
		.LayoutParams lp = new androidx.drawerlayout.widget.DrawerLayout
		.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.MATCH_PARENT); lp.gravity=Gravity.RIGHT; _nav_view.setLayoutParams(lp);
		_Cards();
	}
	
	@Override
	public void onBackPressed() {
		if (_drawer.isDrawerOpen(GravityCompat.START)) {
			_drawer.closeDrawer(GravityCompat.START);
		} else {
			super.onBackPressed();
		}
	}
	public void _CardStyle(final View _view, final double _shadow, final double _radius, final String _color, final boolean _touch) {
		android.graphics.drawable.GradientDrawable gd = new android.graphics.drawable.GradientDrawable();
		gd.setColor(Color.parseColor(_color));
		gd.setCornerRadius((int)_radius);
		_view.setBackground(gd);
		
		if (Build.VERSION.SDK_INT >= 21){
			_view.setElevation((int)_shadow);}
		if (_touch) {
			_view.setOnTouchListener(new View.OnTouchListener() {
				@Override
				public boolean onTouch(View v, MotionEvent event) {
					switch (event.getAction()){
						case MotionEvent.ACTION_DOWN:{
							ObjectAnimator scaleX = new ObjectAnimator();
							scaleX.setTarget(_view);
							scaleX.setPropertyName("scaleX");
							scaleX.setFloatValues(0.9f);
							scaleX.setDuration(100);
							scaleX.start();
							
							ObjectAnimator scaleY = new ObjectAnimator();
							scaleY.setTarget(_view);
							scaleY.setPropertyName("scaleY");
							scaleY.setFloatValues(0.9f);
							scaleY.setDuration(100);
							scaleY.start();
							break;
						}
						case MotionEvent.ACTION_UP:{
							
							ObjectAnimator scaleX = new ObjectAnimator();
							scaleX.setTarget(_view);
							scaleX.setPropertyName("scaleX");
							scaleX.setFloatValues((float)1);
							scaleX.setDuration(100);
							scaleX.start();
							
							ObjectAnimator scaleY = new ObjectAnimator();
							scaleY.setTarget(_view);
							scaleY.setPropertyName("scaleY");
							scaleY.setFloatValues((float)1);
							scaleY.setDuration(100);
							scaleY.start();
							
							break;
						}
					}
					return false;
				}
			});
		}
	}
	
	
	public void _Cards() {
		_CardStyle(s01, 0, 15, "#ffe2c1", true);
		_CardStyle(s02, 0, 15, "#ffe2c1", true);
		_CardStyle(s03, 0, 15, "#ffe2c1", true);
		_CardStyle(s04, 0, 15, "#ffe2c1", true);
		_CardStyle(s05, 0, 15, "#ffe2c1", true);
		_CardStyle(s06, 0, 15, "#ffe2c1", true);
		///
		_CardStyle(s07, 0, 15, "#ffe2c1", true);
		_CardStyle(s08, 0, 15, "#ffe2c1", true);
		_CardStyle(s09, 0, 15, "#ffe2c1", true);
		_CardStyle(s10, 0, 15, "#ffe2c1", true);
		_CardStyle(s11, 0, 15, "#ffe2c1", true);
		_CardStyle(s12, 0, 15, "#ffe2c1", true);
		///
		_CardStyle(s13, 0, 15, "#ffe2c1", true);
		_CardStyle(s14, 0, 15, "#ffe2c1", true);
		_CardStyle(s15, 0, 15, "#ffe2c1", true);
		_CardStyle(s16, 0, 15, "#ffe2c1", true);
		_CardStyle(s17, 0, 15, "#ffe2c1", true);
		_CardStyle(s18, 0, 15, "#ffe2c1", true);
	}
	
}