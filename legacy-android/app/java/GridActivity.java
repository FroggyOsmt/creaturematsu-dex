package com.pine.creaturematsudex;

import android.animation.*;
import android.app.*;
import android.app.AlertDialog;
import android.content.*;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.res.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.media.*;
import android.net.*;
import android.net.Uri;
import android.os.*;
import android.os.Vibrator;
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
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.io.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;
import org.json.*;

public class GridActivity extends AppCompatActivity {
	
	private Toolbar _toolbar;
	private AppBarLayout _app_bar;
	private CoordinatorLayout _coordinator;
	private FloatingActionButton _fab;
	private DrawerLayout _drawer;
	private double random = 0;
	private String prgmax = "";
	private String OSO = "";
	private double rancolor = 0;
	
	private LinearLayout title;
	private LinearLayout backg;
	private TextView titletext;
	private LinearLayout linearback;
	private ImageView catebutton;
	private ImageView bar_l;
	private ScrollView scr;
	private ImageView bar_r;
	private LinearLayout linear1;
	private LinearLayout linear178;
	private LinearLayout list1;
	private LinearLayout list2;
	private LinearLayout list3;
	private LinearLayout list4;
	private LinearLayout list5;
	private LinearLayout list6;
	private LinearLayout list7;
	private LinearLayout c001;
	private LinearLayout c002;
	private LinearLayout c003;
	private LinearLayout c004;
	private LinearLayout c005;
	private LinearLayout c006;
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
	private LinearLayout c007;
	private LinearLayout c008;
	private LinearLayout c009;
	private LinearLayout c010;
	private LinearLayout c011;
	private LinearLayout c012;
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
	private LinearLayout c013;
	private LinearLayout c014;
	private LinearLayout c015;
	private LinearLayout c016;
	private LinearLayout c017;
	private LinearLayout c018;
	private ImageView imageview65;
	private TextView t013;
	private ImageView imageview66;
	private TextView textview60;
	private ImageView imageview67;
	private TextView textview61;
	private ImageView imageview68;
	private TextView textview62;
	private ImageView imageview69;
	private TextView textview63;
	private ImageView imageview70;
	private TextView textview64;
	private LinearLayout c019;
	private LinearLayout c020;
	private LinearLayout c021;
	private LinearLayout c022;
	private LinearLayout c023;
	private LinearLayout c024;
	private ImageView imageview71;
	private TextView textview65;
	private ImageView imageview72;
	private TextView textview66;
	private ImageView imageview73;
	private TextView textview67;
	private ImageView imageview74;
	private TextView textview68;
	private ImageView imageview75;
	private TextView textview69;
	private ImageView imageview76;
	private TextView textview70;
	private LinearLayout c025;
	private LinearLayout c026;
	private LinearLayout c027;
	private LinearLayout c028;
	private LinearLayout c029;
	private LinearLayout c030;
	private ImageView imageview83;
	private TextView textview77;
	private ImageView imageview84;
	private TextView textview78;
	private ImageView imageview85;
	private TextView textview79;
	private ImageView imageview86;
	private TextView textview80;
	private ImageView imageview87;
	private TextView textview81;
	private ImageView imageview88;
	private TextView textview82;
	private LinearLayout c031;
	private LinearLayout c032;
	private LinearLayout c033;
	private LinearLayout c034;
	private LinearLayout c035;
	private LinearLayout c036;
	private ImageView imageview95;
	private TextView textview89;
	private ImageView imageview96;
	private TextView textview90;
	private ImageView imageview97;
	private TextView textview91;
	private ImageView imageview98;
	private TextView textview92;
	private ImageView imageview99;
	private TextView textview93;
	private ImageView imageview100;
	private TextView textview94;
	private LinearLayout c037;
	private LinearLayout c038;
	private LinearLayout c039;
	private LinearLayout c040;
	private LinearLayout c041;
	private LinearLayout c042;
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
	private LinearLayout _drawer_o1;
	private LinearLayout _drawer_o2;
	private LinearLayout _drawer_o3;
	private LinearLayout _drawer_o4;
	private LinearLayout _drawer_o5;
	private LinearLayout _drawer_o6;
	private LinearLayout _drawer_o7;
	private LinearLayout _drawer_o13;
	private LinearLayout _drawer_o14;
	private LinearLayout _drawer_o15;
	private LinearLayout _drawer_o16;
	private LinearLayout _drawer_o17;
	private LinearLayout _drawer_o18;
	private LinearLayout _drawer_o26;
	private LinearLayout _drawer_o29;
	private LinearLayout _drawer_o30;
	private LinearLayout _drawer_o31;
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
	private ImageView _drawer_imageview5;
	private LinearLayout _drawer_linear1127;
	private TextView _drawer_textview437;
	private TextView _drawer_textview438;
	private ImageView _drawer_imageview6;
	private LinearLayout _drawer_linear1128;
	private TextView _drawer_textview439;
	private TextView _drawer_textview440;
	private ImageView _drawer_imageview7;
	private LinearLayout _drawer_linear1129;
	private TextView _drawer_textview441;
	private TextView _drawer_textview442;
	private ImageView _drawer_imageview8;
	private LinearLayout _drawer_linear1130;
	private TextView _drawer_textview443;
	private TextView _drawer_textview444;
	
	private Intent button = new Intent();
	private AlertDialog.Builder dia;
	private Vibrator vib_cre;
	
	@Override
	protected void onCreate(Bundle _savedInstanceState) {
		super.onCreate(_savedInstanceState);
		setContentView(R.layout.grid);
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
		_fab = findViewById(R.id._fab);
		_drawer = findViewById(R.id._drawer);
		ActionBarDrawerToggle _toggle = new ActionBarDrawerToggle(GridActivity.this, _drawer, _toolbar, R.string.app_name, R.string.app_name);
		_drawer.addDrawerListener(_toggle);
		_toggle.syncState();
		
		LinearLayout _nav_view = findViewById(R.id._nav_view);
		
		title = findViewById(R.id.title);
		backg = findViewById(R.id.backg);
		titletext = findViewById(R.id.titletext);
		linearback = findViewById(R.id.linearback);
		catebutton = findViewById(R.id.catebutton);
		bar_l = findViewById(R.id.bar_l);
		scr = findViewById(R.id.scr);
		bar_r = findViewById(R.id.bar_r);
		linear1 = findViewById(R.id.linear1);
		linear178 = findViewById(R.id.linear178);
		list1 = findViewById(R.id.list1);
		list2 = findViewById(R.id.list2);
		list3 = findViewById(R.id.list3);
		list4 = findViewById(R.id.list4);
		list5 = findViewById(R.id.list5);
		list6 = findViewById(R.id.list6);
		list7 = findViewById(R.id.list7);
		c001 = findViewById(R.id.c001);
		c002 = findViewById(R.id.c002);
		c003 = findViewById(R.id.c003);
		c004 = findViewById(R.id.c004);
		c005 = findViewById(R.id.c005);
		c006 = findViewById(R.id.c006);
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
		c007 = findViewById(R.id.c007);
		c008 = findViewById(R.id.c008);
		c009 = findViewById(R.id.c009);
		c010 = findViewById(R.id.c010);
		c011 = findViewById(R.id.c011);
		c012 = findViewById(R.id.c012);
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
		c013 = findViewById(R.id.c013);
		c014 = findViewById(R.id.c014);
		c015 = findViewById(R.id.c015);
		c016 = findViewById(R.id.c016);
		c017 = findViewById(R.id.c017);
		c018 = findViewById(R.id.c018);
		imageview65 = findViewById(R.id.imageview65);
		t013 = findViewById(R.id.t013);
		imageview66 = findViewById(R.id.imageview66);
		textview60 = findViewById(R.id.textview60);
		imageview67 = findViewById(R.id.imageview67);
		textview61 = findViewById(R.id.textview61);
		imageview68 = findViewById(R.id.imageview68);
		textview62 = findViewById(R.id.textview62);
		imageview69 = findViewById(R.id.imageview69);
		textview63 = findViewById(R.id.textview63);
		imageview70 = findViewById(R.id.imageview70);
		textview64 = findViewById(R.id.textview64);
		c019 = findViewById(R.id.c019);
		c020 = findViewById(R.id.c020);
		c021 = findViewById(R.id.c021);
		c022 = findViewById(R.id.c022);
		c023 = findViewById(R.id.c023);
		c024 = findViewById(R.id.c024);
		imageview71 = findViewById(R.id.imageview71);
		textview65 = findViewById(R.id.textview65);
		imageview72 = findViewById(R.id.imageview72);
		textview66 = findViewById(R.id.textview66);
		imageview73 = findViewById(R.id.imageview73);
		textview67 = findViewById(R.id.textview67);
		imageview74 = findViewById(R.id.imageview74);
		textview68 = findViewById(R.id.textview68);
		imageview75 = findViewById(R.id.imageview75);
		textview69 = findViewById(R.id.textview69);
		imageview76 = findViewById(R.id.imageview76);
		textview70 = findViewById(R.id.textview70);
		c025 = findViewById(R.id.c025);
		c026 = findViewById(R.id.c026);
		c027 = findViewById(R.id.c027);
		c028 = findViewById(R.id.c028);
		c029 = findViewById(R.id.c029);
		c030 = findViewById(R.id.c030);
		imageview83 = findViewById(R.id.imageview83);
		textview77 = findViewById(R.id.textview77);
		imageview84 = findViewById(R.id.imageview84);
		textview78 = findViewById(R.id.textview78);
		imageview85 = findViewById(R.id.imageview85);
		textview79 = findViewById(R.id.textview79);
		imageview86 = findViewById(R.id.imageview86);
		textview80 = findViewById(R.id.textview80);
		imageview87 = findViewById(R.id.imageview87);
		textview81 = findViewById(R.id.textview81);
		imageview88 = findViewById(R.id.imageview88);
		textview82 = findViewById(R.id.textview82);
		c031 = findViewById(R.id.c031);
		c032 = findViewById(R.id.c032);
		c033 = findViewById(R.id.c033);
		c034 = findViewById(R.id.c034);
		c035 = findViewById(R.id.c035);
		c036 = findViewById(R.id.c036);
		imageview95 = findViewById(R.id.imageview95);
		textview89 = findViewById(R.id.textview89);
		imageview96 = findViewById(R.id.imageview96);
		textview90 = findViewById(R.id.textview90);
		imageview97 = findViewById(R.id.imageview97);
		textview91 = findViewById(R.id.textview91);
		imageview98 = findViewById(R.id.imageview98);
		textview92 = findViewById(R.id.textview92);
		imageview99 = findViewById(R.id.imageview99);
		textview93 = findViewById(R.id.textview93);
		imageview100 = findViewById(R.id.imageview100);
		textview94 = findViewById(R.id.textview94);
		c037 = findViewById(R.id.c037);
		c038 = findViewById(R.id.c038);
		c039 = findViewById(R.id.c039);
		c040 = findViewById(R.id.c040);
		c041 = findViewById(R.id.c041);
		c042 = findViewById(R.id.c042);
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
		_drawer_o1 = _nav_view.findViewById(R.id.o1);
		_drawer_o2 = _nav_view.findViewById(R.id.o2);
		_drawer_o3 = _nav_view.findViewById(R.id.o3);
		_drawer_o4 = _nav_view.findViewById(R.id.o4);
		_drawer_o5 = _nav_view.findViewById(R.id.o5);
		_drawer_o6 = _nav_view.findViewById(R.id.o6);
		_drawer_o7 = _nav_view.findViewById(R.id.o7);
		_drawer_o13 = _nav_view.findViewById(R.id.o13);
		_drawer_o14 = _nav_view.findViewById(R.id.o14);
		_drawer_o15 = _nav_view.findViewById(R.id.o15);
		_drawer_o16 = _nav_view.findViewById(R.id.o16);
		_drawer_o17 = _nav_view.findViewById(R.id.o17);
		_drawer_o18 = _nav_view.findViewById(R.id.o18);
		_drawer_o26 = _nav_view.findViewById(R.id.o26);
		_drawer_o29 = _nav_view.findViewById(R.id.o29);
		_drawer_o30 = _nav_view.findViewById(R.id.o30);
		_drawer_o31 = _nav_view.findViewById(R.id.o31);
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
		_drawer_imageview5 = _nav_view.findViewById(R.id.imageview5);
		_drawer_linear1127 = _nav_view.findViewById(R.id.linear1127);
		_drawer_textview437 = _nav_view.findViewById(R.id.textview437);
		_drawer_textview438 = _nav_view.findViewById(R.id.textview438);
		_drawer_imageview6 = _nav_view.findViewById(R.id.imageview6);
		_drawer_linear1128 = _nav_view.findViewById(R.id.linear1128);
		_drawer_textview439 = _nav_view.findViewById(R.id.textview439);
		_drawer_textview440 = _nav_view.findViewById(R.id.textview440);
		_drawer_imageview7 = _nav_view.findViewById(R.id.imageview7);
		_drawer_linear1129 = _nav_view.findViewById(R.id.linear1129);
		_drawer_textview441 = _nav_view.findViewById(R.id.textview441);
		_drawer_textview442 = _nav_view.findViewById(R.id.textview442);
		_drawer_imageview8 = _nav_view.findViewById(R.id.imageview8);
		_drawer_linear1130 = _nav_view.findViewById(R.id.linear1130);
		_drawer_textview443 = _nav_view.findViewById(R.id.textview443);
		_drawer_textview444 = _nav_view.findViewById(R.id.textview444);
		dia = new AlertDialog.Builder(this);
		vib_cre = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
		
		catebutton.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.openDrawer(Gravity.RIGHT);
			}
		});
		
		c001.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.oso_001);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#001 - OSO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.oso_001);
						
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
				text.setText("He is the first guy of the matsu, suddently the leader of all matsu but every time being charismatic with five brothers.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c001);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("65 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("SEXTUPLETS");
			}
		});
		
		c002.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.kara_002);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#002 - KARA");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.kara_002);
						
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
				text.setText("He is the second matsu, feels like coolguy often carrying sunglasses and loves to play small guitar.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c002);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("65 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("SEXTUPLETS");
			}
		});
		
		c003.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.choro_003);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#003 - CHORO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.choro_003);
						
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
				text.setText("He is the third matsu, such intelligent, but decent boy. He cares to be formal and gentle, also he likes to read books.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c003);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("65 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("SEXTUPLETS");
			}
		});
		
		c004.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.ichi_004);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#004 - ICHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.ichi_004);
						
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
				text.setText("He is the fourth matsu, still being self-confidence and low-profile. He loves cats.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c004);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("65 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("SEXTUPLETS");
			}
		});
		
		c005.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.jyushi_005);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#005 - JYUSHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.jyushi_005);
						
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
				text.setText("He is the fifth matsu, very energetic and following smiley face. He loves to play baseball and often actives the powerful.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c005);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("65 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("SEXTUPLETS");
			}
		});
		
		c006.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.todo_006);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#006 - TODO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.todo_006);
						
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
				text.setText("He is the sixth matsu, as seen being cute face, but his side is monster dry. He does responsible for his big brothers.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c006);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("65 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("SEXTUPLETS");
			}
		});
		
		c007.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.flamoso);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#007 - FLAMOSO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.flamoso);
						
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
				text.setText("His body is covered with fire, luckily it is harmless, but is able to burn something. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c007);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("67 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("ELEMENTAL");
			}
		});
		
		c008.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.aquakara);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#008 - AQUAKARA");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.aquakara);
						
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
				text.setText("He is a liquid who can immensely to every liquid material, with different shape of his body.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c008);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("67 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("ELEMENTAL");
			}
		});
		
		c009.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.vinechoro);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#009 - VINECHORO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.vinechoro);
						
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
				text.setText("He is a single plant of the earth, that does organic to the plants and flowers which need to live in nature.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c009);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("67 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("ELEMENTAL");
			}
		});
		
		c010.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.duskichi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#010 - DUSKICHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.duskichi);
						
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
				text.setText("Seen a shadow,  but isn't. His power begins all darkness aura inside of place, the light of bulb goes weak.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c010);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("66 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("ELEMENTAL");
			}
		});
		
		c011.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.illumyushi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#011 - ILLUMYUSHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.illumyushi);
						
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
				text.setText("He is a lighting that is way brighter, using brightness aura as the opposite of the darkness.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c011);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("66 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("ELEMENTAL");
			}
		});
		
		c012.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.airtodo);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#012 - AIRTODO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.airtodo);
						
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
				text.setText("He is covered with air, almost invisible. He gives a light touch to someone that is probably a moving air.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c012);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("66 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("ELEMENTAL");
			}
		});
		
		c013.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.lazioso);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#013 - LAZIOSO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.lazioso);
						
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
				text.setText("Still useless as being lazy matsu, his tentacles are used as against the run. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c013);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("67 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("STATUS");
				text_o.setText("He is designed by having his five tentacles beneath his body that don't strengthen movementvsuch as walking and running; he is resulting without activity in a state of being lazy.");
				text_r.setText("Osomatsu is a guy who doesn't care about anything and still enjoys playing paching or is enthusiasm about horse racing; he made the big distance from the future of his job and remainsva NEET; usually he is still living without doing anything.");
			}
		});
		
		c014.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.painkara);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#014 - PAINKARA");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.painkara);
						
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
				text.setText("He is known as ''painful guy'' then turns to peacock-like, because his tail when opens with more glitter, your eyes will be painful!");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c014);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("68 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("STATUS");
				text_o.setText("He is based on a hybrid of a human and a peacock; his tail has lights much more intense than the sun that cause damage to the eyes; at least he wears sunglasses.");
				text_r.setText("The word ''painful'' refers to Karamatsu's exaggerated display; his personality gave a lot of attention to girls because of his attractive and handsome look.");
			}
		});
		
		c015.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.ordhoro);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#015 - ORDHORO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.ordhoro);
						
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
				text.setText("Being challenge to anyone, let's make it the order and responsibility, enough of disobedient. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c015);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("68 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("STATUS");
			}
		});
		
		c016.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.sleechi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#016 - SLEECHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.sleechi);
						
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
				text.setText("His head lays down, looking the sleepy matsu. When he sleeps, will contagious you for being sleepy.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c016);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("66 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("STATUS");
			}
		});
		
		c017.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.runyushi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#017 - RUNYUSHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.runyushi);
						
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
				text.setText("Still running in the path, he has lots of legs to able run faster, however hard to catch him.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c017);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("66 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("STATUS");
			}
		});
		
		c018.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.starodo);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#018 - STARODO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.starodo);
						
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
				text.setText("His long neck and stand head, still staring at someone. You can uncomfortable to him while staring yourself.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c018);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("66 cm");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("STATUS");
			}
		});
		
		c019.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.keyoso);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#019 - KEYOSO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.keyoso);
						
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
				text.setText("His fantastic trick which has on his finger to be able to open everything in lock.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c019);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("TOOL");
			}
		});
		
		c020.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.karasierra);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#020 - KARASIERRA");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.karasierra);
						
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
				text.setText("His hands are saws that allow to cut wood,  and his other hands? Yes, to hold.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c020);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("TOOL");
			}
		});
		
		c021.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.elechoro);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#021 - ELECHORO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.elechoro);
						
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
				text.setText("Those alligator clips can charge something with lack of energy, his legs are perfect to climb utility poles.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c021);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("TOOL");
			}
		});
		
		c022.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.hammichi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#022 - HAMMICHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.hammichi);
						
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
				text.setText("His great hammer that hits hard on a nail, altrough with care if the wood can break! ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c022);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("TOOL");
			}
		});
		
		c023.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.drillshi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#023 - DRILLSHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.drillshi);
						
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
				text.setText("His great drill is, but isn't a screw, for round the holes, altrough he is being big mess by lots of holes! ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c023);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("TOOL");
			}
		});
		
		c024.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pinchtodo);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#024 - PINCHTODO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pinchtodo);
						
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
				text.setText("His cutters are used to cut wires, also papers and ropes. Carefully by having his blade cutters if you disturbed him. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c024);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("TOOL");
			}
		});
		
		c025.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.doodloso);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#025 - DOODLOSO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.doodloso);
						
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
				text.setText("His fingers are magic pencils that able to draw something in a three-dimensional world. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c025);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("CRAFT");
			}
		});
		
		c026.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.sculkara);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#026 - SCULKARA");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.sculkara);
						
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
				text.setText("His two chisels to allow sharp into the wood, he is literally sculptor because loves to sculpt something!");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c026);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("CRAFT");
			}
		});
		
		c027.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.illuchoro);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#027 - ILLUCHORO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.illuchoro);
						
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
				text.setText("His unique jumping leg, if pressing buttons, then his arms turn on the light and illuminate everything! ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c027);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("CRAFT");
			}
		});
		
		c028.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.bruichi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#028 - BRUICHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.bruichi);
						
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
				text.setText("He is a low profile painter, who paints something and he discovers it for you think about it.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c028);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("CRAFT");
			}
		});
		
		c029.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.stampshi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#029 - STAMPSHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.stampshi);
						
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
				text.setText("His tail is a stamp with the face of himself, just to seal the whole place and Jyushi's face in somewhere is bothering visible. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c029);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("CRAFT");
			}
		});
		
		c030.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.gluetodo);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#030 - GLUETODO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.gluetodo);
						
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
				text.setText("He can release the liquid glue from his hands, which is very difficult to get out because of his stronger glue.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c030);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("CRAFT");
			}
		});
		
		c031.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.bravoso);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#031 - BRAVOSO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.bravoso);
						
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
				text.setText("His gloves aren't so light that he can fatality punch and besides knock out.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c031);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("COMBAT");
			}
		});
		
		c032.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.swokara);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#032 - SWOKARA");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.swokara);
						
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
				text.setText("He is a knight with two swords, allows slicing objects and included by the combat.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c032);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("COMBAT");
			}
		});
		
		c033.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pawchoro);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#033 - PAWCHORO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pawchoro);
						
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
				text.setText("His big claws are cute beans, but can deadly slapping against whoever! ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c033);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("COMBAT");
			}
		});
		
		c034.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pinichi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#034 - PINICHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pinichi);
						
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
				text.setText("His claws only have two hook fingers, to pinch anybody that will cause pain a lot!");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c034);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("COMBAT");
			}
		});
		
		c035.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.jyushiucha);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#035 - JYUSHIUCHA");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.jyushiucha);
						
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
				text.setText("His ability is much more dangerous than possible, his four strong arms can hit big damage while he is cheerful and playful. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c035);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("COMBAT");
			}
		});
		
		c036.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.bonebreaky);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#036 - BONEBREAKY");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.bonebreaky);
						
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
				text.setText("His head is a big rock, it allows to break everything, is often going to kick whoever! ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c036);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("COMBAT");
			}
		});
		
		c037.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.hoseoso);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#037 - HOSEOSO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.hoseoso);
						
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
				text.setText("He is a firefighter with many hoses, his tail uses to connect with fire hydrant, and many water will be released. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c037);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("OSO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("WORKER");
			}
		});
		
		c038.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.karalto);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#038 - KARALTO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.karalto);
						
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
				text.setText("He is a traffic policeman, he only works at the traffic light, he does his exaggerated pose of being cool and possible accident of the transport crossing! ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c038);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("KARA");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("WORKER");
			}
		});
		
		c039.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.rechoro);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#039 - RECHORO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.rechoro);
						
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
				text.setText("He is a farmer with two rakes, sometimes working in horticulture and keeping tidying and observing. ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c039);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("CHORO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("WORKER");
			}
		});
		
		c040.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.copichi);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#040 - COPICHI");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.copichi);
						
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
				text.setText("He is a policeman who watches over security, however, he prefers to rest over time. Sounds almost lazy? ");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c040);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("ICHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("WORKER");
				text_o.setText("He is based on a policeman; in his hands he carried weapons that are a pair of clubs. He accompanies Jyuhound, which describes the police's relationship with the dog for training to improve his senses against crimes.");
				text_r.setText("Episode 3 of Season One, Ichimatsu was a policeman with Osomatsu, Karamatsu, Choromatsu, and Jyushimatsu (the dog) from the Pachinko Police, attempting to track down the suspicious Todomatsu and what was in his bag because of his winner at Pachinko. ");
			}
		});
		
		c041.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.jyuhound);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#041 - JYUHOUND");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.jyuhound);
						
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
				text.setText("This dog is Copichi's best bro-friend, he is such active that he watches over the thieves then can attack them with a bite.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c041);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("JYUSHI");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("WORKER");
				text_o.setText("He is based on a police dog who serves as a valuable companion and trainer in combating crimes.");
				text_r.setText("Episode 3 of Season One, Jyushimatsu disguised himself as the dog who accompanied the police brothers and searched Todomatsu, whom he was suspected of winning at Pachinko.");
			}
		});
		
		c042.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog dia = new AlertDialog.Builder(GridActivity.this).create();
				LayoutInflater inflater = getLayoutInflater();
				
				View convertView = (View) inflater.inflate(R.layout.des, null);
				dia.setView(convertView);
				
				dia.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
				
				dia.dismiss();
				
				dia.show();
				
				/// Title ///
				
				ImageView icon = (ImageView)
				convertView.findViewById(R.id.icon);
				icon.setImageResource(R.drawable.pansetodo);
				
				TextView name = (TextView)
				convertView.findViewById(R.id.name);
				name.setText("#042 - PANSETODO");
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
				
				ImageView imageicon = dia.findViewById(R.id.icon);
				
				imageicon.setOnClickListener(new View.OnClickListener() {
					@Override
					public void onClick(View v) {
						Dialog iconclicker = new Dialog(GridActivity.this);
						iconclicker.setContentView(R.layout.icon_dia);
						
						ImageView iconsh = iconclicker.findViewById(R.id.iconshow);
						iconsh.setImageResource(R.drawable.pansetodo);
						
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
				text.setText("He is a nurse who helps treat someone's wound with his gauze, perhaps is a good first aid.");
				ImageView imageview = (ImageView)
				convertView.findViewById(R.id.image);
				imageview.setImageResource(R.drawable.c042);
				TextView size = (TextView)
				convertView.findViewById(R.id.size);
				size.setText("TBA");
				TextView matsutype = (TextView)
				convertView.findViewById(R.id.matsutype);
				matsutype.setText("TODO");
				TextView category = (TextView)
				convertView.findViewById(R.id.category);
				category.setText("WORKER");
			}
		});
		
		_fab.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				vib_cre.vibrate((long)(80));
				button.setClass(getApplicationContext(), SpecialActivity.class);
				startActivity(button);
			}
		});
		
		_drawer_o1.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,0);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFFFFF),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				list1.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_o2.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,294);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFFFFF),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				list2.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_o3.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,539);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFFFFF),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				list3.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_o4.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,784);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFFFFF),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				list4.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_o5.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,1029);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFFFFF),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				list5.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_o6.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,1274);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFFFFF),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				list6.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_o7.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,1519);
				ColorDrawable[] colorDrawables = {
					new ColorDrawable(0xFFFFFFFF),
					new ColorDrawable(0xFF763420)
				};
				TransitionDrawable transitionDrawable = new TransitionDrawable(colorDrawables);
				
				list7.setBackground(transitionDrawable); transitionDrawable.startTransition(1000);
			}
		});
		
		_drawer_o13.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,2989);
				
			}
		});
		
		_drawer_o14.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,3234);
				
			}
		});
		
		_drawer_o15.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,3479);
				
			}
		});
		
		_drawer_o16.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,2518);
				
			}
		});
		
		_drawer_o17.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,3969);
				
			}
		});
		
		_drawer_o18.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,4214);
				
			}
		});
		
		_drawer_o26.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,6174);
				
			}
		});
		
		_drawer_o29.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,6909);
				
			}
		});
		
		_drawer_o30.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,7154);
				
			}
		});
		
		_drawer_o31.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(Gravity.RIGHT);
				scr.smoothScrollTo (0,7399);
				
			}
		});
	}
	
	private void initializeLogic() {
		_toolbar.setVisibility(View.GONE);
		_toolbar.setNavigationOnClickListener(new View.OnClickListener(){ 			@Override 			public void onClick(View _cr) { 			 _drawer.openDrawer(Gravity.RIGHT); 			} 		}); LinearLayout _nav_view = (LinearLayout) findViewById(R.id._nav_view); androidx.drawerlayout.widget.DrawerLayout
		.LayoutParams lp = new androidx.drawerlayout.widget.DrawerLayout
		.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.MATCH_PARENT); lp.gravity=Gravity.RIGHT; _nav_view.setLayoutParams(lp);
		_ListCreatures();
		_RandomColor(rancolor);
		if (false) {
			_fab.setSize(FloatingActionButton.SIZE_NORMAL);
		}
		if (true) {
			_fab.setSize(FloatingActionButton.SIZE_MINI);
		}
		_fab.setBackgroundTintList(ColorStateList.valueOf(0xFF763420));
	}
	
	@Override
	public void onBackPressed() {
		if (_drawer.isDrawerOpen(GravityCompat.START)) {
			_drawer.closeDrawer(GravityCompat.START);
		} else {
			super.onBackPressed();
		}
	}
	public void _RandomColor(final double _name) {
		rancolor = SketchwareUtil.getRandom((int)(1), (int)(6));
		if (rancolor == 1) {
			title.setBackgroundColor(0xFFEF5350);
		}
		if (rancolor == 2) {
			title.setBackgroundColor(0xFF64B5F6);
		}
		if (rancolor == 3) {
			title.setBackgroundColor(0xFF9CCC65);
		}
		if (rancolor == 4) {
			title.setBackgroundColor(0xFFBA68C8);
		}
		if (rancolor == 5) {
			title.setBackgroundColor(0xFFFFD54F);
		}
		if (rancolor == 6) {
			title.setBackgroundColor(0xFFF06292);
		}
	}
	
	
	public void _ListCreatures() {
		for (int i = 1; i <= 999; i++) {
			String viewId = "c" + String.format("%03d", i);
			LinearLayout layout = (LinearLayout) findViewById(getResources().getIdentifier(viewId, "id", getPackageName()));
			if (layout != null) {
				GradientDrawable bg = new GradientDrawable();
				bg.setColor(Color.parseColor("#FEE1C0")); // Color manteca calido
				bg.setCornerRadius(15); // Bordes redondeados
				layout.setBackground(bg);
			}
		}
	}
	
}